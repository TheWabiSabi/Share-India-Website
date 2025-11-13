import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Share India Insurance Brokers',
  description:
    'Terms and Conditions for Share India Insurance Brokers. Understand the terms of use, user responsibilities, and legal agreements for using our services.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen bg-white pt-[8vh]">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900">Terms & Conditions</h1>
        <p className="mt-4 text-sm text-gray-600">Last Updated: November 2024</p>

        <div className="prose prose-blue mt-8 max-w-none">
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">About Share India Insurance</h2>
            <p className="mb-4 text-gray-700">
              Share India Insurance Brokers Pvt. Ltd. operates the website&apos;&apos;
              <a
                href="https://www.shareindiainsurance.com/"
                className="text-blue-600 hover:underline"
              >
                https://www.shareindiainsurance.com/
              </a>
              &apos; &apos; to provide consumers choice and an easy way to buy Insurance products
              from multiple Insurance companies. Share India Insurance is not an insurance company.
              Share India Insurance is a licensed Insurance Broking Company holding a Broking
              licence from the Indian Insurance Regulator – Insurance Regulatory and Development
              Authority.
            </p>
            <div className="rounded-lg bg-blue-50 p-4">
              <p className="font-semibold text-blue-900">IRDA Direct Broker Code: IRDA/DB692</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              Website Information Disclaimer
            </h2>
            <p className="mb-4 text-gray-700">
              Our participating insurance providers supply some of the information available on the
              Website and therefore there may be inaccuracies in the Website Information over which
              Share India Insurance has limited control.
            </p>
            <p className="mb-4 text-gray-700">
              Share India Insurance does not warrant or guarantee the timeliness, accuracy or
              completeness of the Website Information; or quality of the results obtained from the
              use of the Website.
            </p>
            <p className="text-gray-700">
              To the maximum extent permitted by law, Share India Insurance has no liability in
              relation to or arising out of the Website Information and Website recommendations. You
              are responsible for the final choice of your product and you should take time to read
              through all information supplied before proceeding. If you are in any doubt regarding
              a product or its terms you should seek further advice from Share India Insurance or
              the relevant participating provider before choosing your product.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              Personal Information and Product Acquisition
            </h2>
            <p className="mb-4 text-gray-700">
              Share India Insurance may pass on your personal information to the relevant
              participating provider if you apply to purchase a product through&apos;&apos;
              <a
                href="https://www.shareindiainsurance.com/"
                className="text-blue-600 hover:underline"
              >
                https://www.shareindiainsurance.com/
              </a>
              , however, Share India Insurance does not guarantee when or if you will actually
              acquire the product that you have chosen. Share India Insurance does not accept any
              liability arising out of circumstances where there is delay in you acquiring the
              product you have chosen.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Premium Collection</h2>
            <p className="mb-4 text-gray-700">
              Please note that Share India Insurance is only collecting or assisting in collecting
              the premium deposit on behalf of the insurer you have chosen to buy the policy. The
              acceptance of the deposit as premium and final issuance of the policy is subject to
              the underwriting norms and discretion of the Insurer whose policy you have chosen to
              buy on which Share India Insurance has no control.
            </p>
            <p className="text-gray-700">
              Share India Insurance will ensure that the amount is refunded by the insurer in case
              there is no ultimate issuance of policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Acceptance of Terms</h2>
            <p className="mb-4 text-gray-700">
              By visiting our website and accessing the information, resources, services, products,
              and tools we provide, you understand and agree to accept and adhere to the following
              terms and conditions as stated in this policy (hereafter referred to as &apos;User
              Agreement&apos;), along with the terms and conditions as stated in our Privacy Policy
              (please refer to the Privacy Policy section for more information).
            </p>
            <p className="text-gray-700">
              We reserve the right to change this User Agreement from time to time without notice.
              You acknowledge and agree that it is your responsibility to review this User Agreement
              periodically to familiarize yourself with any modifications. Your continued use of
              this site after such modifications will constitute acknowledgment and agreement of the
              modified terms and conditions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Responsible Use and Conduct</h2>
            <p className="mb-4 text-gray-700">
              By visiting our website and accessing the information, resources, services, products,
              and tools we provide for you, either directly or indirectly (hereafter referred to as
              &apos;Resources&apos;), you agree to use these Resources only for the purposes
              intended as permitted by (a) the terms of this User Agreement, and (b) applicable
              laws, regulations and generally accepted online practices or guidelines.
            </p>
            <p className="mb-4 text-gray-700">Wherein, you understand that:</p>
            <ul className="list-disc space-y-3 pl-6 text-gray-700">
              <li>
                In order to access our Resources, you may be required to provide certain information
                about yourself (such as identification, contact details, etc.) as part of the
                registration process, or as part of your ability to use the Resources. You agree
                that any information you provide will always be accurate, correct, and up to date.
              </li>
              <li>
                You are responsible for maintaining the confidentiality of any login information
                associated with any account you use to access our Resources. Accordingly, you are
                responsible for all activities that occur under your account/s.
              </li>
              <li>
                Accessing (or attempting to access) any of our Resources by any means other than
                through the means we provide, is strictly prohibited. You specifically agree not to
                access (or attempt to access) any of our Resources through any automated, unethical
                or unconventional means.
              </li>
              <li>
                Engaging in any activity that disrupts or interferes with our Resources, including
                the servers and/or networks to which our Resources are located or connected, is
                strictly prohibited.
              </li>
              <li>
                Attempting to copy, duplicate, reproduce, sell, trade, or resell our Resources is
                strictly prohibited.
              </li>
              <li>
                You are solely responsible for any consequences, losses, or damages that we may
                directly or indirectly incur or suffer due to any unauthorized activities conducted
                by you, as explained above, and may incur criminal or civil liability.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Open Communication Tools</h2>
            <p className="mb-4 text-gray-700">
              We may provide various open communication tools on our website, such as blog comments,
              blog posts, public chat, forums, message boards, newsgroups, product ratings and
              reviews, various social media services, etc. You understand that generally we do not
              pre-screen or monitor the content posted by users of these various communication
              tools, which means that if you choose to use these tools to submit any type of content
              to our website, then it is your personal responsibility to use these tools in a
              responsible and ethical manner.
            </p>
            <p className="mb-4 text-gray-700">
              By posting information or otherwise using any open communication tools as mentioned,
              you agree that you will not upload, post, share, or otherwise distribute any content
              that:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-gray-700">
              <li>
                Is illegal, threatening, defamatory, abusive, harassing, degrading, intimidating,
                fraudulent, deceptive, invasive, racist, or contains any type of suggestive,
                inappropriate, or explicit language.
              </li>
              <li>
                Infringes on any trademark, patent, trade secret, copyright, or other proprietary
                right of any party.
              </li>
              <li>Contains any type of unauthorized or unsolicited advertising.</li>
              <li>
                Impersonates any person or entity, including any&apos;&apos;
                <a
                  href="https://www.shareindiainsurance.com/"
                  className="text-blue-600 hover:underline"
                >
                  https://www.shareindiainsurance.com/
                </a>
                &apos; &apos; employees or representatives.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Content Moderation</h2>
            <p className="mb-4 text-gray-700">
              We have the right at our sole discretion to remove any content that, we feel in our
              judgment does not comply with this User Agreement, along with any content that we feel
              is otherwise offensive, harmful, objectionable, inaccurate, or violates any 3rd party
              copyrights or trademarks. We are not responsible for any delay or failure in removing
              such content. If you post content that we choose to remove, you hereby consent to such
              removal, and consent to waive any claim against us.
            </p>
            <p className="text-gray-700">
              We do not assume any liability for any content posted by you or any other 3rd party
              users of our website. However, any content posted by you using any open communication
              tools on our website, provided that it doesn&apos;t violate or infringe on any 3rd
              party copyrights or trademarks, becomes the property of Share India Insurance Brokers
              Pvt. Ltd., and as such, gives us a perpetual, irrevocable, worldwide, royalty-free,
              exclusive license to reproduce, modify, adapt, translate, publish, publicly display
              and/or distribute as we see fit.
            </p>
            <p className="mt-4 text-gray-700">
              This only refers and applies to content posted via open communication tools as
              described, and does not refer to information that is provided as part of the
              registration process, necessary in order to use our Resources. All information
              provided as part of our registration process is covered by our privacy policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Indemnification</h2>
            <p className="mb-4 text-gray-700">
              You agree to indemnify and hold harmless Share India Insurance Brokers Pvt. Ltd. and
              their directors, officers, managers, employees, donors, agents, and licensors, from
              and against all losses, expenses, damages and costs, including reasonable
              attorneys&apos; fees, resulting from any violation of this User Agreement or the
              failure to fulfil any obligations relating to your account incurred by you or any
              other person using your account.
            </p>
            <p className="text-gray-700">
              We reserve the right to take over the exclusive defence of any claim for which we are
              entitled to indemnification under this User Agreement. In such event, you shall
              provide us with such cooperation as is reasonably requested by us.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">User Responsibilities</h2>
            <div className="rounded-lg bg-yellow-50 p-6">
              <h3 className="mb-3 text-lg font-semibold text-yellow-900">
                Important Responsibilities:
              </h3>
              <ul className="list-disc space-y-2 pl-6 text-yellow-900">
                <li>Provide accurate and up-to-date information</li>
                <li>Maintain confidentiality of login credentials</li>
                <li>Use the website only through authorized means</li>
                <li>Avoid disrupting or interfering with website operations</li>
                <li>Respect intellectual property rights</li>
                <li>Post only appropriate and legal content</li>
                <li>Review terms and conditions periodically</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Limitation of Liability</h2>
            <p className="text-gray-700">
              To the maximum extent permitted by applicable law, Share India Insurance shall not be
              liable for any indirect, incidental, special, consequential or punitive damages, or
              any loss of profits or revenues, whether incurred directly or indirectly, or any loss
              of data, use, goodwill, or other intangible losses resulting from your access to or
              use of or inability to access or use the services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Governing Law</h2>
            <p className="text-gray-700">
              These Terms shall be governed and construed in accordance with the laws of India,
              specifically the laws of Maharashtra, without regard to its conflict of law
              provisions. Any disputes arising from these terms shall be subject to the exclusive
              jurisdiction of the courts in Maharashtra, India.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Changes to Terms</h2>
            <p className="text-gray-700">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any
              time. If a revision is material, we will try to provide at least 30 days&apos; notice
              prior to any new terms taking effect. What constitutes a material change will be
              determined at our sole discretion. By continuing to access or use our Service after
              those revisions become effective, you agree to be bound by the revised terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Contact Us</h2>
            <p className="mb-4 text-gray-700">
              If you have any questions about these Terms and Conditions, please contact us at:
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
            <div className="rounded-lg border-2 border-blue-200 bg-blue-50 p-6">
              <h3 className="mb-3 text-lg font-semibold text-blue-900">
                By using our website, you acknowledge that:
              </h3>
              <ul className="list-disc space-y-2 pl-6 text-blue-900">
                <li>You have read and understood these Terms and Conditions</li>
                <li>You agree to be bound by these Terms and Conditions</li>
                <li>You will comply with all applicable laws and regulations</li>
                <li>You understand Share India Insurance is a broker, not an insurer</li>
                <li>Final policy issuance is subject to insurer approval</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
