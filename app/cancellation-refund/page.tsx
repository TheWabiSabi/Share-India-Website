import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Cancellation & Refund Policy | Share India Insurance Brokers',
  description:
    'Cancellation and refund policy for Share India Insurance Brokers. Learn about policy cancellation procedures, refund timelines, and terms.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function CancellationRefundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-si-primary-200 pt-[8vh]">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900">Cancellation & Refund Policy</h1>
        <p className="mt-4 text-sm text-gray-600">Last Updated: November 2024</p>

        <div className="prose prose-blue mt-8 max-w-none">
          <section className="mb-8">
            <div className="rounded-lg border-2 border-blue-200 bg-blue-50 p-6">
              <p className="text-blue-900">
                Share India Insurance Brokers Pvt. Ltd. (IRDA License: IRDA/DB692) acts as an
                insurance broker facilitating insurance purchases from various insurance companies.
                This policy outlines the cancellation and refund procedures for services and
                insurance products purchased through our platform.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Policy Cancellation</h2>
            <p className="mb-4 text-gray-700">
              As an insurance broker, Share India Insurance facilitates the purchase of insurance
              policies from various insurance companies. The cancellation terms and conditions are
              governed by the respective insurance company&apos;s policy terms.
            </p>
            <h3 className="mb-3 text-xl font-semibold text-gray-900">
              Free Look Period Cancellation
            </h3>
            <p className="mb-4 text-gray-700">
              Most insurance policies offer a &quot;Free Look Period&quot; (typically 15-30 days
              from policy receipt) during which you can cancel the policy if you are not satisfied
              with the terms and conditions. During this period:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-gray-700">
              <li>You can cancel the policy without providing any reason</li>
              <li>
                The insurance company will refund the premium paid after deducting proportionate
                risk premium and expenses
              </li>
              <li>The refund process is handled directly by the insurance company</li>
              <li>Share India Insurance will assist in facilitating the cancellation process</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Refund Process</h2>
            <h3 className="mb-3 text-xl font-semibold text-gray-900">Premium Refunds</h3>
            <p className="mb-4 text-gray-700">
              Share India Insurance collects premium deposits on behalf of insurance companies. In
              cases where:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-gray-700">
              <li>
                <strong>Policy Not Issued:</strong> If the insurance company does not issue the
                policy due to underwriting reasons, the full premium amount will be refunded by the
                insurance company within 15-30 working days.
              </li>
              <li>
                <strong>Free Look Cancellation:</strong> Refunds during the free look period will be
                processed by the insurance company as per their terms, typically within 15-30
                working days.
              </li>
              <li>
                <strong>Policy Cancellation:</strong> For cancellations after the free look period,
                refund amounts and timelines are determined by the insurance company&apos;s policy
                terms.
              </li>
            </ul>
            <div className="mt-4 rounded-lg bg-yellow-50 p-4">
              <p className="font-semibold text-yellow-900">Important Note:</p>
              <p className="text-yellow-900">
                Share India Insurance will ensure that refunds are processed by the insurance
                company as per their terms. We do not have control over the refund amount or
                timeline, which is determined by the insurance company&apos;s underwriting and
                policy terms.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Brokerage Fees</h2>
            <p className="mb-4 text-gray-700">
              Share India Insurance earns brokerage commission from insurance companies for
              facilitating policy sales. This commission is paid by the insurance company and does
              not affect the premium amount paid by you.
            </p>
            <p className="text-gray-700">
              In case of policy cancellation during the free look period or non-issuance of policy,
              no brokerage fees are charged to the customer.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">How to Request Cancellation</h2>
            <p className="mb-4 text-gray-700">
              To request policy cancellation or refund, please follow these steps:
            </p>
            <div className="space-y-4">
              <div className="rounded-lg border border-gray-200 p-4">
                <h4 className="mb-2 font-semibold text-gray-900">Step 1: Contact Us</h4>
                <p className="text-gray-700">
                  Reach out to our customer support team via phone (1800 210 2022) or email
                  (contact.ins@shareindia.co.in)
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-4">
                <h4 className="mb-2 font-semibold text-gray-900">Step 2: Submit Request</h4>
                <p className="text-gray-700">
                  Provide your policy number, reason for cancellation, and any required documents
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-4">
                <h4 className="mb-2 font-semibold text-gray-900">Step 3: Processing</h4>
                <p className="text-gray-700">
                  We will forward your request to the insurance company and assist in the process
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-4">
                <h4 className="mb-2 font-semibold text-gray-900">Step 4: Refund</h4>
                <p className="text-gray-700">
                  The insurance company will process the refund as per their terms and credit it to
                  your account
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Refund Timeline</h2>
            <div className="rounded-lg bg-gray-50 p-6">
              <ul className="space-y-3 text-gray-700">
                <li>
                  <strong>Policy Not Issued:</strong> 15-30 working days from notification
                </li>
                <li>
                  <strong>Free Look Cancellation:</strong> 15-30 working days from cancellation
                  request
                </li>
                <li>
                  <strong>Regular Cancellation:</strong> As per insurance company&apos;s policy
                  terms (typically 30-45 working days)
                </li>
              </ul>
              <p className="mt-4 text-sm text-gray-600">
                *Timelines may vary based on the insurance company and policy type
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Our Assistance</h2>
            <p className="mb-4 text-gray-700">
              Share India Insurance is committed to assisting you throughout the cancellation and
              refund process:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-gray-700">
              <li>We will help you understand the cancellation terms of your policy</li>
              <li>We will facilitate communication with the insurance company</li>
              <li>We will follow up on your refund status</li>
              <li>We will provide updates on the refund process</li>
              <li>We will ensure proper documentation and processing</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Important Notes</h2>
            <div className="space-y-4">
              <div className="rounded-lg border-l-4 border-red-500 bg-red-50 p-4">
                <p className="font-semibold text-red-900">Underwriting Discretion</p>
                <p className="text-red-900">
                  Final policy issuance is subject to the insurance company&apos;s underwriting
                  norms and discretion. Share India Insurance has no control over this decision.
                </p>
              </div>
              <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4">
                <p className="font-semibold text-blue-900">Refund Authority</p>
                <p className="text-blue-900">
                  All refunds are processed by the respective insurance company. Share India
                  Insurance facilitates the process but does not directly process refunds.
                </p>
              </div>
              <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-4">
                <p className="font-semibold text-green-900">Our Commitment</p>
                <p className="text-green-900">
                  We will ensure complete assistance and follow-up to help you receive your refund
                  as per the insurance company&apos;s terms.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Contact Us</h2>
            <p className="mb-4 text-gray-700">
              For any questions regarding cancellation or refunds, please contact us:
            </p>
            <div className="rounded-lg bg-gray-50 p-6">
              <p className="mb-2 font-semibold text-gray-900">
                Share India Insurance Brokers Pvt. Ltd.
              </p>
              <p className="mb-1 text-gray-700">
                <span className="font-medium">IRDA License:</span> IRDA/DB692
              </p>
              <p className="mb-1 text-gray-700">
                <span className="font-medium">Email:</span> contact.ins@shareindia.co.in
              </p>
              <p className="mb-1 text-gray-700">
                <span className="font-medium">Phone:</span> 1800 210 2022 (24/7 Support)
              </p>
              <p className="mb-4 text-gray-700">
                <span className="font-medium">Support Hours:</span> Monday to Saturday, 9:00 AM -
                6:00 PM
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-blue-100 px-6 py-3 font-semibold text-blue-800 hover:bg-blue-200"
                >
                  Contact Support
                </a>
                <a
                  href="/premium-estimator"
                  className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 font-semibold hover:bg-gray-50"
                >
                  Get Premium Estimate
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
