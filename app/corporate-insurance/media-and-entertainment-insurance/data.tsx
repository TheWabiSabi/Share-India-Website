import { IMAGE_BASE_URL } from '@/consts/variables';
import { FaFilm, FaVideo, FaMusic, FaTheaterMasks } from 'react-icons/fa';

export const details = {
  img: `${IMAGE_BASE_URL}/blog/highrise.jpg`,
  hero: {
    title: 'Media & Entertainment Insurance Solutions',
    description:
      'Specialized coverage for film production, events, and entertainment industry—protecting against production risks, equipment damage, and event cancellations.',
  },
  explaination: {
    title: 'Understanding Media & Entertainment Insurance',
    description:
      'Media & Entertainment Insurance provides specialized protection for film productions, events, and entertainment businesses. Coverage includes production equipment, cast insurance, event cancellation, and errors & omissions liability.',
    overview: {
      description:
        'Entertainment industry faces unique risks requiring specialized coverage. Film Production Insurance covers equipment, sets, completion risks, and cast insurance. Event Cancellation Insurance protects against financial losses from cancelled events. E&O insurance covers copyright infringement and defamation claims.',
      bullets: [
        'Production equipment and sets coverage',
        'Cast insurance and completion bonds',
        'Event cancellation and liability protection',
      ],
    },
    projectTypes: {
      types: [
        {
          icon: <FaFilm className="text-blue-500" />,
          title: 'Film Production',
          description: 'Movies, TV shows, and commercial productions',
        },
        {
          icon: <FaMusic className="text-blue-500" />,
          title: 'Live Events',
          description: 'Concerts, festivals, and entertainment events',
        },
        {
          icon: <FaTheaterMasks className="text-blue-500" />,
          title: 'Theater & Performances',
          description: 'Stage shows, plays, and live performances',
        },
      ],
    },
  },
  coverage: {
    desciption: 'Specialized protection designed for media and entertainment industry.',
    coverages: [
      {
        title: 'Film Production Insurance',
        icon: <FaFilm className="text-3xl text-blue-500" />,
        body: 'Comprehensive coverage for film and TV production.',
        bullets: [
          'Production equipment and sets',
          'Cast and crew insurance',
          'Completion bond coverage',
        ],
      },
      {
        title: 'Equipment & Props Insurance',
        icon: <FaVideo className="text-3xl text-blue-500" />,
        body: 'Protection for cameras, lighting, and production equipment.',
        bullets: [
          'Cameras and lenses coverage',
          'Lighting and sound equipment',
          'Props and costumes protection',
        ],
      },
      {
        title: 'Event Cancellation Insurance',
        icon: <FaMusic className="text-3xl text-blue-500" />,
        body: 'Coverage for cancelled or postponed events.',
        bullets: ['Weather-related cancellations', 'Artist non-appearance', 'Venue unavailability'],
      },
      {
        title: 'Errors & Omissions Liability',
        icon: <FaTheaterMasks className="text-3xl text-blue-500" />,
        body: 'Protection against copyright and content-related claims.',
        bullets: [
          'Copyright infringement claims',
          'Defamation and privacy violations',
          'Content liability coverage',
        ],
      },
    ],
  },
  claim_story: {
    description:
      'Stay updated with how SIIB helped media clients recover from production delays and equipment losses.',
    topic: 'media_entertainment_insurance',
  },
  relevant: {
    topic: 'media_entertainment_insurance',
  },
  knowledge: {
    industryName: 'Media & Entertainment Insurance',
  },
};
