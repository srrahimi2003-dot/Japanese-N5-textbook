import React, { useState, useEffect } from 'react';
import {
  BookOpen,
  Filter,
  Search,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ArrowRight,
  Flame,
  Award
} from 'lucide-react';
import { Navbar } from './components/Navbar';
import { GrammarStructureCard } from './components/GrammarStructureCard';
import { DeepComparisonsView } from './components/DeepComparisonsView';
import { ConversationsView } from './components/ConversationsView';
import { ExercisesView } from './components/ExercisesView';
import { SummaryView } from './components/SummaryView';
import { RoadmapView } from './components/RoadmapView';
import { ProgressDashboard } from './components/ProgressDashboard';
import { LESSON_1_STRUCTURES } from './data/lesson1Grammar';
import { filterStructures } from './utils/grammarLogic';

export default function App() {
  const [activeTab, setActiveTab] = useState<'grammar' | 'comparisons' | 'conversations' | 'exercises' | 'roadmap' | 'summary' | 'dashboard'>('grammar');
  const [showFurigana, setShowFurigana] = useState<boolean>(true);
  const [showRomaji, setShowRomaji] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [selectedStructureId, setSelectedStructureId] = useState<string>(LESSON_1_STRUCTURES[0].id);
  const [masteredIds, setMasteredIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('nihongo_mastered_ids');
      return saved ? JSON.parse(saved) : ['da', 'desu'];
    } catch {
      return ['da', 'desu'];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('nihongo_mastered_ids', JSON.stringify(masteredIds));
    } catch {
      // Ignore localStorage errors
    }
  }, [masteredIds]);

  const toggleMaster = (id: string) => {
    setMasteredIds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const filteredList = filterStructures(LESSON_1_STRUCTURES, searchQuery, categoryFilter);

  // Keep selected structure valid
  const currentStructure = filteredList.find(s => s.id === selectedStructureId) || filteredList[0] || LESSON_1_STRUCTURES[0];

  const currentIndex = LESSON_1_STRUCTURES.findIndex(s => s.id === currentStructure.id);
  const prevStructure = currentIndex > 0 ? LESSON_1_STRUCTURES[currentIndex - 1] : null;
  const nextStructure = currentIndex < LESSON_1_STRUCTURES.length - 1 ? LESSON_1_STRUCTURES[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-stone-100/60 text-stone-900 flex flex-col font-sans">
      {/* Top Main Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        showFurigana={showFurigana}
        setShowFurigana={setShowFurigana}
        showRomaji={showRomaji}
        setShowRomaji={setShowRomaji}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        masteredCount={masteredIds.length}
        totalGrammarCount={LESSON_1_STRUCTURES.length}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Tab 1: Grammar Explorer */}
        {activeTab === 'grammar' && (
          <div className="space-y-6">
            {/* Top Lesson 1 Intro Card */}
            <div className="bg-linear-to-r from-stone-900 via-stone-800 to-stone-900 text-white rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-rose-600 text-white">
                      Lesson 1
                    </span>
                    <span className="text-xs text-stone-400 font-jp" dir="ltr">
                      自然な日本語の基礎文型 (12 Structures)
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                    مبانی و ساختارهای بنیادین جمله ژاپنی
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-300 max-w-2xl leading-relaxed pt-1">
                    درسنامه فوق‌جامع ۱۲ ساختار کلیدی N5: از کاپولاهای だ و です، ذرات は، も، の تا سیستم اشاره سه‌گانه これ・それ・あれ و صفت‌های نوع い و な.
                  </p>
                </div>

                {/* Quick stats badge linking to dashboard */}
                <button
                  onClick={() => setActiveTab('dashboard')}
                  className="flex items-center gap-3 bg-white/10 hover:bg-white/15 px-4 py-2.5 rounded-xl border border-white/10 shrink-0 self-start lg:self-center transition-all cursor-pointer text-right group"
                  title="مشاهده نمودارها و داشبورد پیشرفت Recharts"
                >
                  <Award className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
                  <div className="text-xs">
                    <span className="text-stone-300 block">پیشرفت درس اول (مشاهده نمودار)</span>
                    <span className="text-white font-bold">{masteredIds.length} از ۱۲ ساختار مسلط شده ↗</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Quick category filter pills */}
            <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3 rounded-xl border border-stone-200">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-xs font-bold text-stone-500 ml-1">دسته‌بندی:</span>
                {[
                  { id: 'all', label: 'همه ۱۲ مورد' },
                  { id: 'copula', label: 'ربط‌دهنده‌ها (だ/です)' },
                  { id: 'particle', label: 'ذرات (は/も/の)' },
                  { id: 'demonstrative', label: 'اشاره (これ/それ/あれ)' },
                  { id: 'adjective', label: 'صفت‌ها (い/な/いい)' },
                  { id: 'question', label: 'پرسش (か)' },
                ].map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setCategoryFilter(cat.id)}
                    className={`text-xs font-semibold px-2.5 py-1.5 rounded-lg border transition-all ${
                      categoryFilter === cat.id
                        ? 'bg-rose-600 text-white border-rose-600'
                        : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {searchQuery && (
                <div className="text-xs font-semibold text-rose-700">
                  یافته‌ها برای «{searchQuery}»: {filteredList.length} مورد
                </div>
              )}
            </div>

            {/* 12 Structures Quick Switcher Horizontal Pills */}
            <div className="overflow-x-auto pb-2 scrollbar-none">
              <div className="flex space-x-2 space-x-reverse min-w-max">
                {LESSON_1_STRUCTURES.map((st, idx) => {
                  const isSelected = st.id === currentStructure.id;
                  const isDone = masteredIds.includes(st.id);
                  return (
                    <button
                      key={st.id}
                      onClick={() => setSelectedStructureId(st.id)}
                      className={`px-3 py-2 rounded-xl text-xs font-bold border transition-all flex items-center gap-2 ${
                        isSelected
                          ? 'bg-stone-900 text-white border-stone-900 shadow-xs ring-1 ring-stone-900'
                          : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
                      }`}
                    >
                      <span className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-jp font-bold ${
                        isSelected ? 'bg-rose-600 text-white' : 'bg-stone-100 text-stone-800'
                      }`}>
                        {st.symbol.length > 2 ? st.symbol.slice(0, 2) : st.symbol}
                      </span>
                      <span>{st.romaji}</span>
                      {isDone && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Selected Grammar Structure Full 11-Step Card */}
            {currentStructure ? (
              <div>
                <GrammarStructureCard
                  structure={currentStructure}
                  showFurigana={showFurigana}
                  showRomaji={showRomaji}
                  isMastered={masteredIds.includes(currentStructure.id)}
                  onToggleMaster={toggleMaster}
                />

                {/* Bottom Navigation between structures */}
                <div className="flex items-center justify-between gap-4 mt-6">
                  {prevStructure ? (
                    <button
                      onClick={() => setSelectedStructureId(prevStructure.id)}
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-stone-200 text-stone-700 hover:bg-stone-50 text-xs sm:text-sm font-bold shadow-2xs transition-all"
                    >
                      <ChevronRight className="w-4 h-4" />
                      <span>قبلی: {prevStructure.symbol} ({prevStructure.romaji})</span>
                    </button>
                  ) : <div />}

                  {nextStructure ? (
                    <button
                      onClick={() => setSelectedStructureId(nextStructure.id)}
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs sm:text-sm font-bold shadow-2xs transition-all"
                    >
                      <span>بعدی: {nextStructure.symbol} ({nextStructure.romaji})</span>
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      onClick={() => setActiveTab('comparisons')}
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold shadow-2xs transition-all"
                    >
                      <span>ورود به بخش مقایسه‌های عمیق</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <div className="text-center py-16 bg-white rounded-2xl border border-stone-200">
                <p className="text-stone-500 font-medium">ساختاری با این مشخصات یافت نشد.</p>
                <button
                  onClick={() => { setSearchQuery(''); setCategoryFilter('all'); }}
                  className="mt-3 text-xs font-bold text-rose-600 underline"
                >
                  پاک کردن فیلترها
                </button>
              </div>
            )}
          </div>
        )}

        {/* Tab: Progress Dashboard with Recharts */}
        {activeTab === 'dashboard' && (
          <ProgressDashboard
            masteredIds={masteredIds}
            onToggleMaster={toggleMaster}
            onNavigateToLesson={() => setActiveTab('grammar')}
          />
        )}

        {/* Tab 2: Deep Comparisons */}
        {activeTab === 'comparisons' && (
          <DeepComparisonsView
            showFurigana={showFurigana}
            showRomaji={showRomaji}
          />
        )}

        {/* Tab 3: Real Japanese Conversations */}
        {activeTab === 'conversations' && (
          <ConversationsView
            showFurigana={showFurigana}
            showRomaji={showRomaji}
          />
        )}

        {/* Tab 4: Interactive Exercises & Answer Key */}
        {activeTab === 'exercises' && (
          <ExercisesView />
        )}

        {/* Tab 5: Summary & Common Pitfalls Checklist */}
        {activeTab === 'summary' && (
          <SummaryView />
        )}

        {/* Tab 6: 10-Lesson Learning Roadmap */}
        {activeTab === 'roadmap' && (
          <RoadmapView onSelectLesson1={() => setActiveTab('grammar')} />
        )}
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-stone-200 bg-white py-6 text-stone-500 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-bold text-stone-800">کتاب جامع گرامر زبان ژاپنی</span>
            <span>•</span>
            <span>JLPT N5 Mastery Textbook</span>
          </div>
          <p className="text-stone-400">
            طراحی شده با تلفظ صوتی هوشمند، فوریگانا و تحلیل خط‌به‌خط ساختارها
          </p>
        </div>
      </footer>
    </div>
  );
}
