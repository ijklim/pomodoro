export const toggleTimer = state => {
  state.timerIsOn = !state.timerIsOn
}

export const updateTimer = state => {
  if (state.timerIsOn && state.timer > 0) state.timer--
}
