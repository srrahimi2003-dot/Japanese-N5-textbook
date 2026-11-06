export interface ExampleBreakdown {
  japanese: string;
  reading: string;
  romaji: string;
  role: string;
  persianMeaning: string;
}

export interface ExampleSentence {
  id: string;
  japanese: string;
  rubyHtml?: string;
  reading: string;
  romaji: string;
  persianNatural: string;
  persianLiteral?: string;
  breakdown: ExampleBreakdown[];
  context?: string;
  audioText: string;
}

export interface SituationalExample {
  id: string;
  scenario: string;
  settingName: 'home' | 'school' | 'restaurant' | 'shopping' | 'travel' | 'casual' | 'formal';
  locationEmoji: string;
  description: string;
  sentence: ExampleSentence;
}

export interface Pitfall {
  id: string;
  wrong: string;
  wrongReading: string;
  wrongRomaji: string;
  correct: string;
  correctReading: string;
  correctRomaji: string;
  explanation: string;
  ruleExplanation: string;
}

export interface ComparisonRow {
  feature: string;
  thisStructure: string;
  otherStructure: string;
  notes: string;
}

export interface GrammarStructure {
  id: string;
  lessonId: number;
  symbol: string;
  title: string;
  subTitle: string;
  category: 'copula' | 'particle' | 'demonstrative' | 'adjective' | 'question';
  reading: string;
  romaji: string;
  badge: string;
  step1Intro: string;
  step2Definition: string;
  step3Formula: string;
  step4HowToBuild: string[];
  step5SimpleExamples: ExampleSentence[];
  step6NaturalExamples: ExampleSentence[];
  step7Situations: SituationalExample[];
  step8WordAnatomyNote: string;
  step9Pitfalls: Pitfall[];
  step10Comparison: {
    target: string;
    rows: ComparisonRow[];
  };
  step11NativeNuance: string;
}

export interface DeepComparisonCase {
  caseTitle: string;
  explanation: string;
  exampleA: ExampleSentence;
  exampleB: ExampleSentence;
  analysis: string;
}

export interface DeepComparison {
  id: string;
  title: string;
  japaneseTitle: string;
  badge: string;
  summary: string;
  coreDifference: string;
  dimensions: Array<{
    label: string;
    colA: string;
    colB: string;
    colC?: string;
    notes: string;
  }>;
  cases: DeepComparisonCase[];
  proTips: string[];
}

export interface ConversationLine {
  id: string;
  speaker: string;
  avatar: string;
  japanese: string;
  reading: string;
  romaji: string;
  persian: string;
  grammarPoint: string;
  audioText: string;
}

export interface ConversationScenario {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  emoji: string;
  description: string;
  characters: Array<{ name: string; role: string; avatar: string }>;
  lines: ConversationLine[];
  culturalNotes: string[];
}

export interface ExerciseItem {
  id: string;
  type: 'fill-blank' | 'multiple-choice' | 'true-false' | 'sentence-transform' | 'find-error' | 'translation';
  typeLabel: string;
  question: string;
  promptJapanese?: string;
  reading?: string;
  romaji?: string;
  options?: string[];
  correctAnswer: string | number | boolean;
  explanation: string;
  whyOthersWrong?: string[];
  hint?: string;
}

export interface LessonOverview {
  number: number;
  title: string;
  japaneseTitle: string;
  subtitle: string;
  description: string;
  structures: string[];
  status: 'active' | 'upcoming';
  category: string;
}

export interface RoadmapNode {
  id: string;
  title: string;
  persianTitle: string;
  level: number;
  description: string;
  connectedTo: string[];
  prerequisites: string[];
  examples: string;
}
