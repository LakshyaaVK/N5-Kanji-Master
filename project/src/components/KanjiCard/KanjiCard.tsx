import React, { useState } from 'react';
import { Volume2, Star } from 'lucide-react';
import { KanjiData } from '../../data/kanjiData';
import { useProgress } from '../../contexts/ProgressContext';
import { playKanjiPronunciation } from '../../utils/audioUtils';

interface KanjiCardProps {
  kanji: KanjiData;
  onClick?: () => void;
  showProgress?: boolean;
  size?: 'small' | 'medium' | 'large';
}

const KanjiCard: React.FC<KanjiCardProps> = ({
  kanji,
  onClick,
  showProgress = true,
  size = 'medium'
}: KanjiCardProps) => {
  const { getKanjiProgress } = useProgress();
  const [isFlipped, setIsFlipped] = useState(false);
  
  const progress = getKanjiProgress(kanji.id);
  const accuracyRate = progress.totalAttempts > 0 
    ? Math.round((progress.correctAnswers / progress.totalAttempts) * 100) 
    : 0;

  const sizeClasses = {
    small: 'p-4 min-h-[200px]',
    medium: 'p-6 min-h-[280px]',
    large: 'p-8 min-h-[360px]'
  };

  const characterSize = {
    small: 'text-4xl',
    medium: 'text-6xl', 
    large: 'text-8xl'
  };

  const playPronunciation = (e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    playKanjiPronunciation(kanji.character, kanji.pronunciation);
  };

  const handleCardClick = () => {
    if (onClick) {
      onClick();
    } else {
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <div
      className={`relative bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-200 dark:border-gray-700 group ${sizeClasses[size]}`}
      onClick={handleCardClick}
    >
      {/* Progress indicator */}
      {showProgress && (
        <div className="absolute top-2 right-2 flex items-center space-x-1">
          {progress.isLearned && (
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
          )}
          {progress.totalAttempts > 0 && (
            <div className={`w-2 h-2 rounded-full ${
              accuracyRate >= 80 ? 'bg-green-500' :
              accuracyRate >= 60 ? 'bg-yellow-500' : 'bg-red-500'
            }`} />
          )}
        </div>
      )}

      {/* Remove broken 3D flip, just toggle content */}
      {!isFlipped ? (
        // Front of card
        <div className="flex flex-col items-center justify-center h-full relative">
          <div className={`${characterSize[size]} font-bold text-gray-900 dark:text-white mb-4 group-hover:scale-110 transition-transform`}>
            {kanji.character}
          </div>
          
          <div className="text-center space-y-2">
            <div className="flex flex-wrap justify-center gap-1">
              {kanji.meanings?.slice(0, 3).map((meaning, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-full text-xs font-medium"
                >
                  {meaning}
                </span>
              ))}
            </div>
            
            {size !== 'small' && (
              <div className="text-sm text-gray-600 dark:text-gray-400">
                <p>Strokes: {kanji.strokeCount}</p>
                <p>JLPT: {kanji.jlptLevel}</p>
              </div>
            )}
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              playPronunciation(e);
            }}
            className="absolute bottom-2 right-2 p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            aria-label="Play pronunciation"
          >
            <Volume2 className="w-4 h-4 text-gray-600 dark:text-gray-300" />
          </button>
        </div>
      ) : (
        // Back of card
        <div className="flex flex-col justify-center h-full space-y-4 relative">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Readings
            </h3>
            
            <div className="space-y-2">
              <div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">On:</span>
                <div className="flex flex-wrap justify-center gap-1 mt-1">
                  {kanji.onyomi?.map((reading, index) => (
                    <span key={index} className="px-2 py-1 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 rounded text-xs">
                      {reading}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Kun:</span>
                <div className="flex flex-wrap justify-center gap-1 mt-1">
                  {kanji.kunyomi?.map((reading, index) => (
                    <span key={index} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded text-xs">
                      {reading}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {size !== 'small' && kanji.compounds?.length > 0 && (
            <div className="text-center">
              <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                Common Words
              </h4>
              <div className="space-y-1">
                {kanji.compounds.slice(0, 2).map((compound, index) => (
                  <div key={index} className="text-xs">
                    <span className="font-medium text-gray-900 dark:text-white">
                      {compound.word}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400 ml-1">
                      ({compound.reading})
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {showProgress && progress.totalAttempts > 0 && (
            <div className="text-center pt-2 border-t border-gray-200 dark:border-gray-700">
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Accuracy: {accuracyRate}% • Studied: {progress.studySessions}x
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default KanjiCard;