'use client';

import React, { useState } from 'react';

// Assuming these helpers and constants are imported or defined in your project
// If they are in the same file, keep them as they are.
const formatCurrency = (val: number) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(val);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const formatRateDisplay = (rate: any) => String(rate);

export default function CheckoutModal({
  showCheckout,
  setShowCheckout,
  isSubmitted,
  setIsSubmitted,
  cartItems,
  selectedIndustry,
  calculatePremium,
  calculateTotal,
  clearCart,
  INSURANCE_CATEGORIES,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}: any) {
  const [checkoutData, setCheckoutData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCheckoutSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // 1. Prepare the Cart Summary for the email message
    const itemsSummary = cartItems
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .map((item: any) => {
        const categoryName =
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          INSURANCE_CATEGORIES.find((c: any) => c.key === item.category)?.displayName ?? 'General';
        const premium = calculatePremium(item.rate, item.insuredAmount);
        return `- ${item.displayName} (${categoryName})\n  Sum Insured: ${formatCurrency(item.insuredAmount)}\n  Premium: ${formatCurrency(premium)}`;
      })
      .join('\n\n');

    const fullMessage = `
Customer Details:
-----------------
Name: ${checkoutData.name}
Email: ${checkoutData.email}
Phone: ${checkoutData.phone}
Company: ${checkoutData.company || 'Not Provided'}
Industry: ${selectedIndustry?.industryType || 'N/A'}

Selected Insurance Items:
-------------------------
${itemsSummary}

-------------------------
Estimated Total: ${formatCurrency(calculateTotal())}
    `.trim();

    try {
      // 2. Call the API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: checkoutData.name,
          email: checkoutData.email,
          subject: `New Quote Request: ${checkoutData.company || checkoutData.name}`,
          message: fullMessage,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit request');
      }

      // 3. Success State
      setIsSubmitted(true);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (!showCheckout) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/60 p-4 backdrop-blur-sm">
      <div className="my-4 w-full max-w-4xl rounded-2xl bg-white shadow-2xl">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138z"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900">Request Your Quote</h2>
              <p className="text-xs text-gray-500">Share India Insurance Brokers</p>
            </div>
          </div>
          <button
            disabled={loading}
            onClick={() => setShowCheckout(false)}
            className="rounded-full p-1.5 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {isSubmitted ? (
          <div className="flex flex-col items-center justify-center px-8 py-16 text-center">
            <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
              <svg
                className="h-10 w-10 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Quote Request Submitted!</h3>
            <p className="mt-3 max-w-sm text-gray-500">
              Our specialized insurance team will review your selected coverage and reach out to you
              shortly with a personalized premium proposal.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setShowCheckout(false);
                clearCart();
                setCheckoutData({ name: '', email: '', phone: '', company: '' });
              }}
              className="mt-8 rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white transition-all hover:bg-blue-700"
            >
              Done
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* ── Left: Order Summary ── */}
            <div className="rounded-bl-2xl bg-gray-50 p-6 lg:col-span-2">
              <h3 className="mb-1 text-sm font-bold tracking-wider text-gray-400 uppercase">
                Order Summary
              </h3>
              <p className="mb-4 text-xs text-gray-400">
                {selectedIndustry?.industryType} · {cartItems.length} item
                {cartItems.length !== 1 ? 's' : ''}
              </p>

              <div className="max-h-64 space-y-3 overflow-y-auto pr-1 lg:max-h-80">
                {
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  cartItems.map((item: any) => {
                    const premium = calculatePremium(item.rate, item.insuredAmount);
                    const isCustom =
                      String(item.rate).toLowerCase().includes('minimum') ||
                      String(item.rate).toLowerCase().includes('lac');
                    const categoryName =
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      INSURANCE_CATEGORIES.find((c: any) => c.key === item.category)?.displayName ??
                      '';
                    return (
                      <div
                        key={item.id}
                        className="rounded-xl border border-gray-200 bg-white p-3.5"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-semibold text-gray-900">
                              {item.displayName}
                            </p>
                            <p className="text-xs text-blue-600">{categoryName}</p>
                          </div>
                          {isCustom ? (
                            <span className="shrink-0 rounded-full bg-amber-100 px-2 py-0.5 text-xs font-bold text-amber-700">
                              Custom
                            </span>
                          ) : (
                            <span className="shrink-0 text-sm font-bold text-blue-700">
                              {formatCurrency(premium)}
                            </span>
                          )}
                        </div>
                        <div className="mt-2 flex items-center justify-between text-xs text-gray-400">
                          <span>Sum Insured: {formatCurrency(item.insuredAmount)}</span>
                          <span>Rate: {formatRateDisplay(item.rate)}</span>
                        </div>
                      </div>
                    );
                  })
                }
              </div>

              {/* Totals */}
              <div className="mt-5 space-y-2 border-t border-dashed border-gray-200 pt-4">
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Subtotal ({cartItems.length} items)</span>
                  <span>{formatCurrency(calculateTotal())}</span>
                </div>
                <div className="flex justify-between text-xs text-amber-600">
                  <span>* Items marked Custom require individual underwriting</span>
                </div>
                <div className="flex justify-between rounded-lg bg-blue-50 px-3 py-2 text-base font-bold text-gray-900">
                  <span>Estimated Total</span>
                  <span className="text-blue-700">{formatCurrency(calculateTotal())}</span>
                </div>
              </div>

              <p className="mt-4 rounded-lg bg-amber-50 px-3 py-2 text-[11px] leading-relaxed text-amber-700">
                ⚠ These are indicative rates only. Final premium is subject to underwriting and
                risk assessment.
              </p>
            </div>

            {/* ── Right: Contact Form ── */}
            <form onSubmit={handleCheckoutSubmit} className="flex flex-col p-6 lg:col-span-3">
              <h3 className="mb-1 text-sm font-bold tracking-wider text-gray-400 uppercase">
                Your Details
              </h3>
              <p className="mb-5 text-xs text-gray-400">
                Our team will reach out with your personalized quote
              </p>

              <div className="flex-1 space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      disabled={loading}
                      type="text"
                      placeholder="John Doe"
                      value={checkoutData.name}
                      onChange={(e) => setCheckoutData({ ...checkoutData, name: e.target.value })}
                      className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm transition-all outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100 disabled:opacity-50"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                      Company Name
                    </label>
                    <input
                      disabled={loading}
                      type="text"
                      placeholder="Optional"
                      value={checkoutData.company}
                      onChange={(e) =>
                        setCheckoutData({ ...checkoutData, company: e.target.value })
                      }
                      className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm transition-all outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100 disabled:opacity-50"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    disabled={loading}
                    type="email"
                    placeholder="john@company.com"
                    value={checkoutData.email}
                    onChange={(e) => setCheckoutData({ ...checkoutData, email: e.target.value })}
                    className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm transition-all outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100 disabled:opacity-50"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    disabled={loading}
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={checkoutData.phone}
                    onChange={(e) => setCheckoutData({ ...checkoutData, phone: e.target.value })}
                    className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm transition-all outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100 disabled:opacity-50"
                  />
                </div>

                {/* Error Message */}
                {error && (
                  <div className="rounded-lg border border-red-100 bg-red-50 p-3 text-xs font-bold text-red-600">
                    ❌ {error}
                  </div>
                )}

                {/* What happens next */}
                <div className="rounded-xl border border-blue-100 bg-blue-50 p-4">
                  <p className="mb-2 text-xs font-bold tracking-wide text-blue-700 uppercase">
                    What happens next?
                  </p>
                  <ul className="space-y-1.5">
                    {[
                      'Our expert reviews your selected coverage',
                      'You receive a detailed premium proposal',
                      'We schedule a free consultation call',
                    ].map((step, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-blue-700">
                        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-blue-200 text-[10px] font-bold">
                          {i + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-4 font-bold text-white shadow-lg transition-all hover:shadow-xl hover:brightness-105 disabled:opacity-70 disabled:grayscale"
              >
                {loading ? 'Sending Request...' : 'Send Quote Request'}
                {!loading && (
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
