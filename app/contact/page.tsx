import ServicesSelector from './_components/service-selector'; // client component
import FAQ from './_components/faq'; // <-- Add this import

// Define the page component without custom props
const ContactPage = () => {
  // Move your default values inside the component
  const title = 'What services are you interested in?';
  const subtitle = '';
  const privacyText =
    "We take your privacy seriously, and we don't sell lists, phone numbers, or email addresses.";

  return (
    <div className="section-vibrant-blue w-screen px-2 py-5 pt-[10vh] sm:px-4 md:px-6 lg:px-8 lg:pt-[15vh]">
      <div className="bg-pattern-dots absolute inset-0 opacity-20" />
      <div className="relative flex min-h-screen flex-col">
        {/* Header + Selector */}
        <div className="flex flex-1 items-center justify-center px-2 py-6 sm:px-4 sm:py-12 md:px-6 lg:px-8">
          <div className="w-full max-w-xl space-y-8 sm:max-w-2xl">
            <div className="text-center">
              {/* Badge */}
              <div className="from-si-primary/15 to-si-red/10 border-si-primary/20 mb-6 inline-flex items-center gap-2 rounded-full border bg-gradient-to-r px-4 py-2 text-xs font-bold tracking-wider text-black uppercase backdrop-blur-sm">
                <span className="accent-dot-vibrant h-1.5 w-1.5 rounded-full bg-black" />
                Get Started
              </div>

              <h1 className="text-si-ink mb-2 text-3xl font-semibold sm:text-4xl md:text-5xl">
                {title.split(' ').slice(0, -3).join(' ')}{' '}
                <span className="text-gradient-primary">
                  {title.split(' ').slice(-3).join(' ')}
                </span>
              </h1>
              {subtitle && (
                <p className="text-si-ink/80 mb-6 text-base font-medium sm:mb-8 sm:text-lg">
                  {subtitle}
                </p>
              )}
            </div>

            {/* Client Side Selector */}
            <ServicesSelector />

            {/* Privacy Statement */}
            <div className="section-spot-alt relative mt-8 rounded-2xl">
              <div className="bg-pattern-grid absolute inset-0 rounded-2xl opacity-15" />
              <div className="relative mx-auto max-w-2xl px-6 py-6">
                <div className="accent-bar-gradient mx-auto mb-3 h-2 w-12" />
                <p className="text-si-ink/70 text-center text-xs leading-relaxed sm:text-sm">
                  {privacyText}
                </p>
              </div>
            </div>

            {/* FAQ Section */}
            <FAQ />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
