import React, { useState } from 'react';
import { Star, TrendingUp, Clock, Target, Calendar, BarChart3, Award, Zap } from 'lucide-react';
import { useProgress } from '../contexts/ProgressContext';
import { kanjiDatabase } from '../data/kanjiData';

const ProgressPage: React.FC = () => {
  const { 
    progress, 
    getLearnedCount, 
    getTotalStudyTime, 
    getStreakCount, 
    getDueForReview,
    resetProgress 
  } = useProgress();

  const [showResetConfirm, setShowResetConfirm] = useState(false);

  const totalKanji = kanjiDatabase.length;
  const learnedCount = getLearnedCount();
  const progressPercentage = Math.round((learnedCount / totalKanji) * 100);
  const dueForReview = getDueForReview().length;

  // Calculate additional stats
  const totalAttempts = Array.from(progress.values()).reduce((sum, p) => sum + p.totalAttempts, 0);
  const totalCorrect = Array.from(progress.values()).reduce((sum, p) => sum + p.correctAnswers, 0);
  const overallAccuracy = totalAttempts > 0 ? Math.round((totalCorrect / totalAttempts) * 100) : 0;

  // Get kanji by difficulty level
  const difficultyLevels = {
    easy: Array.from(progress.values()).filter(p => p.difficulty <= 2).length,
    medium: Array.from(progress.values()).filter(p => p.difficulty > 2 && p.difficulty <= 3.5).length,
    hard: Array.from(progress.values()).filter(p => p.difficulty > 3.5).length
  };

  // Achievement system
  const achievements = [
    {
      id: 'first_kanji',
      title: 'First Steps',
      description: 'Learn your first kanji',
      icon: Star,
      unlocked: learnedCount >= 1,
      color: 'text-yellow-500 bg-yellow-50 dark:bg-yellow-900/20'
    },
    {
      id: 'ten_kanji',
      title: 'Getting Started',
      description: 'Learn 10 kanji',
      icon: Target,
      unlocked: learnedCount >= 10,
      color: 'text-blue-500 bg-blue-50 dark:bg-blue-900/20'
    },
    {
      id: 'quarter_progress',
      title: 'Quarter Master',
      description: 'Learn 25% of N5 kanji',
      icon: TrendingUp,
      unlocked: progressPercentage >= 25,
      color: 'text-green-500 bg-green-50 dark:bg-green-900/20'
    },
    {
      id: 'half_progress',
      title: 'Halfway There',
      description: 'Learn 50% of N5 kanji',
      icon: Award,
      unlocked: progressPercentage >= 50,
      color: 'text-purple-500 bg-purple-50 dark:bg-purple-900/20'
    },
    {
      id: 'accuracy_master',
      title: 'Accuracy Master',
      description: 'Achieve 80% overall accuracy',
      icon: Zap,
      unlocked: overallAccuracy >= 80,
      color: 'text-orange-500 bg-orange-50 dark:bg-orange-900/20'
    },
    {
      id: 'streak_warrior',
      title: 'Streak Warrior',
      description: 'Achieve a 10-day streak',
      icon: Calendar,
      unlocked: getStreakCount() >= 10,
      color: 'text-red-500 bg-red-50 dark:bg-red-900/20'
    }
  ];

  const unlockedAchievements = achievements.filter(a => a.unlocked);

  const handleResetProgress = () => {
    resetProgress();
    setShowResetConfirm(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Your Progress
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Track your kanji learning journey and achievements
        </p>
      </div>

      {/* Overall Progress */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Main Progress Circle */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center">
            <div className="relative w-32 h-32 mx-auto mb-4">
              <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="8"
                  className="text-gray-200 dark:text-gray-700"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="8"
                  strokeDasharray={`${progressPercentage * 2.51} 251`}
                  className="text-indigo-500 transition-all duration-1000"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 dark:text-white">
                    {progressPercentage}%
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Complete
                  </div>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              JLPT N5 Progress
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {learnedCount} of {totalKanji} kanji mastered
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
              <Star className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {learnedCount}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Mastered
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
              <Clock className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {getTotalStudyTime()}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Sessions
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
              <Target className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {overallAccuracy}%
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Accuracy
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
              <TrendingUp className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {getStreakCount()}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Best Streak
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
              <Calendar className="w-8 h-8 text-orange-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {dueForReview}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Due Review
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
              <BarChart3 className="w-8 h-8 text-red-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {totalAttempts}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Total Attempts
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
              <Award className="w-8 h-8 text-indigo-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {unlockedAchievements.length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Achievements
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
              <Zap className="w-8 h-8 text-teal-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {difficultyLevels.easy}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Easy Kanji
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Difficulty Distribution */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
          Difficulty Distribution
        </h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                {difficultyLevels.easy}
              </span>
            </div>
            <h4 className="font-medium text-gray-900 dark:text-white">Easy</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Difficulty 1-2</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
                {difficultyLevels.medium}
              </span>
            </div>
            <h4 className="font-medium text-gray-900 dark:text-white">Medium</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Difficulty 2-3.5</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl font-bold text-red-600 dark:text-red-400">
                {difficultyLevels.hard}
              </span>
            </div>
            <h4 className="font-medium text-gray-900 dark:text-white">Hard</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Difficulty 3.5+</p>
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
          Achievements
        </h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className={`p-4 rounded-lg border transition-all duration-300 ${
                achievement.unlocked
                  ? `${achievement.color} border-current`
                  : 'bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 opacity-50'
              }`}
            >
              <div className="flex items-center space-x-3">
                <achievement.icon className={`w-8 h-8 ${
                  achievement.unlocked 
                    ? achievement.color.split(' ')[0] 
                    : 'text-gray-400'
                }`} />
                <div>
                  <h4 className={`font-medium ${
                    achievement.unlocked 
                      ? 'text-gray-900 dark:text-white' 
                      : 'text-gray-500 dark:text-gray-400'
                  }`}>
                    {achievement.title}
                  </h4>
                  <p className={`text-sm ${
                    achievement.unlocked 
                      ? 'text-gray-600 dark:text-gray-300' 
                      : 'text-gray-400 dark:text-gray-500'
                  }`}>
                    {achievement.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reset Progress */}
      <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6">
        <h3 className="text-lg font-bold text-red-800 dark:text-red-200 mb-2">
          Reset Progress
        </h3>
        <p className="text-red-700 dark:text-red-300 mb-4">
          This will permanently delete all your learning progress. This action cannot be undone.
        </p>
        
        {!showResetConfirm ? (
          <button
            onClick={() => setShowResetConfirm(true)}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Reset All Progress
          </button>
        ) : (
          <div className="flex items-center space-x-3">
            <p className="text-red-700 dark:text-red-300 font-medium">
              Are you sure?
            </p>
            <button
              onClick={handleResetProgress}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Yes, Reset
            </button>
            <button
              onClick={() => setShowResetConfirm(false)}
              className="px-4 py-2 bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-500 transition-colors"
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgressPage;