import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { ProgressProvider } from './contexts/ProgressContext';
import Header from './components/Layout/Header';
import HomePage from './pages/HomePage';
import KanjiListPage from './pages/KanjiListPage';
import StudyPage from './pages/StudyPage';
import ProgressPage from './pages/ProgressPage';
import { initializeVoices } from './utils/audioUtils';

function App() {
  React.useEffect(() => {
    // Initialize speech synthesis voices
    initializeVoices();
  }, []);

  return (
    <ThemeProvider>
      <ProgressProvider>
        <Router>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/kanji" element={<KanjiListPage />} />
                <Route path="/study" element={<StudyPage />} />
                <Route path="/progress" element={<ProgressPage />} />
              </Routes>
            </main>
          </div>
        </Router>
      </ProgressProvider>
    </ThemeProvider>
  );
}

export default App;