import { ConversationScenario } from '../types/grammar';

export const LESSON_1_CONVERSATIONS: ConversationScenario[] = [
  // Scenario 1: Convenience Store (Konbini)
  {
    id: 'conv-konbini',
    title: 'خرید در سوپرمارکت شبانه‌روزی (کونبینی در توکیو)',
    subtitle: 'Konbini Shopping Scenario',
    location: 'FamilyMart در محله شینجوکو',
    emoji: '🏪',
    description: 'علی دانشجوی خارجی برای خرید ناهار و نوشیدنی به یک کونبینی رفته و با فروشنده ژاپنی (تاناکا) گفت‌وگو می‌کند.',
    characters: [
      { name: 'علی (Ali)', role: 'دانشجوی خارجی در ژاپن', avatar: '👨‍🎓' },
      { name: 'فروشنده (Tenin)', role: 'صندوق‌دار کونبینی', avatar: '🏪' }
    ],
    culturalNotes: [
      'در فروشگاه‌های ژاپن، کارمندان بسیار خوشامدگویی می‌کنند (いらっしゃいませ - Irasshaimase). نیازی به پاسخ دادن به این جمله نیست، یک تعظیم ملایم کافیست.',
      'واژه おにぎり (Onigiri) همان مثلث‌های برنجی معروف پیچیده در جلبک نوری است که محبوب‌ترین اسنک ارزان‌قیمت در ژاپن است.',
      'گرم کردن غذا در ماکروویو فروشگاه با عبارت «あたためますか» (آیا گرمش کنم؟) پیشنهاد می‌شود.'
    ],
    lines: [
      {
        id: 'konbini-1',
        speaker: 'فروشنده (Tenin)',
        avatar: '🏪',
        japanese: 'いらっしゃいませ！',
        reading: 'いらっしゃいませ！',
        romaji: 'Irasshaimase!',
        persian: 'خوش آمدید!',
        grammarPoint: 'عبارت کلیشه‌ای و رسمی خوشامدگویی در تمام فروشگاه‌های ژاپن',
        audioText: 'いらっしゃいませ！'
      },
      {
        id: 'konbini-2',
        speaker: 'علی (Ali)',
        avatar: '👨‍🎓',
        japanese: 'すみません、これは何のおにぎりですか。',
        reading: 'すみません、これ は なん の おにぎり です か。',
        romaji: 'Sumimasen, kore wa nan no onigiri desu ka.',
        persian: 'ببخشید، این اونیگیری چه موادی داره؟ (اونیگیریِ چیه؟)',
        grammarPoint: 'استفاده از これ (اشاره نزدیک به دست) + は (موضوع) + 何の (نوع و محتوا) + ですか (پرسش مؤدبانه)',
        audioText: 'すみません、これは何のおにぎりですか。'
      },
      {
        id: 'konbini-3',
        speaker: 'فروشنده (Tenin)',
        avatar: '🏪',
        japanese: 'それはサケのおにぎりです。とてもおいしいですよ。',
        reading: 'それ は サケ の おにぎり です。 とても おいしい です よ。',
        romaji: 'Sore wa sake no onigiri desu. Totemo oishii desu yo.',
        persian: 'اون اونیگیری ماهی سالمون است. خیلی هم خوشمزه‌ست!',
        grammarPoint: 'پاسخ با それ (چون در دست خریدار است) + の (مالکیت/جنس) + صفت い (おいしい) + です + ذره اطلاعات‌بخش よ',
        audioText: 'それはサケのおにぎりです。とてもおいしいですよ。'
      },
      {
        id: 'konbini-4',
        speaker: 'علی (Ali)',
        avatar: '👨‍🎓',
        japanese: 'そうですか。じゃ、これをお願いします。あれも一つください。',
        reading: 'そう です か。 じゃ、これ を おねがいします。 あれ も ひとつ ください。',
        romaji: 'Sou desu ka. Ja, kore o onegaishimasu. Are mo hitotsu kudasai.',
        persian: 'که این‌طور. پس این رو لطفاً می‌برم. اون نانِ اون دور رو هم یکی به من بدید.',
        grammarPoint: 'استفاده از これ (در دست) و あれ (روی قفسه دور) + ذره شمول も (آن هم)',
        audioText: 'そうですか。じゃ、これをお願いします。あれも一つください。'
      },
      {
        id: 'konbini-5',
        speaker: 'فروشنده (Tenin)',
        avatar: '🏪',
        japanese: 'はい、かしこまりました。全部で６５０円です。',
        reading: 'はい、かしこまりました。 ぜんぶ で ろっぴゃく ごじゅう えん です。',
        romaji: 'Hai, kashikomarimashita. Zenbu de roppyaku gojuu en desu.',
        persian: 'چشم، متوجه شدم. روی هم رفته ۶۵۰ ین می‌شود.',
        grammarPoint: 'کاپولای مؤدبانه です در پایان عدد و قیمت کالا',
        audioText: 'はい、かしこまりました。全部で６５０円です。'
      }
    ]
  },

  // Scenario 2: University Orientation
  {
    id: 'conv-university',
    title: 'روز معارفه و آشنایی در دانشگاه (دانشگاه توکیو)',
    subtitle: 'Campus Introduction Scenario',
    location: 'لابی دانشکده ادبیات دانشگاه توکیو',
    emoji: '🏫',
    description: 'سارا دانشجوی ورودی جدید در روز ثبت‌نام با یک دانشجوی ژاپنی به نام کنتا و یک دانشجوی کره‌ای به نام مین‌هو آشنا می‌شود.',
    characters: [
      { name: 'سارا (Sara)', role: 'دانشجوی سال اول زبان', avatar: '👩‍🎓' },
      { name: 'کنتا (Kenta)', role: 'دانشجوی ژاپنی سال دوم', avatar: '👨‍💼' },
      { name: 'مین‌هو (Minho)', role: 'دانشجوی اهل کره جنوبی', avatar: '🧑‍🎓' }
    ],
    culturalNotes: [
      'عبارت «よろしくおねがいします» مهم‌ترین و مقدس‌ترین عبارت ارتباطی در ژاپن است؛ به معنای «امیدوارم رابطه خوبی داشته باشیم و هوای من را داشته باشید».',
      'پسوند «さん» (San) برای احترام به کار می‌رود و هرگز نباید آن را برای اسم خودتان به کار ببرید (❌ 私はサラさんです).'
    ],
    lines: [
      {
        id: 'univ-1',
        speaker: 'سارا (Sara)',
        avatar: '👩‍🎓',
        japanese: '初めまして！私はサラです。イラン人です。',
        reading: 'はじめまして！ わたし は サラ です。 イランじん です。',
        romaji: 'Hajimemashite! Watashi wa Sara desu. Iranjin desu.',
        persian: 'از دیدارتان خوشبختم! من سارا هستم. اهل ایران هستم.',
        grammarPoint: 'معرفی خود با は (موضوع) + اسم + です (کاپولای مؤدبانه)',
        audioText: '初めまして！私はサラです。イラン人です。'
      },
      {
        id: 'univ-2',
        speaker: 'کنتا (Kenta)',
        avatar: '👨‍💼',
        japanese: '初めまして、健太です。よろしくお願いします！',
        reading: 'はじめまして、けんた です。 よろしく おねがいします！',
        romaji: 'Hajimemashite, Kenta desu. Yoroshiku onegaishimasu!',
        persian: 'از دیدارت خوشبختم، کنتا هستم. خوشحال می‌شم با هم در ارتباط باشیم!',
        grammarPoint: 'حذف 私は توسط فرد بومی به دلیل مشخص بودن موضوع از سیاق سخن',
        audioText: '初めまして、健太です。よろしくお願いします！'
      },
      {
        id: 'univ-3',
        speaker: 'مین‌هو (Minho)',
        avatar: '🧑‍🎓',
        japanese: 'あ、私も留学生です！韓国から来ました。',
        reading: 'あ、わたし も りゅうがくせい です！ かんこく から きました。',
        romaji: 'A, watashi mo ryuugakusei desu! Kankoku kara kimashita.',
        persian: 'عه، من هم دانشجوی بین‌المللی هستم! از کره جنوبی آمده‌ام.',
        grammarPoint: 'استفاده از ذره شمول も به جای は برای بیان اشتراک وضعیت دانشجو بودن',
        audioText: 'あ、私も留学生です！韓国から来ました。'
      },
      {
        id: 'univ-4',
        speaker: 'سارا (Sara)',
        avatar: '👩‍🎓',
        japanese: '健太さんの専攻は何ですか。',
        reading: 'けんた さん の せんこう は なん です か。',
        romaji: 'Kenta-san no senkou wa nan desu ka.',
        persian: 'رشته تخصصی شما چیست، آقا کنتا؟',
        grammarPoint: 'ذره مالکیت の (تخصصِ کنتا) + کلمه پرسشی 何 + ですか',
        audioText: '健太さんの専攻は何ですか。'
      },
      {
        id: 'univ-5',
        speaker: 'کنتا (Kenta)',
        avatar: '👨‍💼',
        japanese: '日本の文学です。この大学の図書館はとても大きくて静かですよ。',
        reading: 'にほん の ぶんがく です。 この だいがく の としょかん は とても おおきくて しずか です よ。',
        romaji: 'Nihon no bungaku desu. Kono daigaku no toshokan wa totemo ookikute shizuka desu yo.',
        persian: 'ادبیات ژاپن است. کتابخانه این دانشگاه خیلی بزرگ و ساکته!',
        grammarPoint: 'ترکیب صفات い و な (静かです) + صفت اشاره この',
        audioText: '日本の文学です。この大学の図書館はとても大きくて静かですよ。'
      }
    ]
  },

  // Scenario 3: Traditional Ramen Shop
  {
    id: 'conv-ramen',
    title: 'سفارش غذا در رستوران سنتی رامن',
    subtitle: 'Ramen Restaurant Order',
    location: 'محله ایکه‌بوکورو، رستوران تونکوتسو رامن',
    emoji: '🍜',
    description: 'مشتری وارد رامن‌فروشی دنج با پیشخوان چوبی می‌شود و بر اساس طعم و درجه تندی غذا سوال می‌پرسد.',
    characters: [
      { name: 'مشتری (Okyaku)', role: 'مشتری گرسنه', avatar: '🙋‍♂️' },
      { name: 'آشپز/صاحب رستوران (Master)', role: 'سرآشپز رامن‌فروشی', avatar: '👨‍🍳' }
    ],
    culturalNotes: [
      'در بسیاری از رامن‌فروشی‌های ژاپن، با دستگاه بلیط‌فروشی (Shokkenki) غذا را انتخاب می‌کنید، اما در رستوران‌های پیشخوانی مستقیم به سرآشپز سفارش می‌دهید.',
      'هورت کشیدن نودل (Zuru zuru) در ژاپن نه تنها بی‌ادبی نیست، بلکه نشانه لذت بردن از غذا و خنک کردن نودل داغ است!'
    ],
    lines: [
      {
        id: 'ramen-1',
        speaker: 'مشتری (Okyaku)',
        avatar: '🙋‍♂️',
        japanese: 'すみません！おすすめは何ですか。',
        reading: 'すみません！ おすすめ は なん です か。',
        romaji: 'Sumimasen! Osusume wa nan desu ka.',
        persian: 'ببخشید! پیشنهاد ویژه رستوران چیه؟',
        grammarPoint: 'کلمه کاربردی おすすめ (پیشنهاد ویژه) + は + 何ですか',
        audioText: 'すみません！おすすめは何ですか。'
      },
      {
        id: 'ramen-2',
        speaker: 'سرآشپز (Master)',
        avatar: '👨‍🍳',
        japanese: 'この味噌ラーメンです。スープがとても熱くておいしいですよ！',
        reading: 'この みそ ラーメン です。 スープ が とても あつくて おいしい です よ！',
        romaji: 'Kono miso raamen desu. Suupu ga totemo atsukute oishii desu yo!',
        persian: 'این میسو رامن است. سوپش خیلی داغ و خوشمزه‌ست!',
        grammarPoint: 'استفاده از が برای توصیف ویژگی حسی پدیده مشخص (سوپ) + صفت‌های い',
        audioText: 'この味噌ラーメンです。スープがとても熱くておいしいですよ！'
      },
      {
        id: 'ramen-3',
        speaker: 'مشتری (Okyaku)',
        avatar: '🙋‍♂️',
        japanese: 'そのスープは辛いですか。辛い食べ物は少し苦手です。',
        reading: 'その スープ は からい です か。 からい たべもの は すこし にがて です。',
        romaji: 'Sono suupu wa karai desu ka. Karai tabemono wa sukoshi nigate desu.',
        persian: 'اون سوپ تند است؟ من با غذاهای تند کمی مشکل دارم (نمی‌تونم بخورم).',
        grammarPoint: 'پرسش با صفت 辛い + صفت پیش از اسم (辛い食べ物) + صفت な به نام 苦手 (ضعیف بودن در چیزی)',
        audioText: 'そのスープは辛いですか。辛い食べ物は少し苦手です。'
      },
      {
        id: 'ramen-4',
        speaker: 'سرآشپز (Master)',
        avatar: '👨‍🍳',
        japanese: 'いいえ、辛くないですよ。とてもマイルドでいい味です。',
        reading: 'いいえ、からくない です よ。 とても マイルド で いい あじ です。',
        romaji: 'Iie, karakunai desu yo. Totemo mairudo de ii aji desu.',
        persian: 'خیر، تند نیست! خیلی ملایم و طعم بسیار خوبی دارد.',
        grammarPoint: 'صرف منفی صفت い با تبدیل い به くない (辛くない) + صفت بی‌قاعده いい + اسم 味 (طعم)',
        audioText: 'いいえ、辛くないですよ。とてもマイルドでいい味です。'
      },
      {
        id: 'ramen-5',
        speaker: 'مشتری (Okyaku)',
        avatar: '🙋‍♂️',
        japanese: 'あ、よかった！じゃ、それを一つお願いします。',
        reading: 'あ、よかった！ じゃ、それ を ひとつ おねがいします。',
        romaji: 'A, yokatta! Ja, sore o hitotsu onegaishimasu.',
        persian: 'آخیش، چه خوب شد! پس لطفاً یکی از همون برام بیارید.',
        grammarPoint: 'کاربرد صفت گذشته بی‌قاعده よかった برای ابراز آسودگی خاطر + ضمیر それ',
        audioText: 'あ、よかった！じゃ、それを一つお願いします。'
      }
    ]
  }
];
