import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';
import { LRUCache } from 'lru-cache';

// 1. Rate Limiter Setup (In-memory)
// Allows 3 requests per 15 minutes per IP
const tokenCache = new LRUCache<string, number>({
  max: 500,
  ttl: 1000 * 60 * 15,
});

// 2. Validation Schema
const ContactSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  subject: z.string().min(5).max(100),
  message: z.string().min(10).max(1000),
});

export async function POST(req: Request) {
  // --- Rate Limiting Logic ---
  const ip = req.headers.get('x-forwarded-for') || 'anonymous';
  const tokenCount = tokenCache.get(ip) || 0;

  if (tokenCount >= 3) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 },
    );
  }
  tokenCache.set(ip, tokenCount + 1);

  try {
    const body = await req.json();
    const { name, email, subject, message } = ContactSchema.parse(body);

    // --- Nodemailer Transporter ---
    // Since you're self-hosting, you can use Gmail App Passwords,
    // Amazon SES, or a local Postfix/Sendmail setup.
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // --- Email Template ---
    const mailOptions = {
      from: `"${name}" <${process.env.DISPLAY_EMAIL}>`, // Recommended to send 'from' your verified domain
      replyTo: email,
      to: process.env.COMPANY_CONTACT_EMAIL,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee;">
          <h2 style="color: #333;">New Inquiry from ${name}</h2>
          <p><strong>From:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr />
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues }, { status: 400 });
    }
    console.error('Email error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
