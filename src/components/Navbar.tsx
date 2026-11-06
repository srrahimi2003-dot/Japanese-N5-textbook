import React from 'react';
import { BookOpen, Scale, MessageSquareText, Dumbbell, Map, CheckCircle2, Volume2, Sparkles, Eye, Search, TrendingUp } from 'lucide-react';

interface NavbarProps {
  activeTab: 'grammar' | 'comparisons' | 'conversations' | 'exercises' | 'roadmap' | 'summary' | 'dashboard';
  setActiveTab: (tab: 'grammar' | 'comparisons' | 'conversations' | 'exercises' | 'roadmap' | 'summary' | 'dashboard') => void;
  showFurigana: boolean;
  setShowFurigana: (val: boolean) => void;
  showRomaji: boolean;
  setShowRomaji: (val: boolean) => void;
  searchQuery: string;
  setSearchQuery: (val: string) => void;
  masteredCount: number;
  totalGrammarCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  showFurigana,
  setShowFurigana,
  showRomaji,
  setShowRomaji,
  searchQuery,
  setSearchQuery,
  masteredCount,
  totalGrammarCount,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top brand & control row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between py-3 gap-3">
          {/* Logo & title */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-linear-to-br from-rose-600 to-red-700 text-white flex items-center justify-center font-bold text-xl shadow-sm shadow-rose-200 font-jp">
                日
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-lg sm:text-xl font-bold text-stone-900 tracking-tight">
                    کتاب جامع گرامر زبان ژاپنی
                  </h1>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-rose-100 text-rose-800 border border-rose-200">
                    JLPT N5
                  </span>
                </div>
                <p className="text-xs text-stone-500 font-medium">
                  درسنامه عمیق و کاربردی • درس اول: پایه‌های طبیعی جمله
                </p>
              </div>
            </div>

            {/* Progress pill on mobile */}
            <button
              onClick={() => setActiveTab('dashboard')}
              className="md:hidden flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold hover:bg-emerald-100 transition-all"
              title="مشاهده داشبورد پیشرفت"
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{masteredCount}/{totalGrammarCount}</span>
            </button>
          </div>

          {/* Quick interactive reading toggles & search */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {/* Search Input */}
            <div className="relative flex-1 sm:w-56">
              <Search className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" />
              <input
                type="text"
                placeholder="جستجوی گرامر (مثلاً だ، は...)"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full text-xs sm:text-sm pl-3 pr-9 py-1.5 rounded-lg border border-stone-200 bg-stone-50/70 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all text-stone-800 placeholder-stone-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  aria-label="پاک کردن جستجو"
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-600"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Furigana Toggle */}
            <button
              onClick={() => setShowFurigana(!showFurigana)}
              className={`flex items-center gap-1.5 text-xs font-medium px-2.5 py-1.5 rounded-lg border transition-all ${
                showFurigana
                  ? 'bg-rose-50 text-rose-700 border-rose-200 shadow-2xs'
                  : 'bg-white text-stone-600 border-stone-200 hover:bg-stone-50'
              }`}
              title="نمایش یا پنهان‌سازی تلفظ هیراگانا بالای کانجی‌ها"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>فوریگانا</span>
              <span className={`text-[10px] px-1 rounded ${showFurigana ? 'bg-rose-200/60' : 'bg-stone-100'}`}>
                {showFurigana ? 'روشن' : 'خاموش'}
              </span>
            </button>

            {/* Romaji Toggle */}
            <button
              onClick={() => setShowRomaji(!showRomaji)}
              className={`flex items-center gap-1.5 text-xs font-medium px-2.5 py-1.5 rounded-lg border transition-all ${
                showRomaji
                  ? 'bg-amber-50 text-amber-800 border-amber-200 shadow-2xs'
                  : 'bg-white text-stone-600 border-stone-200 hover:bg-stone-50'
              }`}
              title="نمایش یا پنهان‌سازی حروف لاتین (روماجی)"
            >
              <span className="font-mono text-[11px] font-bold">Aa</span>
              <span>روماجی</span>
              <span className={`text-[10px] px-1 rounded ${showRomaji ? 'bg-amber-200/60' : 'bg-stone-100'}`}>
                {showRomaji ? 'روشن' : 'خاموش'}
              </span>
            </button>

            {/* Desktop Mastered Progress Button linking to dashboard */}
            <button
              onClick={() => setActiveTab('dashboard')}
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold hover:bg-emerald-100 transition-all cursor-pointer"
              title="مشاهده داشبورد و نمودارهای پیشرفت"
            >
              <TrendingUp className="w-4 h-4 text-emerald-600" />
              <span>تسلط: {masteredCount} از {totalGrammarCount}</span>
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex space-x-1 space-x-reverse overflow-x-auto pb-2 pt-1 border-t border-stone-100 scrollbar-none" aria-label="بخش‌های کتاب">
          <button
            onClick={() => setActiveTab('grammar')}
            className={`flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-lg shrink-0 transition-all ${
              activeTab === 'grammar'
                ? 'bg-rose-600 text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>۱۲ ساختار درس اول</span>
          </button>

          <button
            onClick={() => setActiveTab('dashboard')}
            className={`flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-lg shrink-0 transition-all ${
              activeTab === 'dashboard'
                ? 'bg-rose-600 text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
            }`}
          >
            <TrendingUp className="w-4 h-4 text-rose-500" />
            <span>داشبورد پیشرفت (Recharts)</span>
          </button>

          <button
            onClick={() => setActiveTab('comparisons')}
            className={`flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-lg shrink-0 transition-all ${
              activeTab === 'comparisons'
                ? 'bg-rose-600 text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
            }`}
          >
            <Scale className="w-4 h-4" />
            <span>مقایسه‌های عمیق (は vs が و...)</span>
          </button>

          <button
            onClick={() => setActiveTab('conversations')}
            className={`flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-lg shrink-0 transition-all ${
              activeTab === 'conversations'
                ? 'bg-rose-600 text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
            }`}
          >
            <MessageSquareText className="w-4 h-4" />
            <span>مکالمه‌های واقعی روزمره</span>
          </button>

          <button
            onClick={() => setActiveTab('exercises')}
            className={`flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-lg shrink-0 transition-all ${
              activeTab === 'exercises'
                ? 'bg-rose-600 text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
            }`}
          >
            <Dumbbell className="w-4 h-4" />
            <span>تمرین‌ها و کلید تشریحی</span>
          </button>

          <button
            onClick={() => setActiveTab('summary')}
            className={`flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-lg shrink-0 transition-all ${
              activeTab === 'summary'
                ? 'bg-rose-600 text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>مرور هوشمند و تله‌ها</span>
          </button>

          <button
            onClick={() => setActiveTab('roadmap')}
            className={`flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-lg shrink-0 transition-all ${
              activeTab === 'roadmap'
                ? 'bg-rose-600 text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
            }`}
          >
            <Map className="w-4 h-4" />
            <span>نقشه جامع ۱۰ درس</span>
          </button>
        </nav>
      </div>
    </header>
  );
};
