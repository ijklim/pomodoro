<template>
  <div class='col-12'>
    <div class='timer text-center'>
      <div @click='click' v-bind:class="{
        'invisible': this.$store && !this.$store.state.showTimer,
        'text-break': this.isOnBreak
        }"
      >
        {{ displayTimer }}
      </div>
      <timer-button></timer-button>
    </div>
    <timer-sound></timer-sound>
    <timer-log></timer-log>
  </div>
</template>

<script>
import TimerButton from './TimerButton'
import TimerLog from './TimerLog'
import TimerSound from './TimerSound'

export default {
  // PascalCase, e.g. ThisIsAnExample
  name: 'Timer',
  components: {
    TimerButton,
    TimerLog,
    TimerSound
  },

  // variables
  data () {
    return {
      intervalName: ''
    }
  },
  computed: {
    displayTimer () {
      // Without testing this.$store an error will be generated during unit test
      if (this.$store) {
        let minutes = Math.floor(this.$store.state.timer / 60)
        let seconds = this.$store.state.timer - minutes * 60
        // Pad 0
        minutes = ('0' + minutes).slice(-2)
        seconds = ('0' + seconds).slice(-2)

        return minutes + ':' + seconds
      }
    },
    isOnBreak () {
      if (this.$store) {
        return !(this.$store.state.pomodoroIntervals[this.$store.state.currentIntervalIndex].name === 'Pomodoro')
      } else {
        return false
      }
    }
  },
  methods: {
    click () {
      this.$store.commit('toggleTimer')
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /* To allow font to look decent for all screen sizes, Chrome font quality slightly worse than other 2 browsers */
  .timer {
    font-size: 21.3rem;
    text-shadow: 0.5rem 1.0rem 0 #000;
  }

  /* Landscape or portrait screen up to 1024px */
  @media screen and (max-width: 1024px) {
    .timer {
      font-size: 32vw;
    }
  }

  /* Most likely mobile landscape mode */
  @media screen and (max-height: 700px) and (min-width: 700px) {
    .timer {
      font-size: 42vh;
    }
  }

  .timer:hover {
    cursor: pointer;
  }

  .text-break {
    color: #aaa;
  }
</style>