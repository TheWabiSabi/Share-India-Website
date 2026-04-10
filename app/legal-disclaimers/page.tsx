import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Legal Disclaimers | Share India Insurance Brokers',
  description:
    'Legal disclaimers and liability information for Share India Insurance Brokers. Important information about warranties, liabilities, and regulatory compliance.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function LegalDisclaimersPage() {
  return (
    <div className="to-si-primary-200 min-h-screen bg-gradient-to-b from-white pt-[8vh]">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900">Legal Disclaimers</h1>
        <p className="mt-4 text-sm text-gray-600">Last Updated: November 2024</p>

        <div className="prose prose-blue mt-8 max-w-none">
          <section className="mb-8">
            <div className="rounded-lg border-2 border-red-200 bg-red-50 p-6">
              <h2 className="mb-4 text-2xl font-bold text-red-900">Important Notice</h2>
              <p className="text-red-900">
                This website is owned and managed by Share India Insurance Brokers Pvt. Ltd., a
                licensed insurance broking company. Your usage of this website shall always be
                subject to the liability disclaimers and terms outlined below. Please read carefully
                before using our services.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Liability Disclaimer</h2>
            <p className="mb-4 text-gray-700">
              The website, including any content or information contained within it or any website
              related service, or any product or service licensed or purchased through the website,
              is provided on an <strong>&quot;AS IS&quot;</strong> basis and &apos;&apos;
              <strong>WITHOUT WARRANTIES OF ANY KIND</strong>, either express or implied, including,
              but not limited to:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-gray-700">
              <li>Warranties of title or non-infringement</li>
              <li>Warranties of merchantability</li>
              <li>Fitness for a particular purpose</li>
            </ul>
            <p className="mt-4 text-gray-700">
              Other than those warranties which are implied by and incapable of exclusion,
              restriction or modification under the applicable laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Regulatory Disclaimer</h2>
            <p className="mb-4 text-gray-700">
              The following regulatory bodies and exchanges are not in any manner answerable,
              responsible or liable to any person or persons for any acts of omission or commission,
              errors, mistakes and/or violation, actual or perceived, by us or our partners, agents,
              associates etc.:
            </p>
            <div className="rounded-lg bg-gray-50 p-6">
              <ul className="space-y-2 text-gray-700">
                <li>
                  <strong>NSE</strong> - National Stock Exchange of India Limited
                </li>
                <li>
                  <strong>BSE</strong> - Bombay Stock Exchange Limited
                </li>
                <li>
                  <strong>MCX-SX</strong> - MCX Stock Exchange Limited
                </li>
                <li>
                  <strong>MCX</strong> - Multi Commodity Exchange of India Limited
                </li>
                <li>
                  <strong>NCDEX</strong> - National Commodity And Derivatives Exchange Limited
                </li>
                <li>
                  <strong>CDSL</strong> - Central Depository Services (India) Limited
                </li>
                <li>
                  <strong>SEBI</strong> - Securities and Exchange Board of India
                </li>
                <li>
                  <strong>IRDAI</strong> - Insurance Regulatory and Development Authority of India
                </li>
              </ul>
            </div>
            <p className="mt-4 text-gray-700">
              Further, the said Exchanges, Depository, or the regulatory authorities are not
              answerable, responsible or liable for any information on this website or for any
              services rendered by our employees, our servants and us.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              Website Access and Availability
            </h2>
            <p className="mb-4 text-gray-700">Share India Insurance does not warrant that:</p>
            <ul className="list-disc space-y-2 pl-6 text-gray-700">
              <li>Your access to the website and/or related services will be uninterrupted</li>
              <li>The website will be error-free</li>
              <li>Defects will be corrected promptly</li>
              <li>
                This website or the server that makes it available is free of viruses or other
                harmful components
              </li>
            </ul>
            <p className="mt-4 text-gray-700">
              Access to and use of this website and the information is at your own risk. Share India
              Insurance does not undertake any accountability for any irregularities, viruses or
              damage to any computer that results from accessing, availing or downloading of any
              information from this website.
            </p>
            <div className="mt-4 rounded-lg bg-yellow-50 p-4">
              <p className="font-semibold text-yellow-900">
                You assume total responsibility and risk for your use of this website and
                website-related services.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Data Integrity and Accuracy</h2>
            <p className="mb-4 text-gray-700">
              A possibility exists that unauthorized additions, deletions or alterations could be
              made by third parties to the website. Although Share India Insurance attempts to
              ensure the integrity, correctness and authenticity of the website, it makes no
              guarantees whatsoever as to its completeness, correctness or accuracy.
            </p>
            <p className="text-gray-700">
              The entire &quot;market data&quot; is sourced from external data content agencies and
              we are not to be held responsible for its integrity or availability. Information
              herein is believed to be reliable but Share India Insurance does not warrant its
              completeness or accuracy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Investment Advice Disclaimer</h2>
            <div className="rounded-lg border-2 border-orange-200 bg-orange-50 p-6">
              <p className="mb-4 font-semibold text-orange-900">
                Share India Insurance does not make any personal recommendations.
              </p>
              <p className="mb-4 text-orange-900">
                The data and information provided on the website is not advice, professional or
                otherwise, and should not be relied upon as such. Neither the information, nor any
                opinion contained in this website constitutes a solicitation or offer by Share India
                Insurance to buy or sell any securities, futures, options or other financial
                instruments or provide any investment advice or service.
              </p>
              <p className="text-orange-900">
                The investments discussed or recommended in market analysis, research reports, etc.
                may not be suitable for all investors. Investors must make their own investment
                decisions based on their specific investment objectives and financial position and
                only after consulting such independent advisors as may be necessary.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              Employee and Company Positions
            </h2>
            <p className="text-gray-700">
              Share India Insurance or its employees have or may have an outstanding buy or sell
              position or holding in the securities, options on securities or other related
              investments of respective issuers and/or companies mentioned on this website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Content and Personal Views</h2>
            <p className="text-gray-700">
              The content of the articles and the interpretation of data are solely the personal
              views of the contributors and do not in any way reflect the views of Share India
              Insurance. Users are advised to peruse the articles and other data on the website only
              as information and to rely on their own judgment when making investment decisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Third-Party Links</h2>
            <p className="mb-4 text-gray-700">
              Share India Insurance is not responsible for the content of any linked websites. By
              providing access to other websites, Share India Insurance is neither recommending nor
              endorsing the content available in the linked websites.
            </p>
            <p className="text-gray-700">
              Users access third-party websites at their own risk and should review the terms and
              conditions and privacy policies of such websites.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Limitation of Liability</h2>
            <p className="mb-4 text-gray-700">
              Except otherwise specifically provided, directors, officers, employees, agents,
              sponsors, consultants, business partners or other representatives &apos;service
              providers&apos; of Share India Insurance and its affiliates shall not be responsible
              or liable for any:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-gray-700">
              <li>
                Direct, indirect, incidental, consequential, special, exemplary, or punitive damages
              </li>
              <li>Loss of profits</li>
              <li>Loss or corruption of data</li>
              <li>Loss of goodwill</li>
              <li>Work stoppage</li>
              <li>Computer failure or malfunction</li>
              <li>Interruption of business</li>
            </ul>
            <p className="mt-4 text-gray-700">
              Under any contract, negligence, strict liability or other theory arising out of or
              relating in any way with the use of the website or in reliance of the information
              available on this website, website-related services, or any products or services
              offered or sold or displayed on this website.
            </p>
            <div className="mt-4 rounded-lg bg-red-50 p-4">
              <p className="text-red-900">
                If the foregoing limitation is held to be unenforceable, the maximum liability of
                Share India Insurance to the customer shall be limited to the amount of fees paid by
                the customer for the services that he/she may have availed of through the website.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">User Responsibility</h2>
            <div className="rounded-lg bg-blue-50 p-6">
              <h3 className="mb-3 text-lg font-semibold text-blue-900">
                As a user of this website, you acknowledge and agree that:
              </h3>
              <ul className="list-disc space-y-2 pl-6 text-blue-900">
                <li>You use this website entirely at your own risk</li>
                <li>
                  You are responsible for evaluating the accuracy and completeness of information
                </li>
                <li>You should conduct your own due diligence before making any decisions</li>
                <li>You should consult independent advisors for investment decisions</li>
                <li>You understand that past performance is not indicative of future results</li>
                <li>You accept all risks associated with using this website and its services</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Governing Law</h2>
            <p className="text-gray-700">
              These disclaimers shall be governed by and construed in accordance with the laws of
              India. Any disputes arising from these disclaimers shall be subject to the exclusive
              jurisdiction of the courts in Maharashtra, India.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Changes to Disclaimers</h2>
            <p className="text-gray-700">
              Share India Insurance reserves the right to modify these disclaimers at any time
              without prior notice. Your continued use of the website following any changes
              constitutes your acceptance of the modified disclaimers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Contact Information</h2>
            <p className="mb-4 text-gray-700">
              If you have any questions about these Legal Disclaimers, please contact us at:
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
              <p className="text-gray-700">
                <span className="font-medium">Phone:</span> 1800 210 2022
              </p>
            </div>
          </section>

          <section className="mb-8">
            <div className="rounded-lg border-2 border-gray-300 bg-gray-50 p-6">
              <p className="text-center text-sm font-semibold text-gray-900">
                BY USING THIS WEBSITE, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO
                BE BOUND BY THESE LEGAL DISCLAIMERS
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
