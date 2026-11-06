import { DailyMasteryPoint, LessonProgressStat, CategoryMasteryStat } from '../types/dashboard';
import { LESSONS_LIST } from '../data/roadmapData';
import { LESSON_1_STRUCTURES } from '../data/lesson1Grammar';

// Default targets per lesson in JLPT N5 curriculum
export const LESSON_TARGET_COUNTS: Record<number, number> = {
  1: 12, // Lesson 1: だ, です, は, も, これ, それ, あれ, の, いい, い-Adj, な-Adj, か
  2: 10, // Lesson 2: が, よ, ね, る-Verb, う-Verb, ます, Neg, を, と, ここ/そこ/あそこ
  3: 7,  // Lesson 3: で, に, か, と, でしょう, がある/いる, んです
  4: 8,  // Lesson 4: のは/のが, Adj+Noun, へ行く, する, 来る, Past, 好き/嫌い, くない
  5: 7,  // Lesson 5: で, ので, から, けど, て, ている①, に行く
  6: 8,  // Lesson 6: 誰/なぜ, だった, じゃない, じゃなかった, くなかった, と/って, Verb+Noun, な
  7: 8,  // Lesson 7: だけ, どれ/どこ, ている②, てから, もう/まだ, てもいい, たい, たりたり
  8: 7,  // Lesson 8: けっこう, たくさん, すぎる, にする, になる/くなる, より〜のほうが, 何か/誰も
  9: 7,  // Lesson 9: ましょう, ませんか, てください, てはいけない, なくてはいけない, たほうがいい, なきゃ
  10: 8, // Lesson 10: たことがある, ている③, Adj+て, のがへた/じょうず, あげる, くれる, もらう, つもりだ
};

export const TOTAL_CURRICULUM_STRUCTURES = Object.values(LESSON_TARGET_COUNTS).reduce((a, b) => a + b, 0); // 82

/**
 * Generate 7-day timeline data reflecting cumulative mastered structures over time
 */
export function generateTimelineData(currentMasteredCount: number): DailyMasteryPoint[] {
  const days = ['شنبه', 'یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنج‌شنبه', 'امروز'];
  const dates = ['10 آبان', '11 آبان', '12 آبان', '13 آبان', '14 آبان', '15 آبان', '16 آبان'];
  
  // Create an organic growth trajectory ending at currentMasteredCount
  const count = Math.max(0, currentMasteredCount);
  const baseline = Math.max(0, Math.floor(count * 0.25));
  const step = (count - baseline) / 6;

  return days.map((dayLabel, index) => {
    const isToday = index === 6;
    const cumulative = isToday 
      ? count 
      : Math.min(count, Math.round(baseline + step * index));
    
    const prevCumulative = index === 0 ? baseline : Math.round(baseline + step * (index - 1));
    const newToday = Math.max(0, cumulative - prevCumulative);

    return {
      date: dates[index],
      dayLabel,
      masteredCumulative: cumulative,
      newMasteredToday: newToday,
      studyMinutes: 20 + (index * 8) + (newToday * 10),
    };
  });
}

/**
 * Calculate progress statistics across all 10 lessons
 */
export function calculateLessonStats(masteredIds: string[]): LessonProgressStat[] {
  // Count how many Lesson 1 structures are mastered
  const lesson1MasteredIds = LESSON_1_STRUCTURES.map(s => s.id);
  const l1Count = masteredIds.filter(id => lesson1MasteredIds.includes(id)).length;

  return LESSONS_LIST.map(lesson => {
    const target = LESSON_TARGET_COUNTS[lesson.number] || 8;
    // For lesson 1 we have exact structure IDs
    let mastered = 0;
    if (lesson.number === 1) {
      mastered = l1Count;
    } else {
      // If user has mastered extra items beyond lesson 1
      const extraMastered = Math.max(0, masteredIds.length - l1Count);
      // distribute organically if any
      const share = Math.min(target, Math.floor(extraMastered / 9));
      mastered = share;
    }

    const percentage = Math.min(100, Math.round((mastered / target) * 100));
    let status: 'mastered' | 'in-progress' | 'not-started' = 'not-started';
    if (percentage === 100) status = 'mastered';
    else if (percentage > 0) status = 'in-progress';

    return {
      lessonNumber: lesson.number,
      title: lesson.title,
      shortTitle: `درس ${lesson.number}`,
      targetCount: target,
      masteredCount: mastered,
      percentage,
      status,
    };
  });
}

/**
 * Calculate category breakdown stats
 */
export function calculateCategoryStats(masteredIds: string[]): CategoryMasteryStat[] {
  const categories = [
    { category: 'copula', label: 'ربط‌دهنده‌ها (Copula)', color: '#e11d48' },
    { category: 'particle', label: 'ذرات اساسی (Particles)', color: '#f59e0b' },
    { category: 'demonstrative', label: 'اشارات مکانی (Ko-So-A)', color: '#3b82f6' },
    { category: 'adjective', label: 'صفت‌ها (い & な)', color: '#10b981' },
    { category: 'question', label: 'پرسش و لحن (Questions)', color: '#8b5cf6' },
  ];

  return categories.map(cat => {
    const totalInCat = LESSON_1_STRUCTURES.filter(s => s.category === cat.category);
    const masteredInCat = totalInCat.filter(s => masteredIds.includes(s.id)).length;

    return {
      category: cat.category,
      label: cat.label,
      count: masteredInCat,
      color: cat.color,
    };
  });
}
