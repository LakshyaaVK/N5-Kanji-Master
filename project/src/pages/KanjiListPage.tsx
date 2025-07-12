import React, { useState, useMemo } from 'react';
import { useProgress } from '../contexts/ProgressContext';
import { kanjiDatabase, searchKanji } from '../data/kanjiData';
import KanjiCard from '../components/KanjiCard/KanjiCard';
import KanjiDetail from '../components/KanjiDetail/KanjiDetail';
import SearchFilters, { FilterOptions } from '../components/Search/SearchFilters';

const KanjiListPage: React.FC = () => {
  const { progress } = useProgress();
  const [selectedKanji, setSelectedKanji] = useState<number | null>(null);
  const [filters, setFilters] = useState<FilterOptions>({
    searchTerm: '',
    strokeRange: [1, 20],
    learnedStatus: 'all',
    sortBy: 'frequency',
    usageContext: ''
  });

  const filteredKanji = useMemo(() => {
    let result = filters.searchTerm 
      ? searchKanji(filters.searchTerm)
      : [...kanjiDatabase];

    // Apply stroke count filter
    result = result.filter(kanji => 
      kanji.strokeCount >= filters.strokeRange[0] && 
      kanji.strokeCount <= filters.strokeRange[1]
    );

    // Apply learned status filter
    if (filters.learnedStatus !== 'all') {
      result = result.filter(kanji => {
        const kanjiProgress = progress.get(kanji.id);
        const isLearned = kanjiProgress?.isLearned || false;
        return filters.learnedStatus === 'learned' ? isLearned : !isLearned;
      });
    }

    // Apply usage context filter
    if (filters.usageContext) {
      result = result.filter(kanji => 
        kanji.usageContexts.includes(filters.usageContext)
      );
    }

    // Apply sorting
    result.sort((a, b) => {
      switch (filters.sortBy) {
        case 'frequency':
          return a.frequency - b.frequency;
        case 'strokes':
          return a.strokeCount - b.strokeCount;
        case 'character':
          return a.character.localeCompare(b.character);
        case 'progress':
          const progressA = progress.get(a.id);
          const progressB = progress.get(b.id);
          const accuracyA = progressA && progressA.totalAttempts > 0 
            ? progressA.correctAnswers / progressA.totalAttempts 
            : 0;
          const accuracyB = progressB && progressB.totalAttempts > 0 
            ? progressB.correctAnswers / progressB.totalAttempts 
            : 0;
          return accuracyB - accuracyA;
        default:
          return 0;
      }
    });

    return result;
  }, [filters, progress]);

  const selectedKanjiData = selectedKanji 
    ? kanjiDatabase.find(k => k.id === selectedKanji)
    : null;

  if (selectedKanjiData) {
    return (
      <KanjiDetail
        kanji={selectedKanjiData}
        onBack={() => setSelectedKanji(null)}
      />
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          JLPT N5 Kanji Library
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Explore all 103 essential kanji for JLPT N5 certification
        </p>
      </div>

      <SearchFilters
        filters={filters}
        onFiltersChange={setFilters}
        totalResults={filteredKanji.length}
      />

      {filteredKanji.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
            No kanji found
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Try adjusting your search criteria or filters
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredKanji.map((kanji) => (
            <KanjiCard
              key={kanji.id}
              kanji={kanji}
              onClick={() => setSelectedKanji(kanji.id)}
              size="medium"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default KanjiListPage;