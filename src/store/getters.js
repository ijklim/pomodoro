export const isAutostartOn = state => {
  return state.autostartNextInterval
}

export const isTimerOn = state => {
  return state.timerIsOn
}

export const isIntervalCompleted = state => {
  return (state.timer === 0)
}
