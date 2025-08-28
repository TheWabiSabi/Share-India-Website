import React from 'react';
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
  FaDownload,
  FaPlay,
  FaBriefcase,
  FaFire,
  FaLock,
} from 'react-icons/fa';

const RetailInsurancePage = () => {
  return (
    <div className="min-h-screen bg-white pt-[8vh]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">
              Your Link to Complete Protection
            </h1>
            <p className="mb-8 text-xl text-blue-100 md:text-2xl">
              Comprehensive retail insurance solutions tailored for your peace of mind
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <button className="flex items-center justify-center gap-2 rounded-lg bg-orange-500 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-orange-600">
                <FaPlay className="text-sm" />
                Get Insurance Quote
              </button>
              <button className="flex items-center justify-center gap-2 rounded-lg border-2 border-white px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-white hover:text-blue-900">
                <FaPhoneAlt className="text-sm" />
                Call 1800 210 2022
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            <div className="flex flex-col items-center">
              <FaCertificate className="mb-2 text-4xl text-blue-600" />
              <div className="mb-2 text-3xl font-bold text-blue-900">IRDA</div>
              <div className="text-gray-600">Registered Broker</div>
            </div>
            <div className="flex flex-col items-center">
              <FaUsers className="mb-2 text-4xl text-green-600" />
              <div className="mb-2 text-3xl font-bold text-blue-900">30+</div>
              <div className="text-gray-600">Years Group Experience</div>
            </div>
            <div className="flex flex-col items-center">
              <FaShieldAlt className="mb-2 text-4xl text-orange-600" />
              <div className="mb-2 text-3xl font-bold text-blue-900">24/7</div>
              <div className="text-gray-600">Customer Support</div>
            </div>
            <div className="flex flex-col items-center">
              <FaHandHoldingHeart className="mb-2 text-4xl text-purple-600" />
              <div className="mb-2 text-3xl font-bold text-blue-900">100%</div>
              <div className="text-gray-600">Claims Assistance</div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Products & Services */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Comprehensive Retail Insurance Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Protecting what matters most to you and your family[31][32]
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border-t-4 border-blue-600 bg-white p-6 text-center shadow-lg transition-shadow hover:shadow-xl">
              <FaHeart className="mx-auto mb-4 text-4xl text-blue-600" />
              <h3 className="mb-3 text-lg font-semibold">Life Insurance</h3>
              <p className="mb-4 text-sm text-gray-600">
                Secure your family&#39;s financial future with comprehensive life coverage plans
              </p>
              <ul className="space-y-1 text-left text-xs text-gray-500">
                <li className="flex items-center">
                  <FaChevronRight className="mr-2 text-xs text-green-500" />
                  Term Life Insurance
                </li>
                <li className="flex items-center">
                  <FaChevronRight className="mr-2 text-xs text-green-500" />
                  Endowment Plans
                </li>
                <li className="flex items-center">
                  <FaChevronRight className="mr-2 text-xs text-green-500" />
                  ULIP Plans
                </li>
              </ul>
            </div>

            <div className="rounded-xl border-t-4 border-green-600 bg-white p-6 text-center shadow-lg transition-shadow hover:shadow-xl">
              <FaUserMd className="mx-auto mb-4 text-4xl text-green-600" />
              <h3 className="mb-3 text-lg font-semibold">Health Insurance</h3>
              <p className="mb-4 text-sm text-gray-600">
                Comprehensive health coverage for you and your loved ones
              </p>
              <ul className="space-y-1 text-left text-xs text-gray-500">
                <li className="flex items-center">
                  <FaChevronRight className="mr-2 text-xs text-green-500" />
                  Individual Health Plans
                </li>
                <li className="flex items-center">
                  <FaChevronRight className="mr-2 text-xs text-green-500" />
                  Family Floater Plans
                </li>
                <li className="flex items-center">
                  <FaChevronRight className="mr-2 text-xs text-green-500" />
                  Critical Illness Cover
                </li>
              </ul>
            </div>

            <div className="rounded-xl border-t-4 border-orange-600 bg-white p-6 text-center shadow-lg transition-shadow hover:shadow-xl">
              <FaCar className="mx-auto mb-4 text-4xl text-orange-600" />
              <h3 className="mb-3 text-lg font-semibold">Motor Insurance</h3>
              <p className="mb-4 text-sm text-gray-600">
                Complete protection for your vehicles with comprehensive coverage[31]
              </p>
              <ul className="space-y-1 text-left text-xs text-gray-500">
                <li className="flex items-center">
                  <FaChevronRight className="mr-2 text-xs text-green-500" />
                  Car Insurance
                </li>
                <li className="flex items-center">
                  <FaChevronRight className="mr-2 text-xs text-green-500" />
                  Two Wheeler Insurance
                </li>
                <li className="flex items-center">
                  <FaChevronRight className="mr-2 text-xs text-green-500" />
                  Commercial Vehicle
                </li>
              </ul>
            </div>

            <div className="rounded-xl border-t-4 border-purple-600 bg-white p-6 text-center shadow-lg transition-shadow hover:shadow-xl">
              <FaHome className="mx-auto mb-4 text-4xl text-purple-600" />
              <h3 className="mb-3 text-lg font-semibold">Home Insurance</h3>
              <p className="mb-4 text-sm text-gray-600">
                Protect your home against fire, theft, and natural disasters[33]
              </p>
              <ul className="space-y-1 text-left text-xs text-gray-500">
                <li className="flex items-center">
                  <FaChevronRight className="mr-2 text-xs text-green-500" />
                  Structure Protection
                </li>
                <li className="flex items-center">
                  <FaChevronRight className="mr-2 text-xs text-green-500" />
                  Contents Coverage
                </li>
                <li className="flex items-center">
                  <FaChevronRight className="mr-2 text-xs text-green-500" />
                  Liability Protection
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose SIIB */}
      <section className="bg-blue-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Why Choose Share India Insurance Brokers?
            </h2>
            <p className="text-xl text-gray-600">
              Data-driven technology solutions for the best insurance insights[33]
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-white p-8 text-center shadow-lg transition-shadow hover:shadow-xl">
              <FaCertificate className="mx-auto mb-6 text-5xl text-blue-600" />
              <h3 className="mb-4 text-xl font-semibold">IRDA Registered</h3>
              <p className="text-gray-600">
                Licensed insurance broker providing reliable coverage solutions for both retail and
                corporate clients[31][32]
              </p>
            </div>

            <div className="rounded-xl bg-white p-8 text-center shadow-lg transition-shadow hover:shadow-xl">
              <FaBriefcase className="mx-auto mb-6 text-5xl text-green-600" />
              <h3 className="mb-4 text-xl font-semibold">Data-Driven Approach</h3>
              <p className="text-gray-600">
                Advanced technology and data science to match your requirements with the best
                insurance products[33]
              </p>
            </div>

            <div className="rounded-xl bg-white p-8 text-center shadow-lg transition-shadow hover:shadow-xl">
              <FaHandHoldingHeart className="mx-auto mb-6 text-5xl text-orange-600" />
              <h3 className="mb-4 text-xl font-semibold">Complete Protection</h3>
              <p className="text-gray-600">
                One purpose - bringing peace of mind by helping you choose the best product for your
                needs[33]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Platforms */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Insurance Made Digital
            </h2>
            <p className="text-xl text-gray-600">
              Easy policy management through our digital platforms
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 p-8 text-white">
              <FaDesktop className="mb-6 text-6xl" />
              <h3 className="mb-4 text-2xl font-bold">Online Portal</h3>
              <p className="mb-6 text-blue-100">
                Comprehensive web platform for policy comparison, purchase, and management with
                expert guidance.
              </p>
              <ul className="mb-8 space-y-3">
                <li className="flex items-center">
                  <FaChevronRight className="mr-3 text-blue-300" />
                  Compare insurance plans
                </li>
                <li className="flex items-center">
                  <FaChevronRight className="mr-3 text-blue-300" />
                  Instant policy quotes
                </li>
                <li className="flex items-center">
                  <FaChevronRight className="mr-3 text-blue-300" />
                  Claims tracking
                </li>
              </ul>
              <button className="flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 transition-colors hover:bg-gray-100">
                <FaPlay />
                Visit Portal
              </button>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-orange-500 to-orange-700 p-8 text-white">
              <FaMobileAlt className="mb-6 text-6xl" />
              <h3 className="mb-4 text-2xl font-bold">Mobile App</h3>
              <p className="mb-6 text-orange-100">
                Manage your insurance policies on-the-go with our user-friendly mobile application.
              </p>
              <ul className="mb-8 space-y-3">
                <li className="flex items-center">
                  <FaChevronRight className="mr-3 text-orange-300" />
                  Policy documents access
                </li>
                <li className="flex items-center">
                  <FaChevronRight className="mr-3 text-orange-300" />
                  Premium reminders
                </li>
                <li className="flex items-center">
                  <FaChevronRight className="mr-3 text-orange-300" />
                  Instant claims filing
                </li>
              </ul>
              <button className="flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-orange-600 transition-colors hover:bg-gray-100">
                <FaDownload />
                Download App
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Insurance Products */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Specialized Coverage Options
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-white p-6 text-center shadow-md transition-shadow hover:shadow-lg">
              <FaGraduationCap className="mx-auto mb-3 text-3xl text-blue-600" />
              <h4 className="mb-2 font-semibold">Child Education Plans</h4>
              <p className="text-sm text-gray-600">Secure your child&#39;s educational future</p>
            </div>

            <div className="rounded-lg bg-white p-6 text-center shadow-md transition-shadow hover:shadow-lg">
              <FaUmbrella className="mx-auto mb-3 text-3xl text-green-600" />
              <h4 className="mb-2 font-semibold">Personal Accident</h4>
              <p className="text-sm text-gray-600">Coverage against accidental injuries</p>
            </div>

            <div className="rounded-lg bg-white p-6 text-center shadow-md transition-shadow hover:shadow-lg">
              <FaLock className="mx-auto mb-3 text-3xl text-orange-600" />
              <h4 className="mb-2 font-semibold">Cyber Insurance</h4>
              <p className="text-sm text-gray-600">Protection against cyber risks[33]</p>
            </div>

            <div className="rounded-lg bg-white p-6 text-center shadow-md transition-shadow hover:shadow-lg">
              <FaFire className="mx-auto mb-3 text-3xl text-red-600" />
              <h4 className="mb-2 font-semibold">Fire Insurance</h4>
              <p className="text-sm text-gray-600">Comprehensive fire damage coverage</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Support */}
      <section className="bg-gray-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Always Here When You Need Us</h2>
            <p className="text-xl text-gray-300">
              Dedicated support for all your insurance needs[33]
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-gray-800 p-8 text-center transition-colors hover:bg-gray-700">
              <FaPhoneAlt className="mx-auto mb-6 text-6xl text-blue-400" />
              <h3 className="mb-4 text-xl font-semibold">24/7 Helpline</h3>
              <p className="mb-4 text-gray-300">
                Round-the-clock customer support for all your queries and emergency assistance.
              </p>
              <div className="text-lg font-semibold text-blue-400">1800 210 2022</div>
            </div>

            <div className="rounded-xl bg-gray-800 p-8 text-center transition-colors hover:bg-gray-700">
              <FaHeadset className="mx-auto mb-6 text-6xl text-green-400" />
              <h3 className="mb-4 text-xl font-semibold">Claims Support</h3>
              <p className="mb-4 text-gray-300">
                Dedicated claims assistance team to help you through the entire claims process.
              </p>
              <div className="font-semibold text-green-400">100% Claims Assistance</div>
            </div>

            <div className="rounded-xl bg-gray-800 p-8 text-center transition-colors hover:bg-gray-700">
              <FaUsers className="mx-auto mb-6 text-6xl text-orange-400" />
              <h3 className="mb-4 text-xl font-semibold">Expert Advisory</h3>
              <p className="mb-4 text-gray-300">
                Professional insurance consultants to help you choose the right coverage.
              </p>
              <div className="font-semibold text-orange-400">contact.ins@shareindia.co.in</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Protect What Matters Most Today</h2>
          <p className="mb-8 text-xl text-blue-100">
            Get personalized insurance solutions from India&#39;s trusted insurance brokers[32][33]
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className="flex items-center justify-center gap-2 rounded-lg bg-orange-500 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-orange-600">
              <FaShieldAlt />
              Get Free Quote
            </button>
            <button className="flex items-center justify-center gap-2 rounded-lg border-2 border-white px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-white hover:text-blue-900">
              <FaHeadset />
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RetailInsurancePage;
