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
    }
  },
  watch: {
    playSound: function (data) {
      // if (this.$store ? this.$store.state.playSound : false)
      if (data === true) {
        this.$store.commit('soundHasBeenPlayed')
        document.getElementById('timer-sound').play()
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>