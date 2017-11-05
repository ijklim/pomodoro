<template>
  <div class='row align-items-center justify-content-center'>
    <div class="timer text-center col-12">
      {{ displayTimer }}
      <timer-button></timer-button>
    </div>
  </div>
</template>

<script>
import TimerButton from './TimerButton'

export default {
  // PascalCase, e.g. ThisIsAnExample
  name: 'Timer',
  components: {
    TimerButton
  },

  // variables
  data () {
    return {
      intervalName: ''
    }
  },
  computed: {
    displayTimer () {
      let minutes = Math.floor(this.$store.state.timer / 60)
      let seconds = this.$store.state.timer - minutes * 60
      // Pad 0
      minutes = ('0' + minutes).slice(-2)
      seconds = ('0' + seconds).slice(-2)

      return minutes + ':' + seconds
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .row {
    height: 90vh;
  }

  .timer {
    font-size: 10rem;
    text-shadow: 0.5rem 0.5rem 0 #000;
  }
</style>