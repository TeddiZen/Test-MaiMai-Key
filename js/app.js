new Vue({
  el: '#app',
  data: {
    stage: 'start',
    currentIdx: 0,
    user: { hot:0, calm:0, cute:0 },
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
      this.user = { hot:0, calm:0, cute:0 }
      this.result = null
    },
    choose(option) {
      // ========== 你自己写：分数累加 ==========
      console.log('选中', option)

      if(this.currentIdx === questions.length -1){
        this.calcResult()
      }else{
        this.currentIdx++
      }
    },
    calcResult() {
      // ========== 你自己写：匹配算法 ==========
      this.result = characters[0] // 临时占位
      this.stage = 'result'
    },
    restart() {
      this.stage = 'start'
    }
  }
})