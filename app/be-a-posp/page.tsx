'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaUserTie,
  FaChartLine,
  FaHandshake,
  FaGraduationCap,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaRupeeSign,
  FaUsers,
  FaCertificate,
} from 'react-icons/fa';

export default function BeAPOSPPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    experience: '',
    qualification: '',
    message: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setIsSubmitted(true);
  };

  const benefits = [
    {
      icon: <FaRupeeSign className="text-si-primary text-2xl" />,
      title: 'Attractive Commission',
      description:
        'Earn competitive commissions on every policy sold with performance-based incentives',
    },
    {
      icon: <FaGraduationCap className="text-si-primary text-2xl" />,
      title: 'Comprehensive Training',
      description:
        'Get complete training on insurance products, sales techniques, and regulatory compliance',
    },
    {
      icon: <FaUsers className="text-si-primary text-2xl" />,
      title: 'Marketing Support',
      description:
        'Access to marketing materials, lead generation support, and promotional campaigns',
    },
    {
      icon: <FaCertificate className="text-si-primary text-2xl" />,
      title: 'IRDAI Certification',
      description: 'Complete assistance with IRDAI licensing and certification process',
    },
    {
      icon: <FaChartLine className="text-si-primary text-2xl" />,
      title: 'Growth Opportunities',
      description: 'Build your own team and grow your insurance business with our support',
    },
    {
      icon: <FaHandshake className="text-si-primary text-2xl" />,
      title: 'Ongoing Support',
      description: 'Dedicated relationship manager and technical support for all your needs',
    },
  ];

  const requirements = [
    'Minimum age of 18 years',
    'Class 10th pass (minimum qualification)',
    'Valid Aadhaar and PAN card',
    'Basic computer knowledge',
    'Good communication skills',
    'Willingness to learn and grow',
  ];

  const steps = [
    {
      step: '01',
      title: 'Apply Online',
      description: 'Fill out the application form with your details and submit required documents',
    },
    {
      step: '02',
      title: 'Training Program',
      description: 'Complete our comprehensive training program on insurance products and sales',
    },
    {
      step: '03',
      title: 'IRDAI Exam',
      description: 'Clear the IRDAI certification exam with our guidance and support',
    },
    {
      step: '04',
      title: 'Start Earning',
      description: 'Begin your journey as a certified POSP agent and start earning commissions',
    },
  ];

  return (
    <main className="bg-si-primary-50 min-h-screen pt-20">
      {/* Hero Section */}
      <section className="from-si-primary-600 to-si-primary-400 relative overflow-hidden bg-gradient-to-r py-20">
        <div className="bg-pattern-dots absolute inset-0 opacity-20" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="text-white">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2">
                <FaUserTie className="text-white" />
                <span className="text-sm font-semibold">IRDAI Licensed Partner</span>
              </div>

              <h1 className="mb-6 text-4xl leading-tight font-bold md:text-5xl lg:text-6xl">
                Become a <span className="text-si-red-200">POSP Agent</span>
              </h1>

              <p className="text-si-primary-100 mb-8 text-xl leading-relaxed">
                Join Share India Insurance as a Point of Sales Person (POSP) and build a rewarding
                career in insurance. Start your entrepreneurial journey with comprehensive support
                and attractive earning opportunities.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="#apply-now"
                  className="btn-primary text-si-primary hover:bg-si-primary-50 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-lg font-semibold"
                >
                  Apply Now
                  <FaCheckCircle />
                </a>
                <a
                  href="#learn-more"
                  className="hover:text-si-primary inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-white"
                >
                  Learn More
                  <FaGraduationCap />
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-sm">
                <Image
                  src="/be-a-posp/img2.jpg"
                  alt="POSP Agent Success"
                  width={600}
                  height={400}
                  className="h-auto w-full rounded-xl object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="rounded-lg bg-white/20 p-4 text-center">
                    <div className="text-2xl font-bold text-white">₹50K+</div>
                    <div className="text-si-primary-100 text-sm">Monthly Potential</div>
                  </div>
                  <div className="rounded-lg bg-white/20 p-4 text-center">
                    <div className="text-2xl font-bold text-white">500+</div>
                    <div className="text-si-primary-100 text-sm">Active Agents</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="learn-more" className="from-si-primary-200 bg-gradient-to-b to-white py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-si-ink mb-4 text-3xl font-bold md:text-4xl">
              Why Choose Share India as Your POSP Partner?
            </h2>
            <p className="text-si-ink/70 mx-auto max-w-3xl text-xl">
              We provide comprehensive support to help you succeed as an insurance agent with
              attractive benefits and growth opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <div key={index} className="card-vibrant hover-lift rounded-xl p-6">
                <div className="mb-4 flex items-center gap-4">
                  <div className="bg-si-primary/10 rounded-lg p-3">{benefit.icon}</div>
                  <h3 className="text-si-ink text-xl font-semibold">{benefit.title}</h3>
                </div>
                <p className="text-si-ink/70 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="to-si-primary-200 bg-gradient-to-b from-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-si-ink mb-6 text-3xl font-bold md:text-4xl">
                Eligibility Requirements
              </h2>
              <p className="text-si-ink/70 mb-8 text-xl">
                Simple and straightforward requirements to become a POSP agent with Share India
                Insurance.
              </p>

              <div className="space-y-4">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <FaCheckCircle className="text-si-primary flex-shrink-0 text-xl" />
                    <span className="text-si-ink font-medium">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="shadow-vibrant-blue rounded-2xl bg-white p-8">
              <Image
                src="/be-a-posp/img4.jpg"
                alt="POSP Requirements"
                width={500}
                height={400}
                className="mb-6 h-auto w-full rounded-xl object-cover"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />

              <div className="text-center">
                <h3 className="text-si-ink mb-2 text-2xl font-bold">Ready to Get Started?</h3>
                <p className="text-si-ink/70 mb-4">
                  Join our growing network of successful POSP agents
                </p>
                <a
                  href="#apply-now"
                  className="btn-primary inline-flex items-center gap-2 rounded-lg px-6 py-3 font-semibold"
                >
                  Start Your Application
                  <FaCheckCircle />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="from-si-primary-200 bg-gradient-to-b to-white py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-si-ink mb-4 text-3xl font-bold md:text-4xl">
              Simple 4-Step Process
            </h2>
            <p className="text-si-ink/70 mx-auto max-w-3xl text-xl">
              From application to earning, we guide you through every step of becoming a successful
              POSP agent.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="from-si-primary to-si-red mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r text-2xl font-bold text-white">
                  {step.step}
                </div>
                <h3 className="text-si-ink mb-4 text-xl font-semibold">{step.title}</h3>
                <p className="text-si-ink/70 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply-now" className="to-si-primary-200 bg-gradient-to-b from-white py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="text-si-ink mb-4 text-3xl font-bold md:text-4xl">
                Apply to Become a POSP Agent
              </h2>
              <p className="text-si-ink/70 text-xl">
                Fill out the form below and take the first step towards a rewarding career in
                insurance.
              </p>
            </div>

            <div className="shadow-vibrant-blue rounded-2xl bg-white p-8 md:p-12">
              {isSubmitted ? (
                <div className="py-12 text-center">
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                    <FaCheckCircle className="text-4xl text-green-600" />
                  </div>
                  <h3 className="text-si-ink mb-4 text-2xl font-bold md:text-3xl">
                    Application Submitted Successfully!
                  </h3>
                  <p className="text-si-ink/70 mb-8 text-lg">
                    Thank you, {formData.name}. We have received your application. Our recruitment
                    team will review your details and contact you at {formData.phone} shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        city: '',
                        experience: '',
                        qualification: '',
                        message: '',
                      });
                    }}
                    className="btn-ghost inline-flex items-center gap-2 rounded-xl px-8 py-4 font-semibold"
                  >
                    Submit Another Application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="text-si-ink mb-2 block text-sm font-semibold"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="border-si-primary/20 focus:ring-si-primary w-full rounded-lg border px-4 py-3 transition-all focus:border-transparent focus:ring-2"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="text-si-ink mb-2 block text-sm font-semibold"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="border-si-primary/20 focus:ring-si-primary w-full rounded-lg border px-4 py-3 transition-all focus:border-transparent focus:ring-2"
                        placeholder="Enter your email address"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="text-si-ink mb-2 block text-sm font-semibold"
                      >
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="border-si-primary/20 focus:ring-si-primary w-full rounded-lg border px-4 py-3 transition-all focus:border-transparent focus:ring-2"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="city"
                        className="text-si-ink mb-2 block text-sm font-semibold"
                      >
                        City *
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="border-si-primary/20 focus:ring-si-primary w-full rounded-lg border px-4 py-3 transition-all focus:border-transparent focus:ring-2"
                        placeholder="Enter your city"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="experience"
                        className="text-si-ink mb-2 block text-sm font-semibold"
                      >
                        Experience in Sales/Insurance
                      </label>
                      <select
                        id="experience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        className="border-si-primary/20 focus:ring-si-primary w-full rounded-lg border px-4 py-3 transition-all focus:border-transparent focus:ring-2"
                      >
                        <option value="">Select experience level</option>
                        <option value="fresher">Fresher (No experience)</option>
                        <option value="1-2">1-2 years</option>
                        <option value="3-5">3-5 years</option>
                        <option value="5+">5+ years</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="qualification"
                        className="text-si-ink mb-2 block text-sm font-semibold"
                      >
                        Highest Qualification *
                      </label>
                      <select
                        id="qualification"
                        name="qualification"
                        value={formData.qualification}
                        onChange={handleInputChange}
                        required
                        className="border-si-primary/20 focus:ring-si-primary w-full rounded-lg border px-4 py-3 transition-all focus:border-transparent focus:ring-2"
                      >
                        <option value="">Select qualification</option>
                        <option value="10th">10th Pass</option>
                        <option value="12th">12th Pass</option>
                        <option value="graduate">Graduate</option>
                        <option value="postgraduate">Post Graduate</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="text-si-ink mb-2 block text-sm font-semibold"
                    >
                      Why do you want to become a POSP agent?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="border-si-primary/20 focus:ring-si-primary w-full resize-none rounded-lg border px-4 py-3 transition-all focus:border-transparent focus:ring-2"
                      placeholder="Tell us about your motivation and goals..."
                    />
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn-primary hover-lift inline-flex items-center gap-2 rounded-xl px-8 py-4 text-lg font-semibold"
                    >
                      Submit Application
                      <FaCheckCircle />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-si-primary-200 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-si-ink mb-4 text-3xl font-bold md:text-4xl">
              Have Questions? Get in Touch
            </h2>
            <p className="text-si-ink/65 mx-auto max-w-3xl text-xl">
              Our team is here to help you understand the POSP program and guide you through the
              application process.
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="bg-si-primary mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                <FaPhone className="text-2xl text-white" />
              </div>
              <h3 className="text-si-ink mb-2 text-xl font-semibold">Call Us</h3>
              <p className="text-si-ink/65">+91 98765 43210</p>
              <p className="text-si-ink/65">Mon-Fri, 9 AM - 6 PM</p>
            </div>

            <div className="text-center">
              <div className="bg-si-primary mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                <FaEnvelope className="text-2xl text-white" />
              </div>
              <h3 className="text-si-ink mb-2 text-xl font-semibold">Email Us</h3>
              <p className="text-si-ink/65">posp@shareindia.com</p>
              <p className="text-si-ink/65">We&apos;ll respond within 24 hours</p>
            </div>

            <div className="text-center">
              <div className="bg-si-primary mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                <FaMapMarkerAlt className="text-2xl text-white" />
              </div>
              <h3 className="text-si-ink mb-2 text-xl font-semibold">Visit Us</h3>
              <p className="text-si-ink/65">Mumbai, Delhi, Bangalore</p>
              <p className="text-si-ink/65">Multiple locations available</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="btn-primary hover-lift inline-flex items-center gap-2 rounded-xl px-8 py-4 text-lg font-semibold transition-all"
            >
              Contact Our Team
              <FaHandshake />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
