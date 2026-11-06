import { LessonOverview, RoadmapNode } from '../types/grammar';

export const LESSONS_LIST: LessonOverview[] = [
  {
    number: 1,
    title: 'مبانی و ساختارهای بنیادین جمله ژاپنی',
    japaneseTitle: '自然な日本語の基礎文型',
    subtitle: 'Foundations of Natural Japanese Sentences',
    description: 'در این درس اسکلت اصلی جملات ژاپنی، ذرات بنیادین موضوعی، سیستم اشاره مکانی و پایه‌گذاری صفت‌های نوع い و な را با عمق کامل فرامی‌گیرید.',
    structures: [
      'だ (Da)',
      'です (Desu)',
      'は (Wa - Topic)',
      'も (Mo - Also)',
      'これ (Kore)',
      'それ (Sore)',
      'あれ (Are)',
      'の (No - Particle)',
      'いい (Ii / Yoi)',
      'い-Adjectives',
      'な-Adjectives',
      'か (Ka - Question)'
    ],
    status: 'active',
    category: 'پایه‌ها و ذرات'
  },
  {
    number: 2,
    title: 'سیستم جامع افعال ژاپنی و ذرات مفعولی',
    japaneseTitle: '動詞の基本体系と目的語',
    subtitle: 'Basic Verb Systems',
    description: 'تشخیص افعال Godan و Ichidan، فرم مؤدبانه ます، منفی کردن افعال، ذرات が، を، と و ضمایر مکانی ここ، そこ، あそこ.',
    structures: ['が (Ga)', 'よ (Yo)', 'ね (Ne)', 'る-Verb (Ichidan)', 'う-Verb (Godan)', 'ます (Masu)', 'Negative Verbs', 'を (Wo/O)', 'と (To)', 'ここ/そこ/あそこ'],
    status: 'upcoming',
    category: 'سیستم افعال'
  },
  {
    number: 3,
    title: 'ذرات اساسی مکانی-زمانی و بیان‌های موقعیتی',
    japaneseTitle: '必須助詞と状況表現',
    subtitle: 'Essential Particles and Basic Expressions',
    description: 'مقایسه عمیق で vs に، تفاوت شگرف ある vs いる، کاربرد حدس با でしょう/だろう، ساختار جادویی ～んです و صفات گذشته.',
    structures: ['で (Location/Means)', 'に (Target/Time)', 'でしょう / だろう', 'がある / がいる', 'この / その / あの', '～んです / ～のです', 'い-Adjective Past'],
    status: 'upcoming',
    category: 'ذرات و وجود'
  },
  {
    number: 4,
    title: 'گسترش جملات، اسم‌سازی و افعال بی‌قاعده',
    japaneseTitle: '文の拡張と不規則動詞',
    subtitle: 'Expanding Sentences',
    description: 'اسم‌سازی با の/のは/のが، افعال حرکتی へ行く، افعال بی‌قاعده する و 来る، گذشته افعال، و تحلیل چرایی صفت بودن 好き/嫌い.',
    structures: ['の / のは / のが', 'い/な-Adj + Noun', 'へ行く', 'する (Suru)', '来る (Kuru)', 'Past Form Verbs', '好き / 嫌い', 'い-Adj Negative (くない)'],
    status: 'upcoming',
    category: 'ترکیب و گسترش'
  },
  {
    number: 5,
    title: 'اتصال جمله‌ها، دلایل و فرم پیوندی て',
    japaneseTitle: '文の接続と「て形」',
    subtitle: 'Basic Sentence Linking Structures',
    description: 'تحلیل دقیق て-Form، مقایسه شاهکار から vs ので، مقایسه تضاد けど vs が، استمرار با ～ている①، و هدف حرکت با Verb+に行く.',
    structures: ['で (Means)', 'ので (Since/So)', 'から (Because / From)', 'けど / だけど vs が', 'Verb + て', '～ている① (Progressive)', 'Verb + に行く'],
    status: 'upcoming',
    category: 'پیوند جملات'
  },
  {
    number: 6,
    title: 'کلمات پرسشی، نقل‌قول و پر کردن شکاف‌های پایه‌ای',
    japaneseTitle: '疑問詞・引用・基礎の補完',
    subtitle: 'Filling the Gaps of the Basics',
    description: 'کلمات پرسشی 誰، なぜ، どうして، なんで، گذشته و منفی صفات و اسامی (だった، じゃない، じゃなかった)، نقل‌قول と/って، و صفت‌های موصولی.',
    structures: ['誰 (Dare)', 'なぜ / どうして / なんで', 'だった / でした', 'じゃない / じゃなかった', 'と / って (Quotation)', 'Verb + Noun Modifier', 'が/の Switching', 'な (Prohibitive)'],
    status: 'upcoming',
    category: 'پرسش و نقل‌قول'
  },
  {
    number: 7,
    title: 'ساختارهای پیوندی پیشرفته‌تر و حالات استمراری',
    japaneseTitle: '発展的接続と状態変化',
    subtitle: 'More Advanced Linking Structures',
    description: 'کاربردهای پیشرفته だけ، تفاوت ～ている به عنوان حالت پایدار (State of Being)، مقایسه もう vs まだ، اجازه با ～てもいい، و میل با ～たい.',
    structures: ['だけ (Dake)', 'どれ / どこ / どの', '～ている② (State of Being)', '～てから', 'もう vs まだ', '～てもいい (Permission)', '～たい (Desire)', '～たり～たりする'],
    status: 'upcoming',
    category: 'حالات و اجازه'
  },
  {
    number: 8,
    title: 'مقایسه، مقادیر و فرآیندهای تغییر',
    japaneseTitle: '比較・数量・変化の表現',
    subtitle: 'Amounts, Comparison and Change',
    description: 'مقایسه برتری ～より～のほうが، بیشترین با のなかでいちばん، تغییر با になる/くなる، تصمیم با にする، افراط با すぎる، و مقادیر نامعین.',
    structures: ['けっこう vs とても', 'たくさん vs 多い', 'まえに / くらい', 'すぎる (Too much)', 'にする vs になる', 'より～のほうが (Comparison)', '何か / 誰も / どこも'],
    status: 'upcoming',
    category: 'مقایسه و تغییر'
  },
  {
    number: 9,
    title: 'پیشنهادات، درخواست‌ها و ضرورت‌ها/تعهدات',
    japaneseTitle: '提案・依頼・義務の表現',
    subtitle: 'Suggestions, Requests and Obligations',
    description: 'مقایسه عمیق ましょう vs ませんか vs ましょうか، درخواست محترمانه با ～てください، ممنوعیت با ～てはいけない، و ضرورت با ～なくてはいけない.',
    structures: ['ましょう / ましょうか / ませんか', '～てください', '～ないでください', '～てはいけない (Prohibition)', '～なくてはいけない (Must)', '～たほうがいい (Advice)', '～なきゃ / ～なくちゃ'],
    status: 'upcoming',
    category: 'تعهد و پیشنهاد'
  },
  {
    number: 10,
    title: 'تجربه‌ها، مهارت‌ها و جهان شگفت‌انگیز بده/بستان',
    japaneseTitle: '経験・能力・授受動詞の極意',
    subtitle: 'Experiences, Skills and Giving/Receiving',
    description: 'بیان تجربه با ～たことがある، مهارت با のがじょうず/へた، قصد با つもりだ، و تحلیل ماتریس دیدگاه در افعال دادوستد: あげる vs くれる vs もらう.',
    structures: ['～たことがある (Experience)', '～ている③', 'Adjective + て / Noun + で', 'のがじょうず / のがへた', 'あげる (Give to other)', 'くれる (Give to me)', 'もらう (Receive)', '～つもりだ (Intention)'],
    status: 'upcoming',
    category: 'دادوستد و تجربه'
  }
];

export const ROADMAP_NODES: RoadmapNode[] = [
  {
    id: 'foundation',
    title: 'پایه‌های جمله و اسکلت هویتی',
    persianTitle: 'اسکلت جمله: موضوع + تکیه‌گاه',
    level: 1,
    description: 'در زبان ژاپنی، جمله حول موضوع (Topic با は) و گزاره (با です/だ) شکل می‌گیرد. درک این پیوند، گام نخست همه چیز است.',
    connectedTo: ['particles', 'adjectives'],
    prerequisites: [],
    examples: 'これは本です。 (این کتاب است)'
  },
  {
    id: 'particles',
    title: 'ذرات جهت‌نما و روابط دستوری',
    persianTitle: 'ذرات اساسی (助詞 - Joshi)',
    level: 2,
    description: 'ذرات مانند چسب گرامری نقش کلمات را معین می‌کنند: は (موضوع)، が (فاعل عینی)، を (مفعول مستقیم)، に/で (مکان و زمان)، と (همراهی/نقل‌قول).',
    connectedTo: ['verbs', 'adjectives'],
    prerequisites: ['foundation'],
    examples: '図書館で本を読む。 (در کتابخانه کتاب خواندن)'
  },
  {
    id: 'verbs',
    title: 'سیستم افعال ژاپنی (گروه‌بندی و صرف)',
    persianTitle: 'خانواده افعال (Godan / Ichidan / Irregular)',
    level: 3,
    description: 'افعال ژاپنی قلب پویای زبان هستند. تمایز میان افعال ۵-حالته و ۱-حالته و تسلط بر فرم‌های دفتری و مؤدبانه ます پایه ارتباط است.',
    connectedTo: ['te-form', 'linking'],
    prerequisites: ['particles'],
    examples: '食べる (Ichidan) / 行く (Godan) / 食べます'
  },
  {
    id: 'adjectives',
    title: 'صفات توصیفی (نوع い و な)',
    persianTitle: 'جهان صفت‌ها و رفتار شبه‌فعلی',
    level: 2,
    description: 'صفات ژاپنی مانند زبان‌های غربی ساکن نیستند؛ خودشان گذشته و منفی می‌شوند! صفت‌های い ذاتاً صرف‌پذیرند و صفت‌های な به پایانه دلبسته‌اند.',
    connectedTo: ['linking', 'comparisons'],
    prerequisites: ['foundation'],
    examples: '高い (گران) → 高くない (گران نیست) / 静かだ'
  },
  {
    id: 'te-form',
    title: 'شاه‌کلید اتصال: فرم て (Te-Form)',
    persianTitle: 'پل پیوندی افعال و حالات',
    level: 4,
    description: 'مهم‌ترین صرف فعلی در ژاپنی! بیش از ۱۵ الگوی حیاتی از جمله استمرار (ている)، توالی زمانی (てから)، درخواست (てください) و اجازه (てもいい) بر روی فرم て بنا شده‌اند.',
    connectedTo: ['continuous', 'requests'],
    prerequisites: ['verbs'],
    examples: '読んでください (لطفاً بخوانید) / 食べている (در حال خوردن)'
  },
  {
    id: 'linking',
    title: 'پیوند جملات، علت و تضاد',
    persianTitle: 'روابط علی و تضادی (Reason & Contrast)',
    level: 5,
    description: 'بیان روابط منطقی و علت با から و ので، و تضاد ملایم با けど، だけど و が. درک تفاوت لحن رسمی/شخصی این پیوندها.',
    connectedTo: ['continuous', 'comparisons'],
    prerequisites: ['particles', 'verbs'],
    examples: '雨ですから、行きません。 (چون باران است، نمی‌روم)'
  },
  {
    id: 'continuous',
    title: 'حالات استمراری و پایدار (ている)',
    persianTitle: 'استمرار عمل vs وضعیت پایدار نتیجه',
    level: 6,
    description: 'برخلاف تصور اولیه، ～ている فقط حال استمراری انگلیسی نیست، بلکه وضعیت‌های پایدار حاصل از یک رویداد قطعی را نیز نشان می‌دهد (مانند ازدواج کردن یا ساکن بودن).',
    connectedTo: ['requests', 'desires'],
    prerequisites: ['te-form'],
    examples: '東京に住んでいる (در توکیو ساکن هستم)'
  },
  {
    id: 'comparisons',
    title: 'مقایسه، تغییر و تصمیم‌گیری',
    persianTitle: 'مقایسه سطوح و تغییر حالات',
    level: 7,
    description: 'الگوهای ترازسنجی با より و のほうが، تغییرات طبیعی با なる و تصمیم‌های انسانی با にする، و مقادیر زیاد/کم.',
    connectedTo: ['requests', 'giving-receiving'],
    prerequisites: ['adjectives', 'linking'],
    examples: 'コーヒーにします (قهوه انتخاب می‌کنم)'
  },
  {
    id: 'requests',
    title: 'پیشنهاد، درخواست و ضرورت اجتماعی',
    persianTitle: 'نیت‌ها، ادب و دستورهای ملایم',
    level: 8,
    description: 'ادب ژاپنی در استفاده دقیق از پیشنهادهای ملایم (ませんか)، درخواست‌ها (てください)، توصیه‌ها (たほうがいい) و ضرورت‌ها (なくてはいけない) تجلی می‌یابد.',
    connectedTo: ['giving-receiving'],
    prerequisites: ['te-form'],
    examples: '一緒に食べませんか (با هم غذا نمی‌خوریم؟)'
  },
  {
    id: 'giving-receiving',
    title: 'سیستم شگفت‌انگیز دادوستد و تجارب',
    persianTitle: 'افعال اهدا و دریافت (あげる・くれる・もらう)',
    level: 9,
    description: 'اوج روان‌شناسی زبان ژاپنی: هر مبادله بر اساس زاویه دید گوینده (درون‌گروه vs برون‌گروه) با یکی از سه فعل あげる، くれる یا もらう بیان می‌شود.',
    connectedTo: [],
    prerequisites: ['te-form', 'requests'],
    examples: '友達がプレゼントをくれた (دوستم به من هدیه داد)'
  }
];
