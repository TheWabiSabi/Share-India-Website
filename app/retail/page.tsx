'use client';
import React from 'react';
import Image from 'next/image';
import {
  FaChevronRight,
  FaShieldAlt,
  FaHeart,
  FaCar,
  FaHome,
  FaUmbrella,
  FaMobileAlt,
  FaDesktop,
  FaUserMd,
  FaCertificate,
  FaPhoneAlt,
  FaUsers,
  FaHandHoldingHeart,
  FaGraduationCap,
  FaHeadset,
  FaFire,
  FaLock,
  FaEnvelope,
  FaFileContract,
} from 'react-icons/fa';

const RetailInsurancePage = () => {
  return (
    <div className="min-h-screen bg-white pt-[8vh]">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          {/* REPLACE: /public/images/retail/hero-background.jpg - Happy family or individual with insurance protection theme */}
          <Image
            src="/images/retail/hero-background.jpg"
            alt="Retail Insurance Solutions"
            fill
            priority
            className="object-cover"
            sizes="100vw 100vh"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/50 to-slate-900/30 backdrop-blur-sm" />
        </div>

        <div className="relative w-full pt-[15vh] md:pt-[30vh]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl text-white">
              <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
                Your Link to Complete Protection
              </h1>
              <p className="mt-6 text-lg text-gray-100/90 md:text-xl">
                Comprehensive retail insurance solutions tailored for your peace of mind. Protecting
                what matters most to you and your family.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/premium-estimator"
                  className="inline-flex items-center justify-center rounded-lg bg-blue-100 px-6 py-3 font-semibold text-blue-800 hover:bg-blue-200"
                >
                  <FaShieldAlt className="mr-2" />
                  Get Coverage Proposal
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 font-semibold hover:bg-gray-50"
                >
                  <FaFileContract className="mr-2" />
                  Book Risk Assessment
                </a>
              </div>
              <div className="mt-4 text-sm text-gray-100">
                IRDA registered broker with 24/7 customer support and 100% claims assistance.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Explanation */}
      <section className="from-si-primary-200 w-full border-b border-gray-100 bg-gradient-to-b to-transparent lg:h-screen">
        <div className="mx-auto max-w-[90vw] px-4 py-[10vh] sm:px-6 lg:max-w-[75vw] lg:px-8 lg:pt-[20vh]">
          <h2 className="text-3xl font-bold md:text-4xl">Understanding Retail Insurance</h2>
          <p className="mt-[9vh] text-lg text-gray-700">
            Retail insurance provides essential protection for individuals and families, covering
            life&apos;s uncertainties and helping secure your financial future against unexpected
            events.
          </p>

          <div className="mt-[10vh] grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">Why Retail Insurance Matters</h3>
              <p className="mt-8 text-lg text-gray-700">
                In today&apos;s unpredictable world, having the right insurance coverage is crucial
                for protecting your family&apos;s financial security. From health emergencies to
                vehicle accidents, the right insurance policy can make the difference between
                financial stability and hardship.
              </p>
              <ul className="mt-7 space-y-2 text-base text-gray-700">
                <li className="mb-6 flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                  Comprehensive protection for life&apos;s uncertainties
                </li>
                <li className="mb-6 flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                  Financial security for you and your family
                </li>
                <li className="flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                  Peace of mind with expert guidance and support
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">Our Key Statistics</h3>
              <div className="mt-8 space-y-7">
                <div className="flex items-center gap-5 rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md">
                  <FaCertificate className="text-2xl text-blue-500" />
                  <div>
                    <div className="text-lg font-medium">IRDA Registered</div>
                    <div className="text-base text-gray-600">Licensed insurance broker</div>
                  </div>
                </div>
                <div className="flex items-center gap-5 rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md">
                  <FaUsers className="text-2xl text-blue-500" />
                  <div>
                    <div className="text-lg font-medium">30+ Years Experience</div>
                    <div className="text-base text-gray-600">
                      Group experience in financial services
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-5 rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md">
                  <FaHandHoldingHeart className="text-2xl text-blue-500" />
                  <div>
                    <div className="text-lg font-medium">100% Claims Assistance</div>
                    <div className="text-base text-gray-600">
                      Complete support throughout claims process
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Coverage Suite */}
      <section className="to-si-primary-200 mt-20 w-full border-b border-gray-100 bg-gradient-to-b from-transparent lg:min-h-screen">
        <div className="mx-auto max-w-[90vw] px-4 py-[7vh] sm:px-6 lg:max-w-[75vw] lg:px-8 lg:pt-[10vh]">
          <h2 className="text-3xl font-bold md:text-4xl">Core Coverage Suite</h2>
          <p className="mt-14 text-lg text-gray-700">
            Comprehensive protection designed specifically for individuals and families.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card
              icon={<FaHeart className="text-2xl text-blue-500" />}
              title="Life Insurance"
              body="Secure your family's financial future with comprehensive life coverage plans."
              bullets={[
                'Term Life Insurance for maximum coverage',
                'Endowment Plans with savings component',
                'ULIP Plans for investment and protection',
              ]}
            />
            <Card
              icon={<FaUserMd className="text-2xl text-blue-500" />}
              title="Health Insurance"
              body="Comprehensive health coverage for you and your loved ones."
              bullets={[
                'Individual Health Plans tailored for you',
                'Family Floater Plans for complete family',
                'Critical Illness Cover for major diseases',
              ]}
            />
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card
              icon={<FaCar className="text-2xl text-blue-500" />}
              title="Motor Insurance"
              body="Complete protection for your vehicles with comprehensive coverage."
              bullets={[
                'Car Insurance with comprehensive coverage',
                'Two Wheeler Insurance for bikes and scooters',
                'Commercial Vehicle insurance for business',
              ]}
            />
            <Card
              icon={<FaHome className="text-2xl text-blue-500" />}
              title="Home Insurance"
              body="Protect your home against fire, theft, and natural disasters."
              bullets={[
                'Structure Protection against damages',
                'Contents Coverage for belongings',
                'Liability Protection for third-party claims',
              ]}
            />
          </div>
        </div>
      </section>

      {/* Specialized Coverage Options */}
      <section className="from-si-primary-200 to-si-primary-200 w-full border-b border-gray-100 bg-gradient-to-t via-white">
        <div className="mx-auto max-w-[90vw] px-4 py-14 sm:px-6 lg:max-w-[75vw] lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Specialized Coverage Options</h2>
          <p className="mt-3 text-gray-700">
            Additional protection options to complement your core insurance portfolio.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Tile icon={<FaGraduationCap />} title="Child Education Plans">
              Secure your child&apos;s educational future with dedicated savings and insurance
              plans.
            </Tile>
            <Tile icon={<FaUmbrella />} title="Personal Accident">
              Coverage against accidental injuries and disabilities for comprehensive protection.
            </Tile>
            <Tile icon={<FaLock />} title="Cyber Insurance">
              Protection against cyber risks and digital threats in today&apos;s connected world.
            </Tile>
            <Tile icon={<FaFire />} title="Fire Insurance">
              Comprehensive fire damage coverage for your property and belongings.
            </Tile>
          </div>
        </div>
      </section>

      {/* Digital Platforms */}
      <section className="to-si-primary-200 w-full border-b border-gray-100 bg-gradient-to-t from-transparent">
        <div className="mx-auto max-w-[90vw] px-4 py-14 sm:px-6 lg:max-w-[75vw] lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Insurance Made Digital</h2>
          <p className="mt-3 text-gray-700">
            Easy policy management through our digital platforms with expert guidance.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card
              icon={<FaDesktop className="text-2xl text-blue-500" />}
              title="Online Portal"
              body="Comprehensive web platform for policy comparison, purchase, and management."
              bullets={[
                'Compare insurance plans from multiple insurers',
                'Instant policy quotes and online purchase',
                'Claims tracking and policy management',
              ]}
            />
            <Card
              icon={<FaMobileAlt className="text-2xl text-blue-500" />}
              title="Mobile App"
              body="Manage your insurance policies on-the-go with our user-friendly mobile application."
              bullets={[
                'Policy documents access anytime, anywhere',
                'Premium reminders and payment options',
                'Instant claims filing and status updates',
              ]}
            />
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="to-si-primary-200 w-full bg-gradient-to-b from-transparent">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-gray-900">
                  Protect What Matters Most Today
                </h3>
                <p className="mt-2 text-gray-700">
                  Get personalized insurance solutions from India&apos;s trusted insurance brokers
                  with 24/7 support.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="/premium-estimator"
                  className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
                >
                  <FaShieldAlt className="mr-2" />
                  Get Coverage Proposal
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg border border-blue-200 bg-white px-6 py-3 font-semibold text-blue-700 hover:bg-blue-100"
                >
                  <FaFileContract className="mr-2" />
                  Book Risk Assessment
                </a>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            <Contact label="Call" value="1800 210 2022" icon={<FaPhoneAlt />} />
            <Contact label="Email" value="contact.ins@shareindia.co.in" icon={<FaEnvelope />} />
            <Contact label="Support" value="24/7 Customer Service" icon={<FaHeadset />} />
          </div>
        </div>
      </section>
    </div>
  );
};

/* Helper Components */
const Tile = ({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-blue-300 hover:shadow-lg">
    <div className="text-2xl text-blue-500 transition-transform group-hover:scale-110">{icon}</div>
    <h3 className="mt-3 font-semibold">{title}</h3>
    <p className="mt-1 text-sm text-gray-600">{children}</p>
  </div>
);

const Card = ({
  icon,
  title,
  body,
  bullets,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
  bullets: string[];
}) => (
  <div className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-blue-300 hover:shadow-lg">
    <div className="flex items-center gap-3">
      {icon}
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
    <p className="mt-2 text-sm text-gray-700">{body}</p>
    <ul className="mt-3 space-y-1 text-sm text-gray-700">
      {bullets.map((b) => (
        <li key={b} className="flex">
          <FaChevronRight className="mt-1 mr-2 text-blue-400" />
          {b}
        </li>
      ))}
    </ul>
  </div>
);

const Contact = ({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
}) => (
  <div className="flex items-center justify-between rounded-lg border border-gray-200 p-5">
    <div>
      <div className="text-sm text-gray-500">{label}</div>
      <div className="font-semibold">{value}</div>
    </div>
    <div className="text-xl text-blue-600">{icon}</div>
  </div>
);

export default RetailInsurancePage;
