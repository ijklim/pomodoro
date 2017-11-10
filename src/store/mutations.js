export const toggleTimer = state => {
  state.timerIsOn = !state.timerIsOn
}

export const updateTimer = state => {
  if (state.timer > 0) state.timer--
}

// Previous interval is over, play sound, flash counter, and set timer to next interval
export const initiateNextInterval = state => {
  if (state.timerIsOn) {
    // Prevent repeat executions
    state.timerIsOn = false

    // Blink counter
    let blinkTimer = setInterval(() => {
      state.showTimer = !state.showTimer
    }, 350)

    // Play sound
    state.playSound = true

    // Initialize next interval settings after a short timeout
    setTimeout(() => {
      // Stop timer from blinking
      clearInterval(blinkTimer)
      state.showTimer = true

      // Increment current interval index, loop if necessary
      state.currentIntervalIndex = ++state.currentIntervalIndex % state.pomodoroIntervals.length
      // Reset timer
      state.timer = state.pomodoroIntervals[state.currentIntervalIndex].time
      // If autostart is on, turn on timer
      if (state.autostartNextInterval) state.timerIsOn = true
    }, 3000)
  }
}

export const soundHasBeenPlayed = state => {
  state.playSound = false
}

export const turnOnTestingParameters = state => {
  state.pomodoroIntervals = state.pomodoroIntervals.map(interval => {
    interval.time = 10
    return interval
  })
  state.timer = state.pomodoroIntervals[0].time
  state.autostartNextInterval = true
}
