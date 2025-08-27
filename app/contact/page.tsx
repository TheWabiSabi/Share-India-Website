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
    <div className="flex min-h-screen flex-col my-[8vh]">
      {/* Header + Selector */}
      <div className="flex flex-1 items-center justify-center px-2 py-6 sm:px-4 sm:py-12 md:px-6 lg:px-8">
        <div className="w-full max-w-xl space-y-8 sm:max-w-2xl">
          <div className="text-center">
            <h1 className="text-si-dark mb-2 text-2xl font-bold sm:text-3xl md:text-4xl">
              {title}
            </h1>
            {subtitle && (
              <p className="text-si-dark/70 mb-6 text-base sm:mb-8 sm:text-lg">{subtitle}</p>
            )}
          </div>

          {/* Client Side Selector */}
          <ServicesSelector />

          {/* Privacy Statement */}
          <div className="border-si-bluegreen mt-8 border-t">
            <div className="mx-auto max-w-2xl px-3 py-6 sm:px-6 lg:px-8">
              <p className="text-si-dark/60 text-center text-xs leading-relaxed sm:text-sm">
                {privacyText}
              </p>
            </div>
          </div>

          {/* FAQ Section */}
          <FAQ />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
