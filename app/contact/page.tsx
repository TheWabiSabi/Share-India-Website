import ServicesSelector from './_components/service-selector'; // client component

const ServicesPage = ({
  title = 'What services are you interested in?',
  subtitle = '',
  privacyText = "We take your privacy seriously, and we don't sell lists, phone numbers, or email addresses.",
}) => {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header + Selector */}
      <div className="flex flex-1 items-center justify-center px-2 py-6 sm:px-4 sm:py-12 md:px-6 lg:px-8">
        <div className="w-full max-w-xl space-y-8 sm:max-w-2xl">
          <div className="text-center">
            <h1 className="mb-2 text-2xl font-bold text-si-dark sm:text-3xl md:text-4xl">
              {title}
            </h1>
            {subtitle && (
              <p className="mb-6 text-base text-si-dark/70 sm:mb-8 sm:text-lg">{subtitle}</p>
            )}
          </div>

          {/* Client Side Selector */}
          <ServicesSelector />

          {/* Privacy Statement */}
          <div className="mt-8 border-t border-si-bluegreen">
            <div className="mx-auto max-w-2xl px-3 py-6 sm:px-6 lg:px-8">
              <p className="text-center text-xs leading-relaxed text-si-dark/60 sm:text-sm">
                {privacyText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
