import React, { useState, useEffect } from 'react';
import { Shuffle, RotateCcw, CheckCircle, XCircle, Volume2, Brain } from 'lucide-react';
import { useProgress } from '../contexts/ProgressContext';
import { kanjiDatabase, getRandomKanji } from '../data/kanjiData';
import { KanjiData } from '../data/kanjiData';
import { playKanjiPronunciation, playSentence } from '../utils/audioUtils';

type StudyMode = 'flashcard' | 'recognition' | 'meaning' | 'reading';
type CardSide = 'kanji' | 'meaning' | 'reading';

const StudyPage: React.FC = () => {
  const { updateProgress, getDueForReview } = useProgress();
  const [currentKanji, setCurrentKanji] = useState<KanjiData>(getRandomKanji());
  const [studyMode, setStudyMode] = useState<StudyMode>('flashcard');
  const [cardSide, setCardSide] = useState<CardSide>('kanji');
  const [userAnswer, setUserAnswer] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [sessionStats, setSessionStats] = useState({
    studied: 0,
    correct: 0,
    incorrect: 0
  });
  const [studyQueue, setStudyQueue] = useState<KanjiData[]>([]);

  const dueForReview = getDueForReview();

  useEffect(() => {
    // Initialize study queue with due reviews or random kanji
    if (dueForReview.length > 0) {
      const dueKanji = dueForReview.map(id => kanjiDatabase.find(k => k.id === id)!);
      setStudyQueue(dueKanji);
      setCurrentKanji(dueKanji[0]);
    } else {
      const randomQueue = Array.from({ length: 10 }, () => getRandomKanji());
      setStudyQueue(randomQueue);
      setCurrentKanji(randomQueue[0]);
    }
  }, []);

  // Generate incorrect options for multiple choice
  const generateIncorrectOptions = (correctMeaning: string): string[] => {
    const allMeanings = kanjiDatabase
      .flatMap(k => k.meanings)
      .filter(meaning => meaning !== correctMeaning);
    
    const incorrectOptions: string[] = [];
    while (incorrectOptions.length < 3) {
      const randomMeaning = allMeanings[Math.floor(Math.random() * allMeanings.length)];
      if (!incorrectOptions.includes(randomMeaning)) {
        incorrectOptions.push(randomMeaning);
      }
    }
    return incorrectOptions;
  };

  const nextKanji = () => {
    if (studyQueue.length > 1) {
      const nextQueue = studyQueue.slice(1);
      setStudyQueue(nextQueue);
      setCurrentKanji(nextQueue[0]);
    } else {
      // Generate new queue
      const newQueue = Array.from({ length: 10 }, () => getRandomKanji());
      setStudyQueue(newQueue);
      setCurrentKanji(newQueue[0]);
    }
    
    setCardSide('kanji');
    setUserAnswer('');
    setShowAnswer(false);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const handleAnswer = (correct: boolean) => {
    updateProgress(currentKanji.id, correct);
    setSessionStats(prev => ({
      studied: prev.studied + 1,
      correct: prev.correct + (correct ? 1 : 0),
      incorrect: prev.incorrect + (correct ? 0 : 1)
    }));
    
    setTimeout(() => {
      nextKanji();
    }, 1500);
  };

  const handleMultipleChoiceAnswer = (selectedOption: string) => {
    const correct = currentKanji.meanings.includes(selectedOption);
    setSelectedAnswer(selectedOption);
    setShowResult(true);
    
    setTimeout(() => {
      handleAnswer(correct);
    }, 1500);
  };
  const shuffleKanji = () => {
    setCurrentKanji(getRandomKanji());
    setCardSide('kanji');
    setUserAnswer('');
    setShowAnswer(false);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const flipCard = () => {
    if (studyMode === 'flashcard') {
      setCardSide(prev => {
        switch (prev) {
          case 'kanji': return 'meaning';
          case 'meaning': return 'reading';
          case 'reading': return 'kanji';
          default: return 'kanji';
        }
      });
    }
  };

  const renderFlashcard = () => (
    <div 
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-12 text-center cursor-pointer hover:shadow-3xl transition-all duration-300 min-h-[400px] flex flex-col justify-center"
      onClick={flipCard}
    >
      {cardSide === 'kanji' && (
        <>
          <div className="text-8xl font-bold text-gray-900 dark:text-white mb-6 hover:scale-110 transition-transform">
            {currentKanji.character}
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              playKanjiPronunciation(currentKanji.character, currentKanji.pronunciation);
            }}
            className="mx-auto px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center space-x-2"
          >
            <Volume2 className="w-4 h-4" />
            <span>Listen</span>
          </button>
        </>
      )}
      
      {cardSide === 'meaning' && (
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Meanings
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {currentKanji.meanings.map((meaning, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-lg text-lg font-medium"
              >
                {meaning}
              </span>
            ))}
          </div>
        </div>
      )}
      
      {cardSide === 'reading' && (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              On'yomi
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {currentKanji.onyomi.map((reading, index) => (
                <span
                  key={index}
                  className="px-3 py-2 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 rounded-lg font-medium"
                >
                  {reading}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Kun'yomi
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {currentKanji.kunyomi.map((reading, index) => (
                <span
                  key={index}
                  className="px-3 py-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-lg font-medium"
                >
                  {reading}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
      
      <p className="text-gray-500 dark:text-gray-400 text-sm mt-6">
        Click to flip card
      </p>
    </div>
  );

  const renderQuizMode = () => (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 min-h-[400px]">
      <div className="text-center mb-8">
        <div className="text-6xl font-bold text-gray-900 dark:text-white mb-4">
          {currentKanji.character}
        </div>
        <button
          onClick={() => playPronunciation(currentKanji.pronunciation)}
          onClick={() => playKanjiPronunciation(currentKanji.character, currentKanji.pronunciation)}
          className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex items-center space-x-2 mx-auto"
        >
          <Volume2 className="w-4 h-4" />
          <span>Listen</span>
        </button>
      </div>

      <div className="max-w-md mx-auto">
        {studyMode === 'recognition' && (
          <>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
              What does this kanji mean?
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {(() => {
                const correctAnswer = currentKanji.meanings[0];
                const incorrectOptions = generateIncorrectOptions(correctAnswer);
                const allOptions = [correctAnswer, ...incorrectOptions].sort(() => Math.random() - 0.5);
                
                return allOptions.map((option, index) => {
                  const isCorrect = currentKanji.meanings.includes(option);
                  const isSelected = selectedAnswer === option;
                  
                  let buttonClass = "p-4 border rounded-lg transition-all duration-300 text-left font-medium ";
                  
                  if (showResult) {
                    if (isSelected && isCorrect) {
                      buttonClass += "bg-green-100 dark:bg-green-900/30 border-green-500 text-green-700 dark:text-green-300";
                    } else if (isSelected && !isCorrect) {
                      buttonClass += "bg-red-100 dark:bg-red-900/30 border-red-500 text-red-700 dark:text-red-300";
                    } else if (isCorrect) {
                      buttonClass += "bg-green-50 dark:bg-green-900/20 border-green-300 text-green-600 dark:text-green-400";
                    } else {
                      buttonClass += "bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400";
                    }
                  } else {
                    buttonClass += "border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white hover:border-indigo-300 dark:hover:border-indigo-500";
                  }
                  
                  return (
                    <button
                      key={index}
                      onClick={() => !showResult && handleMultipleChoiceAnswer(option)}
                      disabled={showResult}
                      className={buttonClass}
                    >
                      <div className="flex items-center justify-between">
                        <span>{option}</span>
                        {showResult && isCorrect && (
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        )}
                        {showResult && isSelected && !isCorrect && (
                          <XCircle className="w-5 h-5 text-red-500" />
                        )}
                      </div>
                    </button>
                  );
                });
              })()}
            </div>
            
            {showResult && (
              <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">All meanings for this kanji:</p>
                <div className="flex flex-wrap gap-2">
                  {currentKanji.meanings.map((meaning, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded text-sm"
                    >
                      {meaning}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        {studyMode === 'meaning' && (
          <>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
              Type the meaning of this kanji:
            </h3>
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              placeholder="Enter meaning..."
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              onKeyPress={(e) => {
                if (e.key === 'Enter' && userAnswer.trim()) {
                  const correct = currentKanji.meanings.some(meaning => 
                    meaning.toLowerCase().includes(userAnswer.toLowerCase().trim())
                  );
                  setShowAnswer(true);
                  setTimeout(() => handleAnswer(correct), 1500);
                }
              }}
            />
            
            {showAnswer && (
              <div className="mt-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-700">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Correct meanings:</p>
                <div className="flex flex-wrap gap-2">
                  {currentKanji.meanings.map((meaning, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded text-sm"
                    >
                      {meaning}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Study Session
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            {dueForReview.length > 0 
              ? `${dueForReview.length} kanji due for review`
              : 'Practice mode - random kanji'
            }
          </p>
        </div>

        {/* Session Stats */}
        <div className="text-right">
          <div className="text-sm text-gray-600 dark:text-gray-400">Session Progress</div>
          <div className="flex items-center space-x-4 text-sm">
            <span className="text-green-600 dark:text-green-400">
              ✓ {sessionStats.correct}
            </span>
            <span className="text-red-600 dark:text-red-400">
              ✗ {sessionStats.incorrect}
            </span>
            <span className="text-gray-600 dark:text-gray-400">
              Total: {sessionStats.studied}
            </span>
          </div>
        </div>
      </div>

      {/* Study Mode Selector */}
      <div className="flex flex-wrap gap-2 mb-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
        {[
          { mode: 'flashcard', label: 'Flashcards', icon: RotateCcw },
          { mode: 'recognition', label: 'Recognition', icon: Brain },
          { mode: 'meaning', label: 'Meaning', icon: CheckCircle }
        ].map(({ mode, label, icon: Icon }) => (
          <button
            key={mode}
            onClick={() => setStudyMode(mode as StudyMode)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
              studyMode === mode
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            <Icon className="w-4 h-4" />
            <span>{label}</span>
          </button>
        ))}
      </div>

      {/* Study Card */}
      <div className="mb-8">
        {studyMode === 'flashcard' ? renderFlashcard() : renderQuizMode()}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap justify-center gap-4">
        <button
          onClick={shuffleKanji}
          className="flex items-center space-x-2 px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
        >
          <Shuffle className="w-4 h-4" />
          <span>Random Kanji</span>
        </button>

        {studyMode === 'flashcard' && (
          <>
            <button
              onClick={() => handleAnswer(false)}
              className="flex items-center space-x-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              <XCircle className="w-4 h-4" />
              <span>Need Practice</span>
            </button>

            <button
              onClick={() => handleAnswer(true)}
              className="flex items-center space-x-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <CheckCircle className="w-4 h-4" />
              <span>Got It!</span>
            </button>
          </>
        )}

        {(studyMode === 'recognition' && showResult) || studyMode === 'flashcard' ? (
          <button
            onClick={nextKanji}
            className="flex items-center space-x-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <span>Next Kanji</span>
          </button>
        ) : null}
      </div>

      {/* Progress info */}
      <div className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
        <p>Queue: {studyQueue.length} kanji remaining</p>
      </div>
    </div>
  );
};

export default StudyPage;