import React, { useState } from 'react';
import { Scale, CheckCircle2, ChevronRight, Sparkles, BookOpen } from 'lucide-react';
import { LESSON_1_COMPARISONS } from '../data/lesson1Comparisons';
import { SentenceDisplay } from './SentenceDisplay';

interface DeepComparisonsViewProps {
  showFurigana: boolean;
  showRomaji: boolean;
}

export const DeepComparisonsView: React.FC<DeepComparisonsViewProps> = ({
  showFurigana,
  showRomaji,
}) => {
  const [selectedCompId, setSelectedCompId] = useState<string>(LESSON_1_COMPARISONS[0].id);

  const activeComparison = LESSON_1_COMPARISONS.find(c => c.id === selectedCompId) || LESSON_1_COMPARISONS[0];

  return (
    <div className="space-y-8">
      {/* Introduction banner */}
      <div className="bg-linear-to-r from-stone-900 to-stone-800 text-white rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="flex items-center gap-2.5 text-rose-400 font-bold text-xs uppercase tracking-wider mb-2">
          <Scale className="w-4 h-4" />
          <span>بخش مقایسه‌ای ویژه درس اول</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          کالبدشکافی ساختارهای دوقلو و مشابه‌نما
        </h2>
        <p className="text-sm text-stone-300 mt-2 max-w-3xl leading-relaxed">
          بزرگ‌ترین مشکل زبان‌آموزان ترجمه سطحی به زبان‌های دیگر است. در این بخش، تفاوت عمیق، روان‌شناختی و کاربردی ساختارهایی را یاد می‌گیرید که کتاب‌های عادی از کنار آنها سطحی می‌گذرند.
        </p>
      </div>

      {/* Comparison Selector Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {LESSON_1_COMPARISONS.map(comp => (
          <button
            key={comp.id}
            onClick={() => setSelectedCompId(comp.id)}
            className={`p-3.5 rounded-xl border text-right transition-all flex flex-col justify-between ${
              selectedCompId === comp.id
                ? 'bg-rose-50 border-rose-300 text-rose-950 shadow-xs ring-1 ring-rose-400'
                : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-50'
            }`}
          >
            <div>
              <span className="text-[11px] font-semibold text-rose-600 block mb-1">
                {comp.badge}
              </span>
              <span className="text-sm font-bold block line-clamp-1">
                {comp.title.split(':')[1] || comp.title}
              </span>
            </div>
            <span className="text-xs font-jp text-stone-400 block mt-2" dir="ltr">
              {comp.japaneseTitle}
            </span>
          </button>
        ))}
      </div>

      {/* Active Comparison Deep Container */}
      <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6 sm:p-8 space-y-8">
        {/* Title & Core Distinction */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-100 text-rose-800 border border-rose-200">
              {activeComparison.badge}
            </span>
            <span className="text-xs font-jp text-stone-500 font-semibold" dir="ltr">
              {activeComparison.japaneseTitle}
            </span>
          </div>
          <h3 className="text-2xl font-black text-stone-900 tracking-tight">
            {activeComparison.title}
          </h3>
          <p className="text-sm text-stone-700 mt-2 leading-relaxed">
            {activeComparison.summary}
          </p>

          <div className="mt-4 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 text-sm font-semibold flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <span className="font-extrabold text-amber-900 ml-1">تفاوت جوهری:</span>
              {activeComparison.coreDifference}
            </p>
          </div>
        </div>

        {/* Detailed Comparison Table */}
        <div className="space-y-3">
          <h4 className="text-base font-bold text-stone-900 border-r-4 border-rose-600 pr-3">
            جدول تطبیقی ابعاد گرامری و مکالمه‌ای
          </h4>
          <div className="overflow-x-auto rounded-xl border border-stone-200">
            <table className="w-full text-xs sm:text-sm text-right divide-y divide-stone-200">
              <thead className="bg-stone-100 text-stone-700 font-bold">
                <tr>
                  <th className="px-4 py-3">محور مقایسه</th>
                  <th className="px-4 py-3 text-rose-700">مولفه اول</th>
                  <th className="px-4 py-3 text-indigo-700">مولفه دوم</th>
                  {activeComparison.dimensions[0]?.colC && (
                    <th className="px-4 py-3 text-emerald-700">مولفه سوم</th>
                  )}
                  <th className="px-4 py-3">نکته طلایی</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 bg-white">
                {activeComparison.dimensions.map((dim, idx) => (
                  <tr key={idx} className="hover:bg-stone-50/70">
                    <td className="px-4 py-3 font-bold text-stone-900">{dim.label}</td>
                    <td className="px-4 py-3 text-stone-700 leading-relaxed">{dim.colA}</td>
                    <td className="px-4 py-3 text-stone-700 leading-relaxed">{dim.colB}</td>
                    {dim.colC && (
                      <td className="px-4 py-3 text-stone-700 leading-relaxed">{dim.colC}</td>
                    )}
                    <td className="px-4 py-3 text-stone-500 text-xs font-normal">{dim.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Real Analytical Cases */}
        <div className="space-y-6">
          <h4 className="text-base font-bold text-stone-900 border-r-4 border-amber-600 pr-3">
            سناریوهای واقعی مقایسه در میدان عمل
          </h4>

          {activeComparison.cases.map((cs, idx) => (
            <div key={idx} className="bg-stone-50 rounded-xl p-5 border border-stone-200 space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-stone-800 text-white flex items-center justify-center text-xs font-bold">
                  {idx + 1}
                </span>
                <h5 className="font-bold text-stone-900 text-sm sm:text-base">
                  {cs.caseTitle}
                </h5>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {cs.explanation}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <span className="text-xs font-bold text-rose-700">حالت الف:</span>
                  <SentenceDisplay
                    sentence={cs.exampleA}
                    showFurigana={showFurigana}
                    showRomaji={showRomaji}
                  />
                </div>
                <div className="space-y-1.5">
                  <span className="text-xs font-bold text-indigo-700">حالت ب:</span>
                  <SentenceDisplay
                    sentence={cs.exampleB}
                    showFurigana={showFurigana}
                    showRomaji={showRomaji}
                  />
                </div>
              </div>

              <div className="bg-white p-3 rounded-lg border border-stone-200 text-xs text-stone-700 font-medium">
                <span className="font-bold text-stone-900 ml-1">💡 تحلیل تفاوت:</span>
                {cs.analysis}
              </div>
            </div>
          ))}
        </div>

        {/* Pro Tips */}
        <div className="bg-stone-900 text-white rounded-xl p-6">
          <div className="flex items-center gap-2 text-rose-400 font-bold text-sm mb-3">
            <Sparkles className="w-4 h-4" />
            <span>نکات حرفه‌ای اساتید زبان ژاپنی (Master Pro Tips)</span>
          </div>
          <ul className="space-y-2 text-xs sm:text-sm text-stone-300">
            {activeComparison.proTips.map((tip, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-rose-400 font-bold mt-0.5">•</span>
                <span className="leading-relaxed">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
