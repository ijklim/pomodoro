import Vue from 'vue'
import Vuex from 'vuex'

import * as getters from './getters'
import * as mutations from './mutations'

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

const state = {
  autostartNextInterval: false,
  currentIntervalIndex: 0,
  playSound: false,
  pomodoroIntervals: POMODORO_INTERVALS,
  showTimer: true,
  timer: POMODORO_INTERVALS[0].time,
  timerIsOn: false
}

export default new Vuex.Store({
  state,
  getters,
  mutations
})
