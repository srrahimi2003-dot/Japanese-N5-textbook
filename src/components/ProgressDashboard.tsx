import React, { useState } from 'react';
import {
  TrendingUp,
  Award,
  BookOpen,
  Calendar,
  CheckCircle2,
  Clock,
  Sparkles,
  Zap,
  BarChart2,
  PieChart as PieChartIcon,
  Layers,
  ArrowUpRight,
  ShieldCheck,
  ChevronLeft
} from 'lucide-react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';
import {
  generateTimelineData,
  calculateLessonStats,
  calculateCategoryStats,
  TOTAL_CURRICULUM_STRUCTURES
} from '../utils/dashboardLogic';

interface ProgressDashboardProps {
  masteredIds: string[];
  onToggleMaster: (id: string) => void;
  onNavigateToLesson: () => void;
}

export const ProgressDashboard: React.FC<ProgressDashboardProps> = ({
  masteredIds,
  onNavigateToLesson,
}) => {
  const [timeRange, setTimeRange] = useState<'7days' | '14days'>('7days');
  const [chartType, setChartType] = useState<'timeline' | 'lessons' | 'categories'>('timeline');

  // Compute live data
  const totalMastered = masteredIds.length;
  const readinessPercent = Math.min(100, Math.round((totalMastered / TOTAL_CURRICULUM_STRUCTURES) * 100));
  const timelineData = generateTimelineData(totalMastered);
  const lessonStats = calculateLessonStats(masteredIds);
  const categoryStats = calculateCategoryStats(masteredIds);

  const lesson1Stat = lessonStats.find(l => l.lessonNumber === 1);
  const lesson1Percent = lesson1Stat ? lesson1Stat.percentage : 0;

  // Custom Persian tooltip for Recharts
  const CustomTimelineTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-stone-900 text-white p-3 rounded-xl shadow-lg border border-stone-800 text-xs space-y-1 text-right">
          <div className="font-bold text-stone-200 border-b border-stone-800 pb-1">
            {label} ({payload[0].payload.date})
          </div>
          <div className="text-rose-400 font-semibold">
            مجموع ساختارهای مسلط‌شده: {payload[0].value} مورد
          </div>
          {payload[1] && (
            <div className="text-amber-400">
              مدت مطالعه روزانه: {payload[1].value} دقیقه
            </div>
          )}
        </div>
      );
    }
    return null;
  };

  const CustomLessonTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-stone-900 text-white p-3 rounded-xl shadow-lg border border-stone-800 text-xs space-y-1 text-right max-w-xs">
          <div className="font-bold text-stone-200 border-b border-stone-800 pb-1">
            {data.shortTitle}: {data.title}
          </div>
          <div className="text-emerald-400 font-semibold">
            مسلط‌شده: {data.masteredCount} از {data.targetCount} ({data.percentage}٪)
          </div>
          <div className="text-stone-400 text-[11px]">
            وضعیت: {data.status === 'mastered' ? 'تکمیل ۱۰۰٪' : data.status === 'in-progress' ? 'در حال یادگیری' : 'شروع نشده'}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-8">
      {/* Intro Header */}
      <div className="bg-linear-to-r from-stone-900 via-stone-800 to-stone-900 text-white rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-rose-400 font-bold text-xs uppercase tracking-wider mb-2">
              <TrendingUp className="w-4 h-4" />
              <span>داشبورد بصری تحلیل و پیگیری پیشرفت یادگیری</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              نمودار رشد تسلط بر ساختارهای گرامری N5
            </h2>
            <p className="text-sm text-stone-300 mt-2 max-w-2xl leading-relaxed">
              پیگیری زنده تسلط بر ساختارهای گرامری در گذر زمان و ارزیابی تراز آمادگی آزمون در تمام ۱۰ درس با نمودارهای تعاملی Recharts.
            </p>
          </div>

          <button
            onClick={onNavigateToLesson}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs sm:text-sm shadow-xs transition-all shrink-0 self-start sm:self-center"
          >
            <BookOpen className="w-4 h-4" />
            <span>ادامه مطالعه درس اول</span>
            <ChevronLeft className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* KPI Stat Cards Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Mastered */}
        <div className="bg-white rounded-2xl border border-stone-200 p-5 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-stone-500">ساختارهای مسلط‌شده</span>
            <div className="w-8 h-8 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
              {totalMastered} <span className="text-xs font-normal text-stone-400">از {TOTAL_CURRICULUM_STRUCTURES}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-rose-600 font-semibold mt-1">
              <ArrowUpRight className="w-3.5 h-3.5" />
              <span>{Math.round((totalMastered / 12) * 100)}٪ از درس اول</span>
            </div>
          </div>
        </div>

        {/* JLPT N5 Readiness */}
        <div className="bg-white rounded-2xl border border-stone-200 p-5 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-stone-500">شاخص آمادگی N5</span>
            <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <ShieldCheck className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-2xl sm:text-3xl font-black text-emerald-700 tracking-tight">
              {readinessPercent}٪
            </div>
            <div className="w-full bg-stone-100 rounded-full h-1.5 mt-2 overflow-hidden">
              <div
                className="bg-emerald-600 h-1.5 rounded-full transition-all duration-500"
                style={{ width: `${Math.max(5, readinessPercent)}%` }}
              />
            </div>
          </div>
        </div>

        {/* Lesson 1 Status */}
        <div className="bg-white rounded-2xl border border-stone-200 p-5 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-stone-500">پیشرفت درس اول</span>
            <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
              <Award className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-2xl sm:text-3xl font-black text-blue-900 tracking-tight">
              {lesson1Percent}٪
            </div>
            <span className="text-xs font-medium text-stone-500">
              {lesson1Stat?.masteredCount || 0} از ۱۲ ساختار کامل شد
            </span>
          </div>
        </div>

        {/* Daily Study Streak */}
        <div className="bg-white rounded-2xl border border-stone-200 p-5 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-stone-500">زنجیره مطالعه مداوم</span>
            <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
              <Zap className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-2xl sm:text-3xl font-black text-amber-900 tracking-tight">
              ۷ روز <span className="text-xs font-normal text-amber-700">پیاپی 🔥</span>
            </div>
            <span className="text-xs font-medium text-stone-500">
              میانگین مطالعه: ۴۵ دقیقه روزانه
            </span>
          </div>
        </div>
      </div>

      {/* Main Chart Card */}
      <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6 sm:p-8 space-y-6">
        {/* Chart Header & Mode Switcher */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-100 pb-4">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-stone-900 flex items-center gap-2">
              <BarChart2 className="w-5 h-5 text-rose-600" />
              <span>
                {chartType === 'timeline' && 'روند رشد تسلط بر ساختارها در گذر زمان (Timeline)'}
                {chartType === 'lessons' && 'تراز تسلط در مقایسه با تارگت هر یک از ۱۰ درس N5'}
                {chartType === 'categories' && 'توزیع دسته‌بندی گرامرها (دستور زبان)'}
              </span>
            </h3>
            <p className="text-xs text-stone-500 mt-1">
              با حرکت ماوس روی نقاط نمودار، جزییات هر مرحله را بررسی کنید.
            </p>
          </div>

          <div className="flex items-center gap-1.5 bg-stone-100 p-1 rounded-xl self-start sm:self-center">
            <button
              onClick={() => setChartType('timeline')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                chartType === 'timeline'
                  ? 'bg-white text-stone-900 shadow-2xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5 text-rose-600" />
              <span>روند زمانی</span>
            </button>
            <button
              onClick={() => setChartType('lessons')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                chartType === 'lessons'
                  ? 'bg-white text-stone-900 shadow-2xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-blue-600" />
              <span>تفکیک ۱۰ درس</span>
            </button>
            <button
              onClick={() => setChartType('categories')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                chartType === 'categories'
                  ? 'bg-white text-stone-900 shadow-2xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <PieChartIcon className="w-3.5 h-3.5 text-amber-600" />
              <span>دسته‌بندی‌ها</span>
            </button>
          </div>
        </div>

        {/* 1. Timeline Chart (AreaChart) */}
        {chartType === 'timeline' && (
          <div className="space-y-4">
            <div className="h-72 sm:h-80 w-full" dir="ltr">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={timelineData}
                  margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="masteryColor" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#e11d48" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#e11d48" stopOpacity={0.02} />
                    </linearGradient>
                    <linearGradient id="minutesColor" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.2} />
                      <stop offset="95%" stopColor="#f59e0b" stopOpacity={0.0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
                  <XAxis
                    dataKey="dayLabel"
                    stroke="#94a3b8"
                    fontSize={12}
                    tickLine={false}
                  />
                  <YAxis
                    stroke="#94a3b8"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <Tooltip content={<CustomTimelineTooltip />} />
                  <Legend
                    verticalAlign="top"
                    height={36}
                    formatter={(value) => (
                      <span className="text-xs font-bold text-stone-700">
                        {value === 'masteredCumulative' ? 'مجموع گرامرهای مسلط‌شده' : 'زمان مطالعه (دقیقه)'}
                      </span>
                    )}
                  />
                  <Area
                    type="monotone"
                    dataKey="masteredCumulative"
                    stroke="#e11d48"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#masteryColor)"
                    name="masteredCumulative"
                  />
                  <Area
                    type="monotone"
                    dataKey="studyMinutes"
                    stroke="#f59e0b"
                    strokeWidth={1.5}
                    strokeDasharray="4 4"
                    fillOpacity={1}
                    fill="url(#minutesColor)"
                    name="studyMinutes"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-stone-50 rounded-xl p-4 border border-stone-200 text-xs text-stone-600 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-rose-600" />
                <span>
                  نکته روان‌شناسی یادگیری: ثبت پیوسته ساختارها در ۷ روز گذشته انگیزه مرور را تا ۴۰٪ ارتقا داده است.
                </span>
              </div>
              <span className="font-bold text-stone-800">
                رکورد امروز: {timelineData[6]?.masteredCumulative} ساختار
              </span>
            </div>
          </div>
        )}

        {/* 2. Across 10 Lessons Bar Chart */}
        {chartType === 'lessons' && (
          <div className="space-y-4">
            <div className="h-80 sm:h-96 w-full" dir="ltr">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={lessonStats}
                  margin={{ top: 20, right: 20, left: 0, bottom: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
                  <XAxis
                    dataKey="shortTitle"
                    stroke="#94a3b8"
                    fontSize={12}
                    tickLine={false}
                  />
                  <YAxis
                    stroke="#94a3b8"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <Tooltip content={<CustomLessonTooltip />} />
                  <Legend
                    verticalAlign="top"
                    height={36}
                    formatter={(value) => (
                      <span className="text-xs font-bold text-stone-700">
                        {value === 'masteredCount' ? 'تعداد مسلط‌شده شما' : 'کل ساختارهای هدف هر درس'}
                      </span>
                    )}
                  />
                  <Bar
                    dataKey="masteredCount"
                    name="masteredCount"
                    fill="#e11d48"
                    radius={[6, 6, 0, 0]}
                    maxBarSize={36}
                  />
                  <Bar
                    dataKey="targetCount"
                    name="targetCount"
                    fill="#cbd5e1"
                    radius={[6, 6, 0, 0]}
                    maxBarSize={36}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Quick Lesson Breakdown Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 pt-2">
              {lessonStats.map(ls => (
                <div
                  key={ls.lessonNumber}
                  className={`p-2.5 rounded-xl border text-right transition-all ${
                    ls.lessonNumber === 1
                      ? 'bg-rose-50/70 border-rose-300 ring-1 ring-rose-200'
                      : 'bg-stone-50 border-stone-200'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-bold text-stone-800">{ls.shortTitle}</span>
                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                      ls.percentage === 100
                        ? 'bg-emerald-100 text-emerald-800'
                        : ls.percentage > 0
                        ? 'bg-rose-100 text-rose-800'
                        : 'bg-stone-200 text-stone-600'
                    }`}>
                      {ls.percentage}٪
                    </span>
                  </div>
                  <div className="text-[11px] text-stone-500 font-medium">
                    {ls.masteredCount} از {ls.targetCount} ساختار
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. Category Breakdown (Pie / Doughnut Chart) */}
        {chartType === 'categories' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="h-64 sm:h-72 w-full" dir="ltr">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryStats}
                    dataKey="count"
                    nameKey="label"
                    cx="50%"
                    cy="50%"
                    innerRadius={55}
                    outerRadius={85}
                    paddingAngle={4}
                  >
                    {categoryStats.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value: any, name: any) => [`${value} ساختار مسلط‌شده`, name]}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-bold text-stone-900 border-r-4 border-rose-600 pr-3">
                تفکیک نوع واژگان و ساختارهای دستوری
              </h4>
              <div className="space-y-2">
                {categoryStats.map(cat => (
                  <div
                    key={cat.category}
                    className="flex items-center justify-between p-2.5 rounded-xl border border-stone-200 bg-stone-50/50"
                  >
                    <div className="flex items-center gap-2 text-xs font-semibold text-stone-800">
                      <span
                        className="w-3 h-3 rounded-full shrink-0"
                        style={{ backgroundColor: cat.color }}
                      />
                      <span>{cat.label}</span>
                    </div>
                    <span className="text-xs font-bold text-stone-900">
                      {cat.count} مورد
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 10 Lessons Master Table List */}
      <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6 sm:p-8 space-y-4">
        <div className="flex items-center justify-between border-b border-stone-100 pb-3">
          <h3 className="font-extrabold text-base sm:text-lg text-stone-900">
            جدول تفصیلی وضعیت ۱۰ درس سرفصل JLPT N5
          </h3>
          <span className="text-xs text-stone-500 font-semibold">
            هدف نهایی: تسلط بر تمام ۸۲ ساختار
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs sm:text-sm text-right divide-y divide-stone-200">
            <thead className="bg-stone-50 text-stone-700 font-bold">
              <tr>
                <th className="px-4 py-3">شماره درس</th>
                <th className="px-4 py-3">عنوان و سرفصل درس</th>
                <th className="px-4 py-3">تعداد ساختار</th>
                <th className="px-4 py-3">مسلط‌شده شما</th>
                <th className="px-4 py-3">درصد پیشرفت</th>
                <th className="px-4 py-3">وضعیت</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 bg-white">
              {lessonStats.map(ls => (
                <tr key={ls.lessonNumber} className="hover:bg-stone-50/70">
                  <td className="px-4 py-3 font-bold text-stone-900 font-mono">
                    Lesson {ls.lessonNumber}
                  </td>
                  <td className="px-4 py-3 font-semibold text-stone-800">
                    {ls.title}
                  </td>
                  <td className="px-4 py-3 font-mono text-stone-600">
                    {ls.targetCount} ساختار
                  </td>
                  <td className="px-4 py-3 font-bold font-mono text-rose-700">
                    {ls.masteredCount}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-24 bg-stone-100 rounded-full h-1.5 overflow-hidden">
                        <div
                          className={`h-1.5 rounded-full ${
                            ls.percentage === 100
                              ? 'bg-emerald-600'
                              : ls.percentage > 0
                              ? 'bg-rose-600'
                              : 'bg-stone-300'
                          }`}
                          style={{ width: `${ls.percentage}%` }}
                        />
                      </div>
                      <span className="text-xs font-mono font-bold text-stone-700">
                        {ls.percentage}٪
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    {ls.status === 'mastered' ? (
                      <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                        مسلط کامل ✓
                      </span>
                    ) : ls.status === 'in-progress' ? (
                      <span className="text-[11px] font-bold text-rose-800 bg-rose-50 px-2 py-0.5 rounded-md border border-rose-200">
                        در حال یادگیری
                      </span>
                    ) : (
                      <span className="text-[11px] font-medium text-stone-400 bg-stone-100 px-2 py-0.5 rounded-md">
                        در انتظار شروع
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
