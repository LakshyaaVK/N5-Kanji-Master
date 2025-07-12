export interface KanjiData {
  id: number;
  character: string;
  meanings: string[];
  onyomi: string[];
  kunyomi: string[];
  compounds: { word: string; reading: string; meaning: string }[];
  strokeCount: number;
  jlptLevel: string;
  frequency: number;
  pronunciation: string;
  exampleSentences: { sentence: string; reading: string; translation: string }[];
  usageContexts: string[];
  radicals: string[];
  mnemonics: string;
}

export const kanjiDatabase: KanjiData[] = [
  {
    id: 1,
    character: "一",
    meanings: ["one", "single", "alone"],
    onyomi: ["イチ", "イツ"],
    kunyomi: ["ひと", "ひと-つ"],
    compounds: [
      { word: "一人", reading: "ひとり", meaning: "one person, alone" },
      { word: "一月", reading: "いちがつ", meaning: "January" },
      { word: "一時", reading: "いちじ", meaning: "one o'clock" },
      { word: "一番", reading: "いちばん", meaning: "number one, first" }
    ],
    strokeCount: 1,
    jlptLevel: "N5",
    frequency: 1,
    pronunciation: "いち",
    exampleSentences: [
      { sentence: "一つください。", reading: "ひとつください。", translation: "Please give me one." },
      { sentence: "一人で行きます。", reading: "ひとりでいきます。", translation: "I will go alone." }
    ],
    usageContexts: ["Numbers", "Time", "Counting", "Ordinals"],
    radicals: ["一"],
    mnemonics: "One horizontal line represents the number one."
  },
  {
    id: 2,
    character: "二",
    meanings: ["two"],
    onyomi: ["ニ"],
    kunyomi: ["ふた", "ふた-つ"],
    compounds: [
      { word: "二人", reading: "ふたり", meaning: "two people" },
      { word: "二月", reading: "にがつ", meaning: "February" },
      { word: "二時", reading: "にじ", meaning: "two o'clock" },
      { word: "二番", reading: "にばん", meaning: "number two, second" }
    ],
    strokeCount: 2,
    jlptLevel: "N5",
    frequency: 2,
    pronunciation: "に",
    exampleSentences: [
      { sentence: "二つ持っています。", reading: "ふたつもっています。", translation: "I have two." },
      { sentence: "二人で食べました。", reading: "ふたりでたべました。", translation: "Two of us ate." }
    ],
    usageContexts: ["Numbers", "Time", "Counting", "Ordinals"],
    radicals: ["二"],
    mnemonics: "Two horizontal lines represent the number two."
  },
  {
    id: 3,
    character: "三",
    meanings: ["three"],
    onyomi: ["サン"],
    kunyomi: ["み", "み-っつ", "みつ"],
    compounds: [
      { word: "三人", reading: "さんにん", meaning: "three people" },
      { word: "三月", reading: "さんがつ", meaning: "March" },
      { word: "三時", reading: "さんじ", meaning: "three o'clock" },
      { word: "三番", reading: "さんばん", meaning: "number three, third" }
    ],
    strokeCount: 3,
    jlptLevel: "N5",
    frequency: 3,
    pronunciation: "さん",
    exampleSentences: [
      { sentence: "三つ買いました。", reading: "みっつかいました。", translation: "I bought three." },
      { sentence: "三人家族です。", reading: "さんにんかぞくです。", translation: "We are a family of three." }
    ],
    usageContexts: ["Numbers", "Time", "Counting", "Ordinals"],
    radicals: ["三"],
    mnemonics: "Three horizontal lines represent the number three."
  },
  {
    id: 4,
    character: "四",
    meanings: ["four"],
    onyomi: ["シ"],
    kunyomi: ["よ", "よ-っつ", "よん"],
    compounds: [
      { word: "四人", reading: "よにん", meaning: "four people" },
      { word: "四月", reading: "しがつ", meaning: "April" },
      { word: "四時", reading: "よじ", meaning: "four o'clock" },
      { word: "四番", reading: "よんばん", meaning: "number four, fourth" }
    ],
    strokeCount: 5,
    jlptLevel: "N5",
    frequency: 4,
    pronunciation: "よん",
    exampleSentences: [
      { sentence: "四つの角があります。", reading: "よっつのかどがあります。", translation: "There are four corners." },
      { sentence: "四人で遊びました。", reading: "よにんであそびました。", translation: "Four of us played." }
    ],
    usageContexts: ["Numbers", "Time", "Counting", "Ordinals"],
    radicals: ["囗", "八"],
    mnemonics: "A box with lines crossing inside represents four."
  },
  {
    id: 5,
    character: "五",
    meanings: ["five"],
    onyomi: ["ゴ"],
    kunyomi: ["いつ", "いつ-つ"],
    compounds: [
      { word: "五人", reading: "ごにん", meaning: "five people" },
      { word: "五月", reading: "ごがつ", meaning: "May" },
      { word: "五時", reading: "ごじ", meaning: "five o'clock" },
      { word: "五番", reading: "ごばん", meaning: "number five, fifth" }
    ],
    strokeCount: 4,
    jlptLevel: "N5",
    frequency: 5,
    pronunciation: "ご",
    exampleSentences: [
      { sentence: "五つ星ホテルです。", reading: "いつつぼしホテルです。", translation: "It's a five-star hotel." },
      { sentence: "五人で行きます。", reading: "ごにんでいきます。", translation: "Five of us will go." }
    ],
    usageContexts: ["Numbers", "Time", "Counting", "Ordinals"],
    radicals: ["五"],
    mnemonics: "Looks like a hand with five fingers."
  },
  {
    id: 6,
    character: "六",
    meanings: ["six"],
    onyomi: ["ロク"],
    kunyomi: ["む", "む-つ", "むっ-つ"],
    compounds: [
      { word: "六人", reading: "ろくにん", meaning: "six people" },
      { word: "六月", reading: "ろくがつ", meaning: "June" },
      { word: "六時", reading: "ろくじ", meaning: "six o'clock" },
      { word: "六番", reading: "ろくばん", meaning: "number six, sixth" }
    ],
    strokeCount: 4,
    jlptLevel: "N5",
    frequency: 6,
    pronunciation: "ろく",
    exampleSentences: [
      { sentence: "六つあります。", reading: "むっつあります。", translation: "There are six." },
      { sentence: "六月に結婚します。", reading: "ろくがつにけっこんします。", translation: "I will get married in June." }
    ],
    usageContexts: ["Numbers", "Time", "Counting", "Ordinals"],
    radicals: ["六"],
    mnemonics: "A person with a hat on top."
  },
  {
    id: 7,
    character: "七",
    meanings: ["seven"],
    onyomi: ["シチ"],
    kunyomi: ["なな", "なな-つ", "なの"],
    compounds: [
      { word: "七人", reading: "しちにん", meaning: "seven people" },
      { word: "七月", reading: "しちがつ", meaning: "July" },
      { word: "七時", reading: "しちじ", meaning: "seven o'clock" },
      { word: "七番", reading: "ななばん", meaning: "number seven, seventh" }
    ],
    strokeCount: 2,
    jlptLevel: "N5",
    frequency: 7,
    pronunciation: "なな",
    exampleSentences: [
      { sentence: "七つの星があります。", reading: "ななつのほしがあります。", translation: "There are seven stars." },
      { sentence: "七月は暑いです。", reading: "しちがつはあついです。", translation: "July is hot." }
    ],
    usageContexts: ["Numbers", "Time", "Counting", "Ordinals"],
    radicals: ["七"],
    mnemonics: "A line with a cut through it, like cutting something into seven pieces."
  },
  {
    id: 8,
    character: "八",
    meanings: ["eight"],
    onyomi: ["ハチ"],
    kunyomi: ["や", "や-つ", "やっ-つ"],
    compounds: [
      { word: "八人", reading: "はちにん", meaning: "eight people" },
      { word: "八月", reading: "はちがつ", meaning: "August" },
      { word: "八時", reading: "はちじ", meaning: "eight o'clock" },
      { word: "八番", reading: "はちばん", meaning: "number eight, eighth" }
    ],
    strokeCount: 2,
    jlptLevel: "N5",
    frequency: 8,
    pronunciation: "はち",
    exampleSentences: [
      { sentence: "八つの部屋があります。", reading: "やっつのへやがあります。", translation: "There are eight rooms." },
      { sentence: "八月に旅行します。", reading: "はちがつにりょこうします。", translation: "I will travel in August." }
    ],
    usageContexts: ["Numbers", "Time", "Counting", "Ordinals"],
    radicals: ["八"],
    mnemonics: "Two lines spreading apart like the number 8."
  },
  {
    id: 9,
    character: "九",
    meanings: ["nine"],
    onyomi: ["キュウ", "ク"],
    kunyomi: ["ここの", "ここの-つ"],
    compounds: [
      { word: "九人", reading: "きゅうにん", meaning: "nine people" },
      { word: "九月", reading: "くがつ", meaning: "September" },
      { word: "九時", reading: "くじ", meaning: "nine o'clock" },
      { word: "九番", reading: "きゅうばん", meaning: "number nine, ninth" }
    ],
    strokeCount: 2,
    jlptLevel: "N5",
    frequency: 9,
    pronunciation: "きゅう",
    exampleSentences: [
      { sentence: "九つの問題があります。", reading: "ここのつのもんだいがあります。", translation: "There are nine problems." },
      { sentence: "九月に学校が始まります。", reading: "くがつにがっこうがはじまります。", translation: "School starts in September." }
    ],
    usageContexts: ["Numbers", "Time", "Counting", "Ordinals"],
    radicals: ["九"],
    mnemonics: "A hook shape, like the number 9."
  },
  {
    id: 10,
    character: "十",
    meanings: ["ten"],
    onyomi: ["ジュウ"],
    kunyomi: ["とお", "と"],
    compounds: [
      { word: "十人", reading: "じゅうにん", meaning: "ten people" },
      { word: "十月", reading: "じゅうがつ", meaning: "October" },
      { word: "十時", reading: "じゅうじ", meaning: "ten o'clock" },
      { word: "十番", reading: "じゅうばん", meaning: "number ten, tenth" }
    ],
    strokeCount: 2,
    jlptLevel: "N5",
    frequency: 10,
    pronunciation: "じゅう",
    exampleSentences: [
      { sentence: "十個買いました。", reading: "じゅっこかいました。", translation: "I bought ten." },
      { sentence: "十月は涼しいです。", reading: "じゅうがつはすずしいです。", translation: "October is cool." }
    ],
    usageContexts: ["Numbers", "Time", "Counting", "Ordinals"],
    radicals: ["十"],
    mnemonics: "A cross shape representing the number ten."
  },
  {
    id: 11,
    character: "人",
    meanings: ["person", "people", "human"],
    onyomi: ["ジン", "ニン"],
    kunyomi: ["ひと"],
    compounds: [
      { word: "人間", reading: "にんげん", meaning: "human being" },
      { word: "日本人", reading: "にほんじん", meaning: "Japanese person" },
      { word: "大人", reading: "おとな", meaning: "adult" },
      { word: "一人", reading: "ひとり", meaning: "one person" }
    ],
    strokeCount: 2,
    jlptLevel: "N5",
    frequency: 11,
    pronunciation: "ひと",
    exampleSentences: [
      { sentence: "あの人は先生です。", reading: "あのひとはせんせいです。", translation: "That person is a teacher." },
      { sentence: "人がたくさんいます。", reading: "ひとがたくさんいます。", translation: "There are many people." }
    ],
    usageContexts: ["People", "Occupations", "Social relations", "Identity"],
    radicals: ["人"],
    mnemonics: "Looks like a person standing with legs apart."
  },
  {
    id: 12,
    character: "大",
    meanings: ["big", "large", "great"],
    onyomi: ["ダイ", "タイ"],
    kunyomi: ["おお", "おお-きい"],
    compounds: [
      { word: "大学", reading: "だいがく", meaning: "university" },
      { word: "大きい", reading: "おおきい", meaning: "big" },
      { word: "大人", reading: "おとな", meaning: "adult" },
      { word: "大切", reading: "たいせつ", meaning: "important" }
    ],
    strokeCount: 3,
    jlptLevel: "N5",
    frequency: 12,
    pronunciation: "おお",
    exampleSentences: [
      { sentence: "大きい家に住んでいます。", reading: "おおきいいえにすんでいます。", translation: "I live in a big house." },
      { sentence: "大学生です。", reading: "だいがくせいです。", translation: "I am a university student." }
    ],
    usageContexts: ["Size", "Education", "Importance", "Age"],
    radicals: ["大"],
    mnemonics: "A person with arms stretched wide to show something big."
  },
  {
    id: 13,
    character: "小",
    meanings: ["small", "little", "minor"],
    onyomi: ["ショウ"],
    kunyomi: ["ちい", "こ", "お"],
    compounds: [
      { word: "小学校", reading: "しょうがっこう", meaning: "elementary school" },
      { word: "小さい", reading: "ちいさい", meaning: "small" },
      { word: "小川", reading: "おがわ", meaning: "stream" },
      { word: "小鳥", reading: "ことり", meaning: "small bird" }
    ],
    strokeCount: 3,
    jlptLevel: "N5",
    frequency: 13,
    pronunciation: "ちい",
    exampleSentences: [
      { sentence: "小さい犬がいます。", reading: "ちいさいいぬがいます。", translation: "There is a small dog." },
      { sentence: "小学校で働いています。", reading: "しょうがっこうではたらいています。", translation: "I work at an elementary school." }
    ],
    usageContexts: ["Size", "Education", "Nature", "Animals"],
    radicals: ["小"],
    mnemonics: "A vertical line with dots on sides, representing something small."
  },
  {
    id: 14,
    character: "中",
    meanings: ["middle", "inside", "center"],
    onyomi: ["チュウ"],
    kunyomi: ["なか"],
    compounds: [
      { word: "中学校", reading: "ちゅうがっこう", meaning: "middle school" },
      { word: "中国", reading: "ちゅうごく", meaning: "China" },
      { word: "中で", reading: "なかで", meaning: "inside" },
      { word: "一年中", reading: "いちねんじゅう", meaning: "all year round" }
    ],
    strokeCount: 4,
    jlptLevel: "N5",
    frequency: 14,
    pronunciation: "なか",
    exampleSentences: [
      { sentence: "箱の中に何がありますか。", reading: "はこのなかになにがありますか。", translation: "What is inside the box?" },
      { sentence: "中学校の先生です。", reading: "ちゅうがっこうのせんせいです。", translation: "I am a middle school teacher." }
    ],
    usageContexts: ["Location", "Education", "Countries", "Time"],
    radicals: ["中"],
    mnemonics: "A rectangle with a line through the middle."
  },
  {
    id: 15,
    character: "日",
    meanings: ["day", "sun", "Japan"],
    onyomi: ["ニチ", "ジツ"],
    kunyomi: ["ひ", "か"],
    compounds: [
      { word: "日本", reading: "にほん", meaning: "Japan" },
      { word: "今日", reading: "きょう", meaning: "today" },
      { word: "毎日", reading: "まいにち", meaning: "every day" },
      { word: "日曜日", reading: "にちようび", meaning: "Sunday" }
    ],
    strokeCount: 4,
    jlptLevel: "N5",
    frequency: 15,
    pronunciation: "ひ",
    exampleSentences: [
      { sentence: "今日は良い日です。", reading: "きょうはいいひです。", translation: "Today is a good day." },
      { sentence: "日本に住んでいます。", reading: "にほんにすんでいます。", translation: "I live in Japan." }
    ],
    usageContexts: ["Time", "Countries", "Weather", "Calendar"],
    radicals: ["日"],
    mnemonics: "A circle representing the sun, flattened into a rectangle."
  },
  {
    id: 16,
    character: "月",
    meanings: ["moon", "month"],
    onyomi: ["ゲツ", "ガツ"],
    kunyomi: ["つき"],
    compounds: [
      { word: "一月", reading: "いちがつ", meaning: "January" },
      { word: "月曜日", reading: "げつようび", meaning: "Monday" },
      { word: "今月", reading: "こんげつ", meaning: "this month" },
      { word: "来月", reading: "らいげつ", meaning: "next month" }
    ],
    strokeCount: 4,
    jlptLevel: "N5",
    frequency: 16,
    pronunciation: "つき",
    exampleSentences: [
      { sentence: "月がきれいです。", reading: "つきがきれいです。", translation: "The moon is beautiful." },
      { sentence: "来月日本に行きます。", reading: "らいげつにほんにいきます。", translation: "I will go to Japan next month." }
    ],
    usageContexts: ["Time", "Calendar", "Nature", "Astronomy"],
    radicals: ["月"],
    mnemonics: "A crescent moon shape."
  },
  {
    id: 17,
    character: "火",
    meanings: ["fire", "flame"],
    onyomi: ["カ"],
    kunyomi: ["ひ", "ほ"],
    compounds: [
      { word: "火曜日", reading: "かようび", meaning: "Tuesday" },
      { word: "火事", reading: "かじ", meaning: "fire (disaster)" },
      { word: "花火", reading: "はなび", meaning: "fireworks" },
      { word: "火山", reading: "かざん", meaning: "volcano" }
    ],
    strokeCount: 4,
    jlptLevel: "N5",
    frequency: 17,
    pronunciation: "ひ",
    exampleSentences: [
      { sentence: "火が燃えています。", reading: "ひがもえています。", translation: "The fire is burning." },
      { sentence: "火曜日に会いましょう。", reading: "かようびにあいましょう。", translation: "Let's meet on Tuesday." }
    ],
    usageContexts: ["Elements", "Days of week", "Nature", "Disasters"],
    radicals: ["火"],
    mnemonics: "A person with flames coming from their arms."
  },
  {
    id: 18,
    character: "水",
    meanings: ["water"],
    onyomi: ["スイ"],
    kunyomi: ["みず"],
    compounds: [
      { word: "水曜日", reading: "すいようび", meaning: "Wednesday" },
      { word: "水道", reading: "すいどう", meaning: "water supply" },
      { word: "お水", reading: "おみず", meaning: "water (polite)" },
      { word: "水泳", reading: "すいえい", meaning: "swimming" }
    ],
    strokeCount: 4,
    jlptLevel: "N5",
    frequency: 18,
    pronunciation: "みず",
    exampleSentences: [
      { sentence: "水を飲みます。", reading: "みずをのみます。", translation: "I drink water." },
      { sentence: "水曜日は忙しいです。", reading: "すいようびはいそがしいです。", translation: "Wednesday is busy." }
    ],
    usageContexts: ["Elements", "Days of week", "Drinks", "Nature"],
    radicals: ["水"],
    mnemonics: "A stream of water flowing down."
  },
  {
    id: 19,
    character: "木",
    meanings: ["tree", "wood"],
    onyomi: ["ボク", "モク"],
    kunyomi: ["き", "こ"],
    compounds: [
      { word: "木曜日", reading: "もくようび", meaning: "Thursday" },
      { word: "木材", reading: "もくざい", meaning: "lumber" },
      { word: "大木", reading: "たいぼく", meaning: "large tree" },
      { word: "木の葉", reading: "このは", meaning: "tree leaves" }
    ],
    strokeCount: 4,
    jlptLevel: "N5",
    frequency: 19,
    pronunciation: "き",
    exampleSentences: [
      { sentence: "木に鳥がいます。", reading: "きにとりがいます。", translation: "There is a bird in the tree." },
      { sentence: "木曜日に映画を見ます。", reading: "もくようびにえいがをみます。", translation: "I will watch a movie on Thursday." }
    ],
    usageContexts: ["Nature", "Days of week", "Materials", "Plants"],
    radicals: ["木"],
    mnemonics: "A tree with branches and roots."
  },
  {
    id: 20,
    character: "金",
    meanings: ["gold", "money", "metal"],
    onyomi: ["キン", "コン"],
    kunyomi: ["かね", "かな"],
    compounds: [
      { word: "金曜日", reading: "きんようび", meaning: "Friday" },
      { word: "お金", reading: "おかね", meaning: "money" },
      { word: "金魚", reading: "きんぎょ", meaning: "goldfish" },
      { word: "金属", reading: "きんぞく", meaning: "metal" }
    ],
    strokeCount: 8,
    jlptLevel: "N5",
    frequency: 20,
    pronunciation: "きん",
    exampleSentences: [
      { sentence: "お金が必要です。", reading: "おかねがひつようです。", translation: "I need money." },
      { sentence: "金曜日は楽しいです。", reading: "きんようびはたのしいです。", translation: "Friday is fun." }
    ],
    usageContexts: ["Money", "Days of week", "Metals", "Materials"],
    radicals: ["金"],
    mnemonics: "A person pointing to treasure under the ground."
  },
  {
    id: 21,
    character: "土",
    meanings: ["earth", "soil", "ground"],
    onyomi: ["ド", "ト"],
    kunyomi: ["つち"],
    compounds: [
      { word: "土曜日", reading: "どようび", meaning: "Saturday" },
      { word: "土地", reading: "とち", meaning: "land" },
      { word: "土産", reading: "みやげ", meaning: "souvenir" },
      { word: "土木", reading: "どぼく", meaning: "civil engineering" }
    ],
    strokeCount: 3,
    jlptLevel: "N5",
    frequency: 21,
    pronunciation: "つち",
    exampleSentences: [
      { sentence: "土を掘ります。", reading: "つちをほります。", translation: "I dig the soil." },
      { sentence: "土曜日に買い物をします。", reading: "どようびにかいものをします。", translation: "I go shopping on Saturday." }
    ],
    usageContexts: ["Nature", "Days of week", "Agriculture", "Geography"],
    radicals: ["土"],
    mnemonics: "A cross on top of a horizontal line, representing earth."
  },
  {
    id: 22,
    character: "年",
    meanings: ["year", "age"],
    onyomi: ["ネン"],
    kunyomi: ["とし"],
    compounds: [
      { word: "今年", reading: "ことし", meaning: "this year" },
      { word: "来年", reading: "らいねん", meaning: "next year" },
      { word: "去年", reading: "きょねん", meaning: "last year" },
      { word: "年齢", reading: "ねんれい", meaning: "age" }
    ],
    strokeCount: 6,
    jlptLevel: "N5",
    frequency: 22,
    pronunciation: "とし",
    exampleSentences: [
      { sentence: "今年は忙しいです。", reading: "ことしはいそがしいです。", translation: "This year is busy." },
      { sentence: "来年結婚します。", reading: "らいねんけっこんします。", translation: "I will get married next year." }
    ],
    usageContexts: ["Time", "Age", "Calendar", "Life events"],
    radicals: ["年"],
    mnemonics: "A person carrying grain, representing the harvest year."
  },
  {
    id: 23,
    character: "時",
    meanings: ["time", "hour", "o'clock"],
    onyomi: ["ジ"],
    kunyomi: ["とき"],
    compounds: [
      { word: "時間", reading: "じかん", meaning: "time" },
      { word: "一時", reading: "いちじ", meaning: "one o'clock" },
      { word: "時計", reading: "とけい", meaning: "clock, watch" },
      { word: "時々", reading: "ときどき", meaning: "sometimes" }
    ],
    strokeCount: 10,
    jlptLevel: "N5",
    frequency: 23,
    pronunciation: "じ",
    exampleSentences: [
      { sentence: "今何時ですか。", reading: "いまなんじですか。", translation: "What time is it now?" },
      { sentence: "時間がありません。", reading: "じかんがありません。", translation: "I don't have time." }
    ],
    usageContexts: ["Time", "Schedule", "Clock", "Daily life"],
    radicals: ["日", "寺"],
    mnemonics: "The sun (日) at a temple (寺) tells time."
  },
  {
    id: 24,
    character: "分",
    meanings: ["minute", "part", "divide"],
    onyomi: ["ブン", "フン"],
    kunyomi: ["わ-ける", "わ-かる"],
    compounds: [
      { word: "十分", reading: "じゅっぷん", meaning: "ten minutes" },
      { word: "分かる", reading: "わかる", meaning: "to understand" },
      { word: "自分", reading: "じぶん", meaning: "oneself" },
      { word: "部分", reading: "ぶぶん", meaning: "part" }
    ],
    strokeCount: 4,
    jlptLevel: "N5",
    frequency: 24,
    pronunciation: "ふん",
    exampleSentences: [
      { sentence: "五分待ってください。", reading: "ごふんまってください。", translation: "Please wait five minutes." },
      { sentence: "日本語が分かります。", reading: "にほんごがわかります。", translation: "I understand Japanese." }
    ],
    usageContexts: ["Time", "Understanding", "Parts", "Division"],
    radicals: ["八", "刀"],
    mnemonics: "A knife (刀) dividing something into parts (八)."
  },
  {
    id: 25,
    character: "半",
    meanings: ["half", "semi"],
    onyomi: ["ハン"],
    kunyomi: ["なか-ば"],
    compounds: [
      { word: "半分", reading: "はんぶん", meaning: "half" },
      { word: "一時半", reading: "いちじはん", meaning: "1:30" },
      { word: "半年", reading: "はんとし", meaning: "half a year" },
      { word: "半島", reading: "はんとう", meaning: "peninsula" }
    ],
    strokeCount: 5,
    jlptLevel: "N5",
    frequency: 25,
    pronunciation: "はん",
    exampleSentences: [
      { sentence: "半分食べました。", reading: "はんぶんたべました。", translation: "I ate half." },
      { sentence: "三時半に会いましょう。", reading: "さんじはんにあいましょう。", translation: "Let's meet at 3:30." }
    ],
    usageContexts: ["Time", "Fractions", "Portions", "Mathematics"],
    radicals: ["半"],
    mnemonics: "A vertical line dividing something in half."
  },
  {
    id: 26,
    character: "今",
    meanings: ["now", "present"],
    onyomi: ["コン", "キン"],
    kunyomi: ["いま"],
    compounds: [
      { word: "今日", reading: "きょう", meaning: "today" },
      { word: "今年", reading: "ことし", meaning: "this year" },
      { word: "今度", reading: "こんど", meaning: "next time" },
      { word: "今月", reading: "こんげつ", meaning: "this month" }
    ],
    strokeCount: 4,
    jlptLevel: "N5",
    frequency: 26,
    pronunciation: "いま",
    exampleSentences: [
      { sentence: "今何をしていますか。", reading: "いまなにをしていますか。", translation: "What are you doing now?" },
      { sentence: "今日は暑いです。", reading: "きょうはあついです。", translation: "Today is hot." }
    ],
    usageContexts: ["Time", "Present", "Current", "Today"],
    radicals: ["今"],
    mnemonics: "A roof over something happening right now."
  },
  {
    id: 27,
    character: "前",
    meanings: ["front", "before", "ago"],
    onyomi: ["ゼン"],
    kunyomi: ["まえ"],
    compounds: [
      { word: "前に", reading: "まえに", meaning: "before, in front of" },
      { word: "午前", reading: "ごぜん", meaning: "morning, AM" },
      { word: "名前", reading: "なまえ", meaning: "name" },
      { word: "前回", reading: "ぜんかい", meaning: "last time" }
    ],
    strokeCount: 9,
    jlptLevel: "N5",
    frequency: 27,
    pronunciation: "まえ",
    exampleSentences: [
      { sentence: "駅の前で待っています。", reading: "えきのまえでまっています。", translation: "I'm waiting in front of the station." },
      { sentence: "三年前に日本に来ました。", reading: "さんねんまえににほんにきました。", translation: "I came to Japan three years ago." }
    ],
    usageContexts: ["Location", "Time", "Direction", "Position"],
    radicals: ["前"],
    mnemonics: "A person walking forward with a knife, going to the front."
  },
  {
    id: 28,
    character: "後",
    meanings: ["after", "behind", "later"],
    onyomi: ["ゴ", "コウ"],
    kunyomi: ["あと", "うし-ろ"],
    compounds: [
      { word: "後で", reading: "あとで", meaning: "later" },
      { word: "午後", reading: "ごご", meaning: "afternoon, PM" },
      { word: "後ろ", reading: "うしろ", meaning: "behind" },
      { word: "最後", reading: "さいご", meaning: "last, final" }
    ],
    strokeCount: 9,
    jlptLevel: "N5",
    frequency: 28,
    pronunciation: "あと",
    exampleSentences: [
      { sentence: "後で電話します。", reading: "あとででんわします。", translation: "I will call later." },
      { sentence: "学校の後ろに公園があります。", reading: "がっこうのうしろにこうえんがあります。", translation: "There is a park behind the school." }
    ],
    usageContexts: ["Time", "Location", "Direction", "Sequence"],
    radicals: ["後"],
    mnemonics: "A person following behind with steps."
  },
  {
    id: 29,
    character: "上",
    meanings: ["up", "above", "top"],
    onyomi: ["ジョウ"],
    kunyomi: ["うえ", "あ-がる", "のぼ-る"],
    compounds: [
      { word: "上手", reading: "じょうず", meaning: "skillful" },
      { word: "机の上", reading: "つくえのうえ", meaning: "on the desk" },
      { word: "上着", reading: "うわぎ", meaning: "jacket" },
      { word: "上級", reading: "じょうきゅう", meaning: "advanced level" }
    ],
    strokeCount: 3,
    jlptLevel: "N5",
    frequency: 29,
    pronunciation: "うえ",
    exampleSentences: [
      { sentence: "本が机の上にあります。", reading: "ほんがつくえのうえにあります。", translation: "The book is on the desk." },
      { sentence: "日本語が上手ですね。", reading: "にほんごがじょうずですね。", translation: "You're good at Japanese." }
    ],
    usageContexts: ["Direction", "Position", "Skill", "Location"],
    radicals: ["上"],
    mnemonics: "A line with a mark above it, showing 'up'."
  },
  {
    id: 30,
    character: "下",
    meanings: ["down", "below", "under"],
    onyomi: ["カ", "ゲ"],
    kunyomi: ["した", "さ-がる", "くだ-る"],
    compounds: [
      { word: "下手", reading: "へた", meaning: "unskillful" },
      { word: "地下", reading: "ちか", meaning: "underground" },
      { word: "下着", reading: "したぎ", meaning: "underwear" },
      { word: "下さい", reading: "ください", meaning: "please give" }
    ],
    strokeCount: 3,
    jlptLevel: "N5",
    frequency: 30,
    pronunciation: "した",
    exampleSentences: [
      { sentence: "猫が机の下にいます。", reading: "ねこがつくえのしたにいます。", translation: "The cat is under the desk." },
      { sentence: "水をください。", reading: "みずをください。", translation: "Please give me water." }
    ],
    usageContexts: ["Direction", "Position", "Skill", "Requests"],
    radicals: ["下"],
    mnemonics: "A line with a mark below it, showing 'down'."
  },
  {
    id: 31,
    character: "左",
    meanings: ["left"],
    onyomi: ["サ"],
    kunyomi: ["ひだり"],
    compounds: [
      { word: "左手", reading: "ひだりて", meaning: "left hand" },
      { word: "左側", reading: "ひだりがわ", meaning: "left side" },
      { word: "左右", reading: "さゆう", meaning: "left and right" },
      { word: "左折", reading: "させつ", meaning: "left turn" }
    ],
    strokeCount: 5,
    jlptLevel: "N5",
    frequency: 31,
    pronunciation: "ひだり",
    exampleSentences: [
      { sentence: "左に曲がってください。", reading: "ひだりにまがってください。", translation: "Please turn left." },
      { sentence: "左手で書きます。", reading: "ひだりてでかきます。", translation: "I write with my left hand." }
    ],
    usageContexts: ["Direction", "Body parts", "Navigation", "Position"],
    radicals: ["左"],
    mnemonics: "A hand holding a tool, representing the left hand."
  },
  {
    id: 32,
    character: "右",
    meanings: ["right"],
    onyomi: ["ウ", "ユウ"],
    kunyomi: ["みぎ"],
    compounds: [
      { word: "右手", reading: "みぎて", meaning: "right hand" },
      { word: "右側", reading: "みぎがわ", meaning: "right side" },
      { word: "左右", reading: "さゆう", meaning: "left and right" },
      { word: "右折", reading: "うせつ", meaning: "right turn" }
    ],
    strokeCount: 5,
    jlptLevel: "N5",
    frequency: 32,
    pronunciation: "みぎ",
    exampleSentences: [
      { sentence: "右に曲がってください。", reading: "みぎにまがってください。", translation: "Please turn right." },
      { sentence: "右手で食べます。", reading: "みぎてでたべます。", translation: "I eat with my right hand." }
    ],
    usageContexts: ["Direction", "Body parts", "Navigation", "Position"],
    radicals: ["右"],
    mnemonics: "A mouth and a hand, representing the right side."
  },
  {
    id: 33,
    character: "東",
    meanings: ["east"],
    onyomi: ["トウ"],
    kunyomi: ["ひがし"],
    compounds: [
      { word: "東京", reading: "とうきょう", meaning: "Tokyo" },
      { word: "東口", reading: "ひがしぐち", meaning: "east exit" },
      { word: "東側", reading: "ひがしがわ", meaning: "east side" },
      { word: "中東", reading: "ちゅうとう", meaning: "Middle East" }
    ],
    strokeCount: 8,
    jlptLevel: "N5",
    frequency: 33,
    pronunciation: "ひがし",
    exampleSentences: [
      { sentence: "東京に住んでいます。", reading: "とうきょうにすんでいます。", translation: "I live in Tokyo." },
      { sentence: "太陽は東から昇ります。", reading: "たいようはひがしからのぼります。", translation: "The sun rises from the east." }
    ],
    usageContexts: ["Direction", "Geography", "Cities", "Navigation"],
    radicals: ["東"],
    mnemonics: "The sun behind a tree, showing where the sun rises (east)."
  },
  {
    id: 34,
    character: "西",
    meanings: ["west"],
    onyomi: ["セイ", "サイ"],
    kunyomi: ["にし"],
    compounds: [
      { word: "西口", reading: "にしぐち", meaning: "west exit" },
      { word: "西側", reading: "にしがわ", meaning: "west side" },
      { word: "関西", reading: "かんさい", meaning: "Kansai region" },
      { word: "西洋", reading: "せいよう", meaning: "the West" }
    ],
    strokeCount: 6,
    jlptLevel: "N5",
    frequency: 34,
    pronunciation: "にし",
    exampleSentences: [
      { sentence: "西に向かって歩きます。", reading: "にしにむかってあるきます。", translation: "I walk toward the west." },
      { sentence: "関西弁が好きです。", reading: "かんさいべんがすきです。", translation: "I like the Kansai dialect." }
    ],
    usageContexts: ["Direction", "Geography", "Regions", "Navigation"],
    radicals: ["西"],
    mnemonics: "A bird's nest in the west where birds rest at sunset."
  },
  {
    id: 35,
    character: "南",
    meanings: ["south"],
    onyomi: ["ナン"],
    kunyomi: ["みなみ"],
    compounds: [
      { word: "南口", reading: "みなみぐち", meaning: "south exit" },
      { word: "南側", reading: "みなみがわ", meaning: "south side" },
      { word: "南国", reading: "なんごく", meaning: "southern country" },
      { word: "東南", reading: "とうなん", meaning: "southeast" }
    ],
    strokeCount: 9,
    jlptLevel: "N5",
    frequency: 35,
    pronunciation: "みなみ",
    exampleSentences: [
      { sentence: "南の島に行きたいです。", reading: "みなみのしまにいきたいです。", translation: "I want to go to a southern island." },
      { sentence: "南口で待っています。", reading: "みなみぐちでまっています。", translation: "I'm waiting at the south exit." }
    ],
    usageContexts: ["Direction", "Geography", "Climate", "Navigation"],
    radicals: ["南"],
    mnemonics: "A plant growing toward the warm south."
  },
  {
    id: 36,
    character: "北",
    meanings: ["north"],
    onyomi: ["ホク"],
    kunyomi: ["きた"],
    compounds: [
      { word: "北口", reading: "きたぐち", meaning: "north exit" },
      { word: "北側", reading: "きたがわ", meaning: "north side" },
      { word: "北海道", reading: "ほっかいどう", meaning: "Hokkaido" },
      { word: "東北", reading: "とうほく", meaning: "northeast, Tohoku" }
    ],
    strokeCount: 5,
    jlptLevel: "N5",
    frequency: 36,
    pronunciation: "きた",
    exampleSentences: [
      { sentence: "北海道は寒いです。", reading: "ほっかいどうはさむいです。", translation: "Hokkaido is cold." },
      { sentence: "北に向かって歩きます。", reading: "きたにむかってあるきます。", translation: "I walk toward the north." }
    ],
    usageContexts: ["Direction", "Geography", "Climate", "Navigation"],
    radicals: ["北"],
    mnemonics: "Two people sitting back to back, facing north and south."
  },
  {
    id: 37,
    character: "外",
    meanings: ["outside", "foreign"],
    onyomi: ["ガイ", "ゲ"],
    kunyomi: ["そと", "はず-れる"],
    compounds: [
      { word: "外国", reading: "がいこく", meaning: "foreign country" },
      { word: "外出", reading: "がいしゅつ", meaning: "going out" },
      { word: "海外", reading: "かいがい", meaning: "overseas" },
      { word: "外側", reading: "そとがわ", meaning: "outside" }
    ],
    strokeCount: 5,
    jlptLevel: "N5",
    frequency: 37,
    pronunciation: "そと",
    exampleSentences: [
      { sentence: "外は寒いです。", reading: "そとはさむいです。", translation: "It's cold outside." },
      { sentence: "外国人の友達がいます。", reading: "がいこくじんのともだちがいます。", translation: "I have foreign friends." }
    ],
    usageContexts: ["Location", "International", "Weather", "Travel"],
    radicals: ["外"],
    mnemonics: "Evening divination outside the house."
  },
  {
    id: 38,
    character: "内",
    meanings: ["inside", "within", "domestic"],
    onyomi: ["ナイ"],
    kunyomi: ["うち"],
    compounds: [
      { word: "家内", reading: "かない", meaning: "wife" },
      { word: "国内", reading: "こくない", meaning: "domestic" },
      { word: "内容", reading: "ないよう", meaning: "contents" },
      { word: "案内", reading: "あんない", meaning: "guidance" }
    ],
    strokeCount: 4,
    jlptLevel: "N5",
    frequency: 38,
    pronunciation: "うち",
    exampleSentences: [
      { sentence: "家の中にいます。", reading: "いえのなかにいます。", translation: "I'm inside the house." },
      { sentence: "国内旅行が好きです。", reading: "こくないりょこうがすきです。", translation: "I like domestic travel." }
    ],
    usageContexts: ["Location", "Domestic", "Family", "Contents"],
    radicals: ["内"],
    mnemonics: "A person inside a house."
  },
  {
    id: 39,
    character: "間",
    meanings: ["between", "interval", "space"],
    onyomi: ["カン", "ケン"],
    kunyomi: ["あいだ", "ま"],
    compounds: [
      { word: "時間", reading: "じかん", meaning: "time" },
      { word: "人間", reading: "にんげん", meaning: "human" },
      { word: "空間", reading: "くうかん", meaning: "space" },
      { word: "期間", reading: "きかん", meaning: "period" }
    ],
    strokeCount: 12,
    jlptLevel: "N5",
    frequency: 39,
    pronunciation: "あいだ",
    exampleSentences: [
      { sentence: "学校と家の間にコンビニがあります。", reading: "がっこうといえのあいだにコンビニがあります。", translation: "There's a convenience store between school and home." },
      { sentence: "時間がありません。", reading: "じかんがありません。", translation: "I don't have time." }
    ],
    usageContexts: ["Location", "Time", "Space", "Relationships"],
    radicals: ["門", "日"],
    mnemonics: "The sun (日) seen through a gate (門), showing space between."
  },
  {
    id: 40,
    character: "近",
    meanings: ["near", "close"],
    onyomi: ["キン"],
    kunyomi: ["ちか-い"],
    compounds: [
      { word: "近く", reading: "ちかく", meaning: "nearby" },
      { word: "最近", reading: "さいきん", meaning: "recently" },
      { word: "近所", reading: "きんじょ", meaning: "neighborhood" },
      { word: "近道", reading: "ちかみち", meaning: "shortcut" }
    ],
    strokeCount: 7,
    jlptLevel: "N5",
    frequency: 40,
    pronunciation: "ちか",
    exampleSentences: [
      { sentence: "駅の近くに住んでいます。", reading: "えきのちかくにすんでいます。", translation: "I live near the station." },
      { sentence: "最近忙しいです。", reading: "さいきんいそがしいです。", translation: "I've been busy recently." }
    ],
    usageContexts: ["Distance", "Location", "Time", "Proximity"],
    radicals: ["近"],
    mnemonics: "Walking on a path that brings you close."
  },
  {
    id: 41,
    character: "遠",
    meanings: ["far", "distant"],
    onyomi: ["エン", "オン"],
    kunyomi: ["とお-い"],
    compounds: [
      { word: "遠く", reading: "とおく", meaning: "far away" },
      { word: "遠足", reading: "えんそく", meaning: "excursion" },
      { word: "永遠", reading: "えいえん", meaning: "eternity" },
      { word: "遠方", reading: "えんぽう", meaning: "distant place" }
    ],
    strokeCount: 13,
    jlptLevel: "N5",
    frequency: 41,
    pronunciation: "とお",
    exampleSentences: [
      { sentence: "学校は家から遠いです。", reading: "がっこうはいえからとおいです。", translation: "School is far from home." },
      { sentence: "遠くに山が見えます。", reading: "とおくにやまがみえます。", translation: "I can see mountains in the distance." }
    ],
    usageContexts: ["Distance", "Location", "Travel", "Geography"],
    radicals: ["遠"],
    mnemonics: "A long winding road leading far away."
  },
  {
    id: 42,
    character: "高",
    meanings: ["high", "tall", "expensive"],
    onyomi: ["コウ"],
    kunyomi: ["たか-い"],
    compounds: [
      { word: "高い", reading: "たかい", meaning: "high, expensive" },
      { word: "高校", reading: "こうこう", meaning: "high school" },
      { word: "高速", reading: "こうそく", meaning: "high speed" },
      { word: "最高", reading: "さいこう", meaning: "best, highest" }
    ],
    strokeCount: 10,
    jlptLevel: "N5",
    frequency: 42,
    pronunciation: "たか",
    exampleSentences: [
      { sentence: "この建物は高いです。", reading: "このたてものはたかいです。", translation: "This building is tall." },
      { sentence: "値段が高すぎます。", reading: "ねだんがたかすぎます。", translation: "The price is too expensive." }
    ],
    usageContexts: ["Height", "Price", "Education", "Quality"],
    radicals: ["高"],
    mnemonics: "A tall tower with a roof on top."
  },
  {
    id: 43,
    character: "安",
    meanings: ["cheap", "safe", "peaceful"],
    onyomi: ["アン"],
    kunyomi: ["やす-い"],
    compounds: [
      { word: "安い", reading: "やすい", meaning: "cheap" },
      { word: "安全", reading: "あんぜん", meaning: "safety" },
      { word: "不安", reading: "ふあん", meaning: "anxiety" },
      { word: "安心", reading: "あんしん", meaning: "peace of mind" }
    ],
    strokeCount: 6,
    jlptLevel: "N5",
    frequency: 43,
    pronunciation: "やす",
    exampleSentences: [
      { sentence: "この店は安いです。", reading: "このみせはやすいです。", translation: "This store is cheap." },
      { sentence: "安全運転をしてください。", reading: "あんぜんうんてんをしてください。", translation: "Please drive safely." }
    ],
    usageContexts: ["Price", "Safety", "Peace", "Shopping"],
    radicals: ["安"],
    mnemonics: "A woman under a roof, feeling safe and secure."
  },
  {
    id: 44,
    character: "新",
    meanings: ["new", "fresh"],
    onyomi: ["シン"],
    kunyomi: ["あたら-しい", "あら-た", "にい"],
    compounds: [
      { word: "新しい", reading: "あたらしい", meaning: "new" },
      { word: "新聞", reading: "しんぶん", meaning: "newspaper" },
      { word: "新年", reading: "しんねん", meaning: "new year" },
      { word: "最新", reading: "さいしん", meaning: "latest" }
    ],
    strokeCount: 13,
    jlptLevel: "N5",
    frequency: 44,
    pronunciation: "あたら",
    exampleSentences: [
      { sentence: "新しい車を買いました。", reading: "あたらしいくるまをかいました。", translation: "I bought a new car." },
      { sentence: "毎朝新聞を読みます。", reading: "まいあさしんぶんをよみます。", translation: "I read the newspaper every morning." }
    ],
    usageContexts: ["Condition", "Time", "Media", "Innovation"],
    radicals: ["新"],
    mnemonics: "Standing by a tree with an axe, making something new."
  },
  {
    id: 45,
    character: "古",
    meanings: ["old", "ancient"],
    onyomi: ["コ"],
    kunyomi: ["ふる-い"],
    compounds: [
      { word: "古い", reading: "ふるい", meaning: "old" },
      { word: "古典", reading: "こてん", meaning: "classic" },
      { word: "中古", reading: "ちゅうこ", meaning: "used, second-hand" },
      { word: "古代", reading: "こだい", meaning: "ancient times" }
    ],
    strokeCount: 5,
    jlptLevel: "N5",
    frequency: 45,
    pronunciation: "ふる",
    exampleSentences: [
      { sentence: "古い本を読んでいます。", reading: "ふるいほんをよんでいます。", translation: "I'm reading an old book." },
      { sentence: "この建物は古いです。", reading: "このたてものはふるいです。", translation: "This building is old." }
    ],
    usageContexts: ["Age", "History", "Condition", "Antiques"],
    radicals: ["古"],
    mnemonics: "Ten (十) mouths (口) telling old stories."
  },
  {
    id: 46,
    character: "長",
    meanings: ["long", "chief", "leader"],
    onyomi: ["チョウ"],
    kunyomi: ["なが-い"],
    compounds: [
      { word: "長い", reading: "ながい", meaning: "long" },
      { word: "校長", reading: "こうちょう", meaning: "principal" },
      { word: "社長", reading: "しゃちょう", meaning: "company president" },
      { word: "成長", reading: "せいちょう", meaning: "growth" }
    ],
    strokeCount: 8,
    jlptLevel: "N5",
    frequency: 46,
    pronunciation: "なが",
    exampleSentences: [
      { sentence: "この道は長いです。", reading: "このみちはながいです。", translation: "This road is long." },
      { sentence: "校長先生に会いました。", reading: "こうちょうせんせいにあいました。", translation: "I met the principal." }
    ],
    usageContexts: ["Length", "Leadership", "Time", "Authority"],
    radicals: ["長"],
    mnemonics: "A person with long hair flowing down."
  },
  {
    id: 47,
    character: "短",
    meanings: ["short"],
    onyomi: ["タン"],
    kunyomi: ["みじか-い"],
    compounds: [
      { word: "短い", reading: "みじかい", meaning: "short" },
      { word: "短期", reading: "たんき", meaning: "short term" },
      { word: "短所", reading: "たんしょ", meaning: "shortcoming" },
      { word: "短縮", reading: "たんしゅく", meaning: "shortening" }
    ],
    strokeCount: 12,
    jlptLevel: "N5",
    frequency: 47,
    pronunciation: "みじか",
    exampleSentences: [
      { sentence: "この鉛筆は短いです。", reading: "このえんぴつはみじかいです。", translation: "This pencil is short." },
      { sentence: "短期間で日本語を覚えました。", reading: "たんきかんでにほんごをおぼえました。", translation: "I learned Japanese in a short period." }
    ],
    usageContexts: ["Length", "Time", "Size", "Duration"],
    radicals: ["短"],
    mnemonics: "An arrow that doesn't go far because it's short."
  },
  {
    id: 48,
    character: "明",
    meanings: ["bright", "clear", "tomorrow"],
    onyomi: ["メイ", "ミョウ"],
    kunyomi: ["あか-るい", "あ-ける"],
    compounds: [
      { word: "明るい", reading: "あかるい", meaning: "bright" },
      { word: "明日", reading: "あした", meaning: "tomorrow" },
      { word: "説明", reading: "せつめい", meaning: "explanation" },
      { word: "発明", reading: "はつめい", meaning: "invention" }
    ],
    strokeCount: 8,
    jlptLevel: "N5",
    frequency: 48,
    pronunciation: "あか",
    exampleSentences: [
      { sentence: "この部屋は明るいです。", reading: "このへやはあかるいです。", translation: "This room is bright." },
      { sentence: "明日会いましょう。", reading: "あしたあいましょう。", translation: "Let's meet tomorrow." }
    ],
    usageContexts: ["Light", "Time", "Clarity", "Future"],
    radicals: ["日", "月"],
    mnemonics: "The sun (日) and moon (月) together make everything bright."
  },
  {
    id: 49,
    character: "暗",
    meanings: ["dark", "gloomy"],
    onyomi: ["アン"],
    kunyomi: ["くら-い"],
    compounds: [
      { word: "暗い", reading: "くらい", meaning: "dark" },
      { word: "暗記", reading: "あんき", meaning: "memorization" },
      { word: "暗号", reading: "あんごう", meaning: "code, cipher" },
      { word: "暗闇", reading: "くらやみ", meaning: "darkness" }
    ],
    strokeCount: 13,
    jlptLevel: "N5",
    frequency: 49,
    pronunciation: "くら",
    exampleSentences: [
      { sentence: "夜は暗いです。", reading: "よるはくらいです。", translation: "It's dark at night." },
      { sentence: "この部屋は少し暗いです。", reading: "このへやはすこしくらいです。", translation: "This room is a bit dark." }
    ],
    usageContexts: ["Light", "Mood", "Time", "Atmosphere"],
    radicals: ["日", "音"],
    mnemonics: "The sun (日) blocked by sound (音), making it dark."
  },
  {
    id: 50,
    character: "白",
    meanings: ["white"],
    onyomi: ["ハク", "ビャク"],
    kunyomi: ["しろ", "しら", "しろ-い"],
    compounds: [
      { word: "白い", reading: "しろい", meaning: "white" },
      { word: "白紙", reading: "はくし", meaning: "blank paper" },
      { word: "白髪", reading: "しらが", meaning: "gray hair" },
      { word: "面白い", reading: "おもしろい", meaning: "interesting" }
    ],
    strokeCount: 5,
    jlptLevel: "N5",
    frequency: 50,
    pronunciation: "しろ",
    exampleSentences: [
      { sentence: "雪は白いです。", reading: "ゆきはしろいです。", translation: "Snow is white." },
      { sentence: "この映画は面白いです。", reading: "このえいがはおもしろいです。", translation: "This movie is interesting." }
    ],
    usageContexts: ["Colors", "Appearance", "Interest", "Purity"],
    radicals: ["白"],
    mnemonics: "The sun with a drop, representing pure white."
  },
  {
    id: 51,
    character: "黒",
    meanings: ["black"],
    onyomi: ["コク"],
    kunyomi: ["くろ", "くろ-い"],
    compounds: [
      { word: "黒い", reading: "くろい", meaning: "black" },
      { word: "黒板", reading: "こくばん", meaning: "blackboard" },
      { word: "黒髪", reading: "くろかみ", meaning: "black hair" },
      { word: "黒猫", reading: "くろねこ", meaning: "black cat" }
    ],
    strokeCount: 11,
    jlptLevel: "N5",
    frequency: 51,
    pronunciation: "くろ",
    exampleSentences: [
      { sentence: "黒い車が好きです。", reading: "くろいくるまがすきです。", translation: "I like black cars." },
      { sentence: "先生が黒板に書きました。", reading: "せんせいがこくばんにかきました。", translation: "The teacher wrote on the blackboard." }
    ],
    usageContexts: ["Colors", "Appearance", "Education", "Objects"],
    radicals: ["黒"],
    mnemonics: "Fire and earth creating black soot."
  },
  {
    id: 52,
    character: "赤",
    meanings: ["red"],
    onyomi: ["セキ", "シャク"],
    kunyomi: ["あか", "あか-い"],
    compounds: [
      { word: "赤い", reading: "あかい", meaning: "red" },
      { word: "赤ちゃん", reading: "あかちゃん", meaning: "baby" },
      { word: "赤信号", reading: "あかしんごう", meaning: "red light" },
      { word: "真っ赤", reading: "まっか", meaning: "bright red" }
    ],
    strokeCount: 7,
    jlptLevel: "N5",
    frequency: 52,
    pronunciation: "あか",
    exampleSentences: [
      { sentence: "赤いバラが咲いています。", reading: "あかいバラがさいています。", translation: "Red roses are blooming." },
      { sentence: "赤ちゃんがかわいいです。", reading: "あかちゃんがかわいいです。", translation: "The baby is cute." }
    ],
    usageContexts: ["Colors", "Traffic", "Babies", "Nature"],
    radicals: ["赤"],
    mnemonics: "A big fire creating red flames."
  },
  {
    id: 53,
    character: "青",
    meanings: ["blue", "green"],
    onyomi: ["セイ", "ショウ"],
    kunyomi: ["あお", "あお-い"],
    compounds: [
      { word: "青い", reading: "あおい", meaning: "blue" },
      { word: "青空", reading: "あおぞら", meaning: "blue sky" },
      { word: "青信号", reading: "あおしんごう", meaning: "green light" },
      { word: "青年", reading: "せいねん", meaning: "youth" }
    ],
    strokeCount: 8,
    jlptLevel: "N5",
    frequency: 53,
    pronunciation: "あお",
    exampleSentences: [
      { sentence: "空が青いです。", reading: "そらがあおいです。", translation: "The sky is blue." },
      { sentence: "青信号で渡ります。", reading: "あおしんごうでわたります。", translation: "I cross at the green light." }
    ],
    usageContexts: ["Colors", "Sky", "Traffic", "Nature"],
    radicals: ["青"],
    mnemonics: "Growing plants under the moon, showing blue-green color."
  },
  {
    id: 54,
    character: "好",
    meanings: ["like", "fond", "good"],
    onyomi: ["コウ"],
    kunyomi: ["す-く", "この-む", "よ-い"],
    compounds: [
      { word: "好き", reading: "すき", meaning: "like, love" },
      { word: "好む", reading: "このむ", meaning: "to prefer" },
      { word: "大好き", reading: "だいすき", meaning: "love very much" },
      { word: "好意", reading: "こうい", meaning: "goodwill" }
    ],
    strokeCount: 6,
    jlptLevel: "N5",
    frequency: 54,
    pronunciation: "す",
    exampleSentences: [
      { sentence: "日本料理が好きです。", reading: "にほんりょうりがすきです。", translation: "I like Japanese food." },
      { sentence: "音楽が大好きです。", reading: "おんがくがだいすきです。", translation: "I love music very much." }
    ],
    usageContexts: ["Preferences", "Emotions", "Relationships", "Opinions"],
    radicals: ["女", "子"],
    mnemonics: "A woman (女) and child (子) together, showing love and fondness."
  },
  {
    id: 55,
    character: "嫌",
    meanings: ["dislike", "hate"],
    onyomi: ["ケン", "ゲン"],
    kunyomi: ["きら-う", "いや"],
    compounds: [
      { word: "嫌い", reading: "きらい", meaning: "dislike, hate" },
      { word: "嫌う", reading: "きらう", meaning: "to dislike" },
      { word: "大嫌い", reading: "だいきらい", meaning: "hate very much" },
      { word: "嫌がる", reading: "いやがる", meaning: "to show dislike" }
    ],
    strokeCount: 13,
    jlptLevel: "N5",
    frequency: 55,
    pronunciation: "きら",
    exampleSentences: [
      { sentence: "野菜が嫌いです。", reading: "やさいがきらいです。", translation: "I dislike vegetables." },
      { sentence: "雨の日は嫌いです。", reading: "あめのひはきらいです。", translation: "I hate rainy days." }
    ],
    usageContexts: ["Preferences", "Emotions", "Dislikes", "Opinions"],
    radicals: ["女", "兼"],
    mnemonics: "A woman showing displeasure with something she dislikes."
  },
  {
    id: 56,
    character: "元",
    meanings: ["origin", "former", "original"],
    onyomi: ["ゲン", "ガン"],
    kunyomi: ["もと"],
    compounds: [
      { word: "元気", reading: "げんき", meaning: "healthy, energetic" },
      { word: "元日", reading: "がんじつ", meaning: "New Year's Day" },
      { word: "元々", reading: "もともと", meaning: "originally" },
      { word: "元年", reading: "がんねん", meaning: "first year" }
    ],
    strokeCount: 4,
    jlptLevel: "N5",
    frequency: 56,
    pronunciation: "もと",
    exampleSentences: [
      { sentence: "元気ですか。", reading: "げんきですか。", translation: "How are you? (Are you healthy?)" },
      { sentence: "元々日本人です。", reading: "もともとにほんじんです。", translation: "I'm originally Japanese." }
    ],
    usageContexts: ["Health", "Origin", "Time", "Greetings"],
    radicals: ["元"],
    mnemonics: "Two legs standing firmly at the origin point."
  },
  {
    id: 57,
    character: "気",
    meanings: ["spirit", "mind", "air"],
    onyomi: ["キ", "ケ"],
    kunyomi: [],
    compounds: [
      { word: "元気", reading: "げんき", meaning: "healthy, energetic" },
      { word: "天気", reading: "てんき", meaning: "weather" },
      { word: "気持ち", reading: "きもち", meaning: "feeling" },
      { word: "人気", reading: "にんき", meaning: "popularity" }
    ],
    strokeCount: 6,
    jlptLevel: "N5",
    frequency: 57,
    pronunciation: "き",
    exampleSentences: [
      { sentence: "今日は天気がいいです。", reading: "きょうはてんきがいいです。", translation: "The weather is good today." },
      { sentence: "気持ちがいいです。", reading: "きもちがいいです。", translation: "It feels good." }
    ],
    usageContexts: ["Weather", "Feelings", "Health", "Atmosphere"],
    radicals: ["气", "米"],
    mnemonics: "Steam (气) rising from rice (米), showing spirit and energy."
  },
  {
    id: 58,
    character: "多",
    meanings: ["many", "much", "a lot"],
    onyomi: ["タ"],
    kunyomi: ["おお-い"],
    compounds: [
      { word: "多い", reading: "おおい", meaning: "many, much" },
      { word: "多分", reading: "たぶん", meaning: "probably" },
      { word: "多数", reading: "たすう", meaning: "majority" },
      { word: "多様", reading: "たよう", meaning: "diverse" }
    ],
    strokeCount: 6,
    jlptLevel: "N5",
    frequency: 58,
    pronunciation: "おお",
    exampleSentences: [
      { sentence: "学生が多いです。", reading: "がくせいがおおいです。", translation: "There are many students." },
      { sentence: "多分雨が降ります。", reading: "たぶんあめがふります。", translation: "It will probably rain." }
    ],
    usageContexts: ["Quantity", "Probability", "Numbers", "Comparison"],
    radicals: ["多"],
    mnemonics: "Two moons (夕) stacked, showing many or much."
  },
  {
    id: 59,
    character: "少",
    meanings: ["few", "little", "small amount"],
    onyomi: ["ショウ"],
    kunyomi: ["すく-ない", "すこ-し"],
    compounds: [
      { word: "少ない", reading: "すくない", meaning: "few, little" },
      { word: "少し", reading: "すこし", meaning: "a little" },
      { word: "少年", reading: "しょうねん", meaning: "boy, youth" },
      { word: "少女", reading: "しょうじょ", meaning: "girl" }
    ],
    strokeCount: 4,
    jlptLevel: "N5",
    frequency: 59,
    pronunciation: "すく",
    exampleSentences: [
      { sentence: "時間が少ないです。", reading: "じかんがすくないです。", translation: "There is little time." },
      { sentence: "少し疲れました。", reading: "すこしつかれました。", translation: "I'm a little tired." }
    ],
    usageContexts: ["Quantity", "Age", "Amount", "Degree"],
    radicals: ["小", "丿"],
    mnemonics: "Small (小) with a slash, making it even smaller - few."
  },
  {
    id: 60,
    character: "早",
    meanings: ["early", "fast", "quick"],
    onyomi: ["ソウ", "サッ"],
    kunyomi: ["はや-い", "はや-める"],
    compounds: [
      { word: "早い", reading: "はやい", meaning: "early, fast" },
      { word: "早く", reading: "はやく", meaning: "quickly, early" },
      { word: "早朝", reading: "そうちょう", meaning: "early morning" },
      { word: "最早", reading: "もはや", meaning: "already, no longer" }
    ],
    strokeCount: 6,
    jlptLevel: "N5",
    frequency: 60,
    pronunciation: "はや",
    exampleSentences: [
      { sentence: "早く起きました。", reading: "はやくおきました。", translation: "I woke up early." },
      { sentence: "この車は早いです。", reading: "このくるまははやいです。", translation: "This car is fast." }
    ],
    usageContexts: ["Time", "Speed", "Schedule", "Urgency"],
    radicals: ["日", "十"],
    mnemonics: "The sun (日) with ten (十), showing early morning."
  },
  {
    id: 61,
    character: "遅",
    meanings: ["late", "slow"],
    onyomi: ["チ"],
    kunyomi: ["おそ-い", "おく-れる"],
    compounds: [
      { word: "遅い", reading: "おそい", meaning: "late, slow" },
      { word: "遅れる", reading: "おくれる", meaning: "to be late" },
      { word: "遅刻", reading: "ちこく", meaning: "tardiness" },
      { word: "手遅れ", reading: "ておくれ", meaning: "too late" }
    ],
    strokeCount: 12,
    jlptLevel: "N5",
    frequency: 61,
    pronunciation: "おそ",
    exampleSentences: [
      { sentence: "電車が遅れています。", reading: "でんしゃがおくれています。", translation: "The train is running late." },
      { sentence: "遅くまで働きました。", reading: "おそくまではたらきました。", translation: "I worked until late." }
    ],
    usageContexts: ["Time", "Speed", "Schedule", "Delay"],
    radicals: ["遅"],
    mnemonics: "Walking slowly on a winding path, being late."
  },
  {
    id: 62,
    character: "来",
    meanings: ["come", "next"],
    onyomi: ["ライ"],
    kunyomi: ["く-る", "きた-る"],
    compounds: [
      { word: "来る", reading: "くる", meaning: "to come" },
      { word: "来年", reading: "らいねん", meaning: "next year" },
      { word: "来月", reading: "らいげつ", meaning: "next month" },
      { word: "将来", reading: "しょうらい", meaning: "future" }
    ],
    strokeCount: 7,
    jlptLevel: "N5",
    frequency: 62,
    pronunciation: "く",
    exampleSentences: [
      { sentence: "友達が来ます。", reading: "ともだちがきます。", translation: "My friend is coming." },
      { sentence: "来年日本に行きます。", reading: "らいねんにほんにいきます。", translation: "I will go to Japan next year." }
    ],
    usageContexts: ["Movement", "Future", "Arrival", "Time"],
    radicals: ["来"],
    mnemonics: "A person coming toward you with arms outstretched."
  },
  {
    id: 63,
    character: "行",
    meanings: ["go", "conduct", "line"],
    onyomi: ["コウ", "ギョウ"],
    kunyomi: ["い-く", "ゆ-く", "おこな-う"],
    compounds: [
      { word: "行く", reading: "いく", meaning: "to go" },
      { word: "旅行", reading: "りょこう", meaning: "travel" },
      { word: "銀行", reading: "ぎんこう", meaning: "bank" },
      { word: "行動", reading: "こうどう", meaning: "action" }
    ],
    strokeCount: 6,
    jlptLevel: "N5",
    frequency: 63,
    pronunciation: "い",
    exampleSentences: [
      { sentence: "学校に行きます。", reading: "がっこうにいきます。", translation: "I go to school." },
      { sentence: "来月旅行します。", reading: "らいげつりょこうします。", translation: "I will travel next month." }
    ],
    usageContexts: ["Movement", "Travel", "Actions", "Direction"],
    radicals: ["行"],
    mnemonics: "A crossroads where you decide which way to go."
  },
  {
    id: 64,
    character: "帰",
    meanings: ["return", "go back"],
    onyomi: ["キ"],
    kunyomi: ["かえ-る", "かえ-す"],
    compounds: [
      { word: "帰る", reading: "かえる", meaning: "to return" },
      { word: "帰国", reading: "きこく", meaning: "return to one's country" },
      { word: "帰宅", reading: "きたく", meaning: "returning home" },
      { word: "帰り", reading: "かえり", meaning: "return trip" }
    ],
    strokeCount: 10,
    jlptLevel: "N5",
    frequency: 64,
    pronunciation: "かえ",
    exampleSentences: [
      { sentence: "家に帰ります。", reading: "いえにかえります。", translation: "I'm going home." },
      { sentence: "六時に帰りました。", reading: "ろくじにかえりました。", translation: "I returned at six o'clock." }
    ],
    usageContexts: ["Movement", "Home", "Return", "Daily life"],
    radicals: ["帰"],
    mnemonics: "Following a path back to where you belong."
  },
  {
    id: 65,
    character: "食",
    meanings: ["eat", "food", "meal"],
    onyomi: ["ショク", "ジキ"],
    kunyomi: ["た-べる", "く-う"],
    compounds: [
      { word: "食べる", reading: "たべる", meaning: "to eat" },
      { word: "食事", reading: "しょくじ", meaning: "meal" },
      { word: "食べ物", reading: "たべもの", meaning: "food" },
      { word: "夕食", reading: "ゆうしょく", meaning: "dinner" }
    ],
    strokeCount: 9,
    jlptLevel: "N5",
    frequency: 65,
    pronunciation: "た",
    exampleSentences: [
      { sentence: "朝ご飯を食べます。", reading: "あさごはんをたべます。", translation: "I eat breakfast." },
      { sentence: "日本の食べ物が好きです。", reading: "にほんのたべものがすきです。", translation: "I like Japanese food." }
    ],
    usageContexts: ["Food", "Meals", "Daily life", "Nutrition"],
    radicals: ["食"],
    mnemonics: "A person with a big mouth eating food."
  },
  {
    id: 66,
    character: "飲",
    meanings: ["drink"],
    onyomi: ["イン"],
    kunyomi: ["の-む"],
    compounds: [
      { word: "飲む", reading: "のむ", meaning: "to drink" },
      { word: "飲み物", reading: "のみもの", meaning: "beverage" },
      { word: "飲食", reading: "いんしょく", meaning: "food and drink" },
      { word: "飲料", reading: "いんりょう", meaning: "beverage" }
    ],
    strokeCount: 12,
    jlptLevel: "N5",
    frequency: 66,
    pronunciation: "の",
    exampleSentences: [
      { sentence: "水を飲みます。", reading: "みずをのみます。", translation: "I drink water." },
      { sentence: "何か飲み物はいかがですか。", reading: "なにかのみものはいかがですか。", translation: "Would you like something to drink?" }
    ],
    usageContexts: ["Beverages", "Daily life", "Health", "Hospitality"],
    radicals: ["食", "欠"],
    mnemonics: "Food (食) with something lacking (欠) - need to drink."
  },
  {
    id: 67,
    character: "見",
    meanings: ["see", "look", "watch"],
    onyomi: ["ケン"],
    kunyomi: ["み-る", "み-える", "み-せる"],
    compounds: [
      { word: "見る", reading: "みる", meaning: "to see, watch" },
      { word: "見える", reading: "みえる", meaning: "to be visible" },
      { word: "見せる", reading: "みせる", meaning: "to show" },
      { word: "意見", reading: "いけん", meaning: "opinion" }
    ],
    strokeCount: 7,
    jlptLevel: "N5",
    frequency: 67,
    pronunciation: "み",
    exampleSentences: [
      { sentence: "テレビを見ます。", reading: "テレビをみます。", translation: "I watch TV." },
      { sentence: "富士山が見えます。", reading: "ふじさんがみえます。", translation: "I can see Mt. Fuji." }
    ],
    usageContexts: ["Vision", "Entertainment", "Observation", "Perception"],
    radicals: ["目", "儿"],
    mnemonics: "An eye (目) on legs (儿), actively looking around."
  },
  {
    id: 68,
    character: "聞",
    meanings: ["hear", "listen", "ask"],
    onyomi: ["ブン", "モン"],
    kunyomi: ["き-く"],
    compounds: [
      { word: "聞く", reading: "きく", meaning: "to hear, listen, ask" },
      { word: "新聞", reading: "しんぶん", meaning: "newspaper" },
      { word: "質問", reading: "しつもん", meaning: "question" },
      { word: "聞こえる", reading: "きこえる", meaning: "to be audible" }
    ],
    strokeCount: 14,
    jlptLevel: "N5",
    frequency: 68,
    pronunciation: "き",
    exampleSentences: [
      { sentence: "音楽を聞きます。", reading: "おんがくをききます。", translation: "I listen to music." },
      { sentence: "質問があります。", reading: "しつもんがあります。", translation: "I have a question." }
    ],
    usageContexts: ["Hearing", "Questions", "Music", "Communication"],
    radicals: ["門", "耳"],
    mnemonics: "An ear (耳) at the gate (門), listening carefully."
  },
  {
    id: 69,
    character: "話",
    meanings: ["talk", "speak", "story"],
    onyomi: ["ワ"],
    kunyomi: ["はな-す", "はなし"],
    compounds: [
      { word: "話す", reading: "はなす", meaning: "to speak" },
      { word: "話", reading: "はなし", meaning: "story, talk" },
      { word: "電話", reading: "でんわ", meaning: "telephone" },
      { word: "会話", reading: "かいわ", meaning: "conversation" }
    ],
    strokeCount: 13,
    jlptLevel: "N5",
    frequency: 69,
    pronunciation: "はな",
    exampleSentences: [
      { sentence: "日本語を話します。", reading: "にほんごをはなします。", translation: "I speak Japanese." },
      { sentence: "面白い話を聞きました。", reading: "おもしろいはなしをききました。", translation: "I heard an interesting story." }
    ],
    usageContexts: ["Communication", "Language", "Stories", "Conversation"],
    radicals: ["言", "舌"],
    mnemonics: "Words (言) from the tongue (舌), speaking and talking."
  },
  {
    id: 70,
    character: "読",
    meanings: ["read"],
    onyomi: ["ドク", "トク"],
    kunyomi: ["よ-む"],
    compounds: [
      { word: "読む", reading: "よむ", meaning: "to read" },
      { word: "読書", reading: "どくしょ", meaning: "reading" },
      { word: "音読", reading: "おんどく", meaning: "reading aloud" },
      { word: "読者", reading: "どくしゃ", meaning: "reader" }
    ],
    strokeCount: 14,
    jlptLevel: "N5",
    frequency: 70,
    pronunciation: "よ",
    exampleSentences: [
      { sentence: "本を読みます。", reading: "ほんをよみます。", translation: "I read books." },
      { sentence: "毎日新聞を読みます。", reading: "まいにちしんぶんをよみます。", translation: "I read the newspaper every day." }
    ],
    usageContexts: ["Reading", "Education", "Literature", "Information"],
    radicals: ["言", "売"],
    mnemonics: "Words (言) being sold (売), like reading books for sale."
  },
  {
    id: 71,
    character: "書",
    meanings: ["write", "book"],
    onyomi: ["ショ"],
    kunyomi: ["か-く"],
    compounds: [
      { word: "書く", reading: "かく", meaning: "to write" },
      { word: "読書", reading: "どくしょ", meaning: "reading" },
      { word: "図書館", reading: "としょかん", meaning: "library" },
      { word: "教科書", reading: "きょうかしょ", meaning: "textbook" }
    ],
    strokeCount: 10,
    jlptLevel: "N5",
    frequency: 71,
    pronunciation: "か",
    exampleSentences: [
      { sentence: "手紙を書きます。", reading: "てがみをかきます。", translation: "I write a letter." },
      { sentence: "図書館で本を借ります。", reading: "としょかんでほんをかります。", translation: "I borrow books from the library." }
    ],
    usageContexts: ["Writing", "Education", "Literature", "Communication"],
    radicals: ["書"],
    mnemonics: "A brush writing on paper, creating books and documents."
  },
  {
    id: 72,
    character: "買",
    meanings: ["buy", "purchase"],
    onyomi: ["バイ"],
    kunyomi: ["か-う"],
    compounds: [
      { word: "買う", reading: "かう", meaning: "to buy" },
      { word: "買い物", reading: "かいもの", meaning: "shopping" },
      { word: "売買", reading: "ばいばい", meaning: "buying and selling" },
      { word: "購買", reading: "こうばい", meaning: "purchase" }
    ],
    strokeCount: 12,
    jlptLevel: "N5",
    frequency: 72,
    pronunciation: "か",
    exampleSentences: [
      { sentence: "パンを買います。", reading: "パンをかいます。", translation: "I buy bread." },
      { sentence: "買い物に行きます。", reading: "かいものにいきます。", translation: "I go shopping." }
    ],
    usageContexts: ["Shopping", "Commerce", "Daily life", "Economy"],
    radicals: ["買"],
    mnemonics: "A net (罒) over shells (貝), buying things with money."
  },
  {
    id: 73,
    character: "売",
    meanings: ["sell"],
    onyomi: ["バイ"],
    kunyomi: ["う-る", "う-れる"],
    compounds: [
      { word: "売る", reading: "うる", meaning: "to sell" },
      { word: "売れる", reading: "うれる", meaning: "to be sold" },
      { word: "売買", reading: "ばいばい", meaning: "buying and selling" },
      { word: "販売", reading: "はんばい", meaning: "sales" }
    ],
    strokeCount: 7,
    jlptLevel: "N5",
    frequency: 73,
    pronunciation: "う",
    exampleSentences: [
      { sentence: "車を売りました。", reading: "くるまをうりました。", translation: "I sold my car." },
      { sentence: "この店は何を売っていますか。", reading: "このみせはなにをうっていますか。", translation: "What does this store sell?" }
    ],
    usageContexts: ["Commerce", "Business", "Shopping", "Economy"],
    radicals: ["士", "儿"],
    mnemonics: "A scholar (士) with legs (儿), going around selling things."
  },
  {
    id: 74,
    character: "作",
    meanings: ["make", "create", "work"],
    onyomi: ["サク", "サ"],
    kunyomi: ["つく-る"],
    compounds: [
      { word: "作る", reading: "つくる", meaning: "to make" },
      { word: "作品", reading: "さくひん", meaning: "work of art" },
      { word: "作業", reading: "さぎょう", meaning: "work, operation" },
      { word: "作文", reading: "さくぶん", meaning: "composition" }
    ],
    strokeCount: 7,
    jlptLevel: "N5",
    frequency: 74,
    pronunciation: "つく",
    exampleSentences: [
      { sentence: "料理を作ります。", reading: "りょうりをつくります。", translation: "I make food." },
      { sentence: "作文を書きました。", reading: "さくぶんをかきました。", translation: "I wrote a composition." }
    ],
    usageContexts: ["Creation", "Cooking", "Art", "Work"],
    radicals: ["人", "乍"],
    mnemonics: "A person (人) working to create something."
  },
  {
    id: 75,
    character: "立",
    meanings: ["stand", "rise"],
    onyomi: ["リツ", "リュウ"],
    kunyomi: ["た-つ", "た-てる"],
    compounds: [
      { word: "立つ", reading: "たつ", meaning: "to stand" },
      { word: "立てる", reading: "たてる", meaning: "to set up" },
      { word: "国立", reading: "こくりつ", meaning: "national" },
      { word: "独立", reading: "どくりつ", meaning: "independence" }
    ],
    strokeCount: 5,
    jlptLevel: "N5",
    frequency: 75,
    pronunciation: "た",
    exampleSentences: [
      { sentence: "椅子から立ちました。", reading: "いすからたちました。", translation: "I stood up from the chair." },
      { sentence: "旗を立てます。", reading: "はたをたてます。", translation: "I raise the flag." }
    ],
    usageContexts: ["Position", "Movement", "Establishment", "Posture"],
    radicals: ["立"],
    mnemonics: "A person standing upright on the ground."
  },
  {
    id: 76,
    character: "座",
    meanings: ["sit", "seat"],
    onyomi: ["ザ"],
    kunyomi: ["すわ-る"],
    compounds: [
      { word: "座る", reading: "すわる", meaning: "to sit" },
      { word: "座席", reading: "ざせき", meaning: "seat" },
      { word: "正座", reading: "せいざ", meaning: "sitting properly" },
      { word: "座布団", reading: "ざぶとん", meaning: "cushion" }
    ],
    strokeCount: 10,
    jlptLevel: "N5",
    frequency: 76,
    pronunciation: "すわ",
    exampleSentences: [
      { sentence: "椅子に座ります。", reading: "いすにすわります。", translation: "I sit on the chair." },
      { sentence: "座席を予約しました。", reading: "ざせきをよやくしました。", translation: "I reserved a seat." }
    ],
    usageContexts: ["Position", "Furniture", "Transportation", "Posture"],
    radicals: ["广", "坐"],
    mnemonics: "People sitting under a roof in a building."
  },
  {
    id: 77,
    character: "寝",
    meanings: ["sleep", "lie down"],
    onyomi: ["シン"],
    kunyomi: ["ね-る", "ね-かす"],
    compounds: [
      { word: "寝る", reading: "ねる", meaning: "to sleep" },
      { word: "寝室", reading: "しんしつ", meaning: "bedroom" },
      { word: "昼寝", reading: "ひるね", meaning: "nap" },
      { word: "寝不足", reading: "ねぶそく", meaning: "lack of sleep" }
    ],
    strokeCount: 13,
    jlptLevel: "N5",
    frequency: 77,
    pronunciation: "ね",
    exampleSentences: [
      { sentence: "十時に寝ます。", reading: "じゅうじにねます。", translation: "I go to sleep at ten o'clock." },
      { sentence: "昼寝をしました。", reading: "ひるねをしました。", translation: "I took a nap." }
    ],
    usageContexts: ["Sleep", "Daily routine", "Health", "Rest"],
    radicals: ["宀", "寝"],
    mnemonics: "A person lying down under a roof to sleep."
  },
  {
    id: 78,
    character: "起",
    meanings: ["wake up", "get up", "rise"],
    onyomi: ["キ"],
    kunyomi: ["お-きる", "お-こす"],
    compounds: [
      { word: "起きる", reading: "おきる", meaning: "to wake up" },
      { word: "起こす", reading: "おこす", meaning: "to wake someone up" },
      { word: "起立", reading: "きりつ", meaning: "standing up" },
      { word: "早起き", reading: "はやおき", meaning: "early rising" }
    ],
    strokeCount: 10,
    jlptLevel: "N5",
    frequency: 78,
    pronunciation: "お",
    exampleSentences: [
      { sentence: "七時に起きます。", reading: "しちじにおきます。", translation: "I wake up at seven o'clock." },
      { sentence: "友達を起こしました。", reading: "ともだちをおこしました。", translation: "I woke up my friend." }
    ],
    usageContexts: ["Sleep", "Daily routine", "Morning", "Awakening"],
    radicals: ["走", "己"],
    mnemonics: "Running (走) yourself (己) to get up and start the day."
  },
  {
    id: 79,
    character: "歩",
    meanings: ["walk", "step"],
    onyomi: ["ホ", "ブ"],
    kunyomi: ["ある-く", "あゆ-む"],
    compounds: [
      { word: "歩く", reading: "あるく", meaning: "to walk" },
      { word: "散歩", reading: "さんぽ", meaning: "walk, stroll" },
      { word: "歩道", reading: "ほどう", meaning: "sidewalk" },
      { word: "進歩", reading: "しんぽ", meaning: "progress" }
    ],
    strokeCount: 8,
    jlptLevel: "N5",
    frequency: 79,
    pronunciation: "ある",
    exampleSentences: [
      { sentence: "公園を歩きます。", reading: "こうえんをあるきます。", translation: "I walk in the park." },
      { sentence: "散歩が好きです。", reading: "さんぽがすきです。", translation: "I like taking walks." }
    ],
    usageContexts: ["Movement", "Exercise", "Transportation", "Leisure"],
    radicals: ["止", "少"],
    mnemonics: "Stopping (止) a little (少) to take steps while walking."
  },
  {
    id: 80,
    character: "走",
    meanings: ["run"],
    onyomi: ["ソウ"],
    kunyomi: ["はし-る"],
    compounds: [
      { word: "走る", reading: "はしる", meaning: "to run" },
      { word: "走者", reading: "そうしゃ", meaning: "runner" },
      { word: "暴走", reading: "ぼうそう", meaning: "reckless driving" },
      { word: "走行", reading: "そうこう", meaning: "running, traveling" }
    ],
    strokeCount: 7,
    jlptLevel: "N5",
    frequency: 80,
    pronunciation: "はし",
    exampleSentences: [
      { sentence: "毎朝走ります。", reading: "まいあさはしります。", translation: "I run every morning." },
      { sentence: "バスが走っています。", reading: "バスがはしっています。", translation: "The bus is running." }
    ],
    usageContexts: ["Exercise", "Sports", "Transportation", "Movement"],
    radicals: ["走"],
    mnemonics: "A person running with arms and legs moving."
  },
  {
    id: 81,
    character: "入",
    meanings: ["enter", "put in"],
    onyomi: ["ニュウ"],
    kunyomi: ["い-る", "はい-る"],
    compounds: [
      { word: "入る", reading: "はいる", meaning: "to enter" },
      { word: "入れる", reading: "いれる", meaning: "to put in" },
      { word: "入学", reading: "にゅうがく", meaning: "school entrance" },
      { word: "入口", reading: "いりぐち", meaning: "entrance" }
    ],
    strokeCount: 2,
    jlptLevel: "N5",
    frequency: 81,
    pronunciation: "はい",
    exampleSentences: [
      { sentence: "部屋に入ります。", reading: "へやにはいります。", translation: "I enter the room." },
      { sentence: "コーヒーを入れます。", reading: "コーヒーをいれます。", translation: "I make coffee." }
    ],
    usageContexts: ["Movement", "Entry", "Preparation", "Access"],
    radicals: ["入"],
    mnemonics: "An arrow pointing into something, showing entry."
  },
  {
    id: 82,
    character: "出",
    meanings: ["exit", "go out", "come out"],
    onyomi: ["シュツ", "スイ"],
    kunyomi: ["で-る", "だ-す"],
    compounds: [
      { word: "出る", reading: "でる", meaning: "to go out" },
      { word: "出す", reading: "だす", meaning: "to take out" },
      { word: "出口", reading: "でぐち", meaning: "exit" },
      { word: "外出", reading: "がいしゅつ", meaning: "going out" }
    ],
    strokeCount: 5,
    jlptLevel: "N5",
    frequency: 82,
    pronunciation: "で",
    exampleSentences: [
      { sentence: "家を出ます。", reading: "いえをでます。", translation: "I leave the house." },
      { sentence: "宿題を出しました。", reading: "しゅくだいをだしました。", translation: "I submitted my homework." }
    ],
    usageContexts: ["Movement", "Exit", "Submission", "Departure"],
    radicals: ["出"],
    mnemonics: "Mountains stacked up, with something coming out from between them."
  },
  {
    id: 83,
    character: "開",
    meanings: ["open"],
    onyomi: ["カイ"],
    kunyomi: ["ひら-く", "あ-く"],
    compounds: [
      { word: "開く", reading: "ひらく", meaning: "to open" },
      { word: "開ける", reading: "あける", meaning: "to open" },
      { word: "開始", reading: "かいし", meaning: "start" },
      { word: "公開", reading: "こうかい", meaning: "public opening" }
    ],
    strokeCount: 12,
    jlptLevel: "N5",
    frequency: 83,
    pronunciation: "ひら",
    exampleSentences: [
      { sentence: "窓を開けます。", reading: "まどをあけます。", translation: "I open the window." },
      { sentence: "店が開いています。", reading: "みせがあいています。", translation: "The store is open." }
    ],
    usageContexts: ["Actions", "Business", "Access", "Beginning"],
    radicals: ["門", "開"],
    mnemonics: "A gate (門) with hands opening it wide."
  },
  {
    id: 84,
    character: "閉",
    meanings: ["close", "shut"],
    onyomi: ["ヘイ"],
    kunyomi: ["と-じる", "し-める"],
    compounds: [
      { word: "閉じる", reading: "とじる", meaning: "to close" },
      { word: "閉める", reading: "しめる", meaning: "to shut" },
      { word: "閉店", reading: "へいてん", meaning: "store closing" },
      { word: "開閉", reading: "かいへい", meaning: "opening and closing" }
    ],
    strokeCount: 11,
    jlptLevel: "N5",
    frequency: 84,
    pronunciation: "と",
    exampleSentences: [
      { sentence: "ドアを閉めます。", reading: "ドアをしめます。", translation: "I close the door." },
      { sentence: "本を閉じました。", reading: "ほんをとじました。", translation: "I closed the book." }
    ],
    usageContexts: ["Actions", "Business", "Security", "Ending"],
    radicals: ["門", "才"],
    mnemonics: "A gate (門) with a barrier, keeping it closed."
  },
  {
    id: 85,
    character: "学",
    meanings: ["study", "learn", "school"],
    onyomi: ["ガク"],
    kunyomi: ["まな-ぶ"],
    compounds: [
      { word: "学ぶ", reading: "まなぶ", meaning: "to learn" },
      { word: "学校", reading: "がっこう", meaning: "school" },
      { word: "大学", reading: "だいがく", meaning: "university" },
      { word: "学生", reading: "がくせい", meaning: "student" }
    ],
    strokeCount: 8,
    jlptLevel: "N5",
    frequency: 85,
    pronunciation: "まな",
    exampleSentences: [
      { sentence: "日本語を学んでいます。", reading: "にほんごをまなんでいます。", translation: "I am learning Japanese." },
      { sentence: "学校に行きます。", reading: "がっこうにいきます。", translation: "I go to school." }
    ],
    usageContexts: ["Education", "Knowledge", "Schools", "Learning"],
    radicals: ["学"],
    mnemonics: "A child under a roof learning with crossed hands."
  },
  {
    id: 86,
    character: "校",
    meanings: ["school"],
    onyomi: ["コウ"],
    kunyomi: [],
    compounds: [
      { word: "学校", reading: "がっこう", meaning: "school" },
      { word: "高校", reading: "こうこう", meaning: "high school" },
      { word: "校長", reading: "こうちょう", meaning: "principal" },
      { word: "母校", reading: "ぼこう", meaning: "alma mater" }
    ],
    strokeCount: 10,
    jlptLevel: "N5",
    frequency: 86,
    pronunciation: "こう",
    exampleSentences: [
      { sentence: "新しい学校に通います。", reading: "あたらしいがっこうにかよいます。", translation: "I attend a new school." },
      { sentence: "高校を卒業しました。", reading: "こうこうをそつぎょうしました。", translation: "I graduated from high school." }
    ],
    usageContexts: ["Education", "Buildings", "Institution", "Learning"],
    radicals: ["木", "交"],
    mnemonics: "A tree (木) where people cross paths (交) to learn - a school."
  },
  {
    id: 87,
    character: "先",
    meanings: ["before", "ahead", "previous"],
    onyomi: ["セン"],
    kunyomi: ["さき"],
    compounds: [
      { word: "先生", reading: "せんせい", meaning: "teacher" },
      { word: "先に", reading: "さきに", meaning: "ahead, first" },
      { word: "先月", reading: "せんげつ", meaning: "last month" },
      { word: "先週", reading: "せんしゅう", meaning: "last week" }
    ],
    strokeCount: 6,
    jlptLevel: "N5",
    frequency: 87,
    pronunciation: "さき",
    exampleSentences: [
      { sentence: "先生に質問します。", reading: "せんせいにしつもんします。", translation: "I ask the teacher a question." },
      { sentence: "先に行ってください。", reading: "さきにいってください。", translation: "Please go ahead." }
    ],
    usageContexts: ["Education", "Time", "Direction", "Respect"],
    radicals: ["先"],
    mnemonics: "A person walking ahead, leading the way."
  },
  {
    id: 88,
    character: "生",
    meanings: ["life", "birth", "student"],
    onyomi: ["セイ", "ショウ"],
    kunyomi: ["い-きる", "う-まれる", "なま"],
    compounds: [
      { word: "先生", reading: "せんせい", meaning: "teacher" },
      { word: "学生", reading: "がくせい", meaning: "student" },
      { word: "生きる", reading: "いきる", meaning: "to live" },
      { word: "人生", reading: "じんせい", meaning: "life" }
    ],
    strokeCount: 5,
    jlptLevel: "N5",
    frequency: 88,
    pronunciation: "い",
    exampleSentences: [
      { sentence: "大学生です。", reading: "だいがくせいです。", translation: "I am a university student." },
      { sentence: "日本に生まれました。", reading: "にほんにうまれました。", translation: "I was born in Japan." }
    ],
    usageContexts: ["Life", "Education", "Birth", "Students"],
    radicals: ["生"],
    mnemonics: "A plant growing from the ground, representing life."
  },
  {
    id: 89,
    character: "会",
    meanings: ["meet", "meeting", "association"],
    onyomi: ["カイ", "エ"],
    kunyomi: ["あ-う"],
    compounds: [
      { word: "会う", reading: "あう", meaning: "to meet" },
      { word: "会社", reading: "かいしゃ", meaning: "company" },
      { word: "会議", reading: "かいぎ", meaning: "meeting" },
      { word: "社会", reading: "しゃかい", meaning: "society" }
    ],
    strokeCount: 6,
    jlptLevel: "N5",
    frequency: 89,
    pronunciation: "あ",
    exampleSentences: [
      { sentence: "友達に会います。", reading: "ともだちにあいます。", translation: "I meet my friend." },
      { sentence: "会社で働いています。", reading: "かいしゃではたらいています。", translation: "I work at a company." }
    ],
    usageContexts: ["Social", "Business", "Meetings", "Relationships"],
    radicals: ["人", "云"],
    mnemonics: "People (人) coming together under clouds (云) to meet."
  },
  {
    id: 90,
    character: "社",
    meanings: ["company", "shrine", "society"],
    onyomi: ["シャ"],
    kunyomi: ["やしろ"],
    compounds: [
      { word: "会社", reading: "かいしゃ", meaning: "company" },
      { word: "社会", reading: "しゃかい", meaning: "society" },
      { word: "神社", reading: "じんじゃ", meaning: "shrine" },
      { word: "社長", reading: "しゃちょう", meaning: "company president" }
    ],
    strokeCount: 7,
    jlptLevel: "N5",
    frequency: 90,
    pronunciation: "しゃ",
    exampleSentences: [
      { sentence: "大きい会社で働いています。", reading: "おおきいかいしゃではたらいています。", translation: "I work at a big company." },
      { sentence: "神社にお参りしました。", reading: "じんじゃにおまいりしました。", translation: "I visited the shrine." }
    ],
    usageContexts: ["Business", "Religion", "Society", "Organizations"],
    radicals: ["示", "土"],
    mnemonics: "Showing (示) respect to the earth (土) at a shrine or company."
  },
  {
    id: 91,
    character: "国",
    meanings: ["country", "nation"],
    onyomi: ["コク"],
    kunyomi: ["くに"],
    compounds: [
      { word: "国", reading: "くに", meaning: "country" },
      { word: "外国", reading: "がいこく", meaning: "foreign country" },
      { word: "中国", reading: "ちゅうごく", meaning: "China" },
      { word: "国際", reading: "こくさい", meaning: "international" }
    ],
    strokeCount: 8,
    jlptLevel: "N5",
    frequency: 91,
    pronunciation: "くに",
    exampleSentences: [
      { sentence: "どちらの国から来ましたか。", reading: "どちらのくにからきましたか。", translation: "Which country did you come from?" },
      { sentence: "外国語を勉強しています。", reading: "がいこくごをべんきょうしています。", translation: "I am studying a foreign language." }
    ],
    usageContexts: ["Geography", "Politics", "International", "Identity"],
    radicals: ["囗", "玉"],
    mnemonics: "A jewel (玉) enclosed in borders (囗), representing a country."
  },
  {
    id: 92,
    character: "家",
    meanings: ["house", "home", "family"],
    onyomi: ["カ", "ケ"],
    kunyomi: ["いえ", "や"],
    compounds: [
      { word: "家", reading: "いえ", meaning: "house" },
      { word: "家族", reading: "かぞく", meaning: "family" },
      { word: "作家", reading: "さっか", meaning: "author" },
      { word: "家庭", reading: "かてい", meaning: "home, family" }
    ],
    strokeCount: 10,
    jlptLevel: "N5",
    frequency: 92,
    pronunciation: "いえ",
    exampleSentences: [
      { sentence: "新しい家を買いました。", reading: "あたらしいいえをかいました。", translation: "I bought a new house." },
      { sentence: "家族と住んでいます。", reading: "かぞくとすんでいます。", translation: "I live with my family." }
    ],
    usageContexts: ["Housing", "Family", "Living", "Architecture"],
    radicals: ["宀", "豕"],
    mnemonics: "A pig (豕) under a roof (宀), representing a home."
  },
  {
    id: 93,
    character: "車",
    meanings: ["car", "vehicle", "wheel"],
    onyomi: ["シャ"],
    kunyomi: ["くるま"],
    compounds: [
      { word: "車", reading: "くるま", meaning: "car" },
      { word: "電車", reading: "でんしゃ", meaning: "train" },
      { word: "自転車", reading: "じてんしゃ", meaning: "bicycle" },
      { word: "駐車場", reading: "ちゅうしゃじょう", meaning: "parking lot" }
    ],
    strokeCount: 7,
    jlptLevel: "N5",
    frequency: 93,
    pronunciation: "くるま",
    exampleSentences: [
      { sentence: "新しい車を買いました。", reading: "あたらしいくるまをかいました。", translation: "I bought a new car." },
      { sentence: "電車で会社に行きます。", reading: "でんしゃでかいしゃにいきます。", translation: "I go to work by train." }
    ],
    usageContexts: ["Transportation", "Vehicles", "Travel", "Technology"],
    radicals: ["車"],
    mnemonics: "A wheel viewed from the side, representing a vehicle."
  },
  {
    id: 94,
    character: "駅",
    meanings: ["station"],
    onyomi: ["エキ"],
    kunyomi: [],
    compounds: [
      { word: "駅", reading: "えき", meaning: "station" },
      { word: "駅員", reading: "えきいん", meaning: "station employee" },
      { word: "駅前", reading: "えきまえ", meaning: "in front of station" },
      { word: "次の駅", reading: "つぎのえき", meaning: "next station" }
    ],
    strokeCount: 14,
    jlptLevel: "N5",
    frequency: 94,
    pronunciation: "えき",
    exampleSentences: [
      { sentence: "駅で友達を待ちます。", reading: "えきでともだちをまちます。", translation: "I wait for my friend at the station." },
      { sentence: "次の駅で降ります。", reading: "つぎのえきでおります。", translation: "I get off at the next station." }
    ],
    usageContexts: ["Transportation", "Travel", "Meeting places", "Public"],
    radicals: ["馬", "尺"],
    mnemonics: "A horse (馬) measured (尺) at a station stop."
  },
  {
    id: 95,
    character: "道",
    meanings: ["road", "way", "path"],
    onyomi: ["ドウ", "トウ"],
    kunyomi: ["みち"],
    compounds: [
      { word: "道", reading: "みち", meaning: "road, way" },
      { word: "歩道", reading: "ほどう", meaning: "sidewalk" },
      { word: "鉄道", reading: "てつどう", meaning: "railway" },
      { word: "北海道", reading: "ほっかいどう", meaning: "Hokkaido" }
    ],
    strokeCount: 12,
    jlptLevel: "N5",
    frequency: 95,
    pronunciation: "みち",
    exampleSentences: [
      { sentence: "この道を真っ直ぐ行ってください。", reading: "このみちをまっすぐいってください。", translation: "Please go straight on this road." },
      { sentence: "歩道を歩きます。", reading: "ほどうをあるきます。", translation: "I walk on the sidewalk." }
    ],
    usageContexts: ["Transportation", "Direction", "Geography", "Philosophy"],
    radicals: ["辶", "首"],
    mnemonics: "A head (首) moving along a path (辶), following the way."
  },
  {
    id: 96,
    character: "店",
    meanings: ["store", "shop"],
    onyomi: ["テン"],
    kunyomi: ["みせ"],
    compounds: [
      { word: "店", reading: "みせ", meaning: "store" },
      { word: "本店", reading: "ほんてん", meaning: "main store" },
      { word: "店員", reading: "てんいん", meaning: "store clerk" },
      { word: "喫茶店", reading: "きっさてん", meaning: "coffee shop" }
    ],
    strokeCount: 8,
    jlptLevel: "N5",
    frequency: 96,
    pronunciation: "みせ",
    exampleSentences: [
      { sentence: "新しい店がオープンしました。", reading: "あたらしいみせがオープンしました。", translation: "A new store opened." },
      { sentence: "この店で買い物をします。", reading: "このみせでかいものをします。", translation: "I shop at this store." }
    ],
    usageContexts: ["Shopping", "Business", "Commerce", "Services"],
    radicals: ["广", "占"],
    mnemonics: "A building (广) where fortune telling (占) happens - a shop."
  },
  {
    id: 97,
    character: "病",
    meanings: ["illness", "disease", "sick"],
    onyomi: ["ビョウ"],
    kunyomi: ["やまい"],
    compounds: [
      { word: "病気", reading: "びょうき", meaning: "illness" },
      { word: "病院", reading: "びょういん", meaning: "hospital" },
      { word: "病人", reading: "びょうにん", meaning: "sick person" },
      { word: "看病", reading: "かんびょう", meaning: "nursing" }
    ],
    strokeCount: 10,
    jlptLevel: "N5",
    frequency: 97,
    pronunciation: "びょう",
    exampleSentences: [
      { sentence: "病気になりました。", reading: "びょうきになりました。", translation: "I became sick." },
      { sentence: "病院に行きます。", reading: "びょういんにいきます。", translation: "I go to the hospital." }
    ],
    usageContexts: ["Health", "Medical", "Hospitals", "Wellness"],
    radicals: ["疒", "丙"],
    mnemonics: "A sickness radical (疒) with fire inside, showing illness."
  },
  {
    id: 98,
    character: "院",
    meanings: ["institution", "hospital", "academy"],
    onyomi: ["イン"],
    kunyomi: [],
    compounds: [
      { word: "病院", reading: "びょういん", meaning: "hospital" },
      { word: "大学院", reading: "だいがくいん", meaning: "graduate school" },
      { word: "美容院", reading: "びよういん", meaning: "beauty salon" },
      { word: "議院", reading: "ぎいん", meaning: "legislative house" }
    ],
    strokeCount: 10,
    jlptLevel: "N5",
    frequency: 98,
    pronunciation: "いん",
    exampleSentences: [
      { sentence: "病院で働いています。", reading: "びょういんではたらいています。", translation: "I work at a hospital." },
      { sentence: "大学院に進学します。", reading: "だいがくいんにしんがくします。", translation: "I will go to graduate school." }
    ],
    usageContexts: ["Medical", "Education", "Institutions", "Services"],
    radicals: ["阝", "完"],
    mnemonics: "A building (阝) that is complete (完) - an institution."
  },
  {
    id: 99,
    character: "毎",
    meanings: ["every", "each"],
    onyomi: ["マイ"],
    kunyomi: [],
    compounds: [
      { word: "毎日", reading: "まいにち", meaning: "every day" },
      { word: "毎年", reading: "まいとし", meaning: "every year" },
      { word: "毎月", reading: "まいつき", meaning: "every month" },
      { word: "毎週", reading: "まいしゅう", meaning: "every week" }
    ],
    strokeCount: 6,
    jlptLevel: "N5",
    frequency: 99,
    pronunciation: "まい",
    exampleSentences: [
      { sentence: "毎日日本語を勉強します。", reading: "まいにちにほんごをべんきょうします。", translation: "I study Japanese every day." },
      { sentence: "毎朝コーヒーを飲みます。", reading: "まいあさコーヒーをのみます。", translation: "I drink coffee every morning." }
    ],
    usageContexts: ["Frequency", "Routine", "Time", "Habits"],
    radicals: ["毎"],
    mnemonics: "A mother (母) with something on top, doing things every day."
  },
  {
    id: 100,
    character: "何",
    meanings: ["what", "how many"],
    onyomi: ["カ"],
    kunyomi: ["なに", "なん"],
    compounds: [
      { word: "何", reading: "なに", meaning: "what" },
      { word: "何時", reading: "なんじ", meaning: "what time" },
      { word: "何人", reading: "なんにん", meaning: "how many people" },
      { word: "何か", reading: "なにか", meaning: "something" }
    ],
    strokeCount: 7,
    jlptLevel: "N5",
    frequency: 100,
    pronunciation: "なに",
    exampleSentences: [
      { sentence: "何をしていますか。", reading: "なにをしていますか。", translation: "What are you doing?" },
      { sentence: "今何時ですか。", reading: "いまなんじですか。", translation: "What time is it now?" }
    ],
    usageContexts: ["Questions", "Information", "Inquiry", "Numbers"],
    radicals: ["人", "可"],
    mnemonics: "A person (人) asking what is possible (可)."
  },
  {
    id: 101,
    character: "誰",
    meanings: ["who"],
    onyomi: ["スイ"],
    kunyomi: ["だれ", "たれ"],
    compounds: [
      { word: "誰", reading: "だれ", meaning: "who" },
      { word: "誰か", reading: "だれか", meaning: "someone" },
      { word: "誰も", reading: "だれも", meaning: "no one, everyone" },
      { word: "誰でも", reading: "だれでも", meaning: "anyone" }
    ],
    strokeCount: 15,
    jlptLevel: "N5",
    frequency: 101,
    pronunciation: "だれ",
    exampleSentences: [
      { sentence: "誰が来ますか。", reading: "だれがきますか。", translation: "Who is coming?" },
      { sentence: "誰かいますか。", reading: "だれかいますか。", translation: "Is anyone there?" }
    ],
    usageContexts: ["Questions", "People", "Identity", "Inquiry"],
    radicals: ["言", "隹"],
    mnemonics: "Words (言) about a bird (隹) - asking who it belongs to."
  },
  {
    id: 102,
    character: "私",
    meanings: ["I", "me", "private"],
    onyomi: ["シ"],
    kunyomi: ["わたし", "わたくし"],
    compounds: [
      { word: "私", reading: "わたし", meaning: "I, me" },
      { word: "私達", reading: "わたしたち", meaning: "we, us" },
      { word: "私立", reading: "しりつ", meaning: "private" },
      { word: "私物", reading: "しぶつ", meaning: "personal belongings" }
    ],
    strokeCount: 7,
    jlptLevel: "N5",
    frequency: 102,
    pronunciation: "わたし",
    exampleSentences: [
      { sentence: "私は学生です。", reading: "わたしはがくせいです。", translation: "I am a student." },
      { sentence: "私の名前は田中です。", reading: "わたしのなまえはたなかです。", translation: "My name is Tanaka." }
    ],
    usageContexts: ["Personal", "Identity", "Self-reference", "Ownership"],
    radicals: ["禾", "厶"],
    mnemonics: "Grain (禾) that is private (厶) - belonging to me."
  },
  {
    id: 103,
    character: "友",
    meanings: ["friend"],
    onyomi: ["ユウ"],
    kunyomi: ["とも"],
    compounds: [
      { word: "友達", reading: "ともだち", meaning: "friend" },
      { word: "友人", reading: "ゆうじん", meaning: "friend" },
      { word: "親友", reading: "しんゆう", meaning: "close friend" },
      { word: "友好", reading: "ゆうこう", meaning: "friendship" }
    ],
    strokeCount: 4,
    jlptLevel: "N5",
    frequency: 103,
    pronunciation: "とも",
    exampleSentences: [
      { sentence: "友達と映画を見ました。", reading: "ともだちとえいがをみました。", translation: "I watched a movie with my friend." },
      { sentence: "新しい友達ができました。", reading: "あたらしいともだちができました。", translation: "I made a new friend." }
    ],
    usageContexts: ["Relationships", "Social", "Friendship", "People"],
    radicals: ["又", "又"],
    mnemonics: "Two hands (又又) reaching toward each other in friendship."
  }
];

export const getKanjiById = (id: number): KanjiData | undefined => {
  return kanjiDatabase.find(kanji => kanji.id === id);
};

export const searchKanji = (query: string): KanjiData[] => {
  const lowerQuery = query.toLowerCase();
  return kanjiDatabase.filter(kanji => 
    kanji.character.includes(query) ||
    kanji.meanings.some(meaning => meaning.toLowerCase().includes(lowerQuery)) ||
    kanji.onyomi.some(reading => reading.includes(query)) ||
    kanji.kunyomi.some(reading => reading.includes(query)) ||
    kanji.compounds.some(compound => 
      compound.word.includes(query) || 
      compound.meaning.toLowerCase().includes(lowerQuery)
    )
  );
};

export const filterKanjiByStrokeCount = (strokeCount: number): KanjiData[] => {
  return kanjiDatabase.filter(kanji => kanji.strokeCount === strokeCount);
};

export const getRandomKanji = (): KanjiData => {
  const randomIndex = Math.floor(Math.random() * kanjiDatabase.length);
  return kanjiDatabase[randomIndex];
};