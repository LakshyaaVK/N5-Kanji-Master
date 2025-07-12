import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

export interface KanjiProgress {
  kanjiId: number;
  isLearned: boolean;
  studySessions: number;
  correctAnswers: number;
  totalAttempts: number;
  lastStudied: Date;
  nextReview: Date;
  difficulty: number; // 1-5, affects spaced repetition
  streak: number;
}

interface ProgressContextType {
  progress: Map<number, KanjiProgress>;
  updateProgress: (kanjiId: number, correct: boolean) => void;
  markAsLearned: (kanjiId: number) => void;
  getKanjiProgress: (kanjiId: number) => KanjiProgress;
  getLearnedCount: () => number;
  getTotalStudyTime: () => number;
  getStreakCount: () => number;
  getDueForReview: () => number[];
  resetProgress: () => void;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};

interface ProgressProviderProps {
  children: ReactNode;
}

const createDefaultProgress = (kanjiId: number): KanjiProgress => ({
  kanjiId,
  isLearned: false,
  studySessions: 0,
  correctAnswers: 0,
  totalAttempts: 0,
  lastStudied: new Date(),
  nextReview: new Date(),
  difficulty: 3,
  streak: 0
});

const calculateNextReview = (difficulty: number, streak: number): Date => {
  const now = new Date();
  let days = 1;
  
  // Spaced repetition algorithm based on difficulty and streak
  if (streak === 0) {
    days = 1;
  } else if (streak === 1) {
    days = 3;
  } else {
    days = Math.min(30, Math.round(streak * (difficulty / 2) * 1.5));
  }
  
  return new Date(now.getTime() + days * 24 * 60 * 60 * 1000);
};

export const ProgressProvider: React.FC<ProgressProviderProps> = ({ children }) => {
  const [progress, setProgress] = useState<Map<number, KanjiProgress>>(() => {
    const stored = localStorage.getItem('kanjiProgress');
    if (stored) {
      const parsed = JSON.parse(stored);
      const map = new Map<number, KanjiProgress>();
      
      Object.entries(parsed).forEach(([id, data]: [string, any]) => {
        map.set(Number(id), {
          ...data,
          lastStudied: new Date(data.lastStudied),
          nextReview: new Date(data.nextReview)
        });
      });
      
      return map;
    }
    return new Map();
  });

  useEffect(() => {
    const progressObj: Record<number, any> = {};
    progress.forEach((value, key) => {
      progressObj[key] = {
        ...value,
        lastStudied: value.lastStudied.toISOString(),
        nextReview: value.nextReview.toISOString()
      };
    });
    
    localStorage.setItem('kanjiProgress', JSON.stringify(progressObj));
  }, [progress]);

  const updateProgress = (kanjiId: number, correct: boolean) => {
    setProgress(prev => {
      const newProgress = new Map(prev);
      const current = newProgress.get(kanjiId) || createDefaultProgress(kanjiId);
      
      const updatedProgress: KanjiProgress = {
        ...current,
        studySessions: current.studySessions + 1,
        totalAttempts: current.totalAttempts + 1,
        correctAnswers: correct ? current.correctAnswers + 1 : current.correctAnswers,
        lastStudied: new Date(),
        streak: correct ? current.streak + 1 : 0,
        difficulty: correct ? 
          Math.max(1, current.difficulty - 0.1) : 
          Math.min(5, current.difficulty + 0.3)
      };
      
      updatedProgress.nextReview = calculateNextReview(updatedProgress.difficulty, updatedProgress.streak);
      updatedProgress.isLearned = updatedProgress.correctAnswers >= 3 && 
        (updatedProgress.correctAnswers / updatedProgress.totalAttempts) >= 0.8;
      
      newProgress.set(kanjiId, updatedProgress);
      return newProgress;
    });
  };

  const markAsLearned = (kanjiId: number) => {
    setProgress(prev => {
      const newProgress = new Map(prev);
      const current = newProgress.get(kanjiId) || createDefaultProgress(kanjiId);
      
      newProgress.set(kanjiId, {
        ...current,
        isLearned: true,
        lastStudied: new Date()
      });
      
      return newProgress;
    });
  };

  const getKanjiProgress = (kanjiId: number): KanjiProgress => {
    return progress.get(kanjiId) || createDefaultProgress(kanjiId);
  };

  const getLearnedCount = (): number => {
    return Array.from(progress.values()).filter(p => p.isLearned).length;
  };

  const getTotalStudyTime = (): number => {
    return Array.from(progress.values()).reduce((total, p) => total + p.studySessions, 0);
  };

  const getStreakCount = (): number => {
    const streaks = Array.from(progress.values()).map(p => p.streak);
    return streaks.length > 0 ? Math.max(...streaks) : 0;
  };

  const getDueForReview = (): number[] => {
    const now = new Date();
    return Array.from(progress.entries())
      .filter(([_, p]) => p.nextReview <= now && p.studySessions > 0)
      .map(([id, _]) => id);
  };

  const resetProgress = () => {
    setProgress(new Map());
    localStorage.removeItem('kanjiProgress');
  };

  return (
    <ProgressContext.Provider value={{
      progress,
      updateProgress,
      markAsLearned,
      getKanjiProgress,
      getLearnedCount,
      getTotalStudyTime,
      getStreakCount,
      getDueForReview,
      resetProgress
    }}>
      {children}
    </ProgressContext.Provider>
  );
};