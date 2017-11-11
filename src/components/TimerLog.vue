<template>
  <div>
    
  </div>
</template>

<script>
export default {
  // PascalCase, e.g. ThisIsAnExample
  name: 'TimerLog',

  // variables
  data () {
    return {
      log: []
    }
  },
  computed: {
    currentIntervalIndex () {
      return this.$store ? this.$store.state.currentIntervalIndex : 0
    },
    isTimerOn () {
      return this.$store ? this.$store.getters.isTimerOn : false
    }
  },
  watch: {
    currentIntervalIndex: function (data) {
      // Set end time
      let previousIntervalIndex = this.log.length - 1
      this.log[previousIntervalIndex].endTime = (new Date()).toLocaleTimeString()

      // New log entry
      this.log.push(
        Object.assign(
          {
            startTime: (new Date()).toLocaleTimeString(),
            endTime: 0
          },
          this.$store.state.pomodoroIntervals[data]
        )
      )
    },
    isTimerOn: function (data) {
      // Probably needed only for the first start time
      if (data === true && this.log[this.log.length - 1].startTime === 0) {
        this.log[this.log.length - 1].startTime = (new Date()).toLocaleTimeString()
      }
    }
  },
  mounted () {
    if (this.$store) {
      this.log.push(
        Object.assign(
          {
            startTime: this.$store.getters.timerIsOn ? new Date() : 0,
            endTime: 0
          },
          this.$store.state.pomodoroIntervals[0]
        )
      )
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>