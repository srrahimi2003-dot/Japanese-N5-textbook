import React, { useState } from 'react';
import { Map, ArrowDown, ChevronRight, CheckCircle2, Lock, Sparkles, BookOpen } from 'lucide-react';
import { LESSONS_LIST, ROADMAP_NODES } from '../data/roadmapData';

interface RoadmapViewProps {
  onSelectLesson1: () => void;
}

export const RoadmapView: React.FC<RoadmapViewProps> = ({ onSelectLesson1 }) => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>(ROADMAP_NODES[0].id);

  const activeNode = ROADMAP_NODES.find(n => n.id === selectedNodeId) || ROADMAP_NODES[0];

  return (
    <div className="space-y-8">
      {/* Intro Banner */}
      <div className="bg-linear-to-r from-stone-900 to-stone-800 text-white rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="flex items-center gap-2 text-rose-400 font-bold text-xs uppercase tracking-wider mb-2">
          <Map className="w-4 h-4" />
          <span>بخش ۱ — نقشه کلی یادگیری و اتصالات گرامری (Curriculum Roadmap)</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          معماری کل ۱۰ درس و نقشه ذهنی پیش‌نیازها
        </h2>
        <p className="text-sm text-stone-300 mt-2 max-w-3xl leading-relaxed">
          گرامر ژاپنی یک سیستم آجری است؛ هر ساختار جدید بر دوش ساختارهای قبلی سوار می‌شود. در این نقشه می‌بینید که چگونه از مبانی درس اول به قله‌های بیان احساس و دادوستد در درس دهم صعود می‌کنید.
        </p>
      </div>

      {/* Visual Mental Map Stream */}
      <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between border-b border-stone-100 pb-4">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-stone-900">
              جریان منطقی اتصال مفاهیم (Grammar Connecting Flow)
            </h3>
            <p className="text-xs text-stone-500 mt-0.5">
              روی هر مرحله کلیک کنید تا نقش و مثال پیوندی آن را ببینید:
            </p>
          </div>
        </div>

        {/* Horizontal / Wrapped Stages Flow */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 py-2">
          {ROADMAP_NODES.map((node, idx) => {
            const isSelected = selectedNodeId === node.id;
            return (
              <React.Fragment key={node.id}>
                <button
                  onClick={() => setSelectedNodeId(node.id)}
                  className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-bold border transition-all flex items-center gap-2 ${
                    isSelected
                      ? 'bg-rose-600 text-white border-rose-600 shadow-sm scale-105'
                      : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                  }`}
                >
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono ${
                    isSelected ? 'bg-white text-rose-700 font-bold' : 'bg-stone-200 text-stone-700'
                  }`}>
                    {idx + 1}
                  </span>
                  <span>{node.title.split(' ')[0]}</span>
                </button>
                {idx < ROADMAP_NODES.length - 1 && (
                  <span className="text-stone-300 font-bold text-xs hidden sm:inline">←</span>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Selected Stage Detail Card */}
        <div className="bg-stone-50 rounded-xl p-5 border border-stone-200 space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="font-extrabold text-base text-stone-900">
              {activeNode.title} — <span className="text-rose-700 text-sm">{activeNode.persianTitle}</span>
            </h4>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-stone-200 text-stone-700">
              سطح یادگیری {activeNode.level}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal">
            {activeNode.description}
          </p>

          <div className="pt-2 border-t border-stone-200/60 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
            <div className="text-stone-600">
              <span className="font-bold text-stone-800 ml-1">نمونه پیوند عملی:</span>
              <span className="font-jp font-bold text-stone-900" dir="ltr">{activeNode.examples}</span>
            </div>
            {activeNode.connectedTo.length > 0 && (
              <div className="text-stone-500">
                <span>پیش‌نیاز مرحله بعدی: {activeNode.connectedTo.join('، ')}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 10 Lessons Complete Book Overview */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-extrabold text-stone-900">
            فهرست جامع ۱۰ درس کتاب آموزشی گرامر ژاپنی
          </h3>
          <span className="text-xs font-semibold text-stone-500">
            بر اساس سرفصل رسمی JLPT N5
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {LESSONS_LIST.map(lesson => (
            <div
              key={lesson.number}
              className={`rounded-2xl border p-5 transition-all flex flex-col justify-between ${
                lesson.status === 'active'
                  ? 'bg-white border-rose-300 shadow-sm ring-1 ring-rose-200'
                  : 'bg-stone-50/70 border-stone-200/90 text-stone-600'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold font-mono ${
                      lesson.status === 'active'
                        ? 'bg-rose-600 text-white'
                        : 'bg-stone-200 text-stone-700'
                    }`}>
                      {lesson.number}
                    </span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-stone-100 text-stone-700">
                      {lesson.category}
                    </span>
                  </div>

                  {lesson.status === 'active' ? (
                    <span className="text-xs font-bold text-rose-700 bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">
                      درس فعال در حال مطالعه ✓
                    </span>
                  ) : (
                    <span className="text-xs font-medium text-stone-400 flex items-center gap-1">
                      <Lock className="w-3 h-3" />
                      <span>درس بعدی</span>
                    </span>
                  )}
                </div>

                <h4 className="font-bold text-base text-stone-900">
                  {lesson.title}
                </h4>
                <p className="text-xs font-jp text-stone-400 mt-0.5" dir="ltr">
                  {lesson.japaneseTitle} ({lesson.subtitle})
                </p>

                <p className="text-xs text-stone-600 mt-2.5 leading-relaxed">
                  {lesson.description}
                </p>

                {/* Structure pills */}
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {lesson.structures.map((st, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white border border-stone-200 text-stone-700 font-medium"
                      dir="ltr"
                    >
                      {st}
                    </span>
                  ))}
                </div>
              </div>

              {lesson.status === 'active' && (
                <div className="mt-4 pt-3 border-t border-rose-100">
                  <button
                    onClick={onSelectLesson1}
                    className="w-full flex items-center justify-center gap-2 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs transition-all shadow-xs"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>ورود به مطالعه عمیق ۱۲ ساختار درس اول</span>
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
