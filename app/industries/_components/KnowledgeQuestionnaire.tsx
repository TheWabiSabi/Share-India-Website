'use client';
import React, { useState } from 'react';
import {
  FaCheckCircle,
  FaTimesCircle,
  FaQuestionCircle,
  FaLightbulb,
  FaChartLine,
} from 'react-icons/fa';

interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

interface KnowledgeQuestionnaireProps {
  questions: Question[];
  industryName: string;
}

const KnowledgeQuestionnaire: React.FC<KnowledgeQuestionnaireProps> = ({
  questions,
  industryName,
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowExplanation(false);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setShowExplanation(false);
  };

  const calculateScore = () => {
    return selectedAnswers.reduce((score, answer, index) => {
      return score + (answer === questions[index].correctAnswer ? 1 : 0);
    }, 0);
  };

  const getScoreMessage = (score: number, total: number) => {
    const percentage = (score / total) * 100;
    if (percentage >= 80)
      return {
        message: 'Excellent! You have strong knowledge of industry risks.',
        color: 'text-green-600',
      };
    if (percentage >= 60)
      return {
        message: 'Good understanding! Consider reviewing some areas.',
        color: 'text-blue-600',
      };
    if (percentage >= 40)
      return {
        message: 'Fair knowledge. We recommend consulting with our experts.',
        color: 'text-yellow-600',
      };
    return {
      message: 'Consider professional risk assessment for your business.',
      color: 'text-red-600',
    };
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return 'bg-green-100 text-green-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'hard':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (showResults) {
    const score = calculateScore();
    const scoreMessage = getScoreMessage(score, questions.length);

    return (
      <section className="from-si-primary-200 w-full border-b border-gray-100 bg-gradient-to-b to-white">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaChartLine className="mx-auto text-4xl text-blue-500" />
            <h2 className="mt-4 text-2xl font-bold">Quiz Results</h2>
            <div className="card-vibrant hover-glow-blue mt-8 rounded-2xl border border-white/50 p-8 shadow-lg ring-1 ring-black/5 md:p-12">
              <div className="text-si-primary text-5xl font-black tracking-tighter">
                {score}/{questions.length}
              </div>
              <div className="text-si-ink/80 mt-2 text-xl font-bold">
                {Math.round((score / questions.length) * 100)}% Correct
              </div>
              <div className={`mt-6 text-lg font-semibold ${scoreMessage.color}`}>
                {scoreMessage.message}
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <button onClick={resetQuiz} className="btn-ghost rounded-xl px-8 py-4 font-bold">
                  Retake Quiz
                </button>
                <a
                  href="/contact"
                  className="btn-primary hover-glow-blue shadow-vibrant-blue rounded-xl px-8 py-4 font-bold"
                >
                  Book Risk Assessment
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const question = questions[currentQuestion];
  const isAnswered = selectedAnswers[currentQuestion] !== undefined;
  const selectedAnswer = selectedAnswers[currentQuestion];

  return (
    <section className="from-si-primary-200 w-full border-b border-gray-100 bg-gradient-to-b to-white">
      <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="text-center">
          <FaQuestionCircle className="mx-auto text-4xl text-blue-500" />
          <h2 className="mt-4 text-2xl font-bold md:text-3xl">
            Test Your {industryName} Risk Knowledge
          </h2>
          <p className="mt-3 text-gray-700">
            Assess your understanding of key risks and insurance considerations in your industry.
          </p>
        </div>

        <div className="card-vibrant hover-glow-blue mt-12 rounded-2xl border border-white/50 p-6 shadow-xl ring-1 ring-black/5 sm:p-10">
          <div className="border-si-primary/10 mb-8 flex items-center justify-between border-b pb-6">
            <div className="flex items-center gap-3">
              <span className="text-si-ink/40 text-sm font-bold tracking-wide uppercase">
                Question {currentQuestion + 1} <span className="mx-1">/</span> {questions.length}
              </span>
              <span
                className={`rounded-full px-3 py-1 text-[10px] font-bold tracking-wider uppercase ${getDifficultyColor(question.difficulty)}`}
              >
                {question.difficulty}
              </span>
            </div>
            <div className="bg-si-primary/10 h-2 w-32 overflow-hidden rounded-full">
              <div
                className="bg-si-primary h-2 rounded-full shadow-[0_0_8px_rgba(45,169,255,0.5)] transition-all duration-500 ease-out"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          <h3 className="text-si-ink text-xl leading-tight font-bold md:text-2xl">
            {question.question}
          </h3>

          <div className="mt-8 space-y-3">
            {question.options.map((option, index) => {
              let buttonClass =
                'w-full rounded-xl border p-5 text-left transition-all duration-300 font-medium relative overflow-hidden group/opt';

              if (isAnswered) {
                if (index === question.correctAnswer) {
                  buttonClass += ' border-green-500/50 bg-green-50/50 text-green-900 shadow-sm';
                } else if (index === selectedAnswer && index !== question.correctAnswer) {
                  buttonClass += ' border-si-red-500/50 bg-si-red-50/50 text-si-red-900 shadow-sm';
                } else {
                  buttonClass += ' border-transparent bg-si-muted/30 text-si-ink/40';
                }
              } else {
                buttonClass +=
                  ' border-si-primary/10 bg-white hover:border-si-primary/40 hover:bg-si-primary/5 hover:shadow-md hover:-translate-y-0.5';
              }

              return (
                <button
                  key={index}
                  onClick={() => !isAnswered && handleAnswerSelect(index)}
                  disabled={isAnswered}
                  className={buttonClass}
                >
                  <div className="flex items-center justify-between">
                    <span className="relative z-10">{option}</span>
                    {isAnswered && (
                      <span className="relative z-10">
                        {index === question.correctAnswer ? (
                          <FaCheckCircle className="text-xl text-green-600" />
                        ) : index === selectedAnswer ? (
                          <FaTimesCircle className="text-si-red-600 text-xl" />
                        ) : null}
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {showExplanation && (
            <div className="bg-si-primary/5 border-si-primary/10 animate-fadeInUp mt-8 rounded-xl border p-6">
              <div className="flex items-start gap-4">
                <div className="bg-si-primary/20 mt-0.5 rounded-lg p-2">
                  <FaLightbulb className="text-si-primary" />
                </div>
                <div>
                  <h4 className="text-si-ink text-sm font-bold tracking-wide uppercase">
                    Expert Insight:
                  </h4>
                  <p className="text-si-ink/80 mt-2 text-[15px] leading-relaxed">
                    {question.explanation}
                  </p>
                </div>
              </div>
            </div>
          )}

          {isAnswered && (
            <div className="mt-10 text-center">
              <button
                onClick={nextQuestion}
                className="btn-primary hover-glow-blue shadow-vibrant-blue rounded-xl px-10 py-4 font-bold transition-all active:scale-95"
              >
                {currentQuestion < questions.length - 1 ? 'Next Challenge' : 'Discover Results'}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default KnowledgeQuestionnaire;
