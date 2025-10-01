import React from 'react';
import Image from 'next/image';
import {
  FaUsers,
  FaRocket,
  FaHeart,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaClock,
  FaRupeeSign,
  FaSearch,
  FaChevronRight,
  FaStar,
  FaAward,
  FaHandshake,
  FaLightbulb,
} from 'react-icons/fa';

const CareersPage = () => {
  // Sample job openings data
  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Insurance Underwriter',
      department: 'Underwriting',
      location: 'Mumbai, Maharashtra',
      type: 'Full-time',
      experience: '5-8 years',
      salary: '₹12-18 LPA',
      description:
        'Lead underwriting decisions for commercial insurance products and mentor junior underwriters.',
      skills: ['Commercial Insurance', 'Risk Assessment', 'Financial Analysis', 'Team Leadership'],
      posted: '2 days ago',
    },
    {
      id: 2,
      title: 'Claims Manager - Infrastructure',
      department: 'Claims',
      location: 'Delhi NCR',
      type: 'Full-time',
      experience: '6-10 years',
      salary: '₹15-22 LPA',
      description:
        'Manage complex infrastructure insurance claims and coordinate with engineering teams.',
      skills: [
        'Claims Management',
        'Infrastructure Insurance',
        'Engineering Knowledge',
        'Negotiation',
      ],
      posted: '1 week ago',
    },
    {
      id: 3,
      title: 'Business Development Executive',
      department: 'Sales',
      location: 'Bangalore, Karnataka',
      type: 'Full-time',
      experience: '2-4 years',
      salary: '₹6-10 LPA',
      description:
        'Drive new business acquisition and maintain relationships with corporate clients.',
      skills: ['Sales', 'Client Relationship', 'Insurance Products', 'Communication'],
      posted: '3 days ago',
    },
    {
      id: 4,
      title: 'Risk Assessment Analyst',
      department: 'Risk Management',
      location: 'Pune, Maharashtra',
      type: 'Full-time',
      experience: '3-5 years',
      salary: '₹8-12 LPA',
      description:
        'Analyze and assess risks for various industry sectors and develop risk mitigation strategies.',
      skills: ['Risk Analysis', 'Data Analytics', 'Industry Knowledge', 'Report Writing'],
      posted: '5 days ago',
    },
    {
      id: 5,
      title: 'Digital Marketing Specialist',
      department: 'Marketing',
      location: 'Mumbai, Maharashtra',
      type: 'Full-time',
      experience: '2-4 years',
      salary: '₹5-8 LPA',
      description:
        'Develop and execute digital marketing campaigns to enhance brand presence and lead generation.',
      skills: ['Digital Marketing', 'SEO/SEM', 'Content Marketing', 'Analytics'],
      posted: '1 week ago',
    },
    {
      id: 6,
      title: 'Actuarial Analyst',
      department: 'Actuarial',
      location: 'Chennai, Tamil Nadu',
      type: 'Full-time',
      experience: '1-3 years',
      salary: '₹6-9 LPA',
      description:
        'Support pricing and product development through statistical analysis and modeling.',
      skills: ['Statistics', 'Actuarial Science', 'Excel/R/Python', 'Insurance Mathematics'],
      posted: '4 days ago',
    },
  ];

  const departments = [...new Set(jobOpenings.map((job) => job.department))];
  const locations = [...new Set(jobOpenings.map((job) => job.location))];

  return (
    <div className="from-si-primary-50 to-si-primary-200 min-h-screen bg-gradient-to-b pt-[8vh]">
      {/* Hero Section */}
      {/* <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h1 className="text-4xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl">
                Build Your Career with
                <span className="text-blue-600"> SIIB</span>
              </h1>
              <p className="mt-6 text-lg text-gray-700 md:text-xl">
                Join India&#39;s leading insurance brokerage and be part of a team that&#39;s
                transforming how businesses protect their future. Discover opportunities to grow,
                innovate, and make a real impact.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <button className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-700">
                  View Open Positions
                </button>
                <button className="rounded-lg border border-blue-600 px-8 py-3 font-semibold text-blue-600 transition-colors hover:bg-blue-50">
                  Learn About Our Culture
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-96 w-full overflow-hidden rounded-2xl">
                <Image
                  src="/globe.svg"
                  alt="Career opportunities at SIIB"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Why Join SIIB */}
      {/* <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Why Choose SIIB?</h2>
            <p className="mt-4 text-lg text-gray-600">
              Discover what makes SIIB a great place to build your insurance career
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <FaRocket className="text-2xl text-blue-600" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Growth Opportunities</h3>
              <p className="mt-2 text-gray-600">
                Fast-track your career with mentorship programs and leadership development
                initiatives.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <FaUsers className="text-2xl text-green-600" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Collaborative Culture</h3>
              <p className="mt-2 text-gray-600">
                Work with passionate professionals in a supportive and inclusive environment.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                <FaLightbulb className="text-2xl text-purple-600" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Innovation Focus</h3>
              <p className="mt-2 text-gray-600">
                Be part of digital transformation and innovative insurance solutions.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
                <FaHeart className="text-2xl text-red-600" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Work-Life Balance</h3>
              <p className="mt-2 text-gray-600">
                Flexible working arrangements and comprehensive benefits for your well-being.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Benefits & Perks */}
      {/* <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Benefits & Perks</h2>
            <p className="mt-4 text-lg text-gray-600">
              We invest in our people with comprehensive benefits and growth opportunities
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <FaGraduationCap className="text-3xl text-blue-600" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Learning & Development</h3>
              <p className="mt-2 text-gray-600">
                Professional certifications, training programs, and conference attendance support.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-md">
              <FaAward className="text-3xl text-green-600" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Performance Rewards</h3>
              <p className="mt-2 text-gray-600">
                Competitive salaries, performance bonuses, and recognition programs.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-md">
              <FaHandshake className="text-3xl text-purple-600" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Employee Benefits</h3>
              <p className="mt-2 text-gray-600">
                Health insurance, retirement plans, and comprehensive employee assistance programs.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-md">
              <FaHeart className="text-3xl text-red-600" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Wellness Programs</h3>
              <p className="mt-2 text-gray-600">
                Mental health support, fitness programs, and work-life balance initiatives.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-md">
              <FaStar className="text-3xl text-yellow-600" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Flexible Working</h3>
              <p className="mt-2 text-gray-600">
                Hybrid work options, flexible hours, and remote work opportunities.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-md">
              <FaUsers className="text-3xl text-indigo-600" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Team Events</h3>
              <p className="mt-2 text-gray-600">
                Regular team building activities, company outings, and celebration events.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Job Openings */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Current Openings</h2>
            <p className="mt-4 text-lg text-gray-600">
              Find your next opportunity and join our growing team
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-8 rounded-lg bg-gray-50 p-6">
            <div className="flex flex-col gap-4 lg:flex-row">
              <div className="flex-1">
                <div className="relative">
                  <FaSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search job titles, keywords..."
                    className="w-full rounded-lg border border-gray-300 py-3 pr-4 pl-10 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                  />
                </div>
              </div>
              <div className="flex gap-3">
                <select className="rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none">
                  <option value="">All Departments</option>
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>
                      {dept}
                    </option>
                  ))}
                </select>
                <select className="rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none">
                  <option value="">All Locations</option>
                  {locations.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Job Listings */}
          <div className="space-y-6">
            {jobOpenings.map((job) => (
              <div
                key={job.id}
                className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="mb-3 flex flex-wrap items-center gap-3">
                      <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                      <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                        {job.department}
                      </span>
                      <span className="text-sm text-gray-500">{job.posted}</span>
                    </div>

                    <p className="mb-4 text-gray-600">{job.description}</p>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <FaMapMarkerAlt />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaClock />
                        {job.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaGraduationCap />
                        {job.experience}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaRupeeSign />
                        {job.salary}
                      </span>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {job.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button className="rounded-lg border border-blue-600 px-6 py-2 font-semibold text-blue-600 transition-colors hover:bg-blue-50">
                      View Details
                    </button>
                    <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-2 font-semibold text-white transition-colors hover:bg-blue-700">
                      Apply Now
                      <FaChevronRight className="text-sm" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="mt-12 text-center">
            <button className="rounded-lg bg-gray-100 px-8 py-3 font-semibold text-gray-700 transition-colors hover:bg-gray-200">
              Load More Positions
            </button>
          </div>
        </div>
      </section>

      {/* Application Process */}
      {/* <section className="bg-blue-600 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Our Hiring Process</h2>
            <p className="mt-4 text-lg text-blue-100">
              A transparent and efficient process designed to find the right fit
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl font-bold text-blue-600">
                1
              </div>
              <h3 className="mt-4 text-lg font-semibold">Application</h3>
              <p className="mt-2 text-blue-100">Submit your application and resume online</p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl font-bold text-blue-600">
                2
              </div>
              <h3 className="mt-4 text-lg font-semibold">Screening</h3>
              <p className="mt-2 text-blue-100">Initial review and phone/video screening</p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl font-bold text-blue-600">
                3
              </div>
              <h3 className="mt-4 text-lg font-semibold">Interview</h3>
              <p className="mt-2 text-blue-100">In-depth interviews with hiring managers</p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl font-bold text-blue-600">
                4
              </div>
              <h3 className="mt-4 text-lg font-semibold">Offer</h3>
              <p className="mt-2 text-blue-100">Reference checks and job offer</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      {/* <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Ready to Start Your Journey?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Don&#39;t see the perfect role? Send us your resume and we&#39;ll keep you in mind for
            future opportunities.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <button className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-700">
              Submit General Application
            </button>
            <button className="rounded-lg border border-gray-300 px-8 py-3 font-semibold text-gray-700 transition-colors hover:bg-gray-50">
              Contact HR Team
            </button>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default CareersPage;
