import React from 'react';
import Image from 'next/image';
import {
  FaUser,
  FaUsers,
  FaTrophy,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaHandshake,
  FaLightbulb,
  FaStar,
} from 'react-icons/fa';

export const metadata = {
  title: 'About Us - Share India Insurance Brokers | Expert Insurance Team',
  description:
    'Meet the expert team at Share India Insurance Brokers. Led by experienced professionals with decades of combined expertise in life, general, and corporate insurance solutions.',
  keywords:
    'insurance brokers team, insurance experts India, Share India leadership, insurance professionals, IRDAI licensed brokers',
  openGraph: {
    title: 'About Share India Insurance Brokers - Meet Our Expert Team',
    description:
      'Discover our leadership team with 25+ years of experience in insurance brokerage, risk management, and claims advocacy.',
    type: 'website',
    url: 'https://www.shareindia.co.in/about',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pt-[8vh] text-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about/hero-background.jpg"
            alt="Share India Insurance Brokers - Professional Insurance Team"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/70 to-slate-900/80 backdrop-blur-sm" />
        </div>

        <div className="relative w-full pt-[15vh] md:pt-[25vh]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl text-white">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-300/30 bg-blue-500/20 px-4 py-2 backdrop-blur-sm">
                <FaShieldAlt className="text-blue-300" />
                <span className="text-sm font-semibold text-blue-100">
                  IRDAI Licensed Insurance Brokers
                </span>
              </div>
              <h1 className="text-5xl leading-tight font-extrabold tracking-tight md:text-7xl">
                About{' '}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  Share India
                </span>
              </h1>
              <p className="mt-6 text-xl leading-relaxed text-gray-100 md:text-2xl">
                Protecting dreams, securing futures. We are passionate about creating exceptional
                insurance experiences that inspire confidence and connect people with the right
                protection for their unique needs.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#our-story"
                  className="group inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl"
                >
                  <FaUser className="mr-2 transition-transform group-hover:scale-110" />
                  Our Story
                </a>
                <a
                  href="#our-team"
                  className="group inline-flex items-center justify-center rounded-lg border-2 border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
                >
                  <FaUsers className="mr-2 transition-transform group-hover:scale-110" />
                  Meet Our Team
                </a>
              </div>

              {/* Quick Stats */}
              <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
                {[
                  { value: '25+', label: 'Years Experience' },
                  { value: '10+', label: 'Expert Team Members' },
                  { value: '1000+', label: 'Happy Clients' },
                  { value: '24/7', label: 'Support Available' },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-blue-300 md:text-4xl">{stat.value}</div>
                    <div className="mt-1 text-sm text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section
        id="our-story"
        className="w-full border-b border-gray-100 bg-gradient-to-br from-blue-50 via-white to-cyan-50"
      >
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">Our Story</h2>
            <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-600">
              At Share India Insurance Brokers, we exist to shape decisions for the better — to
              protect and enrich the lives of people across India.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-blue-100 px-4 py-2">
                <FaUser className="text-blue-600" />
                <span className="font-semibold text-blue-900">Our Journey</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Building Trust Since Day One</h3>
              <p className="mt-6 leading-relaxed text-gray-700">
                Our world has become more volatile — economically, socially and geopolitically —
                than ever before. In an interconnected and interdependent world, organizations and
                individuals are under constant pressure to make complex business decisions,
                sometimes without all the necessary facts — and almost always at speed.
              </p>
              <p className="mt-4 leading-relaxed text-gray-700">
                At Share India, we&apos;ve been on a decade-plus journey to connect our industry
                expertise, so we can address our clients&apos; top priorities more effectively.
                Through our teams across insurance brokerage, risk management, and claims advocacy,
                our clients are better protected within, and across, their business strategies.
              </p>
            </div>
            <div className="space-y-6">
              <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-green-100 px-4 py-2">
                <FaShieldAlt className="text-green-600" />
                <span className="font-semibold text-green-900">Our Mission</span>
              </div>
              <div className="group rounded-xl border-2 border-blue-200 bg-white p-6 shadow-md transition-all hover:border-blue-400 hover:shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 rounded-lg bg-blue-100 p-3">
                    <FaShieldAlt className="text-2xl text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">Protection First</h4>
                    <p className="mt-2 text-gray-600">
                      Comprehensive coverage for every risk, ensuring peace of mind for individuals
                      and businesses
                    </p>
                  </div>
                </div>
              </div>
              <div className="group rounded-xl border-2 border-green-200 bg-white p-6 shadow-md transition-all hover:border-green-400 hover:shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 rounded-lg bg-green-100 p-3">
                    <FaHandshake className="text-2xl text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">Trust & Transparency</h4>
                    <p className="mt-2 text-gray-600">
                      Building lasting relationships through honesty, integrity, and clear
                      communication
                    </p>
                  </div>
                </div>
              </div>
              <div className="group rounded-xl border-2 border-purple-200 bg-white p-6 shadow-md transition-all hover:border-purple-400 hover:shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 rounded-lg bg-purple-100 p-3">
                    <FaLightbulb className="text-2xl text-purple-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">Innovation & Excellence</h4>
                    <p className="mt-2 text-gray-600">
                      Cutting-edge solutions and forward-thinking approaches for modern challenges
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
              Visionary{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Leadership
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Meet the visionary leader driving Share India Insurance Brokers towards excellence and
              innovation.
            </p>
          </div>

          {/* CEO Profile */}
          <div className="mt-16">
            <div className="overflow-hidden rounded-3xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 via-white to-cyan-50 shadow-2xl">
              <div className="grid grid-cols-1 gap-8 p-8 lg:grid-cols-5 lg:p-12">
                {/* Photo */}
                <div className="flex justify-center lg:col-span-2 lg:justify-start">
                  <div className="relative aspect-square w-[350px] overflow-hidden rounded-2xl border-4 border-white shadow-2xl">
                    <Image
                      src="/leadership/ajay-kumar.png"
                      alt="Mr. Ajay Kumar Patel - CEO & Principal Officer"
                      fill
                      className="object-cover"
                      sizes="350px"
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="flex flex-col justify-center lg:col-span-3">
                  <div className="mb-6 inline-flex w-fit items-center gap-3 rounded-full bg-blue-100 px-5 py-2">
                    <FaTrophy className="text-xl text-blue-600" />
                    <span className="text-lg font-bold text-blue-900">25 Years of Excellence</span>
                  </div>

                  <h3 className="text-3xl font-bold text-gray-900">
                    Leading with Vision & Expertise
                  </h3>

                  <div className="mt-6 space-y-4">
                    <p className="text-lg leading-relaxed text-gray-700">
                      Mr. Ajay Patel has 25 years of progressive experience in Manufacturing and
                      Insurance domain. Previously, he has provided his services to organizations
                      like
                      <span className="font-semibold"> Bajaj Auto, ICICI Prudential, IIFL</span> and
                      others. He is a Mechanical Engineering graduate and holds an MBA in
                      Operations.
                    </p>

                    <p className="text-lg leading-relaxed text-gray-700">
                      Ajay brings excellence in skills like Business Development, Strategy
                      Implementation and exceptional team Management quality. Being the pillar of
                      the company, he has been associated with Share India Insurance Brokers Private
                      Limited since its inception, driving growth and innovation at every step.
                    </p>
                  </div>

                  <div className="mt-8">
                    <h4 className="mb-4 text-sm font-semibold tracking-wide text-gray-500 uppercase">
                      Core Expertise
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      <div className="flex items-center gap-2 rounded-lg border-2 border-blue-200 bg-blue-50 px-4 py-2">
                        <FaLightbulb className="text-blue-600" />
                        <span className="font-semibold text-blue-900">Business Development</span>
                      </div>
                      <div className="flex items-center gap-2 rounded-lg border-2 border-green-200 bg-green-50 px-4 py-2">
                        <FaShieldAlt className="text-green-600" />
                        <span className="font-semibold text-green-900">
                          Strategy Implementation
                        </span>
                      </div>
                      <div className="flex items-center gap-2 rounded-lg border-2 border-purple-200 bg-purple-50 px-4 py-2">
                        <FaUsers className="text-purple-600" />
                        <span className="font-semibold text-purple-900">Team Management</span>
                      </div>
                      <div className="flex items-center gap-2 rounded-lg border-2 border-orange-200 bg-orange-50 px-4 py-2">
                        <FaTrophy className="text-orange-600" />
                        <span className="font-semibold text-orange-900">Operations Excellence</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section
        id="our-team"
        className="w-full border-b border-gray-100 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50"
      >
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
              Meet Our <span className="text-gradient-primary">Expert Team</span>
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
              Our leadership team brings together decades of insurance expertise, combining deep
              industry knowledge with a commitment to exceptional client service and operational
              excellence.
            </p>
          </div>

          {/* President - Featured Card */}
          <div className="mt-16">
            <div className="mx-auto max-w-4xl">
              <div className="overflow-hidden rounded-2xl border-2 border-blue-200 bg-gradient-to-br from-white to-blue-50/50 shadow-xl transition-all hover:shadow-2xl">
                <div className="grid grid-cols-1 gap-8 p-8 md:grid-cols-3 md:p-10">
                  <div className="flex justify-center md:col-span-1">
                    <div className="relative aspect-square w-64 overflow-hidden rounded-xl border-4 border-white shadow-lg">
                      <Image
                        src="/team/sonam-gupta.png"
                        alt="Ms. Sonam Gupta - President"
                        fill
                        className="object-cover"
                        sizes="256px"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center md:col-span-2">
                    <div className="mb-3 inline-flex items-center gap-2 self-start rounded-full bg-blue-600 px-4 py-1.5 text-sm font-semibold text-white">
                      <FaStar className="text-yellow-300" />
                      President
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">Ms. Sonam Gupta</h3>
                    <p className="mt-4 text-lg leading-relaxed text-gray-700">
                      Leads a team of insurance professionals with a strong focus on service
                      quality, operational excellence, and client-centric solutions. Under her
                      leadership, Share India Insurance Brokers continues to set new standards in
                      the industry.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      <span className="rounded-lg bg-blue-100 px-3 py-1.5 text-sm font-medium text-blue-800">
                        Leadership Excellence
                      </span>
                      <span className="rounded-lg bg-green-100 px-3 py-1.5 text-sm font-medium text-green-800">
                        Service Quality
                      </span>
                      <span className="rounded-lg bg-purple-100 px-3 py-1.5 text-sm font-medium text-purple-800">
                        Client-Centric
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Department Heads & Senior Leadership */}
          <div className="mt-16">
            <h3 className="mb-8 text-center text-2xl font-bold text-gray-900">
              Senior Leadership Team
            </h3>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: 'Mr. Prakash Rao Dumble',
                  role: 'Head – General Insurance',
                  experience: '30 years',
                  description: 'Possesses 30 years of expertise in the general insurance domain.',
                  color: 'blue',
                  icon: FaShieldAlt,
                },
                {
                  name: 'Mr. Ram Chandra',
                  role: 'Head – Life Insurance',
                  experience: '25 years',
                  description:
                    'A seasoned professional with 25 years of experience in life insurance.',
                  color: 'green',
                  icon: FaHandshake,
                },
                {
                  name: 'Mr. Ravi Shahani',
                  role: 'Head of Business Excellence',
                  experience: 'Expert',
                  description:
                    'Drives initiatives that enhance business processes, service quality, and organizational efficiency.',
                  color: 'purple',
                  icon: FaLightbulb,
                },
              ].map((member, index) => (
                <TeamLeaderCard key={index} member={member} />
              ))}
            </div>
          </div>

          {/* Operational Leadership */}
          <div className="mt-16">
            <h3 className="mb-8 text-center text-2xl font-bold text-gray-900">
              Operational Leadership
            </h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  name: 'Mr. Shekhar Pradhan',
                  role: 'Claim Manager',
                  description:
                    'Leads the claims team with a focus on transparency, timely resolution, and a customer-first approach.',
                  color: 'indigo',
                },
                {
                  name: 'Mr. Manish Chavan',
                  role: 'Product Manager',
                  description:
                    'Leads the Life and Motor Underwriting teams, focusing on product quality and risk assessment.',
                  color: 'pink',
                },
                {
                  name: 'Ms. Vidhi Shah',
                  role: 'Head Underwriter',
                  description:
                    'Manages underwriting across all lines of business, ensuring accuracy and risk integrity.',
                  color: 'teal',
                },
                {
                  name: 'Mr. Rajendra Muppidwar',
                  role: 'Area Manager',
                  description:
                    'Brings strong expertise in Life Insurance and leads the sales team with focus on quality service.',
                  color: 'orange',
                },
              ].map((member, index) => (
                <TeamMemberCard key={index} member={member} />
              ))}
            </div>
          </div>

          {/* Regional Leadership */}
          <div className="mt-16">
            <h3 className="mb-8 text-center text-2xl font-bold text-gray-900">
              Regional Leadership
            </h3>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {[
                {
                  name: 'Mr. Raunaq Pai',
                  role: 'Zonal Head – West',
                  description:
                    'Oversees sales for the West Zone and drives growth through strategic planning, market insights, and expertise in both General and Life Insurance.',
                  color: 'red',
                  region: 'West Zone',
                },
                {
                  name: 'Mr. Akash Agam',
                  role: 'Area Head – North',
                  description:
                    'Strengthens the sales team in the North region with deep knowledge of General and Life Insurance, ensuring efficient operations and dependable client support.',
                  color: 'cyan',
                  region: 'North Zone',
                },
              ].map((member, index) => (
                <RegionalLeaderCard key={index} member={member} />
              ))}
            </div>
          </div>

          {/* Team Values */}
          <div className="mt-20 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-white md:p-12">
            <div className="text-center">
              <h3 className="text-3xl font-bold">Our Team Values</h3>
              <p className="mx-auto mt-4 max-w-3xl text-lg text-blue-100">
                United by a shared commitment to excellence, integrity, and client success
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-4">
              {[
                { icon: FaShieldAlt, title: 'Expertise', desc: 'Decades of combined experience' },
                { icon: FaHandshake, title: 'Trust', desc: 'Building lasting relationships' },
                { icon: FaLightbulb, title: 'Innovation', desc: 'Forward-thinking solutions' },
                { icon: FaStar, title: 'Excellence', desc: 'Commitment to quality' },
              ].map((value, index) => (
                <div key={index} className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                    <value.icon className="text-2xl text-white" />
                  </div>
                  <h4 className="text-xl font-semibold">{value.title}</h4>
                  <p className="mt-2 text-sm text-blue-100">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Testimonials Section */}
      <section
        id="awards-testimonials"
        className="w-full border-b border-gray-100 bg-gradient-to-br from-blue-50 via-white to-cyan-50"
      >
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="mb-8 text-center sm:mb-10">
            <span className="text-si-primary border-si-primary/20 bg-si-primary/5 mb-3 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[11px] font-bold tracking-wider uppercase sm:px-4 sm:py-2">
              <span className="bg-si-primary h-1.5 w-1.5 rounded-full" />
              Recognition &amp; Trust
            </span>
            <h2 className="text-[clamp(22px,4.2vw,36px)] leading-tight font-semibold text-slate-900">
              <span className="text-gradient-primary">Awards &amp; Testimonials</span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-[clamp(14px,2.6vw,18px)] leading-relaxed text-slate-700/85">
              Celebrated for excellence, trusted by clients. Here&apos;s what the industry and our
              partners say about us.
            </p>
          </header>

          {/* Awards Grid */}
          <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                year: '2022',
                award: 'SME Superstars - Awarded to SIIB by Chola MS',
                img: '/awards/chola-ms.jpeg',
              },
              {
                year: '2024',
                award: 'Diamond Club - Awarded to SIIB by digit Inner Circle',
                img: '/awards/digit.jpeg',
              },
              {
                year: '2025',
                award: 'CEO of the year to Mr. Ajay Kumar Patel - Awared by UBS Forums',
                img: '/awards/ubs-ceo.jpeg',
              },
              {
                year: '2025',
                award: 'Best Claims Partner of the year - Awared to SIIB by UBS Forums',
                img: '/awards/ubs-claims.jpeg',
              },
            ].map((a) => (
              <article
                key={a.award}
                className="group flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-slate-300 hover:shadow-md sm:p-6"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-lg border border-slate-200 bg-white">
                    <Image src={a.img} alt={`${a.year} award`} fill className="object-cover" />
                  </div>
                  <div>
                    <div className="accent-bar-gradient mb-1 h-1.5 w-10 rounded" />
                    <h3 className="text-[clamp(16px,3.2vw,18px)] font-semibold text-slate-900">
                      {a.year}
                    </h3>
                  </div>
                </div>
                <p className="text-[clamp(13px,2.8vw,15px)] text-slate-700/85">{a.award}</p>
              </article>
            ))}
          </div>

          {/* Testimonials */}
          <div>
            <div className="mb-5 text-center sm:mb-7">
              <h3 className="text-[clamp(20px,3.8vw,30px)] leading-tight font-semibold text-slate-900">
                <span className="text-gradient-primary">What Our Clients Say</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
              {[
                {
                  name: 'API Holdings',
                  text: "Share India Insurance Brokers' proactive approach, professionalism, and flawless execution have made managing our insurance portfolio seamless and efficient — a partnership we truly value.",
                  avatar: '/testimonials/api-holding.png',
                },
                {
                  name: 'Sunjewels Pvt. Ltd.',
                  text: 'For three years, Team Share India — especially Mr. Raunaq Pai, Mr. Shekhar Pradhan, and Mr. Sagar Agre — have impressed us with their professionalism, reliability, and proactive service.',
                  avatar: '/testimonials/sun-jewels.png',
                },
                {
                  name: 'Global Ocean Logistics India Ltd',
                  text: "For over four years, Share India's expertise, responsiveness, and attention to detail have ensured smooth, reliable insurance support and a partnership built on trust and excellence.",
                  avatar: '/testimonials/global-ocean.png',
                },
                {
                  name: 'Santu Mondal',
                  text: "My experience with Raunaq Pai and Share India Insurance has been exceptional — Raunaq's professionalism, expertise, and prompt support made the entire insurance process seamless and trustworthy.",
                  avatar: '/testimonials/santu-mondal.png',
                },
              ].map((t) => (
                <figure
                  key={t.name}
                  className="card-accent-red flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-sm ring-1 ring-slate-900/5 transition hover:border-slate-300 hover:shadow-md sm:p-6"
                >
                  <blockquote className="text-[clamp(13px,2.8vw,15px)] leading-relaxed text-slate-700/90">
                    &quot;{t.text}&quot;
                  </blockquote>

                  <figcaption className="mt-5 flex items-center gap-3">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full shadow ring-2 ring-white">
                      <Image src={t.avatar} alt={`${t.name} photo`} fill className="object-cover" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">{t.name}</div>
                    </div>
                  </figcaption>

                  <div className="accent-bar-gradient mt-5 h-1.5 w-10 rounded" />
                </figure>
              ))}
            </div>
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

// Team Leader Card - For Department Heads
const TeamLeaderCard = ({
  member,
}: {
  member: {
    name: string;
    role: string;
    experience: string;
    description: string;
    color: string;
    icon: React.ElementType;
  };
}) => {
  const colorClasses = {
    blue: 'from-blue-500 to-blue-600 bg-blue-50 border-blue-200 text-blue-700',
    green: 'from-green-500 to-green-600 bg-green-50 border-green-200 text-green-700',
    purple: 'from-purple-500 to-purple-600 bg-purple-50 border-purple-200 text-purple-700',
  };

  const bgClass =
    colorClasses[member.color as keyof typeof colorClasses]?.split(' ')[2] || 'bg-gray-50';
  const borderClass =
    colorClasses[member.color as keyof typeof colorClasses]?.split(' ')[3] || 'border-gray-200';
  const textClass =
    colorClasses[member.color as keyof typeof colorClasses]?.split(' ')[4] || 'text-gray-700';
  // const gradientClass =
  //   colorClasses[member.color as keyof typeof colorClasses]?.split(' ').slice(0, 2).join(' ') ||
  //   'from-gray-400 to-gray-600';

  const getTeamImagePath = (name: string) => {
    const slug = name
      .toLowerCase()
      .replace(/^(mr\.|ms\.|mrs\.)\s+/i, '')
      .replace(/\s+/g, '-');
    return `/team/${slug}.png`;
  };

  return (
    <div
      className={`group overflow-hidden rounded-2xl border-2 ${borderClass} ${bgClass} shadow-lg transition-all hover:shadow-2xl`}
    >
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={getTeamImagePath(member.name)}
          alt={`${member.name} - ${member.role}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="400px"
        />
        <div className="absolute top-4 right-4">
          <div className={`rounded-full bg-white/90 p-3 ${textClass} backdrop-blur-sm`}>
            <member.icon className="text-xl" />
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="mb-2 flex items-center justify-between">
          <span className={`text-sm font-semibold ${textClass}`}>{member.experience}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
        <p className={`mt-1 text-sm font-semibold ${textClass}`}>{member.role}</p>
        <p className="mt-3 text-sm leading-relaxed text-gray-600">{member.description}</p>
      </div>
    </div>
  );
};

// Team Member Card - For Operational Leadership
const TeamMemberCard = ({
  member,
}: {
  member: { name: string; role: string; description: string; color: string };
}) => {
  const colorClasses = {
    indigo: 'bg-indigo-50 border-indigo-200 text-indigo-700',
    pink: 'bg-pink-50 border-pink-200 text-pink-700',
    teal: 'bg-teal-50 border-teal-200 text-teal-700',
    orange: 'bg-orange-50 border-orange-200 text-orange-700',
  };

  const bgClass =
    colorClasses[member.color as keyof typeof colorClasses]?.split(' ')[0] || 'bg-gray-50';
  const borderClass =
    colorClasses[member.color as keyof typeof colorClasses]?.split(' ')[1] || 'border-gray-200';
  const textClass =
    colorClasses[member.color as keyof typeof colorClasses]?.split(' ')[2] || 'text-gray-700';

  const getTeamImagePath = (name: string) => {
    const slug = name
      .toLowerCase()
      .replace(/^(mr\.|ms\.|mrs\.)\s+/i, '')
      .replace(/\s+/g, '-');
    return `/team/${slug}.png`;
  };

  return (
    <div
      className={`group overflow-hidden rounded-xl border-2 ${borderClass} ${bgClass} shadow-md transition-all hover:shadow-xl`}
    >
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={getTeamImagePath(member.name)}
          alt={`${member.name} - ${member.role}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="300px"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
        <p className={`mt-1 text-sm font-semibold ${textClass}`}>{member.role}</p>
        <p className="mt-3 text-xs leading-relaxed text-gray-600">{member.description}</p>
      </div>
    </div>
  );
};

// Regional Leader Card - For Zonal/Area Heads
const RegionalLeaderCard = ({
  member,
}: {
  member: { name: string; role: string; description: string; color: string; region: string };
}) => {
  const colorClasses = {
    red: 'from-red-500 to-red-600 bg-red-50 border-red-200 text-red-700',
    cyan: 'from-cyan-500 to-cyan-600 bg-cyan-50 border-cyan-200 text-cyan-700',
  };

  const bgClass =
    colorClasses[member.color as keyof typeof colorClasses]?.split(' ')[2] || 'bg-gray-50';
  const borderClass =
    colorClasses[member.color as keyof typeof colorClasses]?.split(' ')[3] || 'border-gray-200';
  const textClass =
    colorClasses[member.color as keyof typeof colorClasses]?.split(' ')[4] || 'text-gray-700';
  // const gradientClass =
  //   colorClasses[member.color as keyof typeof colorClasses]?.split(' ').slice(0, 2).join(' ') ||
  //   'from-gray-400 to-gray-600';

  const getTeamImagePath = (name: string) => {
    const slug = name
      .toLowerCase()
      .replace(/^(mr\.|ms\.|mrs\.)\s+/i, '')
      .replace(/\s+/g, '-');
    return `/team/${slug}.png`;
  };

  return (
    <div
      className={`group overflow-hidden rounded-2xl border-2 ${borderClass} ${bgClass} shadow-lg transition-all hover:shadow-2xl`}
    >
      <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-3">
        <div className="flex justify-center md:col-span-1">
          <div className="relative aspect-square w-48 overflow-hidden rounded-xl border-4 border-white shadow-lg">
            <Image
              src={getTeamImagePath(member.name)}
              alt={`${member.name} - ${member.role}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="192px"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center md:col-span-2">
          <div
            className={`mb-2 inline-flex w-fit items-center gap-2 rounded-full ${bgClass} border ${borderClass} px-3 py-1 text-xs font-semibold ${textClass}`}
          >
            <FaMapMarkerAlt />
            {member.region}
          </div>
          <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
          <p className={`mt-1 text-base font-semibold ${textClass}`}>{member.role}</p>
          <p className="mt-4 text-sm leading-relaxed text-gray-700">{member.description}</p>
        </div>
      </div>
    </div>
  );
};
