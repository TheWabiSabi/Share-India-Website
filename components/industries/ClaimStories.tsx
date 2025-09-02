import React from 'react';
import { FaCheckCircle, FaClock, FaDollarSign, FaExclamationTriangle } from 'react-icons/fa';

interface ClaimStory {
  id: string;
  title: string;
  description: string;
  claimAmount: string;
  settlementTime: string;
  riskType: string;
  outcome: 'settled' | 'ongoing' | 'denied';
  lessons: string[];
}

interface ClaimStoriesProps {
  stories: ClaimStory[];
  industryName: string;
}

const ClaimStories: React.FC<ClaimStoriesProps> = ({ stories, industryName }) => {
  const getOutcomeIcon = (outcome: string) => {
    switch (outcome) {
      case 'settled':
        return <FaCheckCircle className="text-green-500" />;
      case 'ongoing':
        return <FaClock className="text-yellow-500" />;
      case 'denied':
        return <FaExclamationTriangle className="text-red-500" />;
      default:
        return <FaClock className="text-gray-500" />;
    }
  };

  const getOutcomeColor = (outcome: string) => {
    switch (outcome) {
      case 'settled':
        return 'bg-green-50 border-green-200';
      case 'ongoing':
        return 'bg-yellow-50 border-yellow-200';
      case 'denied':
        return 'bg-red-50 border-red-200';
      default:
        return 'bg-gray-50 border-gray-200';
    }
  };

  return (
    <section className="w-full border-b border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold md:text-3xl">Real Claim Stories - {industryName}</h2>
        <p className="mt-3 text-gray-700">
          Learn from actual claims in the {industryName.toLowerCase()} sector and understand how
          proper coverage makes a difference.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {stories.map((story) => (
            <div
              key={story.id}
              className={`rounded-xl border p-6 ${getOutcomeColor(story.outcome)}`}
            >
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold text-gray-900">{story.title}</h3>
                <div className="flex items-center gap-2">
                  {getOutcomeIcon(story.outcome)}
                  <span className="text-sm font-medium capitalize">{story.outcome}</span>
                </div>
              </div>

              <p className="mt-3 text-sm text-gray-700">{story.description}</p>

              <div className="mt-4 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <FaDollarSign className="mx-auto text-lg text-blue-500" />
                  <div className="mt-1 text-xs text-gray-500">Claim Amount</div>
                  <div className="font-semibold">{story.claimAmount}</div>
                </div>
                <div className="text-center">
                  <FaClock className="mx-auto text-lg text-blue-500" />
                  <div className="mt-1 text-xs text-gray-500">Settlement Time</div>
                  <div className="font-semibold">{story.settlementTime}</div>
                </div>
                <div className="text-center">
                  <FaExclamationTriangle className="mx-auto text-lg text-blue-500" />
                  <div className="mt-1 text-xs text-gray-500">Risk Type</div>
                  <div className="text-xs font-semibold">{story.riskType}</div>
                </div>
              </div>

              {story.lessons.length > 0 && (
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-gray-900">Key Lessons:</h4>
                  <ul className="mt-2 space-y-1">
                    {story.lessons.map((lesson, index) => (
                      <li key={index} className="flex items-start text-xs text-gray-700">
                        <span className="mt-1 mr-2 h-1 w-1 rounded-full bg-blue-500"></span>
                        {lesson}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClaimStories;
