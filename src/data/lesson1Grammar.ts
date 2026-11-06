import { GrammarStructure } from '../types/grammar';

export const LESSON_1_STRUCTURES: GrammarStructure[] = [
  // 1. だ (Da)
  {
    id: 'da',
    lessonId: 1,
    symbol: 'だ',
    title: 'だ (Da) — ربط‌دهنده اسمی غیررسمی (Casual Copula)',
    subTitle: 'هست / است در مکالمات دوستانه، خودمانی و نوشتار تحلیلی',
    category: 'copula',
    reading: 'だ',
    romaji: 'da',
    badge: 'پایه غیررسمی',
    step1Intro: 'در زبان فارسی وقتی می‌گویید «این کتابه» یا «علی دوسته منه»، از فعل ربطی غیررسمی «است / ه» استفاده می‌کنید. در زبان ژاپنی، だ دقیقاً همین نقش را در زبان خودمانی (Casual / Plain) بازی می‌کند. این کلمه فعل واقعی نیست، بلکه یک Copula (ربط‌دهنده هویت و وضعیت) است که به اسم یا صفت نوع な می‌چسبد تا جمله را تمام کند.',
    step2Definition: 'کلمه だ از نظر دستوری یک Judgemental Copula (断定の助動詞 - Dantei no Jodoushi) در حالت پایه یا Plain Form است. وظیفه آن تایید قطعی یا اعلام هویت، ماهیت یا ویژگی فاعل است. بر خلاف زبان‌های اروپایی که فعل همیشه در وسط یا بعد از فاعل می‌آید، だ همیشه در انتهای گزاره اسمی یا صفتی قرار می‌گیرد.',
    step3Formula: 'اسم / صفت な + だ',
    step4HowToBuild: [
      'اسم را بدون هیچ پسوند یا واسطه‌ای مستقیماً با だ جمع کنید: 学生 (دانش‌آموز) + だ ← 学生だ (دانش‌آموزه).',
      'برای صفت‌های نوع な، علامت な را حذف کرده و だ را بچسبانید: 静か (آرام) + だ ← 静かだ (آرومه / ساکته).',
      '⚠️ هشدار بسیار مهم: هرگز だ را بعد از صفت‌های نوع い نمی‌آورید! عبارت «高いだ» از نظر گرامری صد در صد غلط است.',
      'در زبان محاوره‌ای روزمره جوانان ژاپنی، دختران معمولاً だ را در پایان جملات خبری حذف می‌کنند یا با ذرات لحن‌دهنده مثل よ یا ね تلطیف می‌کنند، زیرا だ خالص لحنی بسیار قاطع، خشک یا حتی مردانه به خود می‌گیرد.'
    ],
    step5SimpleExamples: [
      {
        id: 'da-ex-1',
        japanese: 'これは本だ。',
        rubyHtml: '<ruby>これ<rt>コレ</rt></ruby>は<ruby>本<rt>ほん</rt></ruby>だ。',
        reading: 'これ は ほん だ。',
        romaji: 'Kore wa hon da.',
        persianNatural: 'این یک کتابه.',
        persianLiteral: 'این [موضوع]، کتاب است.',
        audioText: 'これは本だ。',
        context: 'اشاره دوستانه به یک شیء',
        breakdown: [
          { japanese: 'これ', reading: 'これ', romaji: 'kore', role: 'ضمیر اشاره به نزدیک', persianMeaning: 'این' },
          { japanese: 'は', reading: 'わ', romaji: 'wa', role: 'ذره نشانگر موضوع (Topic)', persianMeaning: 'در مورد / از نظرِ' },
          { japanese: '本', reading: 'ほん', romaji: 'hon', role: 'اسم', persianMeaning: 'کتاب' },
          { japanese: 'だ', reading: 'だ', romaji: 'da', role: 'Copula غیررسمی', persianMeaning: 'است / ـه' }
        ]
      },
      {
        id: 'da-ex-2',
        japanese: '田中は友達だ。',
        rubyHtml: '<ruby>田中<rt>たなか</rt></ruby>は<ruby>友達<rt>ともだち</rt></ruby>だ。',
        reading: 'たなか は ともだち だ。',
        romaji: 'Tanaka wa tomodachi da.',
        persianNatural: 'تاناکا دوستمه.',
        persianLiteral: 'تاناکا [موضوع]، دوست است.',
        audioText: '田中は友達だ。',
        context: 'معرفی رابطه با یک فرد به دوست دیگر',
        breakdown: [
          { japanese: '田中', reading: 'たなか', romaji: 'Tanaka', role: 'اسم خاص (نام خانوادگی)', persianMeaning: 'تاناکا' },
          { japanese: 'は', reading: 'わ', romaji: 'wa', role: 'ذره موضوع', persianMeaning: 'درباره' },
          { japanese: '友達', reading: 'ともだち', romaji: 'tomodachi', role: 'اسم', persianMeaning: 'دوست' },
          { japanese: 'だ', reading: 'だ', romaji: 'da', role: 'Copula غیررسمی', persianMeaning: 'است' }
        ]
      }
    ],
    step6NaturalExamples: [
      {
        id: 'da-ex-3',
        japanese: '今日は日曜日だ。',
        rubyHtml: '<ruby>今日<rt>きょう</rt></ruby>は<ruby>日曜日<rt>にちようび</rt></ruby>だ。',
        reading: 'きょう は にちようび だ。',
        romaji: 'Kyou wa nichiyoubi da.',
        persianNatural: 'امروز یکشنبه‌ست.',
        persianLiteral: 'امروز [موضوع]، روز یکشنبه است.',
        audioText: '今日は日曜日だ。',
        context: 'یادآوری تقویم و روز هفته به شکل روزمره',
        breakdown: [
          { japanese: '今日', reading: 'きょう', romaji: 'kyou', role: 'قید زمان / اسم', persianMeaning: 'امروز' },
          { japanese: 'は', reading: 'わ', romaji: 'wa', role: 'ذره موضوع', persianMeaning: 'از نظرِ' },
          { japanese: '日曜日', reading: 'にちようび', romaji: 'nichiyoubi', role: 'اسم مرکب (یکشنبه)', persianMeaning: 'روز خورشید / یکشنبه' },
          { japanese: 'だ', reading: 'だ', romaji: 'da', role: 'Copula ساده', persianMeaning: 'است' }
        ]
      },
      {
        id: 'da-ex-4',
        japanese: 'あそこはとても静かだ。',
        rubyHtml: 'あそこはとても<ruby>静か<rt>しずか</rt></ruby>だ。',
        reading: 'あそこ は とても しずか だ。',
        romaji: 'Asoko wa totemo shizuka da.',
        persianNatural: 'اونجا خیلی آرومه.',
        persianLiteral: 'آن‌جا [موضوع]، بسیار آرام است.',
        audioText: 'あそこはとても静かだ。',
        context: 'توصیف یک مکان دنج برای دوست',
        breakdown: [
          { japanese: 'あそこ', reading: 'あそこ', romaji: 'asoko', role: 'ضمیر اشاره به مکان دور', persianMeaning: 'آن‌جا (دور از هر دو نفر)' },
          { japanese: 'は', reading: 'わ', romaji: 'wa', role: 'ذره موضوع', persianMeaning: 'درباره' },
          { japanese: 'とても', reading: 'とても', romaji: 'totemo', role: 'قید شدت', persianMeaning: 'خیلی / بسیار' },
          { japanese: '静か', reading: 'しずか', romaji: 'shizuka', role: 'صفت نوع な (بدون な)', persianMeaning: 'ساکت / آرام' },
          { japanese: 'だ', reading: 'だ', romaji: 'da', role: 'Copula غیررسمی', persianMeaning: 'است' }
        ]
      }
    ],
    step7Situations: [
      {
        id: 'da-sit-1',
        scenario: '💬 گفت‌وگوی دو هم‌دانشگاهی در راهرو',
        settingName: 'school',
        locationEmoji: '🏫',
        description: 'دانشجو جزوه‌ای روی میز پیدا کرده و به هم‌کلاسی‌اش می‌گوید:',
        sentence: {
          id: 'da-sit-sent-1',
          japanese: 'これ、けんたのノートだ。',
          rubyHtml: 'これ、けんたのノートだ。',
          reading: 'これ、けんた の ノート だ。',
          romaji: 'Kore, Kenta no nooto da.',
          persianNatural: 'این، دفتر کنتا هست.',
          persianLiteral: 'این، دفترِ کنتا است.',
          audioText: 'これ、けんたのノートだ。',
          breakdown: [
            { japanese: 'これ', reading: 'これ', romaji: 'kore', role: 'اشاره به نزدیک', persianMeaning: 'این' },
            { japanese: 'けんた', reading: 'けんた', romaji: 'Kenta', role: 'اسم شخص', persianMeaning: 'کنتا' },
            { japanese: 'の', reading: 'の', romaji: 'no', role: 'ذره مالکیت', persianMeaning: 'ِ (مالِ)' },
            { japanese: 'ノート', reading: 'ノート', romaji: 'nooto', role: 'کلمه قرضی (کاتاکانا)', persianMeaning: 'دفتر / یادداشت' },
            { japanese: 'だ', reading: 'だ', romaji: 'da', role: 'کاپولای خودمانی', persianMeaning: 'است' }
          ]
        }
      },
      {
        id: 'da-sit-2',
        scenario: '🏠 گفت‌وگوی خواهر و برادر در خانه',
        settingName: 'home',
        locationEmoji: '🏠',
        description: 'برادر به خواهرش اشاره می‌کند که غذای روی میز مال کیه:',
        sentence: {
          id: 'da-sit-sent-2',
          japanese: 'そのケーキ、私のだ！',
          rubyHtml: 'そのケーキ、<ruby>私<rt>わたし</rt></ruby>のだ！',
          reading: 'その ケーキ、わたし の だ！',
          romaji: 'Sono keeki, watashi no da!',
          persianNatural: 'اون کیک، مال منه!',
          persianLiteral: 'آن کیک، مال من است!',
          audioText: 'そのケーキ、私のだ！',
          breakdown: [
            { japanese: 'その', reading: 'その', romaji: 'sono', role: 'صفت اشاره میانی', persianMeaning: 'آن (کنار تو)' },
            { japanese: 'ケーキ', reading: 'ケーキ', romaji: 'keeki', role: 'اسم', persianMeaning: 'کیک' },
            { japanese: '私', reading: 'わたし', romaji: 'watashi', role: 'ضمیر اول شخص', persianMeaning: 'من' },
            { japanese: 'の', reading: 'の', romaji: 'no', role: 'جانشین اسم / مالکیت', persianMeaning: 'مالِ' },
            { japanese: 'だ', reading: 'だ', romaji: 'da', role: 'کاپولای خودمانی', persianMeaning: 'است' }
          ]
        }
      }
    ],
    step8WordAnatomyNote: 'توجه کنید که だ ذاتاً دارای کشش احساسی یا قضاوت صریح است. در زبان مکتوب رسمی (مانند مقالات دانشگاهی، روزنامه‌ها و گزارش‌ها)، だ با فرم مکتوب である جایگزین می‌شود، اما در یادداشت‌های شخصی و رمان‌ها だ به فراوانی برای بازگویی افکار درونی راوی دیده می‌شود.',
    step9Pitfalls: [
      {
        id: 'da-pit-1',
        wrong: 'この車は高いだ。',
        wrongReading: 'この くるま は たかい だ。',
        wrongRomaji: 'Kono kuruma wa takai da.',
        correct: 'この車は高い。',
        correctReading: 'この くるま は たかい。',
        correctRomaji: 'Kono kuruma wa takai.',
        explanation: 'صفت‌های نوع い خودکفا هستند و نیازی به だ ندارند.',
        ruleExplanation: 'صفت‌های い دارای ریشه فعلی باستانی هستند و در زبان غیررسمی بدون هیچ کاپولایی جمله را کامل می‌کنند. اضافه کردن だ به صفت い یک خطای فاحش در ژاپنی است.'
      },
      {
        id: 'da-pit-2',
        wrong: '先生、私は学生だ。',
        wrongReading: 'せんせい、わたし は がくせい だ。',
        wrongRomaji: 'Sensei, watashi wa gakusei da.',
        correct: '先生、私は学生です。',
        correctReading: 'せんせい、わたし は がくせい です。',
        correctRomaji: 'Sensei, watashi wa gakusei desu.',
        explanation: 'صحبت با استاد دانشگاه یا افراد بالادست با だ بی‌ادبانه تلقی می‌شود.',
        ruleExplanation: 'در موقعیت‌های اجتماعی رسمی، اداری و آموزشی، حتماً باید از فرم مؤدبانه です استفاده کرد.'
      }
    ],
    step10Comparison: {
      target: 'です (Desu)',
      rows: [
        { feature: 'درجه ادب (Politeness)', thisStructure: 'غیررسمی / صمیمانه (Plain)', otherStructure: 'مؤدبانه استاندارد (Teinei)', notes: 'با دوستان و هم‌سن‌وسال‌ها از だ و با غریبه‌ها از です استفاده کنید.' },
        { feature: 'کاربرد با صفت い', thisStructure: 'مطلقا ممنوع (❌ 高いだ)', otherStructure: 'مجاز فقط برای ادب (⭕ 高いです)', notes: 'در です فقط نقش لحن مؤدبانه را ایفا می‌کند.' },
        { feature: 'نوشتار رسمی مقالات', thisStructure: 'تبدیل به である می‌شود', otherStructure: 'در مقالات علمی کاربرد ندارد', notes: 'در روزنامه‌ها سبک Da/Dearu حاکم است.' }
      ]
    },
    step11NativeNuance: 'افراد بومی ژاپنی در مکالمات بسیار خودمانی بین دوستان صمیمی، انتهای جملات اسمی را حتی بدون だ رها می‌کنند: «これ、リンゴ (این، سیبه)». اما در صورتی که بخواهند بر قطعیت یا تأیید تأکید کنند می‌گویند: «これ、リンゴだよ！». استفاده از だ به تنهایی در پایان جمله بیشتر حس قاطعیت یا لحن مردانه می‌دهد.'
  },

  // 2. です (Desu)
  {
    id: 'desu',
    lessonId: 1,
    symbol: 'です',
    title: 'です (Desu) — ربط‌دهنده اسمی و صفتی مؤدبانه (Polite Copula)',
    subTitle: 'ستون اصلی مکالمات مؤدبانه ژاپنی (هست / است محترمانه)',
    category: 'copula',
    reading: 'です (تلفظ: دِس / Des)',
    romaji: 'desu',
    badge: 'پایه رسمی',
    step1Intro: 'اگر بخواهید با هر شهروند ژاپنی، فروشنده، همکار، استاد یا فردی که تازه با او آشنا شده‌اید صحبت کنید، «です» امن‌ترین، استانداردترین و محترمانه‌ترین کلمه‌ای است که باید جملات اسمی و صفتی خود را با آن تمام کنید. این کلمه نشان‌دهنده احترام و رعایت فاصله اجتماعی استاندارد (Teineigo) است.',
    step2Definition: 'کلمه です شکل مؤدبانه (丁寧体 - Teineitai) از ربط‌دهنده اسمی است. نکته تلفظی طلایی: حرف «u» در انتهای desu معمولاً در توکیو و گویش استاندارد نیمه‌صامت (Devoiced) شده و شبیه «دِس» ادا می‌شود مگر در ترانه‌ها یا ادای بسیار رسمی.',
    step3Formula: 'اسم / صفت な / صفت い + です',
    step4HowToBuild: [
      'اسم + です: 学生 (دانش‌آموز) + です ← 学生です (دانش‌آموز هستم / است).',
      'صفت な (بدون な) + です: 親切 (مهربان) + です ← 親切です (مهربان است).',
      'صفت い + です: 暑い (گرم) + です ← 暑いです (هوا گرم است). دقت کنید در اینجا です تغییر گرامری ایجاد نمی‌کند و فقط لحن جمله را مؤدبانه می‌سازد.'
    ],
    step5SimpleExamples: [
      {
        id: 'desu-ex-1',
        japanese: '私は留学生です。',
        rubyHtml: '<ruby>私<rt>わたし</rt></ruby>は<ruby>留学生<rt>りゅうがくせい</rt></ruby>です。',
        reading: 'わたし は りゅうがくせい です。',
        romaji: 'Watashi wa ryuugakusei desu.',
        persianNatural: 'من دانشجوی بین‌المللی هستم.',
        persianLiteral: 'من [موضوع]، دانشجوی خارجی هستم.',
        audioText: '私は留学生です。',
        context: 'معرفی خود در محیط دانشگاه یا خوابگاه',
        breakdown: [
          { japanese: '私', reading: 'わたし', romaji: 'watashi', role: 'ضمیر من', persianMeaning: 'من' },
          { japanese: 'は', reading: 'わ', romaji: 'wa', role: 'ذره موضوع', persianMeaning: 'از نظرِ' },
          { japanese: '留学生', reading: 'りゅうがくせい', romaji: 'ryuugakusei', role: 'اسم مرکب', persianMeaning: 'دانشجوی اعزامی/خارجی' },
          { japanese: 'です', reading: 'です', romaji: 'desu', role: 'Copula مؤدبانه', persianMeaning: 'هستم' }
        ]
      },
      {
        id: 'desu-ex-2',
        japanese: 'このお茶は熱いです。',
        rubyHtml: 'このお<ruby>茶<rt>ちゃ</rt></ruby>は<ruby>熱<rt>あつ</rt></ruby>いです。',
        reading: 'この おちゃ は あつい です。',
        romaji: 'Kono ocha wa atsui desu.',
        persianNatural: 'این چای داغ است.',
        persianLiteral: 'این چای، داغ است.',
        audioText: 'このお茶は熱いです。',
        context: 'توضیح دادن به مهمان در کافه یا خانه',
        breakdown: [
          { japanese: 'この', reading: 'この', romaji: 'kono', role: 'صفت اشاره نزدیک', persianMeaning: 'این' },
          { japanese: 'お茶', reading: 'おちゃ', romaji: 'ocha', role: 'اسم به همراه پیشوند احترام お', persianMeaning: 'چای' },
          { japanese: 'は', reading: 'わ', romaji: 'wa', role: 'ذره موضوع', persianMeaning: 'در موردِ' },
          { japanese: '熱い', reading: 'あつい', romaji: 'atsui', role: 'صفت نوع い', persianMeaning: 'داغ (برای مایعات/اشیا)' },
          { japanese: 'です', reading: 'です', romaji: 'desu', role: 'نشانگر ادب (Politeness Marker)', persianMeaning: 'است' }
        ]
      }
    ],
    step6NaturalExamples: [
      {
        id: 'desu-ex-3',
        japanese: '佐藤さんはとても親切です。',
        rubyHtml: '<ruby>佐藤<rt>さとう</rt></ruby>さんはとても<ruby>親切<rt>しんせつ</rt></ruby>です。',
        reading: 'さとう さん は とても しんせつ です。',
        romaji: 'Satou-san wa totemo shinsetsu desu.',
        persianNatural: 'آقای ساتو بسیار مهربان است.',
        persianLiteral: 'آقای ساتو، بسیار مهربان است.',
        audioText: '佐藤さんはとても親切です。',
        context: 'تعریف از رفتار همکار نزد مدیر',
        breakdown: [
          { japanese: '佐藤さん', reading: 'さとう さん', romaji: 'Satou-san', role: 'نام خانوادگی + پسوند احترام', persianMeaning: 'آقای/خانم ساتو' },
          { japanese: 'は', reading: 'わ', romaji: 'wa', role: 'ذره موضوع', persianMeaning: 'درباره' },
          { japanese: 'とても', reading: 'とても', romaji: 'totemo', role: 'قید شدت', persianMeaning: 'خیلی' },
          { japanese: '親切', reading: 'しんせつ', romaji: 'shinsetsu', role: 'صفت な', persianMeaning: 'مهربان / با محبت' },
          { japanese: 'です', reading: 'です', romaji: 'desu', role: 'Copula مؤدبانه', persianMeaning: 'است' }
        ]
      }
    ],
    step7Situations: [
      {
        id: 'desu-sit-1',
        scenario: '🛒 صندوق فروشگاه در توکیو',
        settingName: 'shopping',
        locationEmoji: '🛒',
        description: 'صندوق‌دار قیمت کالا را به مشتری اعلام می‌کند:',
        sentence: {
          id: 'desu-sit-sent-1',
          japanese: '全部で千円です。',
          rubyHtml: '<ruby>全部<rt>ぜんぶ</rt></ruby>で<ruby>千円<rt>せんえん</rt></ruby>です。',
          reading: 'ぜんぶ で せんえん です。',
          romaji: 'Zenbu de sen-en desu.',
          persianNatural: 'روی هم می‌شه هزار ین.',
          persianLiteral: 'در کل، هزار ین است.',
          audioText: '全部で千円です。',
          breakdown: [
            { japanese: '全部', reading: 'ぜんぶ', romaji: 'zenbu', role: 'اسم / قید', persianMeaning: 'همه / مجموع' },
            { japanese: 'で', reading: 'で', romaji: 'de', role: 'ذره نشانگر محدوده و جمع', persianMeaning: 'روی هم / در کل' },
            { japanese: '千円', reading: 'せんえん', romaji: 'sen-en', role: 'عدد + واحد پول', persianMeaning: 'هزار ین' },
            { japanese: 'です', reading: 'です', romaji: 'desu', role: 'کاپولای رسمی فروشگاهی', persianMeaning: 'است' }
          ]
        }
      },
      {
        id: 'desu-sit-2',
        scenario: '👔 جلسه مصاحبه شغلی',
        settingName: 'formal',
        locationEmoji: '👔',
        description: 'پاسخ به سوال مصاحبه‌کننده درباره تخصص فرد:',
        sentence: {
          id: 'desu-sit-sent-2',
          japanese: '私の専門はITです。',
          rubyHtml: '<ruby>私<rt>わたし</rt></ruby>の<ruby>専門<rt>せんもん</rt></ruby>はアイティーです。',
          reading: 'わたし の せんもん は アイティー です。',
          romaji: 'Watashi no senmon wa aitee desu.',
          persianNatural: 'رشته تخصصی من فناوری اطلاعات است.',
          persianLiteral: 'تخصصِ من، آی‌تی است.',
          audioText: '私の専門はITです。',
          breakdown: [
            { japanese: '私の', reading: 'わたし の', romaji: 'watashi no', role: 'ضمیر ملکی', persianMeaning: 'مال من' },
            { japanese: '専門', reading: 'せんもん', romaji: 'senmon', role: 'اسم', persianMeaning: 'رشته تخصصی' },
            { japanese: 'は', reading: 'わ', romaji: 'wa', role: 'نشانگر موضوع', persianMeaning: 'از نظرِ' },
            { japanese: 'IT', reading: 'アイティー', romaji: 'aitee', role: 'اسم تکنولوژی', persianMeaning: 'آی‌تی' },
            { japanese: 'です', reading: 'です', romaji: 'desu', role: 'کاپولا', persianMeaning: 'است' }
          ]
        }
      }
    ],
    step8WordAnatomyNote: 'فرم منفی です در گفتگوی رسمی برابر است با «ではありません» یا فرم رایج‌تر «じゃありません». همچنین در گذشته به «でした» تبدیل می‌شود.',
    step9Pitfalls: [
      {
        id: 'desu-pit-1',
        wrong: '私は食べますです。',
        wrongReading: 'わたし は たべます です。',
        wrongRomaji: 'Watashi wa tabemasu desu.',
        correct: '私は食べます。',
        correctReading: 'わたし は たべます。',
        correctRomaji: 'Watashi wa tabemasu.',
        explanation: 'هرگز です را بعد از افعال صرف‌شده با ます نمی‌آوریم.',
        ruleExplanation: 'پسوند ます خودش به تنهایی فعل را مؤدبانه کرده است. جمع کردن ます و です تکرار زائد و خطای فاحش است.'
      }
    ],
    step10Comparison: {
      target: 'だ (Da)',
      rows: [
        { feature: 'موقعیت کاربرد', thisStructure: 'جامعه، محل کار، دانشگاه، فروشگاه', otherStructure: 'خانه، دوستان نزدیک، دفترچه خاطرات', notes: 'در شک و تردید، همیشه です را انتخاب کنید.' },
        { feature: 'فرم منفی مؤدبانه', thisStructure: 'じゃありません / ではありません', otherStructure: 'じゃない', notes: 'در درس ۶ بیشتر بررسی می‌شود.' }
      ]
    },
    step11NativeNuance: 'هنگام پاسخ دادن به احوالپرسی یا تایید سریع حرف دیگران، ژاپنی‌ها بسیار از عبارت کوتاه «そうです» (درسته / همین‌طوره) استفاده می‌کنند. تلفظ آن با لحنی آرام و سر فرود آوردن همراه است.'
  },

  // 3. は (Wa - Topic Marker)
  {
    id: 'wa',
    lessonId: 1,
    symbol: 'は',
    title: 'は (تلفظ: Wa) — ذره نشانگر موضوع سخن (Topic Marker)',
    subTitle: 'تعیین‌کننده قاب و محور اصلی جمله («در مورد...»، «و اما...»)',
    category: 'particle',
    reading: 'わ (هنگامی که ذره باشد، わ خوانده می‌شود)',
    romaji: 'wa',
    badge: 'شاه‌کلید گرامر',
    step1Intro: 'ذره «は» شاید مهم‌ترین و در عین حال پر رمز و رازترین مفهوم برای غیرژاپنی‌ها باشد. این کلمه هرچند به شکل هیراگانای ha نوشته می‌شود، اما زمانی که نقش ذره دستوری دارد همیشه «wa» تلفظ می‌شود. کارکرد は این است که مثل یک پروژکتور روی یک موضوع می‌تابد و به شنونده اعلام می‌کند: «صحبت الان ما درباره این است، حالا گوش کن بقیه‌اش رو بگم!»',
    step2Definition: 'ذره は نشان‌دهنده Topic (موضوع سخن) است و لزوماً فاعل گرامری (Grammatical Subject) نیست. موضوع جمله می‌تواند هر چیزی باشد که گوینده و شنونده قبلاً با آن آشنایی دارند (Known Information / Shared Knowledge). هر آنچه پس از は می‌آید Comment (شرح یا خبر جدید درباره آن موضوع) است.',
    step3Formula: '[موضوع مورد بحث] + は + [اطلاعات / توضیحات درباره آن]',
    step4HowToBuild: [
      'اسم شخص + は: 田中さんは (در مورد آقای تاناکا...).',
      'ضمیر + は: 私は (در مورد من...).',
      'زمان یا مکان کلی + は: 今日は (امروز که موضوع بحثه...).',
      'نکته املایی: هرگز در کیبورد به جای は حرف わ را برای این ذره تایپ نکنید؛ همیشه کلید ha را بزنید، خودش در متن به شکل は ظاهر می‌شود.'
    ],
    step5SimpleExamples: [
      {
        id: 'wa-ex-1',
        japanese: 'これはペンです。',
        rubyHtml: 'これはペンです。',
        reading: 'これ は ペン です。',
        romaji: 'Kore wa pen desu.',
        persianNatural: 'این یک خودکاره.',
        persianLiteral: 'این [موضوعِ بحث]، خودکار است.',
        audioText: 'これはペンです。',
        context: 'نشان دادن یک وسیله روی میز',
        breakdown: [
          { japanese: 'これ', reading: 'これ', romaji: 'kore', role: 'ضمیر اشاره نزدیک', persianMeaning: 'این' },
          { japanese: 'は', reading: 'わ', romaji: 'wa', role: 'ذره موضوع سخن (تلفظ: وا)', persianMeaning: 'در موردِ' },
          { japanese: 'ペン', reading: 'ペン', romaji: 'pen', role: 'اسم (خودکار)', persianMeaning: 'خودکار' },
          { japanese: 'です', reading: 'です', romaji: 'desu', role: 'Copula مؤدبانه', persianMeaning: 'است' }
        ]
      },
      {
        id: 'wa-ex-2',
        japanese: '東京は大きいです。',
        rubyHtml: '<ruby>東京<rt>とうきょう</rt></ruby>は<ruby>大<rt>おお</rt></ruby>きいです。',
        reading: 'とうきょう は おおきい です。',
        romaji: 'Toukyou wa ookii desu.',
        persianNatural: 'توکیو بزرگه.',
        persianLiteral: 'توکیو [موضوع]، بزرگ است.',
        audioText: '東京は大きいです。',
        context: 'صحبت درباره شهرهای ژاپن',
        breakdown: [
          { japanese: '東京', reading: 'とうきょう', romaji: 'Toukyou', role: 'اسم خاص (پایتخت ژاپن)', persianMeaning: 'توکیو' },
          { japanese: 'は', reading: 'わ', romaji: 'wa', role: 'ذره موضوع', persianMeaning: 'درباره' },
          { japanese: '大きい', reading: 'おおきい', romaji: 'ookii', role: 'صفت نوع い', persianMeaning: 'بزرگ' },
          { japanese: 'です', reading: 'です', romaji: 'desu', role: 'پایانه مؤدبانه', persianMeaning: 'است' }
        ]
      }
    ],
    step6NaturalExamples: [
      {
        id: 'wa-ex-3',
        japanese: '私は日本人ではありません。',
        rubyHtml: '<ruby>私<rt>わたし</rt></ruby>は<ruby>日本人<rt>にほんじん</rt></ruby>ではありません。',
        reading: 'わたし は にほんじん で は ありません。',
        romaji: 'Watashi wa nihonjin de wa arimasen.',
        persianNatural: 'من ژاپنی نیستم.',
        persianLiteral: 'من [موضوع]، فرد ژاپنی نیستم.',
        audioText: '私は日本人ではありません。',
        context: 'پاسخ به سوال درباره ملیت',
        breakdown: [
          { japanese: '私', reading: 'わたし', romaji: 'watashi', role: 'ضمیر من', persianMeaning: 'من' },
          { japanese: 'は', reading: 'わ', romaji: 'wa', role: 'ذره موضوع', persianMeaning: 'در موردِ' },
          { japanese: '日本人', reading: 'にほんじん', romaji: 'nihonjin', role: 'اسم ملیت', persianMeaning: 'فرد ژاپنی' },
          { japanese: 'ではありません', reading: 'で は ありません', romaji: 'de wa arimasen', role: 'منفی رسمی です', persianMeaning: 'نیستم' }
        ]
      }
    ],
    step7Situations: [
      {
        id: 'wa-sit-1',
        scenario: '🍜 در رستوران: سفارش غذا بر اساس انتخاب من',
        settingName: 'restaurant',
        locationEmoji: '🍜',
        description: 'جمله مشهور «Boku wa unagi da» که نشان می‌دهد は فاعل نیست!',
        sentence: {
          id: 'wa-sit-sent-1',
          japanese: '私はラーメンです。',
          rubyHtml: '<ruby>私<rt>わたし</rt></ruby>はラーメンです。',
          reading: 'わたし は ラーメン です。',
          romaji: 'Watashi wa raamen desu.',
          persianNatural: 'برای من لطفاً رامن باشه (انتخاب من رامنه).',
          persianLiteral: 'من [موضوع سفارش]، رامن است.',
          audioText: '私はラーメンです。',
          breakdown: [
            { japanese: '私', reading: 'わたし', romaji: 'watashi', role: 'ضمیر من', persianMeaning: 'من' },
            { japanese: 'は', reading: 'わ', romaji: 'wa', role: 'ذره موضوع (نه فاعل)', persianMeaning: 'از جانبِ من' },
            { japanese: 'ラーメン', reading: 'ラーメン', romaji: 'raamen', role: 'غذای ژاپنی', persianMeaning: 'نودل رامن' },
            { japanese: 'です', reading: 'です', romaji: 'desu', role: 'Copula', persianMeaning: 'است' }
          ]
        }
      }
    ],
    step8WordAnatomyNote: 'یکی از کاربردهای ثانویه اما بسیار حیاتی は، ایجاد تضاد (Contrast) است. وقتی می‌گویید «گوشت را دوست ندارم اما ماهی は دوست دارم»، ذره は بر روی ماهی می‌نشیند تا تضاد را به نمایش بگذارد.',
    step9Pitfalls: [
      {
        id: 'wa-pit-1',
        wrong: 'わたし わ がくせい です。(نوشتن با wa در هیراگانا)',
        wrongReading: 'わたし わ がくせい です。',
        wrongRomaji: 'Watashi wa gakusei desu.',
        correct: 'わたし は がくせい です。(همیشه با حرف ha نوشته می‌شود)',
        correctReading: 'わたし は がくせい です。',
        correctRomaji: 'Watashi wa gakusei desu.',
        explanation: 'ذره موضوع با نویسه は نوشته می‌شود ولی تلفظش わ است.',
        ruleExplanation: 'این یک یادگار تاریخی از اصلاحات خط ژاپنی پس از جنگ جهانی دوم است. برای ذره همیشه は نوشته می‌شود.'
      }
    ],
    step10Comparison: {
      target: 'が (Ga - Subject Marker)',
      rows: [
        { feature: 'تمرکز اطلاع‌رسانی (Focus)', thisStructure: 'تمرکز بر آنچه بعد از は می‌آید (Comment)', otherStructure: 'تمرکز بر کلمه قبل از が (Exhaustive)', notes: 'بخش مقایسه عمیق را حتماً مطالعه کنید.' },
        { feature: 'اطلاعات شناخته‌شده vs نو', thisStructure: 'اطلاعات از پیش معلوم (Old Info)', otherStructure: 'اطلاعات جدید یا مشاهده حسی تازه', notes: 'در پاسخ به «کی اومد؟» از が استفاده می‌شود.' }
      ]
    },
    step11NativeNuance: 'ژاپنی‌ها زمانی که موضوع از متن مکالمه کاملاً آشکار است، فاعل و は را به کلی حذف می‌کنند. تکرار پیاپی «Watashi wa... Watashi wa...» در هر جمله نشانه بارز غیربومی بودن است.'
  },

  // 4. も (Mo - Also / Too)
  {
    id: 'mo',
    lessonId: 1,
    symbol: 'も',
    title: 'も (Mo) — ذره شمول و برابری («هم»، «همچنین»)',
    subTitle: 'جانشین مستقیم ذرات は و が برای بیان اشتراک',
    category: 'particle',
    reading: 'も',
    romaji: 'mo',
    badge: 'اتصال اشتراکی',
    step1Intro: 'وقتی می‌خواهید بگویید «من هم دانشجو هستم» یا «این هم قشنگه»، از ذره جادویی «も» استفاده می‌کنید. نکته فوق‌العاده اینجاست که も درست روی صندلی ذره は یا が می‌نشیند و آنها را کاملاً کنار می‌زند، بدون آنکه نیاز به ترکیب اضافه باشد.',
    step2Definition: 'ذره も یک Inclusive Particle است که مفهوم اشتراک خصلت یا همسانی حالت را میان دو یا چند موجود یا پدیده برقرار می‌کند. این ذره مستقیماً جایگزین ذرات は (موضوع)، が (فاعل) و を (مفعول) می‌شود.',
    step3Formula: 'اسم + も',
    step4HowToBuild: [
      'ذره は یا が را بردارید و دقیقاً به جای آن も قرار دهید.',
      'A は 学生です。 B も 学生です。 (A دانشجو است. B هم دانشجو است.)',
      'در جملات منفی، も به معنی «...هم نه» به کار می‌رود: 誰も (هیچ‌کس هم نه).'
    ],
    step5SimpleExamples: [
      {
        id: 'mo-ex-1',
        japanese: '私も学生です。',
        rubyHtml: '<ruby>私<rt>わたし</rt></ruby>も<ruby>学生<rt>がくせい</rt></ruby>です。',
        reading: 'わたし も がくせい です。',
        romaji: 'Watashi mo gakusei desu.',
        persianNatural: 'من هم دانش‌آموز / دانشجو هستم.',
        persianLiteral: 'من هم، دانشجو هستم.',
        audioText: '私も学生です。',
        context: 'پاسخ به دوستی که خود را دانشجو معرفی کرده',
        breakdown: [
          { japanese: '私', reading: 'わたし', romaji: 'watashi', role: 'ضمیر من', persianMeaning: 'من' },
          { japanese: 'も', reading: 'も', romaji: 'mo', role: 'ذره شمول (هم / همچنین)', persianMeaning: 'هم' },
          { japanese: '学生', reading: 'がくせい', romaji: 'gakusei', role: 'اسم', persianMeaning: 'دانشجو' },
          { japanese: 'です', reading: 'です', romaji: 'desu', role: 'Copula', persianMeaning: 'هستم' }
        ]
      },
      {
        id: 'mo-ex-2',
        japanese: 'これもおいしいです。',
        rubyHtml: 'これもおいしいです。',
        reading: 'これ も おいしい です。',
        romaji: 'Kore mo oishii desu.',
        persianNatural: 'این هم خوشمزه‌ست.',
        persianLiteral: 'این هم، خوشمزه است.',
        audioText: 'これもおいしいです。',
        context: 'چشیدن غذای دوم روی میز',
        breakdown: [
          { japanese: 'これ', reading: 'これ', romaji: 'kore', role: 'اشاره نزدیک', persianMeaning: 'این' },
          { japanese: 'も', reading: 'も', romaji: 'mo', role: 'ذره هم', persianMeaning: 'هم' },
          { japanese: 'おいしい', reading: 'おいしい', romaji: 'oishii', role: 'صفت نوع い', persianMeaning: 'خوشمزه' },
          { japanese: 'です', reading: 'です', romaji: 'desu', role: 'نشانگر ادب', persianMeaning: 'است' }
        ]
      }
    ],
    step6NaturalExamples: [
      {
        id: 'mo-ex-3',
        japanese: '田中さんも来ますか。',
        rubyHtml: '<ruby>田中<rt>たなか</rt></ruby>さんも<ruby>来<rt>き</rt></ruby>ますか。',
        reading: 'たなか さん も きます か。',
        romaji: 'Tanaka-san mo kimasu ka.',
        persianNatural: 'آیا آقای تاناکا هم می‌آید؟',
        persianLiteral: 'آقای تاناکا هم، می‌آید آیا؟',
        audioText: '田中さんも来ますか。',
        context: 'برنامه‌ریزی دورهمی بعد از ساعت کاری',
        breakdown: [
          { japanese: '田中さん', reading: 'たなか さん', romaji: 'Tanaka-san', role: 'اسم شخص', persianMeaning: 'آقای تاناکا' },
          { japanese: 'も', reading: 'も', romaji: 'mo', role: 'ذره هم', persianMeaning: 'هم' },
          { japanese: '来ます', reading: 'きます', romaji: 'kimasu', role: 'فعل مؤدبانه آمدن', persianMeaning: 'می‌آید' },
          { japanese: 'か', reading: 'か', romaji: 'ka', role: 'ذره پرسشی', persianMeaning: 'آیا؟' }
        ]
      }
    ],
    step7Situations: [
      {
        id: 'mo-sit-1',
        scenario: '🛒 خرید پوشاک در مرکز تجاری',
        settingName: 'shopping',
        locationEmoji: '🛒',
        description: 'مشتری بعد از امتحان کردن پیراهن اول، پیراهن دوم را هم می‌پسندد:',
        sentence: {
          id: 'mo-sit-sent-1',
          japanese: 'それもいいですね。',
          rubyHtml: 'それもいいですね。',
          reading: 'それ も いい です ね。',
          romaji: 'Sore mo ii desu ne.',
          persianNatural: 'اون هم خوبه ها!',
          persianLiteral: 'آن هم، خوب است مگه نه.',
          audioText: 'それもいいですね。',
          breakdown: [
            { japanese: 'それ', reading: 'それ', romaji: 'sore', role: 'اشاره به میانی', persianMeaning: 'آن (نزد مخاطب)' },
            { japanese: 'も', reading: 'も', romaji: 'mo', role: 'ذره هم', persianMeaning: 'هم' },
            { japanese: 'いい', reading: 'いい', romaji: 'ii', role: 'صفت نوع い', persianMeaning: 'خوب' },
            { japanese: 'です', reading: 'です', romaji: 'desu', role: 'Copula', persianMeaning: 'است' },
            { japanese: 'ね', reading: 'ね', romaji: 'ne', role: 'ذره جلب توافق', persianMeaning: 'مگه نه / ها' }
          ]
        }
      }
    ],
    step8WordAnatomyNote: 'وقتی دو بار پشت سر هم استفاده شود (Aも Bも)، دقیقاً معادل «هم A و هم B» در زبان فارسی است: «りんごもみかんも好きです» (هم سیب و هم پرتقال را دوست دارم).',
    step9Pitfalls: [
      {
        id: 'mo-pit-1',
        wrong: '私もは学生です。(ترکیب همزمان mo و wa)',
        wrongReading: 'わたし も は がくせい です。',
        wrongRomaji: 'Watashi mo wa gakusei desu.',
        correct: '私も学生です。',
        correctReading: 'わたし も がくせい です。',
        correctRomaji: 'Watashi mo gakusei desu.',
        explanation: 'ذره も جایگزین は می‌شود و هرگز با آن ترکیب نمی‌شود.',
        ruleExplanation: 'ذره も قدرت موضوع‌سازی دارد و نیاز به は را کاملاً منتفی می‌کند.'
      }
    ],
    step10Comparison: {
      target: 'は (Wa)',
      rows: [
        { feature: 'ماهیت پیوند', thisStructure: 'شباهت و اشتراک با موردی دیگر', otherStructure: 'تمرکز بر موضوع مستقل یا ایجاد تضاد', notes: 'اگر قبلاً موردی با این ویژگی ذکر شده، از も استفاده کنید.' }
      ]
    },
    step11NativeNuance: 'عبارت «それもそうだね» (اونم درسته / حق با توئه) یکی از پرکاربردترین الگوهای مکالمه روزمره در ژاپن برای نشان دادن انعطاف و پذیرش نظر طرف مقابل است.'
  },

  // 5. これ (Kore)
  {
    id: 'kore',
    lessonId: 1,
    symbol: 'これ',
    title: 'これ (Kore) — ضمیر اشاره به نزدیک («این»)',
    subTitle: 'اشاره به اشیا، اسناد یا خوراکی‌های در محدوده فیزیکی و روانی گوینده',
    category: 'demonstrative',
    reading: 'これ',
    romaji: 'kore',
    badge: 'سری Ko-So-A-Do',
    step1Intro: 'سیستم اشاره ژاپنی بر اساس فاصله از گوینده و شنونده طراحی شده و به Ko-So-A-Do معروف است. نخستین عضو این خانواده «これ» است که به اشیایی اشاره می‌کند که در دست، در آغوش یا چسبیده به خود گوینده قرار دارند.',
    step2Definition: 'کلمه これ یک ضمیر اشاره اسمی مستقل (Demonstrative Pronoun) است. این کلمه به تنهایی می‌تواند به عنوان فاعل یا موضوع جمله با は یا が همراه شود، ولی هرگز نمی‌تواند مستقیماً قبل از یک اسم قرار گیرد (برای صفت اشاره از この استفاده می‌شود).',
    step3Formula: 'これ + は / が / を / も...',
    step4HowToBuild: [
      'به تنهایی به کار می‌رود: これは何ですか。 (این چیه؟)',
      'اگر می‌خواهید بگویید «این کتاب»، نباید بگویید これ本؛ بلکه باید بگویید この本 (از سری No) یا これ、本 (با مکث عامیانه).'
    ],
    step5SimpleExamples: [
      {
        id: 'kore-ex-1',
        japanese: 'これは私の傘です。',
        rubyHtml: 'これは<ruby>私<rt>わたし</rt></ruby>の<ruby>傘<rt>かさ</rt></ruby>です。',
        reading: 'これ は わたし の かさ です。',
        romaji: 'Kore wa watashi no kasa desu.',
        persianNatural: 'این چتر من است.',
        persianLiteral: 'این [در دست من]، چترِ من است.',
        audioText: 'これは私の傘です。',
        context: 'برداشتن چتر خود از جالباسی بارانی',
        breakdown: [
          { japanese: 'これ', reading: 'これ', romaji: 'kore', role: 'ضمیر اشاره نزدیک', persianMeaning: 'این' },
          { japanese: 'は', reading: 'わ', romaji: 'wa', role: 'ذره موضوع', persianMeaning: 'در موردِ' },
          { japanese: '私の', reading: 'わたし の', romaji: 'watashi no', role: 'عبارت ملکی', persianMeaning: 'مال من' },
          { japanese: '傘', reading: 'かさ', romaji: 'kasa', role: 'اسم', persianMeaning: 'چتر' },
          { japanese: 'です', reading: 'です', romaji: 'desu', role: 'Copula', persianMeaning: 'است' }
        ]
      }
    ],
    step6NaturalExamples: [
      {
        id: 'kore-ex-2',
        japanese: 'これはいくらですか。',
        rubyHtml: 'これはいくらですか。',
        reading: 'これ は いくら です か。',
        romaji: 'Kore wa ikura desu ka.',
        persianNatural: 'این چنده؟ (قیمت این چقدره؟)',
        persianLiteral: 'این، چقدر است آیا؟',
        audioText: 'これはいくらですか。',
        context: 'نگه‌داشتن کالا در دست در یک سوغاتی‌فروشی در کیوتو',
        breakdown: [
          { japanese: 'これ', reading: 'これ', romaji: 'kore', role: 'ضمیر اشاره به کالای در دست', persianMeaning: 'این' },
          { japanese: 'は', reading: 'わ', romaji: 'wa', role: 'ذره موضوع', persianMeaning: 'درباره' },
          { japanese: 'いくら', reading: 'いくら', romaji: 'ikura', role: 'کلمه پرسش قیمت', persianMeaning: 'چقدر / چه قیمت' },
          { japanese: 'です', reading: 'です', romaji: 'desu', role: 'Copula', persianMeaning: 'است' },
          { japanese: 'か', reading: 'か', romaji: 'ka', role: 'ذره پرسشی', persianMeaning: '؟' }
        ]
      }
    ],
    step7Situations: [
      {
        id: 'kore-sit-1',
        scenario: '🍜 تعارف غذا در خانه یا مهمانی',
        settingName: 'home',
        locationEmoji: '🍜',
        description: 'میزبان ظرف شیرینی یا سوغات را جلو می‌آورد و می‌گوید:',
        sentence: {
          id: 'kore-sit-sent-1',
          japanese: 'これ、どうぞ食べてください。',
          rubyHtml: 'これ、どうぞ<ruby>食<rt>た</rt></ruby>べてください。',
          reading: 'これ、どうぞ たべて ください。',
          romaji: 'Kore, douzo tabete kudasai.',
          persianNatural: 'بفرمایید این رو میل کنید.',
          persianLiteral: 'این، لطفاً بخورید.',
          audioText: 'これ、どうぞ食べてください。',
          breakdown: [
            { japanese: 'これ', reading: 'これ', romaji: 'kore', role: 'ضمیر اشاره نزدیک', persianMeaning: 'این' },
            { japanese: 'どうぞ', reading: 'どうぞ', romaji: 'douzo', role: 'قید ادب تعارف', persianMeaning: 'بفرمایید' },
            { japanese: '食べてください', reading: 'たべて ください', romaji: 'tabete kudasai', role: 'درخواست مؤدبانه خوردن', persianMeaning: 'لطفاً بخورید' }
          ]
        }
      }
    ],
    step8WordAnatomyNote: 'در گفتگو، これ می‌تواند به موضوعی که تازه توسط خود گوینده در ذهن مطرح شده نیز اشاره کند: «これからの計画» (برنامه‌ای که از حالا به بعد در ذهن من است).',
    step9Pitfalls: [
      {
        id: 'kore-pit-1',
        wrong: 'これ本はおもしろい。(چسباندن مستقیم اسم به kore)',
        wrongReading: 'これ ほん は おもしろい。',
        wrongRomaji: 'Kore hon wa omoshiroi.',
        correct: 'この本はおもしろい。',
        correctReading: 'この ほん は おもしろい。',
        correctRomaji: 'Kono hon wa omoshiroi.',
        explanation: 'کلمه これ ضمیر است و نمی‌تواند به عنوان صفت پیش از اسم بیاید.',
        ruleExplanation: 'قبل از اسم همیشه باید از صفت‌های اشاره سری この・その・あの استفاده کنید.'
      }
    ],
    step10Comparison: {
      target: 'それ (Sore) & あれ (Are)',
      rows: [
        { feature: 'موقعیت فیزیکی', thisStructure: 'در محدوده گوینده (نزدیک من)', otherStructure: 'Sore: نزدیک تو / Are: دور از هر دو', notes: 'بخش مقایسه ۳تایی را در ادامه حتماً ببینید.' }
      ]
    },
    step11NativeNuance: 'در یک رستوران یا کافه وقتی منو را نگاه می‌کنید و اسم غذا را بلد نیستید، کافیست انگشتتان را روی تصویر غذا بگذارید و بگویید: «これをお願いします» (Kore o onegaishimasu - لطفاً این را بیاورید). این طبیعی‌ترین جمله خرید در ژاپن است.'
  },

  // 6. それ (Sore)
  {
    id: 'sore',
    lessonId: 1,
    symbol: 'それ',
    title: 'それ (Sore) — ضمیر اشاره به میانی («آن» نزد مخاطب)',
    subTitle: 'اشاره به شیء، مدرک یا سخنی که در حوزه شنونده قرار دارد',
    category: 'demonstrative',
    reading: 'それ',
    romaji: 'sore',
    badge: 'سری Ko-So-A-Do',
    step1Intro: '«آن» در زبان فارسی همیشه یک کلمه است، چه نزدیک شنونده باشد چه در افق دوردست! اما در ژاپنی اگر چیزی نزدیک دست، روی میز شنونده، یا در حوزه تسلط مخاطب باشد، باید حتماً از «それ» استفاده کنید نه あれ.',
    step2Definition: 'ضمیر اشاره سری So است. حوزه جغرافیایی یا شناختی آن در دایره شنونده (Listener’s Territory) قرار دارد. همچنین در مکالمه، برای ارجاع به حرفی که طرف مقابل تازه به زبان آورده از それ استفاده می‌شود.',
    step3Formula: 'それ + は / が / を / も...',
    step4HowToBuild: [
      'مستقلاً مانند یک اسم در جایگاه فاعل یا مفعول قرار می‌گیرد: それは何ですか。 (اون چیه پیشت؟)',
      'به عنوان تایید مکالمه‌ای: そうですか (که این‌طور) / それで？ (خوب، بعدش چی شد؟).'
    ],
    step5SimpleExamples: [
      {
        id: 'sore-ex-1',
        japanese: 'それは何ですか。',
        rubyHtml: 'それは<ruby>何<rt>なん</rt></ruby>ですか。',
        reading: 'それ は なん です か。',
        romaji: 'Sore wa nan desu ka.',
        persianNatural: 'اون چیه؟ (اون چیزی که دستته یا پیشته چیه؟)',
        persianLiteral: 'آن [نزد شما]، چه چیز است آیا؟',
        audioText: 'それは何ですか。',
        context: 'دیدن یک بسته ناآشنا در دستان هم‌کلاسی',
        breakdown: [
          { japanese: 'それ', reading: 'それ', romaji: 'sore', role: 'اشاره به حوزه مخاطب', persianMeaning: 'آن (پیش تو)' },
          { japanese: 'は', reading: 'わ', romaji: 'wa', role: 'ذره موضوع', persianMeaning: 'درباره' },
          { japanese: '何', reading: 'なん', romaji: 'nan', role: 'کلمه پرسشی چه چیز', persianMeaning: 'چه چیز' },
          { japanese: 'ですか', reading: 'です か', romaji: 'desu ka', role: 'Copula پرسشی', persianMeaning: 'است آیا؟' }
        ]
      }
    ],
    step6NaturalExamples: [
      {
        id: 'sore-ex-2',
        japanese: 'それ、すごくいいね！',
        rubyHtml: 'それ、すごくいいね！',
        reading: 'それ、すごく いい ね！',
        romaji: 'Sore, sugoku ii ne!',
        persianNatural: 'اون واقعاً عالیه! (لباس یا گوشی جدیدت خیلی خوبه!)',
        persianLiteral: 'آن [پیش تو]، به شدت خوب است مگه نه!',
        audioText: 'それ、すごくいいね！',
        context: 'تعریف از خرید جدید یک دوست',
        breakdown: [
          { japanese: 'それ', reading: 'それ', romaji: 'sore', role: 'ضمیر اشاره میانی', persianMeaning: 'آن شیء' },
          { japanese: 'すごく', reading: 'すごく', romaji: 'sugoku', role: 'قید شدت (بسیار)', persianMeaning: 'خیلی زیاد' },
          { japanese: 'いい', reading: 'いい', romaji: 'ii', role: 'صفت خوب', persianMeaning: 'خوب' },
          { japanese: 'ね', reading: 'ね', romaji: 'ne', role: 'ذره احساسی', persianMeaning: 'نه؟' }
        ]
      }
    ],
    step7Situations: [
      {
        id: 'sore-sit-1',
        scenario: '🛒 فروشگاه لوازم التحریر',
        settingName: 'shopping',
        locationEmoji: '🛒',
        description: 'مشتری به خودکاری که فروشنده در قفسه پشت سرش نگه داشته اشاره می‌کند:',
        sentence: {
          id: 'sore-sit-sent-1',
          japanese: 'それを一つ見せてください。',
          rubyHtml: 'それを<ruby>一<rt>ひと</rt></ruby>つ<ruby>見<rt>み</rt></ruby>せてください。',
          reading: 'それ を ひとつ みせて ください。',
          romaji: 'Sore o hitotsu misete kudasai.',
          persianNatural: 'لطفاً یکی از اون رو به من نشون بدید.',
          persianLiteral: 'آن [نزد شما] را، یکی، نشان دهید لطفاً.',
          audioText: 'それを一つ見せてください。',
          breakdown: [
            { japanese: 'それ', reading: 'それ', romaji: 'sore', role: 'ضمیر اشاره به سمت فروشنده', persianMeaning: 'آن' },
            { japanese: 'を', reading: 'を (お)', romaji: 'o', role: 'ذره مفعولی', persianMeaning: 'را' },
            { japanese: '一つ', reading: 'ひとつ', romaji: 'hitotsu', role: 'شمارنده بومی ژاپنی', persianMeaning: 'یکی / یک دانه' },
            { japanese: '見せてください', reading: 'みせて ください', romaji: 'misete kudasai', role: 'فعل درخواستی دیدن', persianMeaning: 'لطفاً نشان دهید' }
          ]
        }
      }
    ],
    step8WordAnatomyNote: 'در دیالوگ‌های روزمره عبارت «それそれ！» (Sore sore!) یعنی «دقیقاً خودشه! همونی که می‌خواستم بگم!». این نشان‌دهنده تطابق ذهنی کامل با سخن طرف مقابل است.',
    step9Pitfalls: [
      {
        id: 'sore-pit-1',
        wrong: 'گوینده به شیء در جیب خودش بگوید: それは私の鍵です。',
        wrongReading: 'それ は わたし の かぎ です。',
        wrongRomaji: 'Sore wa watashi no kagi desu.',
        correct: 'これは私の鍵です。',
        correctReading: 'これ は わたし の かぎ です。',
        correctRomaji: 'Kore wa watashi no kagi desu.',
        explanation: 'چیزی که متعلق به فضای خود گوینده است باید با これ بیان شود.',
        ruleExplanation: 'استفاده از それ برای وسایل خود، احساس بیگانگی یا گیجی زبانی به شنونده ژاپنی منتقل می‌کند.'
      }
    ],
    step10Comparison: {
      target: 'あれ (Are)',
      rows: [
        { feature: 'موقعیت شیء', thisStructure: 'کنار یا تحت اختیار شنونده', otherStructure: 'دور از دسترس و دید هر دو نفر', notes: 'تفکیک قلمرو گوینده و مخاطب در ژاپنی بسیار حساس است.' }
      ]
    },
    step11NativeNuance: 'واکنش «それなー！» (Sore naa!) در بین نسل جوان ژاپن یکی از محبوب‌ترین تکیه‌کلام‌ها به معنای «آخ گفتی! دقیقاً همینه که می‌گی!» است.'
  },

  // 7. あれ (Are)
  {
    id: 'are',
    lessonId: 1,
    symbol: 'あれ',
    title: 'あれ (Are) — ضمیر اشاره به دور («آن» دور از هر دو طرف)',
    subTitle: 'اشاره به اشیایی که در فاصله زیاد فیزیکی یا خاطره مشترک هر دو نفر قرار دارد',
    category: 'demonstrative',
    reading: 'あれ',
    romaji: 'are',
    badge: 'سری Ko-So-A-Do',
    step1Intro: 'وقتی شیء یا پدیده‌ای هم از گوینده و هم از شنونده دور است (مثلاً برجی در افق، هواپیمایی در آسمان، یا مغازه‌ای در انتهای خیابان)، ضمیر جادویی «あれ» به کار می‌رود. این کلمه مرز مشترکی می‌سازد که هر دو نفر با چشم یا حافظه‌شان به نقطه‌ای دوردست نگاه می‌کنند.',
    step2Definition: 'عضو سری A در ماتریس اشارات ژاپنی. در مکالمات حسی، あれ برای اشاره به موضوعی در گذشته مشترک که هر دو طرف آن را می‌شناسند (مثلاً «اون فیلمه که پارسال دیدیم...») نیز به کار می‌رود.',
    step3Formula: 'あれ + は / が / を / も...',
    step4HowToBuild: [
      'مانند اسم مستقل در ابتدای جمله قرار می‌گیرد: あれは病院です。 (اونجا/اون ساختمانِ اون دور بیمارستانه).',
      'حالت پرسشی: あれは何ですか。 (اون چیزی که اون دور دیده می‌شه چیه؟)'
    ],
    step5SimpleExamples: [
      {
        id: 'are-ex-1',
        japanese: 'あれは富士山です。',
        rubyHtml: 'あれは<ruby>富士山<rt>ふじさん</rt></ruby>です。',
        reading: 'あれ は ふじさん です。',
        romaji: 'Are wa Fujisan desu.',
        persianNatural: 'اون کوه فوجی است.',
        persianLiteral: 'آن [نقطه دور]، کوه فوجی است.',
        audioText: 'あれは富士山です。',
        context: 'نگاه کردن از قطار سریع‌السیر شینکانسن به افق',
        breakdown: [
          { japanese: 'あれ', reading: 'あれ', romaji: 'are', role: 'اشاره به نقطه دور', persianMeaning: 'آن (در دوردست)' },
          { japanese: 'は', reading: 'わ', romaji: 'wa', role: 'ذره موضوع', persianMeaning: 'درباره' },
          { japanese: '富士山', reading: 'ふじさん', romaji: 'Fujisan', role: 'اسم خاص کوهستان مقدس', persianMeaning: 'کوه فوجی' },
          { japanese: 'です', reading: 'です', romaji: 'desu', role: 'Copula', persianMeaning: 'است' }
        ]
      }
    ],
    step6NaturalExamples: [
      {
        id: 'are-ex-2',
        japanese: 'あれは何の建物ですか。',
        rubyHtml: 'あれは<ruby>何<rt>なん</rt></ruby>の<ruby>建物<rt>たてもの</rt></ruby>ですか。',
        reading: 'あれ は なん の たてもの です か。',
        romaji: 'Are wa nan no tatemono desu ka.',
        persianNatural: 'اون ساختمانِ اون دور، چه ساختمانیه؟',
        persianLiteral: 'آن دور، ساختمانِ چه چیز است آیا؟',
        audioText: 'あれは何の建物ですか。',
        context: 'پرسیدن در حین قدم زدن در خیابان‌های توکیو',
        breakdown: [
          { japanese: 'あれ', reading: 'あれ', romaji: 'are', role: 'ضمیر اشاره دور', persianMeaning: 'آن' },
          { japanese: 'は', reading: 'わ', romaji: 'wa', role: 'ذره موضوع', persianMeaning: 'درباره' },
          { japanese: '何の', reading: 'なん の', romaji: 'nan no', role: 'پرسش نوع و ماهیت', persianMeaning: 'چه نوع / مالِ چه' },
          { japanese: '建物', reading: 'たてもの', romaji: 'tatemono', role: 'اسم', persianMeaning: 'ساختمان / بنا' },
          { japanese: 'ですか', reading: 'です か', romaji: 'desu ka', role: 'پایانه پرسشی', persianMeaning: 'است آیا؟' }
        ]
      }
    ],
    step7Situations: [
      {
        id: 'are-sit-1',
        scenario: '✈️ گشت‌وگذار توریستی در کیوتو',
        settingName: 'travel',
        locationEmoji: '✈️',
        description: 'راهنمای تور به معبد طلایی کینکاکوجی در انتهای باغ اشاره می‌کند:',
        sentence: {
          id: 'are-sit-sent-1',
          japanese: 'あれが有名な金閣寺です。',
          rubyHtml: 'あれが<ruby>有名<rt>ゆうめい</rt></ruby>な<ruby>金閣寺<rt>きんかくじ</rt></ruby>です。',
          reading: 'あれ が ゆうめい な きんかくじ です。',
          romaji: 'Are ga yuumei na Kinkakuji desu.',
          persianNatural: 'اون همان معبد معروف کینکاکوجی است!',
          persianLiteral: 'آن دور، معبد طلایی کینکاکوجی مشهور است.',
          audioText: 'あれが有名な金閣寺です。',
          breakdown: [
            { japanese: 'あれ', reading: 'あれ', romaji: 'are', role: 'اشاره به معبد در انتهای دریاچه', persianMeaning: 'آن بنای دور' },
            { japanese: 'が', reading: 'が', romaji: 'ga', role: 'ذره شناساننده فاعل دقیق', persianMeaning: 'دقیقاً همان' },
            { japanese: '有名な', reading: 'ゆうめい な', romaji: 'yuumei na', role: 'صفت な به همراه な قبل از اسم', persianMeaning: 'مشهور / معروف' },
            { japanese: '金閣寺', reading: 'きんかくじ', romaji: 'Kinkakuji', role: 'اسم خاص معبد تاریخی', persianMeaning: 'معبد کینکاکوجی' },
            { japanese: 'です', reading: 'です', romaji: 'desu', role: 'Copula', persianMeaning: 'است' }
          ]
        }
      }
    ],
    step8WordAnatomyNote: 'وقتی ژاپنی‌ها می‌خواهند کلمه‌ای را به یاد بیاورند که نوک زبانشان است، معمولاً می‌گویند: «あれ？... あれは何だっけ？» (عجب؟... اون چی بود اسمش؟). این کاربرد روان‌شناختی あれ برای ارجاع به حافظه دوردست است.',
    step9Pitfalls: [
      {
        id: 'are-pit-1',
        wrong: 'اشاره به کتابی که در دست مخاطب است با あれ: あれを貸してください。',
        wrongReading: 'あれ を かして ください。',
        wrongRomaji: 'Are o kashite kudasai.',
        correct: 'それを貸してください。',
        correctReading: 'それ を かして ください。',
        correctRomaji: 'Sore o kashite kudasai.',
        explanation: 'کتاب در حوزه شنونده است، پس باید از それ استفاده شود.',
        ruleExplanation: 'استفاده از あれ به این معنی است که کتاب در نقطه‌ای دور از هر دوی شماست.'
      }
    ],
    step10Comparison: {
      target: 'これ & それ',
      rows: [
        { feature: 'فاصله نسبی', thisStructure: 'دور از گوینده و شنونده', otherStructure: 'Kore (نزدیک گوینده) / Sore (نزدیک شنونده)', notes: 'مثلث Ko-So-A را همیشه با موقعیت دست‌ها تصور کنید.' }
      ]
    },
    step11NativeNuance: 'کلمه «あれ？» با لحن صعودی، یکی از طبیعی‌ترین اصوات تعجب در ژاپنی است به معنی «عه؟ عجیبه! چه شد؟» که در تمام طول روز شنیده می‌شود.'
  },

  // 8. の (No - Possessive & Modifier Particle)
  {
    id: 'no',
    lessonId: 1,
    symbol: 'の',
    title: 'の (No) — ذره پیوند، مالکیت و تخصیص اسامی («کسره اضافه / مالِ»)',
    subTitle: 'اتصال دو اسم به یکدیگر و ساخت عبارات مرکب و مفهومی',
    category: 'particle',
    reading: 'の',
    romaji: 'no',
    badge: 'چسب اسامی',
    step1Intro: 'در زبان فارسی می‌گوییم «کتابِ علی» یا «ماشینِ ژاپنی» یا «معلمِ زبان انگلیسی». کلمه دوم اولی را توصیف یا صاحب آن را مشخص می‌کند. در ژاپنی دقیقاً ذره «の» این کار را انجام می‌دهد، اما یک قانون طلایی دارد: ترتیب کلمات وارونه فارسی است! یعنی [مالک/توصیف‌کننده] + の + [شیء/توصیف‌شونده].',
    step2Definition: 'ذره Genitive / Associative Particle است. کارکرد آن تنها محدود به مالکیت فردی (Possession) نیست؛ بلکه تعلق سازمانی (من کارمند تویوتا هستم)، جنس اشیا (پیراهن ابریشمی)، مکان وقوع، و حتی جانشین‌سازی اسم (ضمیر ملکی «مالِ من») را پوشش می‌دهد.',
    step3Formula: 'اسم ۱ + の + اسم ۲',
    step4HowToBuild: [
      'مالکیت: 私の車 (ماشین من).',
      'تعلق سازمانی: 会社の同僚 (همکارِ شرکت).',
      'کشور/زبان مبدا: 日本のカメラ (دوربینِ ژاپنی).',
      'حذف اسم تکراری (Pronoun Use): この傘は私のです。 (این چتر مال من است). در اینجا の به معنی «مالِ» عمل کرده و از تکرار 傘 جلوگیری کرده است.'
    ],
    step5SimpleExamples: [
      {
        id: 'no-ex-1',
        japanese: 'これは私の本です。',
        rubyHtml: 'これは<ruby>私<rt>わたし</rt></ruby>の<ruby>本<rt>ほん</rt></ruby>です。',
        reading: 'これ は わたし の ほん です。',
        romaji: 'Kore wa watashi no hon desu.',
        persianNatural: 'این کتابِ من است.',
        persianLiteral: 'این، منِ کتاب است (کتابِ من).',
        audioText: 'これは私の本です。',
        context: 'پیدا کردن کتاب خود در کتابخانه',
        breakdown: [
          { japanese: 'これ', reading: 'これ', romaji: 'kore', role: 'ضمیر اشاره نزدیک', persianMeaning: 'این' },
          { japanese: 'は', reading: 'わ', romaji: 'wa', role: 'ذره موضوع', persianMeaning: 'در مورد' },
          { japanese: '私', reading: 'わたし', romaji: 'watashi', role: 'مالک (اسم ۱)', persianMeaning: 'من' },
          { japanese: 'の', reading: 'の', romaji: 'no', role: 'ذره مالکیت و پیوند', persianMeaning: 'ِ (کسره اضافه)' },
          { japanese: '本', reading: 'ほん', romaji: 'hon', role: 'شیء تحت تملک (اسم ۲)', persianMeaning: 'کتاب' },
          { japanese: 'です', reading: 'です', romaji: 'desu', role: 'Copula', persianMeaning: 'است' }
        ]
      },
      {
        id: 'no-ex-2',
        japanese: '日本語の先生は優しいです。',
        rubyHtml: '<ruby>日本語<rt>にほんご</rt></ruby>の<ruby>先生<rt>せんせい</rt></ruby>は<ruby>優<rt>やさ</rt></ruby>しいです。',
        reading: 'にほんご の せんせい は やさしい です。',
        romaji: 'Nihongo no sensei wa yasashii desu.',
        persianNatural: 'معلم زبان ژاپنی مهربان است.',
        persianLiteral: 'ژاپنیِ معلم، مهربان است.',
        audioText: '日本語の先生は優しいです。',
        context: 'تعریف از استاد کلاس زبان',
        breakdown: [
          { japanese: '日本語', reading: 'にほんご', romaji: 'nihongo', role: 'اسم تخصص', persianMeaning: 'زبان ژاپنی' },
          { japanese: 'の', reading: 'の', romaji: 'no', role: 'پیوند تخصیص', persianMeaning: 'ِ' },
          { japanese: '先生', reading: 'せんせい', romaji: 'sensei', role: 'اسم', persianMeaning: 'معلم / استاد' },
          { japanese: 'は', reading: 'わ', romaji: 'wa', role: 'ذره موضوع', persianMeaning: 'در موردِ' },
          { japanese: '優しい', reading: 'やさしい', romaji: 'yasashii', role: 'صفت نوع い', persianMeaning: 'مهربان / دلسوز' },
          { japanese: 'です', reading: 'です', romaji: 'desu', role: 'نشانگر ادب', persianMeaning: 'است' }
        ]
      }
    ],
    step6NaturalExamples: [
      {
        id: 'no-ex-3',
        japanese: 'トヨタの社員です。',
        rubyHtml: 'トヨタの<ruby>社員<rt>しゃいん</rt></ruby>です。',
        reading: 'トヨタ の しゃいん です。',
        romaji: 'Toyota no shain desu.',
        persianNatural: 'من کارمند شرکت تویوتا هستم.',
        persianLiteral: 'تویوتای کارمند هستم.',
        audioText: 'トヨタの社員です。',
        context: 'تبادل کارت ویزیت (Meishi) در ملاقات اداری',
        breakdown: [
          { japanese: 'トヨタ', reading: 'トヨタ', romaji: 'Toyota', role: 'نام سازمان/شرکت', persianMeaning: 'شرکت تویوتا' },
          { japanese: 'の', reading: 'の', romaji: 'no', role: 'ذره وابستگی سازمانی', persianMeaning: 'ِ' },
          { japanese: '社員', reading: 'しゃいん', romaji: 'shain', role: 'اسم شغل', persianMeaning: 'کارمند شرکت' },
          { japanese: 'です', reading: 'です', romaji: 'desu', role: 'Copula', persianMeaning: 'هستم' }
        ]
      }
    ],
    step7Situations: [
      {
        id: 'no-sit-1',
        scenario: '🏫 کلاس درس: جست‌وجوی صاحب جا مدادی گمشده',
        settingName: 'school',
        locationEmoji: '🏫',
        description: 'استاد جامدادی را بلند کرده و می‌پرسد و دانش‌آموز پاسخ می‌دهد:',
        sentence: {
          id: 'no-sit-sent-1',
          japanese: 'それは私のです！ありがとうございます。',
          rubyHtml: 'それは<ruby>私<rt>わたし</rt></ruby>のです！ありがとうございます。',
          reading: 'それ は わたし の です！ ありがとう ございます。',
          romaji: 'Sore wa watashi no desu! Arigatou gozaimasu.',
          persianNatural: 'اون مال منه! خیلی ممنونم.',
          persianLiteral: 'آن، مالِ من است! تشکر می‌کنم.',
          audioText: 'それは私のです！ありがとうございます。',
          breakdown: [
            { japanese: 'それ', reading: 'それ', romaji: 'sore', role: 'ضمیر اشاره به سمت استاد', persianMeaning: 'آن شیء' },
            { japanese: 'は', reading: 'わ', romaji: 'wa', role: 'ذره موضوع', persianMeaning: 'درباره' },
            { japanese: '私の', reading: 'わたし の', romaji: 'watashi no', role: 'ضمیر ملکی مستقل (مال من)', persianMeaning: 'مالِ من' },
            { japanese: 'です', reading: 'です', romaji: 'desu', role: 'Copula', persianMeaning: 'است' }
          ]
        }
      }
    ],
    step8WordAnatomyNote: 'می‌توان چندین の را پشت سر هم زنجیر کرد: «私の大学の日本語の先生» (استادِ زبان ژاپنیِ دانشگاهِ من). در ذهن خود همیشه از کل به جزء یا از صاحب به ملک حرکت کنید.',
    step9Pitfalls: [
      {
        id: 'no-pit-1',
        wrong: '本私の (کتابِ من به ترتیب فارسی)',
        wrongReading: 'ほん わたし の',
        wrongRomaji: 'Hon watashi no',
        correct: '私の本 (همیشه اول مالک، سپس شیء)',
        correctReading: 'わたし の ほん',
        correctRomaji: 'Watashi no hon',
        explanation: 'ترتیب کلمات در زبان ژاپنی برعکس زبان فارسی است.',
        ruleExplanation: 'کلمه توصیف‌کننده در ژاپنی همیشه قبل از کلمه توصیف‌شونده می‌آید.'
      }
    ],
    step10Comparison: {
      target: 'な (Na Particle)',
      rows: [
        { feature: 'نوع کلمات قبل از پیوند', thisStructure: 'تنها بعد از اسامی می‌آید (Noun + の + Noun)', otherStructure: 'بعد از صفت‌های な می‌آید (Adj + な + Noun)', notes: 'برای وصل کردن دو اسم حتماً の به کار ببرید نه な.' }
      ]
    },
    step11NativeNuance: 'در پایان جملات محاوره‌ای و دوستانه، دختران و گاهی پسران از の به عنوان لحن پرسشی نرم استفاده می‌کنند: «どこ行くの？» (کجا داری میری؟) که در درس ۳ بیشتر با آن آشنا خواهید شد.'
  },

  // 9. いい (Ii / Yoi)
  {
    id: 'ii',
    lessonId: 1,
    symbol: 'いい',
    title: 'いい (Ii / Yoi) — صفت بی‌قاعده بنیادین («خوب»)',
    subTitle: 'پرکاربردترین صفت ژاپنی با رفتار صرفی دوگانه و باستانی',
    category: 'adjective',
    reading: 'いい (فرم حال) / よい (ریشه صرفی)',
    romaji: 'ii / yoi',
    badge: 'صفت بی‌قاعده',
    step1Intro: 'کلمه «خوب» در هر زبانی پرکاربردترین واژه است. در ژاپنی برای گفتن «خوب است» می‌گوییم «いい» (Ii). اما مراقب باشید! این صفت یک راز تاریخی بزرگ دارد: در زمان حال، همه آن را いい می‌گویند، اما به محض آنکه بخواهید آن را منفی کنید یا به زمان گذشته ببرید، روح باستانی‌اش یعنی «よい» (Yoi) بیدار می‌شود!',
    step2Definition: 'صفت いい در واقع تلفظ محاوره‌ای و مدرن‌شده صفت کلاسیک 良い (よい - Yoi) است. از آنجا که صرف‌های منفی و گذشته بر اساس ریشه باستانی よ ساخته می‌شوند، تمام صرف‌های این صفت بی‌قاعده بوده و با よ آغاز می‌گردد: منفی می‌شود よくない (خوب نیست) و گذشته می‌شود よかった (خوب بود).',
    step3Formula: 'فرم حال: いい / いいです | فرم منفی: よくない / よくないです | فرم گذشته: よかった / よかったです',
    step4HowToBuild: [
      'زمان حال مثبت غیررسمی: いい (خوبه).',
      'زمان حال مثبت مؤدبانه: いいです (خوب است).',
      'زمان حال منفی: ریشه よ + くない ← よくない (خوب نیست).',
      'زمان گذشته مثبت: ریشه よ + かった ← よかった (خوب بود / خدا رو شکر!).',
      '⚠️ هشدار بسیار حیاتی: عباراتی مانند «いくない» یا «いかった» صد در صد غلط هستند!'
    ],
    step5SimpleExamples: [
      {
        id: 'ii-ex-1',
        japanese: 'この天気はとてもいいです。',
        rubyHtml: 'この<ruby>天気<rt>てんき</rt></ruby>はとてもいいです。',
        reading: 'この てんき は とても いい です。',
        romaji: 'Kono tenki wa totemo ii desu.',
        persianNatural: 'این هوا خیلی خوب است.',
        persianLiteral: 'این هوا، بسیار خوب است.',
        audioText: 'この天気はとてもいいです。',
        context: 'قدم زدن در پارک در یک روز بهاری',
        breakdown: [
          { japanese: 'この', reading: 'この', romaji: 'kono', role: 'صفت اشاره نزدیک', persianMeaning: 'این' },
          { japanese: '天気', reading: 'てんき', romaji: 'tenki', role: 'اسم', persianMeaning: 'آب و هوا' },
          { japanese: 'は', reading: 'わ', romaji: 'wa', role: 'ذره موضوع', persianMeaning: 'در موردِ' },
          { japanese: 'とても', reading: 'とても', romaji: 'totemo', role: 'قید شدت', persianMeaning: 'خیلی' },
          { japanese: 'いい', reading: 'いい', romaji: 'ii', role: 'صفت خوب', persianMeaning: 'خوب' },
          { japanese: 'です', reading: 'です', romaji: 'desu', role: 'نشانگر ادب', persianMeaning: 'است' }
        ]
      },
      {
        id: 'ii-ex-2',
        japanese: '昨日は天気がよかったです。',
        rubyHtml: '<ruby>昨日<rt>きのう</rt></ruby>は<ruby>天気<rt>てんき</rt></ruby>がよかったです。',
        reading: 'きのう は てんき が よかった です。',
        romaji: 'Kinou wa tenki ga yokatta desu.',
        persianNatural: 'دیروز هوا خوب بود.',
        persianLiteral: 'دیروز، هوا خوب بود.',
        audioText: '昨日は天気がよかったです。',
        context: 'یادآوری آب و هوای روز گذشته',
        breakdown: [
          { japanese: '昨日', reading: 'きのう', romaji: 'kinou', role: 'قید زمان گذشته', persianMeaning: 'دیروز' },
          { japanese: 'は', reading: 'わ', romaji: 'wa', role: 'ذره موضوع', persianMeaning: 'در موردِ' },
          { japanese: '天気', reading: 'てんき', romaji: 'tenki', role: 'اسم فاعل عینی', persianMeaning: 'هوا' },
          { japanese: 'が', reading: 'が', romaji: 'ga', role: 'ذره فاعلی', persianMeaning: 'فاعل' },
          { japanese: 'よかった', reading: 'よかった', romaji: 'yokatta', role: 'صفت گذشته از ریشه yoi', persianMeaning: 'خوب بود' },
          { japanese: 'です', reading: 'です', romaji: 'desu', role: 'پایانه مؤدبانه', persianMeaning: 'بود' }
        ]
      }
    ],
    step6NaturalExamples: [
      {
        id: 'ii-ex-3',
        japanese: 'あ、よかった！安心しました。',
        rubyHtml: 'あ、よかった！<ruby>安心<rt>あんしん</rt></ruby>しました。',
        reading: 'あ、よかった！ あんしん しました。',
        romaji: 'A, yokatta! Anshin shimashita.',
        persianNatural: 'آخیش، چه خوب شد! خیالم راحت شد.',
        persianLiteral: 'آه، خوب بود! احساس آرامش کردم.',
        audioText: 'あ、よかった！安心しました。',
        context: 'شنیدن خبر رفع خطر یا پیدا شدن شیء گم‌شده',
        breakdown: [
          { japanese: 'あ', reading: 'あ', romaji: 'a', role: 'حرف ندای آسودگی', persianMeaning: 'آه / آخیش' },
          { japanese: 'よかった', reading: 'よかった', romaji: 'yokatta', role: 'صفت گذشته از ریشه yoi', persianMeaning: 'خوب شد / چه عالی' },
          { japanese: '安心しました', reading: 'あんしん しました', romaji: 'anshin shimashita', role: 'فعل گذشته مؤدبانه', persianMeaning: 'خیالم راحت شد' }
        ]
      }
    ],
    step7Situations: [
      {
        id: 'ii-sit-1',
        scenario: '💬 تصمیم‌گیری برای انتخاب ساعت قرار',
        settingName: 'casual',
        locationEmoji: '💬',
        description: 'دوستت پیشنهاد می‌دهد فردا ساعت ۳ بعدازظهر همدیگر را ببینید:',
        sentence: {
          id: 'ii-sit-sent-1',
          japanese: 'うん、３時でいいよ！',
          rubyHtml: 'うん、３<ruby>時<rt>じ</rt></ruby>でいいよ！',
          reading: 'うん、さんじ で いい よ！',
          romaji: 'Un, san-ji de ii yo!',
          persianNatural: 'آره، ساعت ۳ عالیه (ساعت ۳ خوبه واسم)!',
          persianLiteral: 'آره، در ساعت ۳، خوب است قطعا!',
          audioText: 'うん、３時でいいよ！',
          breakdown: [
            { japanese: 'うん', reading: 'うん', romaji: 'un', role: 'پاسخ مثبت عامیانه', persianMeaning: 'آره / باشه' },
            { japanese: '３時', reading: 'さんじ', romaji: 'san-ji', role: 'ساعت ۳', persianMeaning: 'ساعت سه' },
            { japanese: 'で', reading: 'で', romaji: 'de', role: 'ذره پذیرش گزینه', persianMeaning: 'در / با' },
            { japanese: 'いい', reading: 'いい', romaji: 'ii', role: 'صفت خوب', persianMeaning: 'خوب / اوکی' },
            { japanese: 'よ', reading: 'よ', romaji: 'yo', role: 'ذره تاکید خبر', persianMeaning: 'مطمئن باش' }
          ]
        }
      }
    ],
    step8WordAnatomyNote: 'در اسناد رسمی، قوانین و نوشتار آکادمیک، هنوز هم خود واژه 良い (よい) حتی در زمان حال به جای いい ترجیح داده می‌شود تا متانت زبانی حفظ شود.',
    step9Pitfalls: [
      {
        id: 'ii-pit-1',
        wrong: 'この映画はいくないです。(صرف منفی با ریشه اشتباه)',
        wrongReading: 'この えいが は いくない です。',
        wrongRomaji: 'Kono eiga wa ikunai desu.',
        correct: 'この映画はよくないです。(همیشه با ریشه yoi صرف می‌شود)',
        correctReading: 'この えいが は よくない です。',
        correctRomaji: 'Kono eiga wa yokunai desu.',
        explanation: 'برای منفی و گذشته صفت いい حتماً باید از ریشه よ استفاده کنید.',
        ruleExplanation: 'قاعده تاریخی: いい فقط در فرم حال ساده استفاده می‌شود و تمامی مشتقات صرفی از 良い (よい) منشعب می‌شوند.'
      }
    ],
    step10Comparison: {
      target: 'سایر صفت‌های نوع い',
      rows: [
        { feature: 'صرف منفی', thisStructure: 'بی‌قاعده: よくない', otherStructure: 'با قاعده: ریشه + くない (مانند 高くない)', notes: 'تنها صفت بی‌قاعده این گروه در ژاپنی N5 همین است.' },
        { feature: 'صرف گذشته', thisStructure: 'بی‌قاعده: よかった', otherStructure: 'با قاعده: ریشه + かった (مانند 高かった)', notes: 'عبارت よかった پرکاربردترین واژه آسودگی در ژاپن است.' }
      ]
    },
    step11NativeNuance: 'عبارت «いいですか» می‌تواند بسته به لحن به معنای «آیا خوب است؟» یا «آیا اجازه دارم؟ / مشکلی نیست؟» باشد که مقدمه‌ای شگفت‌انگیز برای بیان درخواست مؤدبانه است.'
  },

  // 10. い-Adjectives
  {
    id: 'i-adjectives',
    lessonId: 1,
    symbol: 'い形容詞',
    title: 'い-Adjectives (صفات نوع I) — صفت‌های خودکفای اصیل ژاپنی',
    subTitle: 'صفاتی که به حرف い ختم می‌شوند و همانند فعل دارای سیستم صرف زمانی درونی هستند',
    category: 'adjective',
    reading: 'い けいようし',
    romaji: 'i-keiyoushi',
    badge: 'خانواده صفت‌ها',
    step1Intro: 'در زبان‌های غربی و فارسی، صفت‌ها نمی‌توانند به تنهایی زمان گذشته یا منفی به خود بگیرند (نمی‌گوییم «گرانید» یا «داغید»، بلکه از فعل کمکی مثل «داغ بود» یا «گران نیست» استفاده می‌کنیم). اما در ژاپنی صفت‌های نوع い مثل فعل عمل می‌کنند! آنها بدون نیاز به هیچ کمکی، خودشان منفی و گذشته می‌شوند.',
    step2Definition: 'صفات نوع い (کلمات اصیل واژگان باستانی واماتو یا 和語) کلماتی هستند که آخرین حرف آنها در فرم دفتری حتماً هیراگانای «い» است (مانند 高い - takai، 安い - yasui، おいしい - oishii). این صفت‌ها حامل بار حسی، کیفی و فیزیکی هستند و هم قبل از اسم می‌نشینند و هم به عنوان گزاره مستقل جمله را تمام می‌کنند.',
    step3Formula: 'قبل از اسم: صفت い + اسم | انتهای جمله: صفت い (غیررسمی) یا صفت い + です (مؤدبانه)',
    step4HowToBuild: [
      'توصیف مستقیم اسم: 高い本 (کتاب گران‌قیمت). حرف い حفظ می‌شود.',
      'پایان جمله غیررسمی: この本は高い。 (این کتاب گرونه). بدون هیچ کاپولایی!',
      'پایان جمله مؤدبانه: この本は高いです。 (این کتاب گران است). در اینجا です تنها برای ادب اجتماعی است.',
      'منفی کردن: حذف い پایانی + اضافه کردن くない (高い → 高くない).',
      'گذشته کردن: حذف い پایانی + اضافه کردن かった (高い → 高かった).'
    ],
    step5SimpleExamples: [
      {
        id: 'i-adj-ex-1',
        japanese: '富士山は高い山です。',
        rubyHtml: '<ruby>富士山<rt>ふじさん</rt></ruby>は<ruby>高<rt>たか</rt></ruby>い<ruby>山<rt>やま</rt></ruby>です。',
        reading: 'ふじさん は たかい やま です。',
        romaji: 'Fujisan wa takai yama desu.',
        persianNatural: 'کوه فوجی یک کوه مرتفع است.',
        persianLiteral: 'کوه فوجی، بلند کوه است.',
        audioText: '富士山は高い山です。',
        context: 'توصیف جغرافیایی با صفت قبل از اسم',
        breakdown: [
          { japanese: '富士山', reading: 'ふじさん', romaji: 'Fujisan', role: 'اسم خاص', persianMeaning: 'کوه فوجی' },
          { japanese: 'は', reading: 'わ', romaji: 'wa', role: 'ذره موضوع', persianMeaning: 'در موردِ' },
          { japanese: '高い', reading: 'たかい', romaji: 'takai', role: 'صفت نوع い', persianMeaning: 'بلند / مرتفع' },
          { japanese: '山', reading: 'やま', romaji: 'yama', role: 'اسم موصوف', persianMeaning: 'کوه' },
          { japanese: 'です', reading: 'です', romaji: 'desu', role: 'Copula', persianMeaning: 'است' }
        ]
      },
      {
        id: 'i-adj-ex-2',
        japanese: '日本の夏はとても暑いです。',
        rubyHtml: '<ruby>日本<rt>にほん</rt></ruby>の<ruby>夏<rt>なつ</rt></ruby>はとても<ruby>暑<rt>あつ</rt></ruby>いです。',
        reading: 'にほん の なつ は とても あつい です。',
        romaji: 'Nihon no natsu wa totemo atsui desu.',
        persianNatural: 'تابستان ژاپن بسیار گرم است.',
        persianLiteral: 'تابستانِ ژاپن، بسیار گرم است.',
        audioText: '日本の夏はとても暑いです。',
        context: 'صحبت درباره شرایط آب و هوایی توکیو',
        breakdown: [
          { japanese: '日本の夏', reading: 'にほん の なつ', romaji: 'nihon no natsu', role: 'ترکیب اضافی', persianMeaning: 'تابستان ژاپن' },
          { japanese: 'は', reading: 'わ', romaji: 'wa', role: 'ذره موضوع', persianMeaning: 'درباره' },
          { japanese: 'とても', reading: 'とても', romaji: 'totemo', role: 'قید شدت', persianMeaning: 'خیلی' },
          { japanese: '暑い', reading: 'あつい', romaji: 'atsui', role: 'صفت نوع い برای دما', persianMeaning: 'گرم / داغ' },
          { japanese: 'です', reading: 'です', romaji: 'desu', role: 'نشانگر ادب', persianMeaning: 'است' }
        ]
      }
    ],
    step6NaturalExamples: [
      {
        id: 'i-adj-ex-3',
        japanese: 'このラーメン、本当においしいね！',
        rubyHtml: 'このラーメン、<ruby>本当<rt>ほんとう</rt></ruby>においしいね！',
        reading: 'この ラーメン、ほんとう に おいしい ね！',
        romaji: 'Kono raamen, hontou ni oishii ne!',
        persianNatural: 'این رامن واقعاً خوشمزه‌ست ها!',
        persianLiteral: 'این رامن، در حقیقت خوشمزه است مگه نه!',
        audioText: 'このラーメン、本当においしいね！',
        context: 'خوردن ناهار با دوستان در رامن‌فروشی سنتی',
        breakdown: [
          { japanese: 'このラーメン', reading: 'この ラーメン', romaji: 'kono raamen', role: 'موضوع معرفه شده', persianMeaning: 'این رامن' },
          { japanese: '本当に', reading: 'ほんとう に', romaji: 'hontou ni', role: 'قید تأکید', persianMeaning: 'واقعاً / حقیقتاً' },
          { japanese: 'おいしい', reading: 'おいしい', romaji: 'oishii', role: 'صفت نوع い در پایان جمله غیررسمی', persianMeaning: 'خوشمزه' },
          { japanese: 'ね', reading: 'ね', romaji: 'ne', role: 'ذره توافق', persianMeaning: 'نه؟' }
        ]
      }
    ],
    step7Situations: [
      {
        id: 'i-adj-sit-1',
        scenario: '🛒 خرید لوازم الکترونیکی در محله آکیهابارا',
        settingName: 'shopping',
        locationEmoji: '🛒',
        description: 'خریدار با دیدن برچسب قیمت یک لپ‌تاپ شگفت‌زده می‌شود:',
        sentence: {
          id: 'i-adj-sit-sent-1',
          japanese: 'うわ、これは高すぎます！',
          rubyHtml: 'うわ、これは<ruby>高<rt>たか</rt></ruby>すぎます！',
          reading: 'うわ、これ は たかすぎます！',
          romaji: 'Uwa, kore wa takasugimasu!',
          persianNatural: 'واای، این بیش از حد گرونه!',
          persianLiteral: 'وای، این، زیادی گران است!',
          audioText: 'うわ、これは高すぎます！',
          breakdown: [
            { japanese: 'うわ', reading: 'うわ', romaji: 'uwa', role: 'صوت شگفتی', persianMeaning: 'وای' },
            { japanese: 'これ', reading: 'これ', romaji: 'kore', role: 'اشاره به نزدیک', persianMeaning: 'این' },
            { japanese: 'は', reading: 'わ', romaji: 'wa', role: 'ذره موضوع', persianMeaning: 'در موردِ' },
            { japanese: '高すぎます', reading: 'たかすぎます', romaji: 'takasugimasu', role: 'ریشه صفت + すぎる (افراط)', persianMeaning: 'زیادی گران است' }
          ]
        }
      }
    ],
    step8WordAnatomyNote: 'صفت‌های い دارای زوج‌های متضاد فوق‌العاده کاربردی هستند: 高い (گران/بلند) ↔ 安い (ارزان) / 低い (کوتاه)، 大きい (بزرگ) ↔ 小さい (کوچک)، 暑い (گرم) ↔ 寒い (سرد).',
    step9Pitfalls: [
      {
        id: 'i-adj-pit-1',
        wrong: 'このリンゴは赤いですだ。(اضافه کردن da به صفت)',
        wrongReading: 'この リンゴ は あかい です だ。',
        wrongRomaji: 'Kono ringo wa akai desu da.',
        correct: 'このリンゴは赤い。(یا 赤いです)',
        correctReading: 'この リンゴ は あかい。',
        correctRomaji: 'Kono ringo wa akai.',
        explanation: 'هرگز だ را به انتهای صفت い نمی‌چسبانیم.',
        ruleExplanation: 'صفت‌های い خودشان محمول مستقل هستند و پایانه خبری را درون خود حمل می‌کنند.'
      },
      {
        id: 'i-adj-pit-2',
        wrong: 'きれい (Kirei) را صفت نوع い فرض کردن',
        wrongReading: 'きれい な ひと を きれい ひと と いう',
        wrongRomaji: 'Kirei na hito o kirei hito to iu',
        correct: 'きれいです / きれいな人 (کلمه kirei صفت نوع な است)',
        correctReading: 'きれい です / きれい な ひと',
        correctRomaji: 'Kirei desu / kirei na hito',
        explanation: 'کلمه きれい با اینکه به صدای i ختم می‌شود، صفت な است.',
        ruleExplanation: 'کانجی آن 綺麗 است و جزو واژگان وارداتی از چینی (Kango) بوده که با な صفت‌سازی می‌شود.'
      }
    ],
    step10Comparison: {
      target: 'な-Adjectives',
      rows: [
        { feature: 'اتصال به اسم', thisStructure: 'مستقیماً بدون هیچ پسوندی (高い本)', otherStructure: 'نیازمند حرف な در وسط (静かな町)', notes: 'تفاوت بنیادین در اتصال به موصوف است.' },
        { feature: 'منفی شدن غیررسمی', thisStructure: 'تبدیل い به くない (高くない)', otherStructure: 'اضافه شدن じゃない (静かじゃない)', notes: 'صفت‌های な مانند اسم رفتار می‌کنند.' }
      ]
    },
    step11NativeNuance: 'هنگام توصیف احساسات ناگهانی (مانند سرما یا درد)، گویشوران بومی فقط صفت خالی را با کشش یا تکرار فریاد می‌زنند: «寒っ！» (Samu! - وای چقدر سرد شد!) یا «痛い！» (Itai! - آخ دردم گرفت!).'
  },

  // 11. な-Adjectives
  {
    id: 'na-adjectives',
    lessonId: 1,
    symbol: 'な形容詞',
    title: 'な-Adjectives (صفات نوع Na / شبه‌اسامی) — کلمات توصیفی ریشه‌دار',
    subTitle: 'صفاتی که هنگام توصیف اسم، نیازمند پل ارتباطی «な» هستند و همانند اسم صرف می‌شوند',
    category: 'adjective',
    reading: 'な けいようし (形容動詞)',
    romaji: 'na-keiyoushi',
    badge: 'خانواده صفت‌ها',
    step1Intro: 'برعکس صفت‌های نوع い که خودشان می‌توانند گذشته و منفی شوند، صفت‌های نوع な ذاتاً شبیه «اسم» رفتار می‌کنند. این کلمات در زبان دانشگاهی به عنوان «شبه‌اسم» (Adjectival Nouns) شناخته می‌شوند. چرا به آنها صفت な می‌گویند؟ چون وقتی می‌خواهند یک اسم را توصیف کنند، باید حتماً چسب «な» را بین خودشان و اسم قرار دهید: 静かな町 (شهر ساکت).',
    step2Definition: 'بسیاری از صفت‌های نوع な از کلمات چینی وارداتی (Kango) یا مفاهیم انتزاعی ساخته شده‌اند (مانند 便利 - benri، 親切 - shinsetsu، 有名 - yuumei). در انتهای جمله دقیقاً مانند اسامی رفتار کرده و برای اتمام نیازمند کاپولای だ یا です هستند: 静かだ (ساکت است - خودمانی) / 静かです (ساکت است - مؤدبانه).',
    step3Formula: 'قبل از اسم: صفت + な + اسم | پایان جمله: صفت + だ (خودمانی) یا + です (مؤدبانه)',
    step4HowToBuild: [
      'توصیف مستقیم اسم: 有名 (مشهور) + な + 人 (آدم) ← 有名な人 (آدم مشهور). حتماً な درج شود!',
      'پایان جمله مثبت: この町は静かです。 (این شهر ساکت است). دقت کنید در انتهای جمله حرف な حذف می‌شود!',
      'منفی کردن مؤدبانه: 静かじゃありません / 静かではありません (ساکت نیست).',
      'منفی کردن خودمانی: 静かじゃない (ساکت نیست). دقیقاً شبیه صرف اسم!',
      'گذشته مؤدبانه: 静かでした (ساکت بود).'
    ],
    step5SimpleExamples: [
      {
        id: 'na-adj-ex-1',
        japanese: '京都は有名な町です。',
        rubyHtml: '<ruby>京都<rt>きょうと</rt></ruby>は<ruby>有名<rt>ゆうめい</rt></ruby>な<ruby>町<rt>まち</rt></ruby>です。',
        reading: 'きょうと は ゆうめい な まち です。',
        romaji: 'Kyouto wa yuumei na machi desu.',
        persianNatural: 'کیوتو یک شهر معروف است.',
        persianLiteral: 'کیوتو، معروفِ شهر است.',
        audioText: '京都は有名な町です。',
        context: 'معرفی شهرهای توریستی ژاپن',
        breakdown: [
          { japanese: '京都', reading: 'きょうと', romaji: 'Kyouto', role: 'اسم خاص شهر تاریخی', persianMeaning: 'کیوتو' },
          { japanese: 'は', reading: 'わ', romaji: 'wa', role: 'ذره موضوع', persianMeaning: 'درباره' },
          { japanese: '有名', reading: 'ゆうめい', romaji: 'yuumei', role: 'صفت نوع な', persianMeaning: 'مشهور' },
          { japanese: 'な', reading: 'な', romaji: 'na', role: 'پیوند اتصال صفت به اسم', persianMeaning: 'ِ' },
          { japanese: '町', reading: 'まち', romaji: 'machi', role: 'اسم موصوف', persianMeaning: 'شهر' },
          { japanese: 'です', reading: 'です', romaji: 'desu', role: 'Copula', persianMeaning: 'است' }
        ]
      },
      {
        id: 'na-adj-ex-2',
        japanese: 'この図書館はとても静かです。',
        rubyHtml: 'この<ruby>図書館<rt>としょかん</rt></ruby>はとても<ruby>静<rt>しず</rt></ruby>かです。',
        reading: 'この としょかん は とても しずか です。',
        romaji: 'Kono toshokan wa totemo shizuka desu.',
        persianNatural: 'این کتابخانه بسیار ساکت و آرام است.',
        persianLiteral: 'این کتابخانه، بسیار ساکت است.',
        audioText: 'この図書館はとても静かです。',
        context: 'توصیف فضای مطالعه در دانشگاه',
        breakdown: [
          { japanese: 'この図書館', reading: 'この としょかん', romaji: 'kono toshokan', role: 'موضوع جمله', persianMeaning: 'این کتابخانه' },
          { japanese: 'は', reading: 'わ', romaji: 'wa', role: 'ذره موضوع', persianMeaning: 'در موردِ' },
          { japanese: 'とても', reading: 'とても', romaji: 'totemo', role: 'قید شدت', persianMeaning: 'بسیار' },
          { japanese: '静か', reading: 'しずか', romaji: 'shizuka', role: 'صفت な بدون な در پایان جمله', persianMeaning: 'آرام / ساکت' },
          { japanese: 'です', reading: 'です', romaji: 'desu', role: 'Copula مؤدبانه', persianMeaning: 'است' }
        ]
      }
    ],
    step6NaturalExamples: [
      {
        id: 'na-adj-ex-3',
        japanese: '新幹線はとても便利ですね。',
        rubyHtml: '<ruby>新幹線<rt>しんかんせん</rt></ruby>はとても<ruby>便利<rt>べんり</rt></ruby>ですね。',
        reading: 'しんかんせん は とても べんり です ね。',
        romaji: 'Shinkansen wa totemo benri desu ne.',
        persianNatural: 'قطار شینکانسن واقعاً راحت و کاربردیه مگه نه؟',
        persianLiteral: 'قطار سریع‌السیر، بسیار سودمند است مگه نه.',
        audioText: '新幹線はとても便利ですね。',
        context: 'هم‌صحبتی با مسافر کناری در سفر به اوزاکا',
        breakdown: [
          { japanese: '新幹線', reading: 'しんかんせん', romaji: 'Shinkansen', role: 'نام قطارهای گلوله‌ای ژاپن', persianMeaning: 'شینکانسن' },
          { japanese: 'は', reading: 'わ', romaji: 'wa', role: 'ذره موضوع', persianMeaning: 'درباره' },
          { japanese: 'とても', reading: 'とても', romaji: 'totemo', role: 'قید شدت', persianMeaning: 'بسیار' },
          { japanese: '便利', reading: 'べんり', romaji: 'benri', role: 'صفت نوع な', persianMeaning: 'راحت / کاربردی / با امکانات' },
          { japanese: 'です', reading: 'です', romaji: 'desu', role: 'Copula', persianMeaning: 'است' },
          { japanese: 'ね', reading: 'ね', romaji: 'ne', role: 'ذره جلب توافق', persianMeaning: 'مگه نه' }
        ]
      }
    ],
    step7Situations: [
      {
        id: 'na-adj-sit-1',
        scenario: '🏫 محیط دانشگاه: معرفی یک استاد باحوصله',
        settingName: 'school',
        locationEmoji: '🏫',
        description: 'دانشجوی سال بالایی به دانشجوی جدید مشورت می‌دهد:',
        sentence: {
          id: 'na-adj-sit-sent-1',
          japanese: '山田先生はとても親切な先生ですよ。',
          rubyHtml: '<ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>はとても<ruby>親切<rt>しんせつ</rt></ruby>な<ruby>先生<rt>せんせい</rt></ruby>ですよ。',
          reading: 'やまだ せんせい は とても しんせつ な せんせい です よ。',
          romaji: 'Yamada-sensei wa totemo shinsetsu na sensei desu yo.',
          persianNatural: 'استاد یامادا معلم بسیار مهربان و دلسوزی هستند، مطمئن باش!',
          persianLiteral: 'استاد یامادا، بسیار مهربانِ معلم است حتماً.',
          audioText: '山田先生はとても親切な先生ですよ。',
          breakdown: [
            { japanese: '山田先生', reading: 'やまだ せんせい', romaji: 'Yamada-sensei', role: 'موضوع سخن', persianMeaning: 'استاد یامادا' },
            { japanese: 'は', reading: 'わ', romaji: 'wa', role: 'ذره موضوع', persianMeaning: 'درباره' },
            { japanese: 'とても', reading: 'とても', romaji: 'totemo', role: 'قید شدت', persianMeaning: 'خیلی' },
            { japanese: '親切な', reading: 'しんせつ な', romaji: 'shinsetsu na', role: 'صفت な متصل به اسم', persianMeaning: 'مهربانِ' },
            { japanese: '先生', reading: 'せんせい', romaji: 'sensei', role: 'اسم موصوف', persianMeaning: 'استاد' },
            { japanese: 'です', reading: 'です', romaji: 'desu', role: 'Copula', persianMeaning: 'است' },
            { japanese: 'よ', reading: 'よ', romaji: 'yo', role: 'ذره آگاهی‌بخشی', persianMeaning: 'بدانید' }
          ]
        }
      }
    ],
    step8WordAnatomyNote: 'دو تله بزرگ برای زبان‌آموزان: کلمات きれい (زیبا/تمیز) و 嫌い (بیزار/متنفر) با اینکه صدای i در پایان دارند، هر دو صفت نوع な هستند: きれいな花 (گل زیبا) و 嫌いな食べ物 (غذایی که از آن بدم می‌آید).',
    step9Pitfalls: [
      {
        id: 'na-adj-pit-1',
        wrong: 'この部屋は静かなです。(آوردن na قبل از desu در پایان جمله)',
        wrongReading: 'この へや は しずか な です。',
        wrongRomaji: 'Kono heya wa shizuka na desu.',
        correct: 'この部屋は静かです。',
        correctReading: 'この へや は しずか です。',
        correctRomaji: 'Kono heya wa shizuka desu.',
        explanation: 'علامت な فقط زمانی ظاهر می‌شود که بعد از آن مستقیماً اسمی قرار داشته باشد.',
        ruleExplanation: 'در انتهای جمله، صفت な به شکل ریشه خالی + だ یا です ظاهر می‌شود و な حذف می‌گردد.'
      },
      {
        id: 'na-adj-pit-2',
        wrong: '静か町 (حذف な هنگام اتصال به اسم)',
        wrongReading: 'しずか まち',
        wrongRomaji: 'Shizuka machi',
        correct: '静かな町 (حتماً باید な گذاشته شود)',
        correctReading: 'しずか な まち',
        correctRomaji: 'Shizuka na machi',
        explanation: 'صفت な بدون حرف な نمی‌تواند به اسم بچسبد.',
        ruleExplanation: 'حرف な در واقع مخفف باستانی である است که پل پیوند صفت به موصوف بوده است.'
      }
    ],
    step10Comparison: {
      target: 'い-Adjectives',
      rows: [
        { feature: 'رفتار صرفی', thisStructure: 'عیناً شبیه اسم (صرف با です/だ/じゃない)', otherStructure: 'صرف درونی شبه‌فعلی (صرف با くない/かった)', notes: 'صفت‌های な در واقع اسامی توصیفی هستند.' }
      ]
    },
    step11NativeNuance: 'یکی از پرکاربردترین صفات な در ژاپن واژه «大変» (Taihen) است. اگر بگویید «大変ですね» یعنی «واقعاً سخته / درکت می‌کنم، چه اوضاع دشواری!» که عمق همدردی ژاپنی‌ها را نشان می‌دهد.'
  },

  // 12. か (Ka - Question Particle)
  {
    id: 'ka',
    lessonId: 1,
    symbol: 'か',
    title: 'か (Ka) — ذره پرسش‌ساز و علامت سوال شنیداری',
    subTitle: 'تبدیل هر جمله به سوال بدون نیاز به تغییر ترتیب کلمات',
    category: 'question',
    reading: 'か',
    romaji: 'ka',
    badge: 'پرسش بنیادین',
    step1Intro: 'در زبان‌های غربی برای سوالی کردن باید جای فعل و فاعل را عوض کنید (You are -> Are you?). در ژاپنی زندگی بی‌نهایت ساده‌تر است! فقط کافی است جمله خبری خود را بگویید و در انتهای آن یک «か» بگذارید. تمام! جمله فوراً به سوال تبدیل شد. در زبان نوشتاری سنتی ژاپنی حتی نیازی به علامت سوال (؟) نیست، چون خود か مثل یک علامت سوال شنیداری عمل می‌کند.',
    step2Definition: 'ذره نهایی (Sentence-ending Particle) که بار پرسشی (Interrogative) ایجاد می‌کند. در زبان مؤدبانه همیشه بعد از です یا ます می‌آید (ですか / ますか).',
    step3Formula: 'جمله خبری + か',
    step4HowToBuild: [
      'جمله خبری: これは本です (این کتاب است).',
      'جمله پرسشی: これは本ですか (آیا این کتاب است؟).',
      'پرسش با کلمات پرسشی: トイレはどこですか (سرویس بهداشتی کجاست؟). در اینجا هم انتهای جمله با ですか تمام می‌شود.',
      '⚠️ نکته لحن عامیانه: در مکالمات دوستانه و غیررسمی با دوستان، جوانان معمولاً か را حذف کرده و فقط لحن صدای خود را در پایان جمله بالا می‌برند: これ、本？ (این کتابه؟). آوردن だか یا だ به همراه か در مکالمه دوستانه معمولاً خشن یا گستاخانه شنیده می‌شود.'
    ],
    step5SimpleExamples: [
      {
        id: 'ka-ex-1',
        japanese: '田中さんは先生ですか。',
        rubyHtml: '<ruby>田中<rt>たなか</rt></ruby>さんは<ruby>先生<rt>せんせい</rt></ruby>ですか。',
        reading: 'たなか さん は せんせい です か。',
        romaji: 'Tanaka-san wa sensei desu ka.',
        persianNatural: 'آیا آقای تاناکا معلم هستند؟',
        persianLiteral: 'آقای تاناکا، معلم است آیا؟',
        audioText: '田中さんは先生ですか。',
        context: 'پرسیدن درباره شغل یک فرد جدید در اداره',
        breakdown: [
          { japanese: '田中さん', reading: 'たなか さん', romaji: 'Tanaka-san', role: 'موضوع مورد سوال', persianMeaning: 'آقای تاناکا' },
          { japanese: 'は', reading: 'わ', romaji: 'wa', role: 'ذره موضوع', persianMeaning: 'درباره' },
          { japanese: '先生', reading: 'せんせい', romaji: 'sensei', role: 'اسم شغل', persianMeaning: 'معلم / استاد' },
          { japanese: 'です', reading: 'です', romaji: 'desu', role: 'Copula مؤدبانه', persianMeaning: 'است' },
          { japanese: 'か', reading: 'か', romaji: 'ka', role: 'ذره پرسش‌ساز', persianMeaning: 'آیا؟' }
        ]
      },
      {
        id: 'ka-ex-2',
        japanese: 'お元気ですか。',
        rubyHtml: 'お<ruby>元気<rt>げんき</rt></ruby>ですか。',
        reading: 'おげんき です か。',
        romaji: 'O-genki desu ka.',
        persianNatural: 'حال شما چطور است؟ (خوب هستید؟)',
        persianLiteral: 'سلامت هستید آیا؟',
        audioText: 'お元気ですか。',
        context: 'احوالپرسی کلاسیک و مؤدبانه ژاپنی',
        breakdown: [
          { japanese: 'お', reading: 'お', romaji: 'o', role: 'پیشوند احترام مؤدبانه', persianMeaning: 'محترمانه' },
          { japanese: '元気', reading: 'げんき', romaji: 'genki', role: 'صفت نوع な (سلامت/انرژی)', persianMeaning: 'سرحال / سلامت' },
          { japanese: 'ですか', reading: 'です か', romaji: 'desu ka', role: 'پایانه پرسشی مؤدبانه', persianMeaning: 'هستید آیا؟' }
        ]
      }
    ],
    step6NaturalExamples: [
      {
        id: 'ka-ex-3',
        japanese: 'すみません、駅はどこですか。',
        rubyHtml: 'すみません、<ruby>駅<rt>えき</rt></ruby>はどこですか。',
        reading: 'すみません、えき は どこ です か。',
        romaji: 'Sumimasen, eki wa doko desu ka.',
        persianNatural: 'ببخشید، ایستگاه قطار کجاست؟',
        persianLiteral: 'عذر می‌خواهم، ایستگاه، کجا است آیا؟',
        audioText: 'すみません、駅はどこですか。',
        context: 'پرسیدن آدرس از عابران پیاده در توکیو',
        breakdown: [
          { japanese: 'すみません', reading: 'すみません', romaji: 'sumimasen', role: 'عذرخواهی / جلب توجه', persianMeaning: 'ببخشید' },
          { japanese: '駅', reading: 'えき', romaji: 'eki', role: 'اسم مکان', persianMeaning: 'ایستگاه قطار' },
          { japanese: 'は', reading: 'わ', romaji: 'wa', role: 'ذره موضوع', persianMeaning: 'درباره' },
          { japanese: 'どこ', reading: 'どこ', romaji: 'doko', role: 'کلمه پرسشی مکان', persianMeaning: 'کجا' },
          { japanese: 'ですか', reading: 'です か', romaji: 'desu ka', role: 'Copula پرسشی', persianMeaning: 'است آیا؟' }
        ]
      }
    ],
    step7Situations: [
      {
        id: 'ka-sit-1',
        scenario: '🍜 رستوران رامن: پرسش درباره میزان تندی غذا',
        settingName: 'restaurant',
        locationEmoji: '🍜',
        description: 'مشتری قبل از سفارش از گارسون سوال می‌کند:',
        sentence: {
          id: 'ka-sit-sent-1',
          japanese: 'このスープは辛いですか。',
          rubyHtml: 'このスープは<ruby>辛<rt>から</rt></ruby>いですか。',
          reading: 'この スープ は からい です か。',
          romaji: 'Kono suupu wa karai desu ka.',
          persianNatural: 'آیا این سوپ تند است؟',
          persianLiteral: 'این سوپ، تند است آیا؟',
          audioText: 'このスープは辛いですか。',
          breakdown: [
            { japanese: 'このスープ', reading: 'この スープ', romaji: 'kono suupu', role: 'موضوع مورد سوال', persianMeaning: 'این سوپ' },
            { japanese: 'は', reading: 'わ', romaji: 'wa', role: 'ذره موضوع', persianMeaning: 'درباره' },
            { japanese: '辛い', reading: 'からい', romaji: 'karai', role: 'صفت نوع い', persianMeaning: 'تند / فلفلی' },
            { japanese: 'ですか', reading: 'です か', romaji: 'desu ka', role: 'پرسش مؤدبانه', persianMeaning: 'است آیا؟' }
          ]
        }
      }
    ],
    step8WordAnatomyNote: 'کلمه か اگر به کلمات پرسشی بچسبد، معنی نامعین به آنها می‌دهد! مثلاً 何 (چه چیز) + か می‌شود 何か (چیزی)، 誰 (چه کسی) + か می‌شود 誰か (کسی)، どこ (کجا) + か می‌شود どこか (جایی). در درس ۸ این سیستم را عمیقاً کاوش خواهیم کرد.',
    step9Pitfalls: [
      {
        id: 'ka-pit-1',
        wrong: 'دانش‌آموز به دوست صمیمی‌اش بگوید: これは何だか。(لحن بسیار غریب و نامتعارف)',
        wrongReading: 'これ は なんだか。',
        wrongRomaji: 'Kore wa nandaka.',
        correct: 'これ、何？ (در زبان عامیانه با بالا بردن آهنگ صدا سوال کنید)',
        correctReading: 'これ、なに？',
        correctRomaji: 'Kore, nani?',
        explanation: 'در زبان عامیانه ترکیب だ + か برای سوال مستقیم به کار نمی‌رود.',
        ruleExplanation: 'ترکیب だか بیشتر شبیه زمزمه درونی به معنای «نمی‌دونم چرا...» است، نه سوال مستقیم از مخاطب.'
      }
    ],
    step10Comparison: {
      target: 'ذرات لحن‌دهنده よ و ね',
      rows: [
        { feature: 'هدف گوینده', thisStructure: 'کسب اطلاعات نو (درخواست پاسخ)', otherStructure: 'よ: دادن اطلاعات نو به مخاطب / ね: تاییدخواهی', notes: 'این سه ذره اضلاع مثلث تعامل مکالمه‌ای ژاپن هستند.' }
      ]
    },
    step11NativeNuance: 'عبارت «そうですか» با لحن نزولی به معنی سوال نیست! بلکه به معنی «آها، که اینطور... متوجه شدم» (Acknowledge) در شنیدن سخنان مخاطب است و یکی از ارکان مهم گوش دادن فعال (Aizuchi) در فرهنگ ژاپن است.'
  }
];
