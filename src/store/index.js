import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// time is in seconds
const POMODORO = { name: 'Pomodoro', time: 25 * 60 }
const SHORT_BREAK = { name: 'Short Break', time: 5 * 60 }
const LONG_BREAK = { name: 'Long Break', time: 20 * 60 }
const POMODORO_INTERVALS = [
  POMODORO,
  SHORT_BREAK,
  POMODORO,
  SHORT_BREAK,
  POMODORO,
  SHORT_BREAK,
  POMODORO,
  LONG_BREAK
]

export default new Vuex.Store({
  state: {
    pomodoroIntervals: POMODORO_INTERVALS,
    timer: POMODORO_INTERVALS[0].time
  },

  actions: {
    startTimer (interval) {
      return 25
    }
  }
})
