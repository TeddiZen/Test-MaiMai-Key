// 题目（你自己写）
const questions = [
  {
    title: "朋友约你去机厅打maimai，你会？",
    options: [
      { text: "立刻出发，说走就走", scores: { brave: 2, strong: -1, sharp: 0, easy: 0 } },
      { text: "怎么能让你小子先打，我要先过去爽爽霸机~", scores: { brave: -1, strong: 2, sharp: 0, easy: 0 } },
      { text: "看看有没有心情顺路去了", scores: { brave: 0, strong: 0, sharp: -2, easy: 2 } },
      { text: "再拉一车面包人前往机厅", scores: { brave: 1, strong: 0, sharp: 0, easy: 1 } }
    ]
  },
  {
    title: "推一直鸟/鸟加不掉的高难曲，你会？",
    options: [
      { text: "不行，我还要再开1pc还要继续推！", scores: { brave: 2, strong: -2, sharp: 0, easy: 0 } },
      { text: "还是先看看B站上的谱面确认，把不会的地方熟悉一下吧", scores: { brave: 0, strong: 2, sharp: 1, easy: 0 } },
      { text: "不打了，拉黑名单，这粪谱爱谁打谁打", scores: { brave: 0, strong: 1, sharp: 2, easy: 0 } },
      { text: "随缘，下次再来玩哟~", scores: { brave: 0, strong: 0, sharp: 0, easy: 2 } }
    ]
  },
  {
    title: "成功把一个高难曲推上了分，你更在意？",
    options: [
      { text: "我感觉我的底力增强，我强得可怕", scores: { brave: 2, strong: 0, sharp: 0, easy: 0 } },
      { text: "我刚才好像有地方没打好", scores: { brave: 0, strong: 2, sharp: 1, easy: 0 } },
      { text: "玩得开心就好，不看分数", scores: { brave: 0, strong: -1, sharp: 0, easy: 2 } },
      { text: "我去我得赶紧发给我朋友看看让他知道", scores: { brave: 0, strong: 1, sharp: 0, easy: 1 } }
    ]
  },
  {
    title: "你打maimai更偏向哪种节奏？",
    options: [
      { text: "拔大蒜，爽！提亚马特，爽！", scores: { brave: 2, strong: 0, sharp: 1, easy: 0 } },
      { text: "感觉还是没什么起伏，键型稳定的歌好玩一点", scores: { brave: 0, strong: 2, sharp: 0, easy: 0 } },
      { text: "随便打打啦，整点活也好", scores: { brave: 0, strong: 0, sharp: 0, easy: 2 } },
      { text: "就是要不断往高难曲上推，累点锻炼自己", scores: { brave: 0, strong: 2, sharp: 0, easy: 0 } }
    ]
  },
  {
    title: "新版本更新，你对新谱面的态度是？",
    options: [
      { text: "我去我明天得赶紧堵门去玩", scores: { brave: 2, strong: 0, sharp: 0, easy: 0 } },
      { text: "先看看谱面确认吧，等到自己练熟了再上机打", scores: { brave: 0, strong: 2, sharp: 2, easy: 0 } },
      { text: "对面选什么我打什么，自己也只是随歌不关注这个", scores: { brave: 0, strong: 0, sharp: 0, easy: 2 } },
      { text: "还是老歌好听好玩", scores: { brave: 0, strong: 0, sharp: -2, easy: 2 } }
    ]
  },
  {
    title: "有人在旁边看你打歌，你会？",
    options: [
      { text: "更加专注，想表现更好", scores: { brave: 0, strong: 1, sharp: 2, easy: 0 } },
      { text: "不受影响，正常发挥", scores: { brave: 0, strong: 2, sharp: 0, easy: 0 } },
      { text: "有点紧张但尽力完成", scores: { brave: -1, strong: 0, sharp: 0, easy: 2 } },
      { text: "无所谓，自己舒服最重要", scores: { brave: 0, strong: 0, sharp: 0, easy: 2 } }
    ]
  },
  {
    title: "连续失误、状态很差时，你会？",
    options: [
      { text: "立刻调整，强行找回状态", scores: { brave: 2, strong: 0, sharp: 1, easy: 0 } },
      { text: "坚持打完，不中途退出", scores: { brave: 0, strong: 2, sharp: 0, easy: 0 } },
      { text: "放慢节奏，轻松为主", scores: { brave: 0, strong: 0, sharp: 0, easy: 2 } },
      { text: "和朋友交流缓解心态", scores: { brave: 0, strong: 0, sharp: 0, easy: 2 } }
    ]
  },
  {
    title: "你选曲时优先看什么？",
    options: [
      { text: "节奏快、能秀操作", scores: { brave: 2, strong: 0, sharp: 1, easy: 0 } },
      { text: "谱面稳、适合练底力", scores: { brave: 0, strong: 2, sharp: 0, easy: 0 } },
      { text: "曲风好听、玩着舒服", scores: { brave: 0, strong: 0, sharp: 0, easy: 2 } },
      { text: "适合双人、朋友一起玩", scores: { brave: 0, strong: 0, sharp: 0, easy: 2 } }
    ]
  },
  {
    title: "和朋友双排，你更在意？",
    options: [
      { text: "自己不拖后腿", scores: { brave: 0, strong: 1, sharp: 1, easy: 0 } },
      { text: "两人节奏同步配合", scores: { brave: 0, strong: 0, sharp: 0, easy: 2 } },
      { text: "互相鼓励，输赢无所谓", scores: { brave: 0, strong: 0, sharp: 0, easy: 2 } },
      { text: "打出帅气的同步操作", scores: { brave: 1, strong: 0, sharp: 0, easy: 0 } }
    ]
  },
  {
    title: "达到目标分数后，你会？",
    options: [
      { text: "立刻挑战更高难度", scores: { brave: 2, strong: 0, sharp: 2, easy: 0 } },
      { text: "巩固稳定，保证次次能过", scores: { brave: 0, strong: 2, sharp: 0, easy: 0 } },
      { text: "心满意足，换轻松的玩", scores: { brave: 0, strong: 0, sharp: 0, easy: 2 } },
      { text: "分享成绩，和朋友同乐", scores: { brave: 0, strong: 0, sharp: 0, easy: 2 } }
    ]
  },
  {
    title: "遇到完全陌生的谱面风格，你会？",
    options: [
      { text: "直接开冲，临场应变", scores: { brave: 2, strong: 0, sharp: 0, easy: 0 } },
      { text: "先看思路再上手", scores: { brave: 0, strong: 2, sharp: 0, easy: 0 } },
      { text: "随便打打，体验为主", scores: { brave: 0, strong: 0, sharp: 0, easy: 2 } },
      { text: "跟着熟悉的节奏走", scores: { brave: 0, strong: 0, sharp: 0, easy: 1 } }
    ]
  },
  {
    title: "你认为音游实力最关键是？",
    options: [
      { text: "反应快、敢打敢冲", scores: { brave: 2, strong: 0, sharp: 2, easy: 0 } },
      { text: "稳定持久、不失误", scores: { brave: 0, strong: 2, sharp: 1, easy: 0 } },
      { text: "玩得开心、放松就好", scores: { brave: 0, strong: 0, sharp: 0, easy: 2 } },
      { text: "能和别人默契同调", scores: { brave: 0, strong: 0, sharp: 0, easy: 2 } }
    ]
  },
  {
    title: "长时间打maimai，你更容易？",
    options: [
      { text: "越打越兴奋，状态越高", scores: { brave: 2, strong: 0, sharp: 1, easy: 0 } },
      { text: "始终平稳，耐力很强", scores: { brave: 0, strong: 2, sharp: 0, easy: 0 } },
      { text: "逐渐放松，开始划水", scores: { brave: 0, strong: 0, sharp: 0, easy: 2 } },
      { text: "容易分心，注意力下降", scores: { brave: 1, strong: -2, sharp: 0, easy: 0 } }
    ]
  },
  {
    title: "机厅人多拥挤时，你打歌会？",
    options: [
      { text: "专注无视环境，照常发挥", scores: { brave: 0, strong: 0, sharp: 2, easy: 0 } },
      { text: "略微收敛，但认真完成", scores: { brave: 0, strong: 2, sharp: 0, easy: 0 } },
      { text: "放轻松，怎么舒服怎么打", scores: { brave: 0, strong: 0, sharp: 0, easy: 2 } },
      { text: "更放得开，享受注视感", scores: { brave: 1, strong: 0, sharp: 1, easy: 0 } }
    ]
  },
  {
    title: "你理想中的maimai玩家标签是？",
    options: [
      { text: "手速快、果断凌厉的实力派", scores: { brave: 2, strong: 0, sharp: 2, easy: 0 } },
      { text: "沉稳稳定、耐力惊人的稳扎派", scores: { brave: 0, strong: 2, sharp: 0, easy: 0 } },
      { text: "佛系休闲、快乐至上的养生玩家", scores: { brave: 0, strong: 0, sharp: 0, easy: 2 } },
      { text: "擅长配合、双人默契拉满", scores: { brave: 0, strong: 0, sharp: 0, easy: 2 } }
    ]
  }
]

// 角色（你自己写）
const personalityList = [
  {
    name: "TAP",
    desc: "干脆利落、一击即中，从不拖泥带水的行动派",
    explain: "就像 TAP 只需在判定瞬间按下，完成即收，不拖沓、不犹豫，做事直白爽快，专注当下。",
    img: "images/tap.png",
    weight: [2.0, 1.0, 0.8, 0.6],
    score: 0
  },
  {
    name: "HOLD",
    desc: "沉稳执着、有始有终，耐心拉满的坚定守护者",
    explain: "如同 HOLD 需要从头按到尾，你一旦开始就会坚持到底，沉稳可靠，绝不半途松手、半途而废。",
    img: "images/hold.png",
    weight: [0.5, 1.6, 0.7, 1.2],
    score: 0
  },
  {
    name: "SLIDE",
    desc: "灵动帅气、开局亮眼，偶尔虎头蛇尾的机灵鬼",
    explain: "像 SLIDE 星星一样，开头帅气精准，但尾部容易漏滑，代表你灵气足、反应快，但耐心与持久力稍弱。",
    img: "images/slide.png",
    weight: [1.8, 0.5, 1.2, 0.5],
    score: 0
  },
  {
    name: "TOUCH",
    desc: "佛系松弛、随性自在，毫无压力的养生玩家",
    explain: "对应 TOUCH 判定极松，随便乱摸都能中，你心态随和、不较真、不紧绷，怎么舒服怎么来。",
    img: "images/touch.png",
    weight: [0.6, 0.6, 0.8, 2.0],
    score: 0
  },
  {
    name: "TOUCH HOLD",
    desc: "低调蓄力、默默深耕，厚积薄发一鸣惊人的强者",
    explain: "旧版只在中心沉默，新版全屏突然爆发，如同你长期低调蓄力，不声不响，却在关键时刻惊艳所有人。",
    img: "images/touchhold.png",
    weight: [0.8, 1.8, 0.9, 0.5],
    score: 0
  },
  {
    name: "BREAK",
    desc: "极致严苛、追求完美，自带气场的核心王牌",
    explain: "如同 BREAK 判定最严、分数最高，你对自己要求极高，追求完美，胜负心强，天生就是焦点与核心。",
    img: "images/break.png",
    weight: [1.4, 1.2, 1.4, 0.2],
    score: 0
  },
  {
    name: "EX-NOTE",
    desc: "温和治愈、包容大度，轻松化解紧张的小太阳",
    explain: "EX-NOTE 判定宽松、容错极高，你包容自己与他人的失误，心态轻松，能治愈身边所有人。",
    img: "images/ex.png",
    weight: [0.6, 1.0, 0.4, 2.0],
    score: 0
  },
  {
    name: "EACH",
    desc: "重视默契、偏爱协同，离不开同伴的最佳搭档",
    explain: "EACH 必须双押同步才能成功，你重视配合、默契与陪伴，喜欢并肩前行，无法独自行动。",
    img: "images/each.png",
    weight: [1.0, 1.0, 0.5, 1.8],
    score: 0
  },
  {
    name: "SHINETOUCH",
    desc: "灵动亮眼、自带高光，不刻意也能温柔吸睛",
    explain: "普通操作却能绽放彩虹特效，就像你不必强求也能闪闪发光，轻松自在，安静却有存在感。",
    img: "images/shinetouch.png",
    weight: [1.3, 0.7, 1.0, 1.0],
    score: 0
  },
  {
    name: "???",
    desc: "这是什么地方？",
    explain: "恭喜你发现了彩蛋~",
    img: "",
    weight: [0, 0, 0, 0],
    score: 0
  }
]