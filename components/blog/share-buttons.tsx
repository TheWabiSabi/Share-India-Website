'use client';

import { useState } from 'react';
import { FaLink, FaLinkedinIn, FaTwitter, FaWhatsapp } from 'react-icons/fa';

/**
 * Working share controls. Reads the current URL at click time so it shares the
 * actual page regardless of host (dev/prod). `icons` = compact rail, `buttons` =
 * labelled full-width (mobile).
 */
export default function ShareButtons({
  title,
  layout = 'icons',
}: {
  title: string;
  layout?: 'icons' | 'buttons';
}) {
  const [copied, setCopied] = useState(false);

  const url = () => (typeof window !== 'undefined' ? window.location.href : '');
  const open = (href: string) => window.open(href, '_blank', 'noopener,noreferrer');

  const onTwitter = () =>
    open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url())}`,
    );
  const onLinkedIn = () =>
    open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url())}`);
  const onWhatsApp = () => open(`https://wa.me/?text=${encodeURIComponent(`${title} ${url()}`)}`);
  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(url());
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard unavailable (e.g. insecure origin) — ignore.
    }
  };

  if (layout === 'buttons') {
    return (
      <div className="flex flex-wrap gap-3">
        <button
          onClick={onTwitter}
          className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-gray-900 px-4 py-3 text-white transition-colors hover:bg-gray-800"
        >
          <FaTwitter className="h-4 w-4" />
          <span>Twitter</span>
        </button>
        <button
          onClick={onLinkedIn}
          className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#0a66c2] px-4 py-3 text-white transition-colors hover:opacity-90"
        >
          <FaLinkedinIn className="h-4 w-4" />
          <span>LinkedIn</span>
        </button>
        <button
          onClick={onWhatsApp}
          className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#25d366] px-4 py-3 text-white transition-colors hover:opacity-90"
        >
          <FaWhatsapp className="h-4 w-4" />
          <span>WhatsApp</span>
        </button>
        <button
          onClick={onCopy}
          className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-gray-100 px-4 py-3 text-gray-700 transition-colors hover:bg-gray-200"
        >
          <FaLink className="h-4 w-4" />
          <span>{copied ? 'Copied!' : 'Copy link'}</span>
        </button>
      </div>
    );
  }

  const iconBtn =
    'flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-gray-200';
  return (
    <div className="flex flex-row gap-3">
      <button aria-label="Share on Twitter" onClick={onTwitter} className={iconBtn}>
        <FaTwitter className="h-4 w-4" />
      </button>
      <button aria-label="Share on LinkedIn" onClick={onLinkedIn} className={iconBtn}>
        <FaLinkedinIn className="h-4 w-4" />
      </button>
      <button aria-label="Share on WhatsApp" onClick={onWhatsApp} className={iconBtn}>
        <FaWhatsapp className="h-4 w-4" />
      </button>
      <button aria-label="Copy link" onClick={onCopy} className={iconBtn}>
        <FaLink className="h-4 w-4" />
      </button>
    </div>
  );
}
