import React from 'react';
import {
  CheckCircle2,
  Sparkles,
  BookOpen,
  AlertTriangle,
  Lightbulb,
  Table as TableIcon,
  Compass,
  ArrowRight,
  Flame,
  Check
} from 'lucide-react';
import { GrammarStructure } from '../types/grammar';
import { SentenceDisplay } from './SentenceDisplay';

interface GrammarStructureCardProps {
  structure: GrammarStructure;
  showFurigana: boolean;
  showRomaji: boolean;
  isMastered: boolean;
  onToggleMaster: (id: string) => void;
}

export const GrammarStructureCard: React.FC<GrammarStructureCardProps> = ({
  structure,
  showFurigana,
  showRomaji,
  isMastered,
  onToggleMaster,
}) => {
  return (
    <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden transition-all mb-8">
      {/* Top Header Card */}
      <div className="bg-linear-to-r from-stone-900 via-stone-800 to-stone-900 text-white p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2.5">
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-rose-600/90 text-white border border-rose-400/30">
                {structure.badge}
              </span>
              <span className="text-xs font-mono text-stone-300">
                {structure.romaji} • {structure.reading}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-jp">
              {structure.title}
            </h2>
            <p className="text-sm text-stone-300 font-medium pt-0.5">
              {structure.subTitle}
            </p>
          </div>

          {/* Mastered toggle button */}
          <button
            onClick={() => onToggleMaster(structure.id)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all self-start sm:self-center ${
              isMastered
                ? 'bg-emerald-500 text-white shadow-xs hover:bg-emerald-600'
                : 'bg-white/10 text-stone-200 hover:bg-white/20 border border-white/20'
            }`}
          >
            <CheckCircle2 className={`w-4 h-4 ${isMastered ? 'text-white' : 'text-stone-400'}`} />
            <span>{isMastered ? 'یاد گرفته‌اید ✓' : 'علامت‌گذاری به عنوان یادگرفته'}</span>
          </button>
        </div>
      </div>

      <div className="p-6 sm:p-8 space-y-8">
        {/* 1️⃣ & 2️⃣ معرفی ساده و تعریف دقیق */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-5">
            <div className="flex items-center gap-2 text-amber-900 font-bold text-sm mb-2">
              <span className="w-6 h-6 rounded-md bg-amber-200 text-amber-900 flex items-center justify-center text-xs">1</span>
              <span>معرفی ساده و شهودی</span>
            </div>
            <p className="text-sm text-stone-800 leading-relaxed font-normal">
              {structure.step1Intro}
            </p>
          </div>

          <div className="bg-blue-50/70 border border-blue-200/80 rounded-xl p-5">
            <div className="flex items-center gap-2 text-blue-900 font-bold text-sm mb-2">
              <span className="w-6 h-6 rounded-md bg-blue-200 text-blue-900 flex items-center justify-center text-xs">2</span>
              <span>تعریف دقیق و نقش گرامری در جمله</span>
            </div>
            <p className="text-sm text-stone-800 leading-relaxed font-normal">
              {structure.step2Definition}
            </p>
          </div>
        </div>

        {/* 3️⃣ & 4️⃣ فرمول ساختار و نحوه ساخت گام‌به‌گام */}
        <div className="bg-stone-900 text-white rounded-xl p-6 shadow-xs">
          <div className="flex items-center gap-2 text-rose-400 font-bold text-sm mb-3">
            <span className="w-6 h-6 rounded-md bg-rose-500/20 text-rose-300 flex items-center justify-center text-xs">3</span>
            <span>فرمول و الگوی اتصال ساختار</span>
          </div>

          <div className="bg-stone-800/90 border border-stone-700/80 rounded-lg py-3 px-4 font-mono text-base sm:text-lg text-emerald-300 font-bold text-center tracking-wide" dir="ltr">
            {structure.step3Formula}
          </div>

          <div className="mt-5 space-y-2 border-t border-stone-800 pt-4">
            <div className="text-xs font-bold text-stone-300 flex items-center gap-2">
              <span className="w-5 h-5 rounded-md bg-stone-700 text-stone-300 flex items-center justify-center text-xs">4</span>
              <span>مراحل ساخت و نکات طلایی</span>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-300 pr-2">
              {structure.step4HowToBuild.map((step, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold mt-0.5">•</span>
                  <span className="leading-relaxed">{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 5️⃣ مثال‌های پایه و شسته‌رفته */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-stone-900 font-bold text-base sm:text-lg border-r-4 border-rose-600 pr-3">
            <span>5️⃣ مثال‌های پایه و اصولی</span>
            <span className="text-xs text-stone-500 font-normal">(همراه با تلفظ صوتی و کالبدشکافی دستوری)</span>
          </div>

          <div className="space-y-3">
            {structure.step5SimpleExamples.map(example => (
              <SentenceDisplay
                key={example.id}
                sentence={example}
                showFurigana={showFurigana}
                showRomaji={showRomaji}
              />
            ))}
          </div>
        </div>

        {/* 6️⃣ مثال‌های طبیعی و زنده روزمره */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-stone-900 font-bold text-base sm:text-lg border-r-4 border-amber-600 pr-3">
            <span>6️⃣ مثال‌های زنده در محاوره ژاپنی</span>
            <span className="text-xs text-stone-500 font-normal">(زبان واقعی کوچه و بازار ژاپن)</span>
          </div>

          <div className="space-y-3">
            {structure.step6NaturalExamples.map(example => (
              <SentenceDisplay
                key={example.id}
                sentence={example}
                showFurigana={showFurigana}
                showRomaji={showRomaji}
              />
            ))}
          </div>
        </div>

        {/* 7️⃣ مثال‌های موقعیتی (Situational Scenarios) */}
        {structure.step7Situations && structure.step7Situations.length > 0 && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-stone-900 font-bold text-base sm:text-lg border-r-4 border-emerald-600 pr-3">
              <span>7️⃣ کاربرد در موقعیت‌های واقعی</span>
              <span className="text-xs text-stone-500 font-normal">(خانه، دانشگاه، خرید، رستوران...)</span>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {structure.step7Situations.map(sit => (
                <div key={sit.id} className="border border-emerald-200/70 rounded-xl bg-emerald-50/20 p-4">
                  <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm mb-1.5">
                    <span className="text-base">{sit.locationEmoji}</span>
                    <span>{sit.scenario}</span>
                  </div>
                  <p className="text-xs text-stone-600 mb-3 font-medium">
                    {sit.description}
                  </p>
                  <SentenceDisplay
                    sentence={sit.sentence}
                    showFurigana={showFurigana}
                    showRomaji={showRomaji}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 8️⃣ نکات تکمیلی کالبدشکافی */}
        {structure.step8WordAnatomyNote && (
          <div className="bg-stone-50 rounded-xl p-4 border border-stone-200">
            <div className="flex items-center gap-2 text-stone-800 font-bold text-xs mb-1.5">
              <span>8️⃣ نکته تحلیلی و تاریخی کالبدشکافی</span>
            </div>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              {structure.step8WordAnatomyNote}
            </p>
          </div>
        )}

        {/* 9️⃣ اشتباهات رایج زبان‌آموزان (Common Pitfalls) */}
        {structure.step9Pitfalls && structure.step9Pitfalls.length > 0 && (
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-rose-900 font-bold text-base sm:text-lg border-r-4 border-red-600 pr-3">
              <span>9️⃣ اشتباهات رایج زبان‌آموزان و راه‌حل منطقی</span>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {structure.step9Pitfalls.map(pit => (
                <div key={pit.id} className="border border-rose-200 rounded-xl p-4 bg-rose-50/40">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-2">
                    <div className="bg-red-100/70 text-red-950 p-2.5 rounded-lg border border-red-200 text-xs">
                      <div className="font-bold flex items-center gap-1.5 text-red-700 mb-1">
                        <span>❌ شکل نادرست:</span>
                      </div>
                      <div className="font-jp text-sm font-semibold text-red-900" dir="ltr">{pit.wrong}</div>
                      <div className="text-[11px] text-red-800/80 font-mono" dir="ltr">{pit.wrongRomaji}</div>
                    </div>

                    <div className="bg-emerald-100/70 text-emerald-950 p-2.5 rounded-lg border border-emerald-200 text-xs">
                      <div className="font-bold flex items-center gap-1.5 text-emerald-700 mb-1">
                        <span>⭕ شکل صحیح:</span>
                      </div>
                      <div className="font-jp text-sm font-semibold text-emerald-900" dir="ltr">{pit.correct}</div>
                      <div className="text-[11px] text-emerald-800/80 font-mono" dir="ltr">{pit.correctRomaji}</div>
                    </div>
                  </div>

                  <p className="text-xs font-semibold text-rose-900 mb-0.5">
                    علت خطا: {pit.explanation}
                  </p>
                  <p className="text-xs text-stone-600 font-normal">
                    {pit.ruleExplanation}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 🔟 جدول مقایسه سریع */}
        {structure.step10Comparison && (
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-stone-900 font-bold text-base sm:text-lg border-r-4 border-indigo-600 pr-3">
              <span>🔟 مقایسه کاربردی با ساختار نزدیک: {structure.step10Comparison.target}</span>
            </div>

            <div className="overflow-x-auto rounded-xl border border-stone-200">
              <table className="w-full text-xs text-right divide-y divide-stone-200">
                <thead className="bg-stone-100 text-stone-700 font-bold">
                  <tr>
                    <th className="px-4 py-2.5">معیار مقایسه</th>
                    <th className="px-4 py-2.5 text-rose-700">{structure.symbol}</th>
                    <th className="px-4 py-2.5 text-indigo-700">{structure.step10Comparison.target}</th>
                    <th className="px-4 py-2.5">توضیح و تحلیل</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 bg-white">
                  {structure.step10Comparison.rows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-stone-50">
                      <td className="px-4 py-2.5 font-bold text-stone-800">{row.feature}</td>
                      <td className="px-4 py-2.5 text-stone-700">{row.thisStructure}</td>
                      <td className="px-4 py-2.5 text-stone-700">{row.otherStructure}</td>
                      <td className="px-4 py-2.5 text-stone-500 font-normal">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 1️⃣1️⃣ نکته استفاده گویشور بومی (Native Nuance) */}
        <div className="bg-linear-to-r from-purple-50 via-rose-50 to-amber-50 rounded-xl p-5 border border-purple-200/80">
          <div className="flex items-center gap-2 text-purple-950 font-bold text-sm mb-2">
            <Flame className="w-4 h-4 text-rose-600" />
            <span>1️⃣1️⃣ زاویه دید گویشور بومی ژاپنی (Native Nuance & Reality)</span>
          </div>
          <p className="text-xs sm:text-sm text-stone-800 leading-relaxed font-normal">
            {structure.step11NativeNuance}
          </p>
        </div>
      </div>
    </div>
  );
};
