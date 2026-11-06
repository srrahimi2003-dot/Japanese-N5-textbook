import React, { useState } from 'react';
import { Sparkles, AlertTriangle, CheckSquare, Square, Lightbulb, Compass, Award } from 'lucide-react';
import { LESSON_1_SUMMARY } from '../data/lesson1Summary';

export const SummaryView: React.FC = () => {
  const [checkedTraps, setCheckedTraps] = useState<Record<string, boolean>>({});

  const toggleTrap = (id: string) => {
    setCheckedTraps(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const completedTrapsCount = Object.values(checkedTraps).filter(Boolean).length;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-linear-to-r from-stone-900 to-stone-800 text-white rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="flex items-center gap-2 text-rose-400 font-bold text-xs uppercase tracking-wider mb-2">
          <Sparkles className="w-4 h-4" />
          <span>مرور هوشمند و جمع‌بندی درس اول</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          {LESSON_1_SUMMARY.title}
        </h2>
        <p className="text-sm text-stone-300 mt-2 max-w-3xl leading-relaxed">
          {LESSON_1_SUMMARY.subtitle}
        </p>
      </div>

      {/* 4 Core Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {LESSON_1_SUMMARY.coreModules.map((mod, idx) => (
          <div key={idx} className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <span className="text-2xl p-2 rounded-xl bg-stone-100">{mod.emoji}</span>
                <h3 className="font-extrabold text-base sm:text-lg text-stone-900">
                  {mod.title}
                </h3>
              </div>

              <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
                {mod.takeaways.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2">
                    <span className="text-rose-600 font-bold mt-0.5">•</span>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-amber-50 border border-amber-200/80 rounded-xl p-3 text-xs text-amber-950 font-semibold flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-amber-600 shrink-0" />
              <span>قانون طلایی: {mod.goldenRule}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Common Pitfalls Interactive Checklist */}
      <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-100 pb-5">
          <div>
            <div className="flex items-center gap-2 text-rose-600 font-bold text-xs uppercase tracking-wider mb-1">
              <AlertTriangle className="w-4 h-4" />
              <span>چک‌لیست تله‌ها و خطاهای مرگبار آزمون</span>
            </div>
            <h3 className="text-xl font-extrabold text-stone-900">
              تله‌های گرامری که هرگز نباید در دامشان بیفتید
            </h3>
            <p className="text-xs text-stone-500 mt-1">
              موارد زیر را مرور کنید و هر موردی را که کامل بر آن مسلط شدید تیک بزنید:
            </p>
          </div>

          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-rose-50 text-rose-800 border border-rose-200 text-xs font-bold">
            <Award className="w-4 h-4 text-rose-600" />
            <span>تسلط: {completedTrapsCount} از {LESSON_1_SUMMARY.pitfallsChecklist.length}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {LESSON_1_SUMMARY.pitfallsChecklist.map(pit => {
            const isChecked = !!checkedTraps[pit.id];
            return (
              <button
                key={pit.id}
                onClick={() => toggleTrap(pit.id)}
                className={`p-3.5 rounded-xl border text-right transition-all flex items-start gap-3 ${
                  isChecked
                    ? 'bg-emerald-50/80 border-emerald-300 text-emerald-950'
                    : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
                }`}
              >
                <span className="mt-0.5 shrink-0">
                  {isChecked ? (
                    <CheckSquare className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Square className="w-4 h-4 text-stone-400" />
                  )}
                </span>
                <span className={`text-xs sm:text-sm font-medium ${isChecked ? 'line-through text-emerald-800' : ''}`}>
                  {pit.text}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
