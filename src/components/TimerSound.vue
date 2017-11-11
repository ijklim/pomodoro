<template>
  <div>
    <audio id='timer-sound'>
      <source src="../assets/audios/3beeps.wav" type="audio/wav">
      Your browser does not support the audio element.
    </audio>
  </div>
</template>

<script>
export default {
  // PascalCase, e.g. ThisIsAnExample
  name: 'TimerSound',

  // variables
  data () {
    return {
    }
  },
  computed: {
    playSound () {
      return this.$store ? this.$store.state.playSound : false
    },
    soundIsOn () {
      return this.$store ? this.$store.state.soundIsOn : false
    }
  },
  watch: {
    playSound: function (data) {
      if (data === true) {
        this.$store.commit('soundHasBeenPlayed')
        if (this.$store.state.soundIsOn) document.getElementById('timer-sound').play()
      }
    },
    soundIsOn: function (data) {
      if (data === false) {
        // Stop sound that could potential be playing
        this.$store.commit('soundHasBeenPlayed')
        document.getElementById('timer-sound').pause()
        document.getElementById('timer-sound').currentTime = 0
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>