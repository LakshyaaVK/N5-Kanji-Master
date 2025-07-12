import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Brain, BarChart3, Star, TrendingUp, Clock, Target } from 'lucide-react';
import { useProgress } from '../contexts/ProgressContext';
import { kanjiDatabase } from '../data/kanjiData';

const HomePage: React.FC = () => {
  const { getLearnedCount, getTotalStudyTime, getStreakCount, getDueForReview } = useProgress();
  
  const learnedCount = getLearnedCount();
  const totalKanji = kanjiDatabase.length;
  const progressPercentage = Math.round((learnedCount / totalKanji) * 100);
  const dueForReview = getDueForReview().length;

  const quickStats = [
    {
      icon: Star,
      label: 'Kanji Mastered',
      value: `${learnedCount}/${totalKanji}`,
      color: 'text-yellow-600 dark:text-yellow-400',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20'
    },
    {
      icon: TrendingUp,
      label: 'Progress',
      value: `${progressPercentage}%`,
      color: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-green-50 dark:bg-green-900/20'
    },
    {
      icon: Clock,
      label: 'Study Sessions',
      value: getTotalStudyTime().toString(),
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      icon: Target,
      label: 'Current Streak',
      value: getStreakCount().toString(),
      color: 'text-purple-600 dark:text-purple-400',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20'
    }
  ];

  const actionCards = [
    {
      title: 'Browse Kanji',
      description: 'Explore all 103 JLPT N5 kanji with detailed information',
      icon: BookOpen,
      link: '/kanji',
      color: 'bg-indigo-600 hover:bg-indigo-700'
    },
    {
      title: 'Study Session',
      description: 'Practice with flashcards and interactive exercises',
      icon: Brain,
      link: '/study',
      color: 'bg-teal-600 hover:bg-teal-700'
    },
    {
      title: 'View Progress',
      description: 'Track your learning journey and achievements',
      icon: BarChart3,
      link: '/progress',
      color: 'bg-orange-600 hover:bg-orange-700'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          Master JLPT N5 
          <span className="block text-indigo-600 dark:text-indigo-400">Kanji</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
          Learn all 103 essential kanji for JLPT N5 with interactive flashcards, 
          spaced repetition, and comprehensive study tools designed for effective learning.
        </p>
        
        {/* Progress bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
            <span>Overall Progress</span>
            <span>{progressPercentage}%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-indigo-500 to-purple-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        {dueForReview > 0 && (
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-orange-100 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 rounded-full">
            <Clock className="w-4 h-4" />
            <span className="font-medium">{dueForReview} kanji due for review</span>
          </div>
        )}
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {quickStats.map(({ icon: Icon, label, value, color, bgColor }) => (
          <div key={label} className={`${bgColor} rounded-xl p-6 text-center`}>
            <Icon className={`w-8 h-8 ${color} mx-auto mb-2`} />
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              {value}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {label}
            </div>
          </div>
        ))}
      </div>

      {/* Action Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {actionCards.map(({ title, description, icon: Icon, link, color }) => (
          <Link
            key={title}
            to={link}
            className="block group"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
              <div className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {description}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Recent achievements or tips */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl text-white p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Start Learning?</h2>
        <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
          Begin your journey to Japanese literacy with our scientifically-backed spaced repetition system. 
          Master kanji efficiently and remember them for life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/study"
            className="px-8 py-3 bg-white text-indigo-600 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            Start Studying
          </Link>
          <Link
            to="/kanji"
            className="px-8 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-indigo-600 transition-colors"
          >
            Browse Kanji
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;