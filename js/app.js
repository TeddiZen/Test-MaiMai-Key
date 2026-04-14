new Vue({
  el: '#app',
  data: {
    stage: 'start',
    currentIdx: 0,
    userName: '',
    user: { 
      brave: 0,
      strong: 0,
      sharp: 0,
      easy: 0, 
    },
    result: null
  },
  computed: {
    currentQuestion() {
      return questions[this.currentIdx]
    },
    progress() {
      return ((this.currentIdx + 1) / questions.length) * 100
    }
  },
  methods: {
    start() {
      this.stage = 'quiz'
      this.currentIdx = 0
      this.user = { 
        brave: 0,
        strong: 0,
        sharp: 0,
        easy: 0, 
      }
      this.result = null
    },
    choose(option) {
      // ========== 你自己写：分数累加 ==========
      console.log('选中', option)
      this.user.brave += option.scores.brave
      this.user.strong += option.scores.strong
      this.user.sharp += option.scores.sharp
      this.user.easy += option.scores.easy
      console.log(this.user)
      
      if(this.currentIdx === questions.length -1){
        this.calcResult()
      }else{
        this.currentIdx++
      }
    },
    // 结果算法
    calcResult() {
      // ========== 你自己写：匹配算法 ==========
      personalityList.forEach(person => {
        let score = 0.0
        score += this.user.brave * person.weight[0]
        score += this.user.strong * person.weight[1]
        score += this.user.sharp * person.weight[2]
        score += this.user.easy * person.weight[3]
        person.score = score
        console.log(score)

      })
      this.result = personalityList.reduce((prev, cur) => {
        return prev.score > cur.score ? prev : cur
      }, personalityList[0])
      this.stage = 'result'
      console.log(this.user)
    },
    nextQuestion() {
      this.currentIdx++
    },
    prevQuestion() {
      this.currentIdx--
       },
    restart() {
      this.stage = 'start'
    }
  }
})