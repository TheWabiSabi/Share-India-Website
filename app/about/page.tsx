'use client';
import React from 'react';
import Image from 'next/image';
import {
  FaUser,
  FaUsers,
  FaTrophy,
  FaQuoteLeft,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaHandshake,
  FaLightbulb,
  FaStar,
  FaAward,
  FaMedal,
  FaCertificate,
} from 'react-icons/fa';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pt-[8vh] text-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          {/* REPLACE: /public/images/about/hero-background.jpg - Professional office or team meeting background */}
          <Image
            src="/images/about/hero-background.jpg"
            alt="About Share India Insurance Brokers"
            fill
            priority
            className="object-cover"
            sizes="100vw 100vh"
          />
          {/* Solid overlay */}
          <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm" />
        </div>

        <div className="relative w-full pt-[15vh] md:pt-[30vh]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl text-white">
              <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
                About <span className="text-gradient-primary">Share India</span>
              </h1>
              <p className="mt-6 text-lg text-gray-100/90 md:text-xl">
                Protecting dreams, securing futures. We are passionate about creating exceptional
                insurance experiences that inspire confidence and connect people with the right
                protection for their unique needs.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#our-story"
                  className="inline-flex items-center justify-center rounded-lg bg-blue-100 px-6 py-3 font-semibold text-blue-800 hover:bg-blue-200"
                >
                  <FaUser className="mr-2" />
                  Our Story
                </a>
                <a
                  href="#leadership"
                  className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 font-semibold hover:bg-gray-50"
                >
                  <FaUsers className="mr-2" />
                  Leadership
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section
        id="our-story"
        className="bg-si-primary-100 w-full border-b border-gray-100 lg:h-screen"
      >
        <div className="mx-auto max-w-[90vw] px-4 py-[10vh] sm:px-6 lg:max-w-[75vw] lg:px-8 lg:pt-[20vh]">
          <h2 className="text-3xl font-bold md:text-4xl">Our Story</h2>
          <p className="mt-[9vh] text-lg text-gray-700">
            At Share India Insurance Brokers, we exist to shape decisions for the better — to
            protect and enrich the lives of people across India.
          </p>

          <div className="mt-[10vh] grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">Our Journey</h3>
              <p className="mt-8 text-lg text-gray-700">
                Our world has become more volatile — economically, socially and geopolitically —
                than ever before. In an interconnected and interdependent world, organizations and
                individuals are under constant pressure to make complex business decisions,
                sometimes without all the necessary facts — and almost always at speed.
              </p>
              <p className="mt-6 text-lg text-gray-700">
                At Share India, we&apos;ve been on a decade-plus journey to connect our industry
                expertise, so we can address our clients&apos; top priorities more effectively.
                Through our teams across insurance brokerage, risk management, and claims advocacy,
                our clients are better protected within, and across, their business strategies.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">Our Mission</h3>
              <div className="mt-8 space-y-7">
                <div className="flex items-center gap-5 rounded-lg border border-gray-200 p-4">
                  <FaShieldAlt className="text-2xl text-blue-500" />
                  <div>
                    <div className="text-lg font-medium">Protection First</div>
                    <div className="text-base text-gray-600">
                      Comprehensive coverage for every risk
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-5 rounded-lg border border-gray-200 p-4">
                  <FaHandshake className="text-2xl text-blue-500" />
                  <div>
                    <div className="text-lg font-medium">Trust & Transparency</div>
                    <div className="text-base text-gray-600">
                      Building lasting relationships through honesty
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-5 rounded-lg border border-gray-200 p-4">
                  <FaLightbulb className="text-2xl text-blue-500" />
                  <div>
                    <div className="text-lg font-medium">Innovation & Excellence</div>
                    <div className="text-base text-gray-600">
                      Cutting-edge solutions for modern challenges
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="w-full border-b border-gray-100 bg-white py-10">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold md:text-4xl">Leadership</h2>
          <p className="mt-3 text-gray-700">
            Meet the visionary leader driving Share India Insurance Brokers towards excellence and
            innovation.
          </p>

          {/* CEO Profile */}
          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Photo */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative h-96 w-80 overflow-hidden rounded-2xl border-4 border-blue-100 shadow-xl">
                {/* REPLACE: /public/images/leadership/ajaykumar-patel-ceo.jpg - Professional headshot of CEO Ajaykumar Patel */}
                <Image
                  src="/images/leadership/ajaykumar-patel-ceo.jpg"
                  alt="Ajaykumar Patel - CEO & Principal Officer"
                  fill
                  className="object-cover"
                  sizes="320px 384px"
                />
                <div className="absolute right-0 bottom-0 left-0 bg-black/60 p-4">
                  <h3 className="text-xl font-bold text-white">Ajaykumar Patel</h3>
                  <p className="text-blue-100">CEO & Principal Officer</p>
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="flex flex-col justify-center">
              <div className="rounded-xl border border-gray-200 bg-gradient-to-br from-blue-50 to-white p-8">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-full bg-blue-100 p-3">
                    <FaUser className="text-2xl text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">25 Years Experience</h3>
                    <p className="font-semibold text-blue-600">Ajaykumar Patel</p>
                    <p className="text-gray-600">CEO & Principal Officer</p>
                  </div>
                </div>

                <p className="leading-relaxed text-gray-700">
                  Mr. Ajay Patel has 25 years of progressive experience in Manufacturing and
                  Insurance domain. Previously, he has provided his services to organizations like
                  Bajaj Auto, ICICI Prudential, IIFL and others. He is Mechanical Engineering
                  graduate and holds a MBA in Operations.
                </p>

                <p className="mt-4 leading-relaxed text-gray-700">
                  Ajay comes in with an excellence in skills like Business Development, Strategy
                  Implementation and an excellent team Management quality. Being the pillar of the
                  company, he has been associated with Share India Insurance Brokers Private Limited
                  since its inception.
                </p>

                <div className="mt-6 flex gap-3">
                  <div className="rounded-lg bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                    Business Development
                  </div>
                  <div className="rounded-lg bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                    Strategy Implementation
                  </div>
                  <div className="rounded-lg bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800">
                    Team Management
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section id="our-team" className="w-full border-b border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold md:text-4xl">Our Team</h2>
          <p className="mt-3 text-gray-700">
            Meet our dedicated insurance experts who bring years of experience and specialized
            knowledge to serve you better.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: 'Mahesh Harmalkar', role: 'Insurance Expert', color: 'blue' },
              { name: 'Vidhi Shah', role: 'Insurance Expert', color: 'green' },
              { name: 'Rajendra Muppidwar', role: 'Insurance Expert', color: 'purple' },
              { name: 'Raunaq Pai', role: 'Insurance Expert', color: 'red' },
              { name: 'Shekhar Pradhan', role: 'Insurance Expert', color: 'indigo' },
              { name: 'Manish Chavan', role: 'Insurance Expert', color: 'pink' },
              { name: 'Vishal More', role: 'Insurance Expert', color: 'yellow' },
              { name: 'Akash Agam', role: 'Insurance Expert', color: 'teal' },
            ].map((member, index) => (
              <TeamCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition Section */}
      <section id="awards-recognition" className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold md:text-4xl">Awards & Recognition</h2>
          <p className="mt-3 text-gray-700">
            Celebrated for excellence, trusted by clients. Here&apos;s what the industry recognizes
            about our commitment to service.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                year: '2023',
                award: 'Best Insurance Broker – IRDAI Recognition',
                icon: FaTrophy,
                color: 'yellow',
              },
              {
                year: '2022',
                award: 'Excellence in Client Service – Insurance Today',
                icon: FaAward,
                color: 'blue',
              },
              {
                year: '2021',
                award: 'Top 10 Brokerage Firms – Business India',
                icon: FaMedal,
                color: 'green',
              },
              {
                year: '2020',
                award: 'Innovation in Claims Advocacy – FinServ Awards',
                icon: FaCertificate,
                color: 'purple',
              },
            ].map((award, index) => (
              <AwardCard key={index} award={award} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="from-si-primary-200 w-full border-b border-gray-100 bg-gradient-to-b to-transparent"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold md:text-4xl">What Our Clients Say</h2>
          <p className="mt-3 text-gray-700">
            Real experiences from real clients who trust us with their insurance needs.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: 'Priya Menon',
                role: 'CFO, TechNova Pvt Ltd',
                text: 'Share India Brokers made our policy renewal seamless and negotiated significant savings without compromising coverage.',
                rating: 5,
              },
              {
                name: 'Arjun Verma',
                role: 'HR Head, Zenith Industries',
                text: 'Their claims advocacy was exceptional—we felt supported throughout the entire process.',
                rating: 5,
              },
              {
                name: 'Kavita Iyer',
                role: 'Founder, GreenEdge Retail',
                text: 'We value their transparency and ability to simplify complex insurance products for growing businesses.',
                rating: 5,
              },
              {
                name: 'Rajesh Kumar',
                role: 'Managing Director, Steel Works Ltd',
                text: 'Professional service and deep industry knowledge. They understand our manufacturing risks perfectly.',
                rating: 5,
              },
              {
                name: 'Sneha Patel',
                role: 'Operations Head, Logistics Plus',
                text: 'Quick response times and comprehensive coverage options. Highly recommend their services.',
                rating: 5,
              },
              {
                name: 'Amit Sharma',
                role: 'CEO, Digital Solutions Inc',
                text: 'Innovative approach to risk management and excellent customer service. A trusted partner.',
                rating: 5,
              },
            ].map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-gray-900">Ready to Protect Your Future?</h3>
                <p className="mt-2 text-gray-700">
                  Connect with our insurance experts and discover how we can safeguard what matters
                  most to you.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
                >
                  <FaPhone className="mr-2" />
                  Contact Us
                </a>
                <a
                  href="/retail"
                  className="inline-flex items-center justify-center rounded-lg border border-blue-200 bg-white px-6 py-3 font-semibold text-blue-700 hover:bg-blue-100"
                >
                  <FaShieldAlt className="mr-2" />
                  Get Quote
                </a>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="flex items-center justify-between rounded-lg border border-gray-200 p-5">
              <div>
                <div className="text-sm text-gray-500">Call</div>
                <div className="font-semibold">1800 210 2022</div>
              </div>
              <div className="text-xl text-blue-600">
                <FaPhone />
              </div>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-gray-200 p-5">
              <div>
                <div className="text-sm text-gray-500">Email</div>
                <div className="font-semibold">contact.ins@shareindia.co.in</div>
              </div>
              <div className="text-xl text-blue-600">
                <FaEnvelope />
              </div>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-gray-200 p-5">
              <div>
                <div className="text-sm text-gray-500">Location</div>
                <div className="font-semibold">Mumbai, India</div>
              </div>
              <div className="text-xl text-blue-600">
                <FaMapMarkerAlt />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* Helper Components */
const TeamCard = ({ member }: { member: { name: string; role: string; color: string } }) => {
  const colorClasses = {
    blue: 'from-blue-400 to-blue-600 bg-blue-50 text-blue-600',
    green: 'from-green-400 to-green-600 bg-green-50 text-green-600',
    purple: 'from-purple-400 to-purple-600 bg-purple-50 text-purple-600',
    red: 'from-red-400 to-red-600 bg-red-50 text-red-600',
    indigo: 'from-indigo-400 to-indigo-600 bg-indigo-50 text-indigo-600',
    pink: 'from-pink-400 to-pink-600 bg-pink-50 text-pink-600',
    yellow: 'from-yellow-400 to-yellow-600 bg-yellow-50 text-yellow-600',
    teal: 'from-teal-400 to-teal-600 bg-teal-50 text-teal-600',
  };

  const bgClass =
    colorClasses[member.color as keyof typeof colorClasses]?.split(' ')[2] || 'bg-gray-50';
  const textClass =
    colorClasses[member.color as keyof typeof colorClasses]?.split(' ')[3] || 'text-gray-600';

  // Team member image mapping
  const getTeamImagePath = (name: string) => {
    const slug = name.toLowerCase().replace(/\s+/g, '-');
    return `/images/team/${slug}.jpg`;
  };

  return (
    <div
      className={`rounded-xl border border-gray-200 p-6 ${bgClass} transition-shadow hover:shadow-lg`}
    >
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 h-16 w-16 overflow-hidden rounded-full bg-white shadow-md">
          {/* REPLACE TEAM IMAGES:
              /public/images/team/mahesh-harmalkar.jpg - Professional headshot of Mahesh Harmalkar
              /public/images/team/vidhi-shah.jpg - Professional headshot of Vidhi Shah
              /public/images/team/rajendra-muppidwar.jpg - Professional headshot of Rajendra Muppidwar
              /public/images/team/raunaq-pai.jpg - Professional headshot of Raunaq Pai
              /public/images/team/shekhar-pradhan.jpg - Professional headshot of Shekhar Pradhan
              /public/images/team/manish-chavan.jpg - Professional headshot of Manish Chavan
              /public/images/team/vishal-more.jpg - Professional headshot of Vishal More
              /public/images/team/akash-agam.jpg - Professional headshot of Akash Agam
          */}
          <Image
            src={getTeamImagePath(member.name)}
            alt={`${member.name} - ${member.role}`}
            width={64}
            height={64}
            className="h-full w-full object-cover"
          />
        </div>
        <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
        <p className={`text-sm ${textClass} font-medium`}>{member.role}</p>
        <div className="mt-3 flex gap-2">
          <button className={`rounded-full p-2 ${textClass} transition-colors hover:bg-white`}>
            <FaLinkedin className="text-sm" />
          </button>
          <button className={`rounded-full p-2 ${textClass} transition-colors hover:bg-white`}>
            <FaEnvelope className="text-sm" />
          </button>
        </div>
      </div>
    </div>
  );
};

const AwardCard = ({
  award,
}: {
  award: { year: string; award: string; icon: React.ElementType; color: string };
}) => {
  const colorClasses = {
    yellow: 'from-yellow-400 to-yellow-600 bg-yellow-50 text-yellow-600',
    blue: 'from-blue-400 to-blue-600 bg-blue-50 text-blue-600',
    green: 'from-green-400 to-green-600 bg-green-50 text-green-600',
    purple: 'from-purple-400 to-purple-600 bg-purple-50 text-purple-600',
  };

  const bgClass =
    colorClasses[award.color as keyof typeof colorClasses]?.split(' ')[2] || 'bg-gray-50';

  // Award image mapping
  const getAwardImagePath = (year: string) => {
    return `/images/awards/award-${year}.jpg`;
  };

  return (
    <div
      className={`rounded-xl border border-gray-200 p-6 ${bgClass} transition-shadow hover:shadow-lg`}
    >
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 h-16 w-16 overflow-hidden rounded-lg bg-white shadow-md">
          {/* REPLACE AWARD IMAGES:
              /public/images/awards/award-2023.jpg - IRDAI Recognition trophy/certificate image
              /public/images/awards/award-2022.jpg - Insurance Today Excellence award image
              /public/images/awards/award-2021.jpg - Business India Top 10 award image
              /public/images/awards/award-2020.jpg - FinServ Innovation award image
          */}
          <Image
            src={getAwardImagePath(award.year)}
            alt={`${award.year} ${award.award}`}
            width={64}
            height={64}
            className="h-full w-full object-contain p-2"
          />
        </div>
        <h3 className="text-xl font-bold text-gray-900">{award.year}</h3>
        <p className="mt-2 text-sm text-gray-700">{award.award}</p>
      </div>
    </div>
  );
};

const TestimonialCard = ({
  testimonial,
}: {
  testimonial: { name: string; role: string; text: string; rating: number };
}) => {
  // Client image mapping
  const getClientImagePath = (name: string) => {
    const slug = name.toLowerCase().replace(/\s+/g, '-');
    return `/images/clients/${slug}.jpg`;
  };

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg">
      <div className="mb-4 flex items-center gap-1">
        {[...Array(testimonial.rating)].map((_, i) => (
          <FaStar key={i} className="text-yellow-400" />
        ))}
      </div>
      <div className="mb-4">
        <FaQuoteLeft className="mb-2 text-2xl text-blue-200" />
        <p className="leading-relaxed text-gray-700">{testimonial.text}</p>
      </div>
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 overflow-hidden rounded-full bg-blue-100">
          {/* REPLACE CLIENT IMAGES:
              /public/images/clients/priya-menon.jpg - Professional headshot of Priya Menon
              /public/images/clients/arjun-verma.jpg - Professional headshot of Arjun Verma
              /public/images/clients/kavita-iyer.jpg - Professional headshot of Kavita Iyer
              /public/images/clients/rajesh-kumar.jpg - Professional headshot of Rajesh Kumar
              /public/images/clients/sneha-patel.jpg - Professional headshot of Sneha Patel
              /public/images/clients/amit-sharma.jpg - Professional headshot of Amit Sharma
          */}
          <Image
            src={getClientImagePath(testimonial.name)}
            alt={`${testimonial.name} - ${testimonial.role}`}
            width={48}
            height={48}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <div className="font-semibold text-gray-900">{testimonial.name}</div>
          <div className="text-sm text-gray-600">{testimonial.role}</div>
        </div>
      </div>
    </div>
  );
};
