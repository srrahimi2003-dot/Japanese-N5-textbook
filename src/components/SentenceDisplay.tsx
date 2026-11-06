import React, { useState } from 'react';
import { Volume2, ChevronDown, ChevronUp, Layers, Check } from 'lucide-react';
import { ExampleSentence } from '../types/grammar';
import { playJapaneseSpeech } from '../utils/audio';

interface SentenceDisplayProps {
  sentence: ExampleSentence;
  showFurigana: boolean;
  showRomaji: boolean;
  compact?: boolean;
}

export const SentenceDisplay: React.FC<SentenceDisplayProps> = ({
  sentence,
  showFurigana,
  showRomaji,
  compact = false,
}) => {
  const [showBreakdown, setShowBreakdown] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleAudio = () => {
    setIsPlaying(true);
    playJapaneseSpeech(sentence.audioText);
    setTimeout(() => setIsPlaying(false), 1400);
  };

  return (
    <div className="bg-stone-50/80 rounded-xl p-4 border border-stone-200/90 shadow-2xs hover:border-stone-300 transition-all">
      {/* Context badge if present */}
      {sentence.context && (
        <div className="inline-block text-[11px] font-semibold text-rose-700 bg-rose-50 border border-rose-200/70 px-2 py-0.5 rounded-md mb-2">
          {sentence.context}
        </div>
      )}

      {/* Main sentence and speech audio */}
      <div className="flex items-start justify-between gap-3">
        <div className="space-y-1.5 flex-1">
          {/* Japanese text with optional ruby */}
          <div className="text-xl sm:text-2xl font-bold font-jp text-stone-900 leading-relaxed tracking-wide" dir="ltr">
            {showFurigana && sentence.rubyHtml ? (
              <span dangerouslySetInnerHTML={{ __html: sentence.rubyHtml }} />
            ) : (
              <span>{sentence.japanese}</span>
            )}
          </div>

          {/* Hiragana reading */}
          {(!showFurigana || !sentence.rubyHtml) && (
            <div className="text-sm font-jp text-stone-500 font-medium tracking-wider" dir="ltr">
              {sentence.reading}
            </div>
          )}

          {/* Romaji */}
          {showRomaji && (
            <div className="text-xs font-mono text-amber-800/80 font-medium" dir="ltr">
              {sentence.romaji}
            </div>
          )}
        </div>

        {/* Audio speaker button */}
        <button
          onClick={handleAudio}
          aria-label={`پخش تلفظ ژاپنی: ${sentence.japanese}`}
          className={`shrink-0 p-2.5 rounded-xl border transition-all ${
            isPlaying
              ? 'bg-rose-600 text-white border-rose-600 scale-105'
              : 'bg-white text-stone-700 border-stone-200 hover:bg-rose-50 hover:text-rose-700 hover:border-rose-200 shadow-2xs'
          }`}
          title="پخش تلفظ بومی ژاپنی با هوش صوتی"
        >
          <Volume2 className={`w-4 h-4 ${isPlaying ? 'animate-pulse' : ''}`} />
        </button>
      </div>

      {/* Persian Translations */}
      <div className="mt-3 pt-3 border-t border-stone-200/60 space-y-1">
        <p className="text-stone-800 text-sm sm:text-base font-semibold leading-relaxed">
          {sentence.persianNatural}
        </p>
        {sentence.persianLiteral && (
          <p className="text-stone-500 text-xs sm:text-sm font-normal">
            <span className="font-semibold text-stone-600 ml-1">ترجمه تحت‌اللفظی:</span>
            {sentence.persianLiteral}
          </p>
        )}
      </div>

      {/* Word-by-word anatomy toggle */}
      {sentence.breakdown && sentence.breakdown.length > 0 && !compact && (
        <div className="mt-3">
          <button
            onClick={() => setShowBreakdown(!showBreakdown)}
            className="flex items-center gap-1.5 text-xs font-semibold text-stone-600 hover:text-rose-700 transition-colors"
          >
            <Layers className="w-3.5 h-3.5 text-rose-600" />
            <span>{showBreakdown ? 'بستن کالبدشکافی کلمه به کلمه' : 'کالبدشکافی و تحلیل گرامری کلمه به کلمه'}</span>
            {showBreakdown ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>

          {showBreakdown && (
            <div className="mt-2.5 overflow-x-auto rounded-lg border border-stone-200 bg-white">
              <table className="w-full text-xs text-right divide-y divide-stone-100">
                <thead className="bg-stone-50 text-stone-600 font-semibold">
                  <tr>
                    <th className="px-3 py-2">واژه ژاپنی</th>
                    <th className="px-3 py-2">تلفظ / روماجی</th>
                    <th className="px-3 py-2">نقش گرامری</th>
                    <th className="px-3 py-2">معنی فارسی</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {sentence.breakdown.map((item, idx) => (
                    <tr key={idx} className="hover:bg-stone-50/50">
                      <td className="px-3 py-2 font-bold font-jp text-stone-900" dir="ltr">
                        {item.japanese}
                      </td>
                      <td className="px-3 py-2 font-mono text-stone-500" dir="ltr">
                        {item.reading} ({item.romaji})
                      </td>
                      <td className="px-3 py-2 font-medium text-rose-700 bg-rose-50/30">
                        {item.role}
                      </td>
                      <td className="px-3 py-2 text-stone-800 font-medium">
                        {item.persianMeaning}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
