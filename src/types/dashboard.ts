export interface DailyMasteryPoint {
  date: string;
  dayLabel: string;
  masteredCumulative: number;
  newMasteredToday: number;
  studyMinutes: number;
}

export interface LessonProgressStat {
  lessonNumber: number;
  title: string;
  shortTitle: string;
  targetCount: number;
  masteredCount: number;
  percentage: number;
  status: 'mastered' | 'in-progress' | 'not-started';
}

export interface CategoryMasteryStat {
  category: string;
  label: string;
  count: number;
  color: string;
}

export interface UserStudyStats {
  totalMastered: number;
  totalTarget: number;
  readinessPercentage: number;
  studyStreakDays: number;
  quizAccuracy: number;
  totalQuizzesTaken: number;
  history: DailyMasteryPoint[];
}
