import React, { useState } from 'react';
import { Dumbbell, Key, CheckCircle, XCircle, HelpCircle, RotateCcw, Sparkles, AlertCircle } from 'lucide-react';
import { ExerciseItem } from '../types/grammar';
import { LESSON_1_EXERCISES } from '../data/lesson1Exercises';
import { verifyAnswer } from '../utils/grammarLogic';

export const ExercisesView: React.FC = () => {
  const [viewMode, setViewMode] = useState<'practice' | 'answer-key'>('practice');
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState<Record<string, boolean>>({});
  const [showHints, setShowHints] = useState<Record<string, boolean>>({});
  const [filterType, setFilterType] = useState<string>('all');

  const filteredExercises = filterType === 'all'
    ? LESSON_1_EXERCISES
    : LESSON_1_EXERCISES.filter(ex => ex.type === filterType);

  const handleSelectAnswer = (id: string, ans: string) => {
    setUserAnswers(prev => ({ ...prev, [id]: ans }));
  };

  const handleCheckAnswer = (id: string) => {
    setShowResults(prev => ({ ...prev, [id]: true }));
  };

  const handleToggleHint = (id: string) => {
    setShowHints(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleReset = () => {
    setUserAnswers({});
    setShowResults({});
    setShowHints({});
  };

  const solvedCount = Object.keys(showResults).length;
  const correctCount = Object.keys(showResults).filter(id => {
    const item = LESSON_1_EXERCISES.find(ex => ex.id === id);
    return item && verifyAnswer(userAnswers[id], item.correctAnswer);
  }).length;

  return (
    <div className="space-y-8">
      {/* Intro Banner */}
      <div className="bg-linear-to-r from-stone-900 to-stone-800 text-white rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-rose-400 font-bold text-xs uppercase tracking-wider mb-2">
              <Dumbbell className="w-4 h-4" />
              <span>کارگاه تثبیت و آزمون یادگیری درس اول</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              تمرین‌های هدفمند و کلید پاسخ تحلیلی
            </h2>
            <p className="text-sm text-stone-300 mt-2 max-w-2xl leading-relaxed">
              تمرین‌ها بدون یادگیری دلایل اشتباه گزینه‌ها بی‌فایده‌اند. ابتدا بدون نگاه کردن به پاسخ‌ها تمرین کنید، سپس کلید تشریحی را موشکافی نمایید.
            </p>
          </div>

          {/* Mode Switcher Buttons */}
          <div className="flex items-center bg-stone-800/80 p-1.5 rounded-xl border border-stone-700 shrink-0 self-start sm:self-center">
            <button
              onClick={() => setViewMode('practice')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                viewMode === 'practice'
                  ? 'bg-rose-600 text-white shadow-xs'
                  : 'text-stone-300 hover:text-white'
              }`}
            >
              <Dumbbell className="w-4 h-4" />
              <span>حل تعاملی تمرین‌ها</span>
            </button>
            <button
              onClick={() => setViewMode('answer-key')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                viewMode === 'answer-key'
                  ? 'bg-rose-600 text-white shadow-xs'
                  : 'text-stone-300 hover:text-white'
              }`}
            >
              <Key className="w-4 h-4" />
              <span>کلید تشریحی (Answer Key)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Practice Mode Controls & Score */}
      {viewMode === 'practice' && (
        <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-4 rounded-xl border border-stone-200">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-stone-600">دسته‌بندی تمرین:</span>
            {[
              { id: 'all', label: 'همه سوالات' },
              { id: 'fill-blank', label: 'جای خالی' },
              { id: 'multiple-choice', label: 'چهارگزینه‌ای' },
              { id: 'true-false', label: 'درست/غلط' },
              { id: 'find-error', label: 'پیدا کردن خطا' },
              { id: 'translation', label: 'ترجمه' }
            ].map(type => (
              <button
                key={type.id}
                onClick={() => setFilterType(type.id)}
                className={`text-xs font-semibold px-2.5 py-1.5 rounded-lg border transition-all ${
                  filterType === type.id
                    ? 'bg-stone-900 text-white border-stone-900'
                    : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="text-xs sm:text-sm font-bold text-stone-800">
              پاسخ‌داده: <span className="text-rose-600">{solvedCount}</span> از {LESSON_1_EXERCISES.length}
              {solvedCount > 0 && (
                <span className="mr-2 text-emerald-700">({correctCount} صحیح)</span>
              )}
            </div>
            {solvedCount > 0 && (
              <button
                onClick={handleReset}
                className="flex items-center gap-1 text-xs text-stone-500 hover:text-stone-800 font-semibold"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>شروع مجدد</span>
              </button>
            )}
          </div>
        </div>
      )}

      {/* Mode 1: Practice Interactive Questions */}
      {viewMode === 'practice' && (
        <div className="space-y-6">
          {filteredExercises.map((exercise, index) => {
            const isChecked = showResults[exercise.id];
            const chosen = userAnswers[exercise.id];
            const isCorrect = isChecked && verifyAnswer(chosen, exercise.correctAnswer);

            return (
              <div
                key={exercise.id}
                className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6 space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-stone-900 text-white flex items-center justify-center text-xs font-bold font-mono">
                      {index + 1}
                    </span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-stone-100 text-stone-700">
                      {exercise.typeLabel}
                    </span>
                  </div>

                  {exercise.hint && !isChecked && (
                    <button
                      onClick={() => handleToggleHint(exercise.id)}
                      className="flex items-center gap-1 text-xs font-semibold text-amber-700 hover:text-amber-800"
                    >
                      <HelpCircle className="w-3.5 h-3.5" />
                      <span>{showHints[exercise.id] ? 'پنهان کردن راهنما' : 'راهنمای سوال'}</span>
                    </button>
                  )}
                </div>

                {/* Question and Prompt */}
                <div>
                  <h4 className="text-base font-bold text-stone-900 mb-2">
                    {exercise.question}
                  </h4>
                  {exercise.promptJapanese && (
                    <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200">
                      <div className="text-lg font-bold font-jp text-stone-900" dir="ltr">
                        {exercise.promptJapanese}
                      </div>
                      {exercise.reading && (
                        <div className="text-xs font-jp text-stone-500 mt-1" dir="ltr">
                          {exercise.reading}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Hint if active */}
                {showHints[exercise.id] && exercise.hint && (
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-xs text-amber-900 font-medium">
                    💡 <span className="font-bold">راهنمایی:</span> {exercise.hint}
                  </div>
                )}

                {/* Options */}
                {exercise.options && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {exercise.options.map((opt, optIdx) => {
                      const isSelected = chosen === opt;
                      let btnStyle = 'bg-stone-50 border-stone-200 text-stone-800 hover:bg-stone-100';

                      if (isChecked) {
                        if (opt === String(exercise.correctAnswer)) {
                          btnStyle = 'bg-emerald-100 border-emerald-400 text-emerald-950 font-bold';
                        } else if (isSelected && !isCorrect) {
                          btnStyle = 'bg-rose-100 border-rose-400 text-rose-950 line-through';
                        }
                      } else if (isSelected) {
                        btnStyle = 'bg-rose-50 border-rose-400 text-rose-900 font-bold ring-1 ring-rose-400';
                      }

                      return (
                        <button
                          key={optIdx}
                          disabled={isChecked}
                          onClick={() => handleSelectAnswer(exercise.id, opt)}
                          className={`p-3 rounded-xl border text-right transition-all text-xs sm:text-sm font-medium ${btnStyle}`}
                        >
                          <span className="font-mono ml-2 text-stone-400 font-bold">{optIdx + 1}.</span>
                          <span>{opt}</span>
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* Submit button */}
                {!isChecked && (
                  <div className="pt-2">
                    <button
                      disabled={!chosen}
                      onClick={() => handleCheckAnswer(exercise.id)}
                      className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                        chosen
                          ? 'bg-rose-600 text-white hover:bg-rose-700 shadow-xs'
                          : 'bg-stone-100 text-stone-400 cursor-not-allowed'
                      }`}
                    >
                      بررسی پاسخ و دیدن تحلیل
                    </button>
                  </div>
                )}

                {/* Detailed Feedback on checked */}
                {isChecked && (
                  <div className={`mt-4 p-4 rounded-xl border space-y-3 ${
                    isCorrect
                      ? 'bg-emerald-50/80 border-emerald-300'
                      : 'bg-rose-50/80 border-rose-300'
                  }`}>
                    <div className="flex items-center gap-2 font-bold text-sm">
                      {isCorrect ? (
                        <>
                          <CheckCircle className="w-5 h-5 text-emerald-600" />
                          <span className="text-emerald-900">آفرین! پاسخ شما کاملاً درست است.</span>
                        </>
                      ) : (
                        <>
                          <XCircle className="w-5 h-5 text-rose-600" />
                          <span className="text-rose-900">
                            پاسخ نادرست است. پاسخ صحیح: «{String(exercise.correctAnswer)}»
                          </span>
                        </>
                      )}
                    </div>

                    <p className="text-xs sm:text-sm text-stone-800 leading-relaxed font-medium">
                      {exercise.explanation}
                    </p>

                    {exercise.whyOthersWrong && exercise.whyOthersWrong.length > 0 && (
                      <div className="pt-2 border-t border-stone-200/60">
                        <span className="text-xs font-bold text-stone-700 block mb-1">
                          چرا گزینه‌های دیگر نادرست هستند؟
                        </span>
                        <ul className="space-y-1 text-xs text-stone-600">
                          {exercise.whyOthersWrong.map((why, wIdx) => (
                            <li key={wIdx} className="flex items-start gap-1.5">
                              <span className="text-rose-500 font-bold">•</span>
                              <span>{why}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Mode 2: Dedicated Answer Key */}
      {viewMode === 'answer-key' && (
        <div className="space-y-6">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs sm:text-sm text-amber-900 font-medium">
            🔑 <span className="font-bold">کلید تشریحی جامع:</span> در این بخش تمام پاسخ‌های تمرین‌ها همراه با علت صحت و تحلیل خطای گزینه‌های انحرافی ارائه شده است.
          </div>

          {LESSON_1_EXERCISES.map((exercise, index) => (
            <div
              key={exercise.id}
              className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6 space-y-4"
            >
              <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-stone-900 text-white flex items-center justify-center text-xs font-bold font-mono">
                    {index + 1}
                  </span>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-stone-100 text-stone-700">
                    {exercise.typeLabel}
                  </span>
                </div>
                <div className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-200">
                  پاسخ صحیح: {String(exercise.correctAnswer)}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-stone-900 text-sm sm:text-base">
                  {exercise.question}
                </h4>
                {exercise.promptJapanese && (
                  <p className="text-sm font-jp font-semibold text-stone-600 mt-1" dir="ltr">
                    {exercise.promptJapanese}
                  </p>
                )}
              </div>

              {/* Explanation of why correct */}
              <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-xl p-4 text-xs sm:text-sm text-emerald-950 font-normal leading-relaxed">
                <div className="font-bold text-emerald-900 mb-1 flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>دلیل صحت پاسخ:</span>
                </div>
                {exercise.explanation}
              </div>

              {/* Why others are wrong */}
              {exercise.whyOthersWrong && exercise.whyOthersWrong.length > 0 && (
                <div className="bg-rose-50/50 border border-rose-200/70 rounded-xl p-4 text-xs text-rose-950 space-y-1.5">
                  <div className="font-bold text-rose-900 mb-1 flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4 text-rose-600" />
                    <span>کالبدشکافی خطای سایر گزینه‌ها:</span>
                  </div>
                  <ul className="space-y-1.5 pr-2">
                    {exercise.whyOthersWrong.map((why, wIdx) => (
                      <li key={wIdx} className="flex items-start gap-1.5 leading-relaxed">
                        <span className="text-rose-500 font-bold">•</span>
                        <span>{why}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
