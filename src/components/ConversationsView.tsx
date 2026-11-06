import React, { useState } from 'react';
import { Volume2, MessageSquare, MapPin, Info, Sparkles, Play } from 'lucide-react';
import { LESSON_1_CONVERSATIONS } from '../data/lesson1Conversations';
import { playJapaneseSpeech } from '../utils/audio';

interface ConversationsViewProps {
  showFurigana: boolean;
  showRomaji: boolean;
}

export const ConversationsView: React.FC<ConversationsViewProps> = ({
  showFurigana,
  showRomaji,
}) => {
  const [selectedConvId, setSelectedConvId] = useState<string>(LESSON_1_CONVERSATIONS[0].id);
  const [activePlayingId, setActivePlayingId] = useState<string | null>(null);

  const activeConv = LESSON_1_CONVERSATIONS.find(c => c.id === selectedConvId) || LESSON_1_CONVERSATIONS[0];

  const handlePlayLine = (id: string, text: string) => {
    setActivePlayingId(id);
    playJapaneseSpeech(text);
    setTimeout(() => setActivePlayingId(null), 1800);
  };

  return (
    <div className="space-y-8">
      {/* Intro Header */}
      <div className="bg-linear-to-r from-stone-900 to-stone-800 text-white rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="flex items-center gap-2 text-rose-400 font-bold text-xs uppercase tracking-wider mb-2">
          <MessageSquare className="w-4 h-4" />
          <span>مکالمه‌های زنده در ژاپن (Real Japanese Conversations)</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          شنیدن و کاربرد ساختارها در زندگی روزمره توکیو
        </h2>
        <p className="text-sm text-stone-300 mt-2 max-w-3xl leading-relaxed">
          گرامر فقط روی کاغذ نیست! در این بخش سناریوهای واقعی در فروشگاه، دانشگاه و رستوران‌های سنتی ژاپن را همراه با تلفظ صوتی و تحلیل فرهنگی گرامرها تجربه می‌کنید.
        </p>
      </div>

      {/* Scenario Selector */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {LESSON_1_CONVERSATIONS.map(conv => (
          <button
            key={conv.id}
            onClick={() => setSelectedConvId(conv.id)}
            className={`p-4 rounded-xl border text-right transition-all flex items-start gap-3 ${
              selectedConvId === conv.id
                ? 'bg-rose-50 border-rose-300 text-rose-950 shadow-xs ring-1 ring-rose-400'
                : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-50'
            }`}
          >
            <span className="text-2xl p-2 rounded-lg bg-stone-100">{conv.emoji}</span>
            <div>
              <h4 className="font-bold text-sm text-stone-900">{conv.title}</h4>
              <p className="text-xs text-stone-500 mt-1 line-clamp-1">{conv.location}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Active Conversation Container */}
      <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6 sm:p-8 space-y-6">
        {/* Scenario Header */}
        <div className="border-b border-stone-200 pb-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-stone-500 mb-1">
                <MapPin className="w-3.5 h-3.5 text-rose-600" />
                <span>{activeConv.location}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-stone-900">
                {activeConv.title}
              </h3>
            </div>

            {/* Characters badges */}
            <div className="flex items-center gap-2">
              {activeConv.characters.map((ch, idx) => (
                <div key={idx} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-100 text-stone-700 text-xs font-semibold">
                  <span>{ch.avatar}</span>
                  <span>{ch.name}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-xs sm:text-sm text-stone-600 mt-3 leading-relaxed">
            {activeConv.description}
          </p>
        </div>

        {/* Dialogue Lines */}
        <div className="space-y-4">
          {activeConv.lines.map((line, idx) => {
            const isPlaying = activePlayingId === line.id;
            return (
              <div
                key={line.id}
                className="p-4 sm:p-5 rounded-2xl border border-stone-200 bg-stone-50/60 hover:bg-stone-50 transition-all space-y-2.5"
              >
                {/* Speaker line */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{line.avatar}</span>
                    <span className="font-bold text-xs sm:text-sm text-stone-900">{line.speaker}</span>
                  </div>

                  <button
                    onClick={() => handlePlayLine(line.id, line.audioText)}
                    className={`flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-lg border transition-all ${
                      isPlaying
                        ? 'bg-rose-600 text-white border-rose-600 scale-105'
                        : 'bg-white text-stone-700 border-stone-200 hover:text-rose-600 hover:border-rose-200'
                    }`}
                  >
                    <Volume2 className={`w-3.5 h-3.5 ${isPlaying ? 'animate-pulse' : ''}`} />
                    <span>تلفظ</span>
                  </button>
                </div>

                {/* Japanese dialogue line */}
                <div className="text-lg sm:text-xl font-bold font-jp text-stone-900 leading-relaxed" dir="ltr">
                  {line.japanese}
                </div>

                {/* Hiragana reading */}
                <div className="text-xs sm:text-sm font-jp text-stone-500 font-medium tracking-wide" dir="ltr">
                  {line.reading}
                </div>

                {/* Romaji */}
                {showRomaji && (
                  <div className="text-xs font-mono text-amber-800 font-medium" dir="ltr">
                    {line.romaji}
                  </div>
                )}

                {/* Persian Translation */}
                <div className="pt-2 border-t border-stone-200/60">
                  <p className="text-stone-800 text-sm font-semibold">
                    {line.persian}
                  </p>
                </div>

                {/* Grammar Point Annotation */}
                <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-rose-700 bg-rose-50 border border-rose-200/60 px-2.5 py-1 rounded-md">
                  <Sparkles className="w-3 h-3" />
                  <span>نکته گرامری: {line.grammarPoint}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Cultural Notes */}
        <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-5">
          <div className="flex items-center gap-2 text-amber-950 font-bold text-sm mb-2.5">
            <Info className="w-4 h-4 text-amber-700" />
            <span>نکات فرهنگی و کاربردی این موقعیت در ژاپن</span>
          </div>
          <ul className="space-y-1.5 text-xs sm:text-sm text-stone-700">
            {activeConv.culturalNotes.map((note, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-amber-600 font-bold mt-0.5">•</span>
                <span className="leading-relaxed">{note}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
