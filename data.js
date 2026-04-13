const questions = [
  {
    title: "遇到危险你会？",
    options: [
      { text: "冲上去战斗", scores: { heat: 3, brain: -1, funny: 0 } },
      { text: "冷静分析", scores: { heat: -1, brain: 3, funny: 0 } },
      { text: "找朋友帮忙", scores: { heat: 1, brain: 1, funny: 1 } }
    ]
  },
  {
    title: "你更擅长？",
    options: [
      { text: "体术/战斗", scores: { heat: 2, brain: -1, funny: 0 } },
      { text: "计谋/布局", scores: { heat: -1, brain: 2, funny: 0 } },
      { text: "搞笑/活跃气氛", scores: { heat: 0, brain: 0, funny: 2 } }
    ]
  }
]

// 角色数据
const characters = [
  {
    name: "漩涡鸣人",
    heat: 10, brain: 6, funny: 3,
    image: "images/naruto.jpg",
    description: "你热血、坚强、永不放弃，是天生的领导者。"
  },
  {
    name: "宇智波鼬",
    heat: 6, brain: 10, funny: 1,
    image: "images/itachi.jpg",
    description: "你智慧过人、心思深沉，是外表冷酷内心温柔的类型。"
  },
  {
    name: "路飞",
    heat: 10, brain: 4, funny: 8,
    image: "images/luffy.jpg",
    description: "你乐观搞笑、勇往直前，是团队的开心果。"
  }
]