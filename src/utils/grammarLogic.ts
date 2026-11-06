import { GrammarStructure } from '../types/grammar';

/**
 * Filter structures by search query and category
 */
export function filterStructures(
  structures: GrammarStructure[],
  query: string,
  category: string = 'all'
): GrammarStructure[] {
  const normalizedQuery = query.trim().toLowerCase();

  return structures.filter(item => {
    const matchesCategory = category === 'all' || item.category === category;
    if (!matchesCategory) return false;

    if (!normalizedQuery) return true;

    return (
      item.symbol.toLowerCase().includes(normalizedQuery) ||
      item.title.toLowerCase().includes(normalizedQuery) ||
      item.reading.toLowerCase().includes(normalizedQuery) ||
      item.romaji.toLowerCase().includes(normalizedQuery) ||
      item.step1Intro.toLowerCase().includes(normalizedQuery) ||
      item.step3Formula.toLowerCase().includes(normalizedQuery)
    );
  });
}

/**
 * Verify user's quiz answer
 */
export function verifyAnswer(userAnswer: string | number | boolean, correctAnswer: string | number | boolean): boolean {
  if (typeof userAnswer === 'boolean' || typeof correctAnswer === 'boolean') {
    return userAnswer === correctAnswer;
  }

  const cleanUser = String(userAnswer).trim().toLowerCase();
  const cleanCorrect = String(correctAnswer).trim().toLowerCase();

  return cleanUser === cleanCorrect;
}

/**
 * Calculate completion percentage
 */
export function calculateProgress(completedCount: number, totalCount: number): number {
  if (totalCount <= 0) return 0;
  const percent = Math.round((completedCount / totalCount) * 100);
  return Math.min(100, Math.max(0, percent));
}

/**
 * Strip ruby HTML tags to obtain pure reading or pure text
 */
export function stripRubyTags(html: string): string {
  return html.replace(/<rt>.*?<\/rt>/g, '').replace(/<[^>]*>/g, '').trim();
}
