/**
 * Utility for synthesizing authentic Japanese speech via Web Speech API
 */
export function playJapaneseSpeech(text: string, rate: number = 0.85): void {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    console.warn('Web Speech API is not supported in this environment.');
    return;
  }

  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  // Clean the text from any ruby or parenthetical annotation
  const cleanText = text
    .replace(/<[^>]*>/g, '')
    .replace(/[（(].*?[）)]/g, '')
    .trim();

  if (!cleanText) return;

  const utterance = new SpeechSynthesisUtterance(cleanText);
  utterance.lang = 'ja-JP';
  utterance.rate = rate; // Slightly slower for language learners
  utterance.pitch = 1.0;

  // Try to find a native Japanese voice if available
  const voices = window.speechSynthesis.getVoices();
  const jaVoice = voices.find(
    v => v.lang.startsWith('ja') || v.lang.includes('JP') || v.name.toLowerCase().includes('japanese')
  );

  if (jaVoice) {
    utterance.voice = jaVoice;
  }

  window.speechSynthesis.speak(utterance);
}
