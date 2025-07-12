import React, { useState } from 'react';
import { ArrowLeft, Volume2, BookOpen, Users, Lightbulb, Target, Star } from 'lucide-react';
import { KanjiData } from '../../data/kanjiData';
import { useProgress } from '../../contexts/ProgressContext';
import { playKanjiPronunciation, playSentence } from '../../utils/audioUtils';

interface KanjiDetailProps {
  kanji: KanjiData;
  onBack: () => void;
}

const KanjiDetail: React.FC<KanjiDetailProps> = ({ kanji, onBack }) => {
  const { getKanjiProgress, markAsLearned, updateProgress } = useProgress();
  const [activeTab, setActiveTab] = useState<'overview' | 'compounds' | 'sentences' | 'practice'>('overview');
  
  const progress = getKanjiProgress(kanji.id);
  const accuracyRate = progress.totalAttempts > 0 
    ? Math.round((progress.correctAnswers / progress.totalAttempts) * 100) 
    : 0;


  const tabs = [
    { id: 'overview', label: 'Overview', icon: BookOpen },
    { id: 'compounds', label: 'Words', icon: Users },
    { id: 'sentences', label: 'Sentences', icon: Target },
    { id: 'practice', label: 'Practice', icon: Lightbulb }
  ];

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Main kanji display */}
      <div className="text-center bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl p-8">
        <div className="text-8xl font-bold text-gray-900 dark:text-white mb-4 hover:scale-110 transition-transform cursor-pointer">
          {kanji.character}
        </div>
        <button
          onClick={() => playPronunciation(kanji.pronunciation)}
          onClick={() => playKanjiPronunciation(kanji.character, kanji.pronunciation)}
          className="flex items-center justify-center space-x-2 mx-auto px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          <Volume2 className="w-4 h-4" />
          <span>Listen</span>
        </button>
      </div>

      {/* Meanings */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Meanings</h3>
        <div className="flex flex-wrap gap-2">
          {kanji.meanings.map((meaning, index) => (
            <span
              key={index}
              className="px-3 py-2 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-lg font-medium"
            >
              {meaning}
            </span>
          ))}
        </div>
      </div>

      {/* Readings */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            On'yomi (音読み)
          </h3>
          <div className="space-y-2">
            {kanji.onyomi.map((reading, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800"
              >
                <span className="font-medium text-red-700 dark:text-red-300">
                  {reading}
                </span>
                <button
                  onClick={() => playPronunciation(reading)}
                  onClick={() => playKanjiPronunciation(reading)}
                  className="p-1 hover:bg-red-100 dark:hover:bg-red-800 rounded transition-colors"
                >
                  <Volume2 className="w-4 h-4 text-red-600 dark:text-red-400" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            Kun'yomi (訓読み)
          </h3>
          <div className="space-y-2">
            {kanji.kunyomi.map((reading, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800"
              >
                <span className="font-medium text-blue-700 dark:text-blue-300">
                  {reading}
                </span>
                <button
                  onClick={() => playPronunciation(reading)}
                  onClick={() => playKanjiPronunciation(reading)}
                  className="p-1 hover:bg-blue-100 dark:hover:bg-blue-800 rounded transition-colors"
                >
                  <Volume2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional info */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <h4 className="font-medium text-gray-900 dark:text-white mb-1">Stroke Count</h4>
          <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{kanji.strokeCount}</p>
        </div>
        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <h4 className="font-medium text-gray-900 dark:text-white mb-1">JLPT Level</h4>
          <p className="text-2xl font-bold text-green-600 dark:text-green-400">{kanji.jlptLevel}</p>
        </div>
        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <h4 className="font-medium text-gray-900 dark:text-white mb-1">Frequency</h4>
          <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">#{kanji.frequency}</p>
        </div>
      </div>

      {/* Mnemonic */}
      {kanji.mnemonics && (
        <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
          <h4 className="font-medium text-yellow-800 dark:text-yellow-200 mb-2 flex items-center">
            <Lightbulb className="w-4 h-4 mr-2" />
            Memory Aid
          </h4>
          <p className="text-yellow-700 dark:text-yellow-300">{kanji.mnemonics}</p>
        </div>
      )}
    </div>
  );

  const renderCompounds = () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        Common Words with {kanji.character}
      </h3>
      <div className="grid gap-4">
        {kanji.compounds.map((compound, index) => (
          <div
            key={index}
            className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-3">
                <span className="text-xl font-bold text-gray-900 dark:text-white">
                  {compound.word}
                </span>
                <span className="text-gray-600 dark:text-gray-400">
                  ({compound.reading})
                </span>
              </div>
              <button
                onClick={() => playPronunciation(compound.word)}
                onClick={() => playKanjiPronunciation(compound.word, compound.reading)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                <Volume2 className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              </button>
            </div>
            <p className="text-gray-700 dark:text-gray-300">{compound.meaning}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSentences = () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        Example Sentences
      </h3>
      <div className="grid gap-6">
        {kanji.exampleSentences.map((sentence, index) => (
          <div
            key={index}
            className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <p className="text-xl text-gray-900 dark:text-white font-medium mb-1">
                  {sentence.sentence}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  {sentence.reading}
                </p>
              </div>
              <button
                onClick={() => playPronunciation(sentence.sentence)}
                onClick={() => playSentence(sentence.sentence)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors ml-3"
              >
                <Volume2 className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              </button>
            </div>
            <p className="text-gray-700 dark:text-gray-300 italic">
              "{sentence.translation}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderPractice = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        Practice & Progress
      </h3>
      
      {/* Progress stats */}
      <div className="grid md:grid-cols-4 gap-4">
        <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
          <h4 className="font-medium text-green-800 dark:text-green-200 mb-1">Accuracy</h4>
          <p className="text-2xl font-bold text-green-600 dark:text-green-400">
            {accuracyRate}%
          </p>
        </div>
        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-1">Sessions</h4>
          <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            {progress.studySessions}
          </p>
        </div>
        <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
          <h4 className="font-medium text-purple-800 dark:text-purple-200 mb-1">Streak</h4>
          <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
            {progress.streak}
          </p>
        </div>
        <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
          <h4 className="font-medium text-orange-800 dark:text-orange-200 mb-1">Difficulty</h4>
          <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">
            {progress.difficulty.toFixed(1)}/5
          </p>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex flex-wrap gap-4">
        <button
          onClick={() => updateProgress(kanji.id, true)}
          className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2"
        >
          <Target className="w-4 h-4" />
          <span>Mark as Correct</span>
        </button>
        
        <button
          onClick={() => updateProgress(kanji.id, false)}
          className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          Need More Practice
        </button>
        
        <button
          onClick={() => markAsLearned(kanji.id)}
          className="px-6 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors flex items-center space-x-2"
        >
          <Star className="w-4 h-4" />
          <span>Mark as Learned</span>
        </button>
      </div>

      {/* Usage contexts */}
      <div>
        <h4 className="font-medium text-gray-900 dark:text-white mb-3">
          Common Usage Contexts
        </h4>
        <div className="flex flex-wrap gap-2">
          {kanji.usageContexts.map((context, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
            >
              {context}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Kanji List</span>
        </button>
        
        {progress.isLearned && (
          <div className="flex items-center space-x-2 text-yellow-600 dark:text-yellow-400">
            <Star className="w-5 h-5 fill-current" />
            <span className="font-medium">Mastered</span>
          </div>
        )}
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 mb-6 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id as any)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === id
                ? 'bg-white dark:bg-gray-700 text-indigo-600 dark:text-indigo-400 shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            <Icon className="w-4 h-4" />
            <span>{label}</span>
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6">
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'compounds' && renderCompounds()}
        {activeTab === 'sentences' && renderSentences()}
        {activeTab === 'practice' && renderPractice()}
      </div>
    </div>
  );
};

export default KanjiDetail;