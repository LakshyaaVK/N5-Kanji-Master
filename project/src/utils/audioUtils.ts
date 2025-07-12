// Utility functions for Japanese audio pronunciation

export const playJapaneseAudio = (text: string): void => {
  if ('speechSynthesis' in window) {
    // Cancel any ongoing speech
    speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Configure for Japanese pronunciation
    utterance.lang = 'ja-JP';
    utterance.rate = 0.7; // Slower for learning
    utterance.pitch = 1.0;
    utterance.volume = 0.8;
    
    // Try to find a Japanese voice
    const voices = speechSynthesis.getVoices();
    const japaneseVoice = voices.find(voice => 
      voice.lang.startsWith('ja') || 
      voice.name.toLowerCase().includes('japanese') ||
      voice.name.toLowerCase().includes('japan')
    );
    
    if (japaneseVoice) {
      utterance.voice = japaneseVoice;
    }
    
    // Add error handling
    utterance.onerror = (event) => {
      console.warn('Speech synthesis error:', event.error);
    };
    
    speechSynthesis.speak(utterance);
  } else {
    console.warn('Speech synthesis not supported in this browser');
  }
};

export const playKanjiPronunciation = (kanji: string, reading?: string): void => {
  // Use the reading if provided, otherwise use the kanji character
  const textToSpeak = reading || kanji;
  playJapaneseAudio(textToSpeak);
};

export const playSentence = (sentence: string): void => {
  playJapaneseAudio(sentence);
};

// Initialize voices (some browsers need this)
export const initializeVoices = (): Promise<void> => {
  return new Promise((resolve) => {
    if ('speechSynthesis' in window) {
      let voices = speechSynthesis.getVoices();
      
      if (voices.length > 0) {
        resolve();
      } else {
        speechSynthesis.onvoiceschanged = () => {
          voices = speechSynthesis.getVoices();
          resolve();
        };
      }
    } else {
      resolve();
    }
  });
};

// Check if Japanese voice is available
export const hasJapaneseVoice = (): boolean => {
  if ('speechSynthesis' in window) {
    const voices = speechSynthesis.getVoices();
    return voices.some(voice => 
      voice.lang.startsWith('ja') || 
      voice.name.toLowerCase().includes('japanese') ||
      voice.name.toLowerCase().includes('japan')
    );
  }
  return false;
};