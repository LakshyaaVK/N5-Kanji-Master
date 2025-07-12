import React from 'react';
import { Search, Filter, X } from 'lucide-react';

export interface FilterOptions {
  searchTerm: string;
  strokeRange: [number, number];
  learnedStatus: 'all' | 'learned' | 'unlearned';
  sortBy: 'frequency' | 'strokes' | 'character' | 'progress';
  usageContext: string;
}

interface SearchFiltersProps {
  filters: FilterOptions;
  onFiltersChange: (filters: FilterOptions) => void;
  totalResults: number;
}

const SearchFilters: React.FC<SearchFiltersProps> = ({
  filters,
  onFiltersChange,
  totalResults
}) => {
  const [showAdvanced, setShowAdvanced] = React.useState(false);

  const updateFilter = (key: keyof FilterOptions, value: any) => {
    onFiltersChange({
      ...filters,
      [key]: value
    });
  };

  const clearFilters = () => {
    onFiltersChange({
      searchTerm: '',
      strokeRange: [1, 20],
      learnedStatus: 'all',
      sortBy: 'frequency',
      usageContext: ''
    });
    setShowAdvanced(false);
  };

  const hasActiveFilters = 
    filters.searchTerm !== '' ||
    filters.strokeRange[0] !== 1 ||
    filters.strokeRange[1] !== 20 ||
    filters.learnedStatus !== 'all' ||
    filters.usageContext !== '';

  const usageContexts = [
    'Numbers', 'Time', 'People', 'Education', 'Family', 'Animals', 
    'Food', 'Colors', 'Weather', 'Transportation', 'Body', 'Clothing'
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6 mb-6">
      {/* Main search */}
      <div className="flex items-center space-x-4 mb-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search kanji, meanings, or readings..."
            value={filters.searchTerm}
            onChange={(e) => updateFilter('searchTerm', e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>
        
        <button
          onClick={() => setShowAdvanced(!showAdvanced)}
          className={`px-4 py-3 rounded-lg border transition-colors flex items-center space-x-2 ${
            showAdvanced
              ? 'bg-indigo-600 text-white border-indigo-600'
              : 'bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600'
          }`}
        >
          <Filter className="w-4 h-4" />
          <span>Filters</span>
        </button>

        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="px-4 py-3 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800 hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors flex items-center space-x-2"
          >
            <X className="w-4 h-4" />
            <span>Clear</span>
          </button>
        )}
      </div>

      {/* Results count */}
      <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        {totalResults} kanji found
      </div>

      {/* Advanced filters */}
      {showAdvanced && (
        <div className="space-y-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Stroke count range */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Stroke Count
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  min="1"
                  max="20"
                  value={filters.strokeRange[0]}
                  onChange={(e) => updateFilter('strokeRange', [Number(e.target.value), filters.strokeRange[1]])}
                  className="w-16 px-2 py-1 border border-gray-300 dark:border-gray-600 rounded bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                />
                <span className="text-gray-500">to</span>
                <input
                  type="number"
                  min="1"
                  max="20"
                  value={filters.strokeRange[1]}
                  onChange={(e) => updateFilter('strokeRange', [filters.strokeRange[0], Number(e.target.value)])}
                  className="w-16 px-2 py-1 border border-gray-300 dark:border-gray-600 rounded bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                />
              </div>
            </div>

            {/* Learning status */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Status
              </label>
              <select
                value={filters.learnedStatus}
                onChange={(e) => updateFilter('learnedStatus', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
              >
                <option value="all">All Kanji</option>
                <option value="learned">Learned</option>
                <option value="unlearned">Not Learned</option>
              </select>
            </div>

            {/* Sort by */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Sort By
              </label>
              <select
                value={filters.sortBy}
                onChange={(e) => updateFilter('sortBy', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
              >
                <option value="frequency">Frequency</option>
                <option value="strokes">Stroke Count</option>
                <option value="character">Character</option>
                <option value="progress">Progress</option>
              </select>
            </div>

            {/* Usage context */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Category
              </label>
              <select
                value={filters.usageContext}
                onChange={(e) => updateFilter('usageContext', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
              >
                <option value="">All Categories</option>
                {usageContexts.map(context => (
                  <option key={context} value={context}>{context}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchFilters;