import ServicesSelector from './_components/service-selector';
import FAQ from './_components/faq';

const ContactPage = () => {
  const title = 'What services are you interested in?';
  const subtitle = 'Select a service below to help us route you to the right specialized advisor.';
  const privacyText =
    'We take your privacy seriously. We never sell lists, phone numbers, or email addresses to third parties.';

  return (
    // Subtle light si-primary tint in the background gradient
    <div className="min-h-screen w-screen bg-gradient-to-br from-white via-slate-50 to-sky-50/30 px-4 py-16 pt-[13vh] sm:px-6 lg:px-8 lg:py-20 lg:pt-[13vh]">
      <div className="bg-pattern-dots pointer-events-none absolute inset-0 opacity-5" />

      <div className="relative mx-auto max-w-7xl">
        {/* Minimalist Header */}
        <div className="mb-16 max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-3 text-xs font-bold tracking-widest text-slate-500 uppercase">
            {/* The touch of red and primary si-primary */}
            <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
            <span className="bg-si-primary-700 h-1.5 w-6 rounded-full" />
            Connect With Us
          </div>

          <h1 className="text-4xl font-light tracking-tight text-black sm:text-5xl lg:text-6xl">
            {title.split(' ').slice(0, -3).join(' ')}{' '}
            <span className="text-si-primary font-semibold">
              {title.split(' ').slice(-3).join(' ')}
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-light text-slate-500">{subtitle}</p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-24">
          {/* Left Column: Action / Selector */}
          <div className="space-y-10 lg:col-span-7">
            <ServicesSelector />

            {/* Elegant Privacy Note */}
            <div className="border-si-primary-200 border-l-2 py-2 pl-5">
              <p className="mb-1 text-xs font-medium tracking-widest text-slate-400 uppercase">
                Data Protection
              </p>
              <p className="text-sm leading-relaxed text-slate-500">{privacyText}</p>
            </div>
          </div>

          {/* Right Column: Information */}
          <div className="space-y-12 lg:col-span-5">
            {/* Corporate Details Card with the requested color trio */}
            <div className="relative overflow-hidden rounded-xl border border-sky-100 bg-white p-8 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.04)]">
              {/* The premium letterhead accent line: si-primary -> Light si-primary -> Red */}
              <div className="from-si-primary-700 absolute top-0 left-0 h-1 w-full bg-gradient-to-r via-sky-400 to-rose-500" />

              <h3 className="text-si-primary-950 mb-6 text-lg font-semibold">
                Corporate Information
              </h3>
              <div className="space-y-6">
                <div>
                  <p className="mb-1.5 text-[11px] font-bold tracking-widest text-slate-400 uppercase">
                    Registered Address
                  </p>
                  <p className="text-sm leading-relaxed text-slate-600">
                    14, Dayanand Vihar, Near Karkardooma Metro Station,
                    <br />
                    Vikas Marg, Delhi, 110092.
                  </p>
                </div>
                <div>
                  <p className="mb-1.5 text-[11px] font-bold tracking-widest text-slate-400 uppercase">
                    Corporate Address
                  </p>
                  <p className="text-sm leading-relaxed text-slate-600">
                    Unit no- 1, D Wing, Ground floor Gundecha Onclaves,
                    <br />
                    Kherani Rd, Next to Post Office Saki Naka,
                    <br />
                    Andheri East, Mumbai, Maharashtra 400072.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div>
                    <p className="mb-1.5 text-[11px] font-bold tracking-widest text-slate-400 uppercase">
                      IRDAI Broker Code
                    </p>
                    <p className="text-si-primary-950 text-sm font-medium">IRDA/DB 692</p>
                  </div>
                  <div>
                    <p className="mb-1.5 text-[11px] font-bold tracking-widest text-slate-400 uppercase">
                      Toll Free
                    </p>
                    <p className="text-si-primary-700 text-sm font-medium">1800 210 2022</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <FAQ />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
