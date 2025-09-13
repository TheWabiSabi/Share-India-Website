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
      <section className="w-full border-b border-gray-100 bg-blue-50">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaChartLine className="mx-auto text-4xl text-blue-500" />
            <h2 className="mt-4 text-2xl font-bold">Quiz Results</h2>
            <div className="mt-6 rounded-xl bg-white p-8 shadow-sm">
              <div className="text-4xl font-bold text-blue-600">
                {score}/{questions.length}
              </div>
              <div className="mt-2 text-lg text-gray-600">
                {Math.round((score / questions.length) * 100)}% Correct
              </div>
              <div className={`mt-4 text-lg font-medium ${scoreMessage.color}`}>
                {scoreMessage.message}
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <button
                  onClick={resetQuiz}
                  className="rounded-lg border border-blue-200 px-6 py-3 font-semibold text-blue-700 hover:bg-blue-50"
                >
                  Retake Quiz
                </button>
                <button className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
                  Get Professional Assessment
                </button>
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
    <section className="w-full border-b border-gray-100 bg-blue-50">
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

        <div className="mt-8 rounded-xl bg-white p-8 shadow-sm">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-500">
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <span
                className={`rounded-full px-2 py-1 text-xs font-medium ${getDifficultyColor(question.difficulty)}`}
              >
                {question.difficulty}
              </span>
            </div>
            <div className="h-2 w-32 rounded-full bg-gray-200">
              <div
                className="h-2 rounded-full bg-blue-500 transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          <h3 className="text-lg font-semibold text-gray-900">{question.question}</h3>

          <div className="mt-6 space-y-3">
            {question.options.map((option, index) => {
              let buttonClass =
                'w-full rounded-lg border p-4 text-left transition-colors hover:bg-gray-50';

              if (isAnswered) {
                if (index === question.correctAnswer) {
                  buttonClass += ' border-green-500 bg-green-50 text-green-800';
                } else if (index === selectedAnswer && index !== question.correctAnswer) {
                  buttonClass += ' border-red-500 bg-red-50 text-red-800';
                } else {
                  buttonClass += ' border-gray-200 bg-gray-50 text-gray-600';
                }
              } else {
                buttonClass += ' border-gray-200 hover:border-blue-300';
              }

              return (
                <button
                  key={index}
                  onClick={() => !isAnswered && handleAnswerSelect(index)}
                  disabled={isAnswered}
                  className={buttonClass}
                >
                  <div className="flex items-center justify-between">
                    <span>{option}</span>
                    {isAnswered && (
                      <span>
                        {index === question.correctAnswer ? (
                          <FaCheckCircle className="text-green-500" />
                        ) : index === selectedAnswer ? (
                          <FaTimesCircle className="text-red-500" />
                        ) : null}
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {showExplanation && (
            <div className="mt-6 rounded-lg bg-blue-50 p-4">
              <div className="flex items-start gap-3">
                <FaLightbulb className="mt-1 text-blue-500" />
                <div>
                  <h4 className="font-semibold text-blue-900">Explanation:</h4>
                  <p className="mt-1 text-sm text-blue-800">{question.explanation}</p>
                </div>
              </div>
            </div>
          )}

          {isAnswered && (
            <div className="mt-6 text-center">
              <button
                onClick={nextQuestion}
                className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white hover:bg-blue-700"
              >
                {currentQuestion < questions.length - 1 ? 'Next Question' : 'View Results'}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default KnowledgeQuestionnaire;
