<template>
  <div>
    <button
      @click='click'
      class='btn btn-lg btn-block mt-3'
      v-bind:class="{
        'btn-success': this.$store && !this.$store.getters.isTimerOn && !this.$store.getters.isIntervalCompleted,
        'btn-light': this.$store && !this.$store.getters.isTimerOn && this.$store.getters.isIntervalCompleted,
        'btn-warning': this.$store && this.$store.getters.isTimerOn
      }"
    >{{ buttonText() }}</button>
  </div>
</template>

<script>
export default {
  // PascalCase, e.g. ThisIsAnExample
  name: 'TimerButton',

  // variables
  data () {
    return {
    }
  },
  methods: {
    buttonText (store = this.$store) {
      // Note: converted from computed to methods to allow store to be injected for unit testing purpose
      let text = '...'
      let currentIntervalIndex = store ? store.state.currentIntervalIndex : 0
      let pomodoroIntervals = store ? store.state.pomodoroIntervals : []
      let intervalName = store ? pomodoroIntervals[currentIntervalIndex].name : []
      if (store) {
        if (store.getters.isIntervalCompleted) {
          text = `${intervalName} is completed`
        } else if (store.getters.isTimerOn) {
          text = `Pause ${intervalName}`
        } else if (store.state.timer < pomodoroIntervals[currentIntervalIndex].time) {
          text = `Resume ${intervalName}`
        } else {
          text = `Start ${intervalName}`
        }
      }
      return text
    },
    click () {
      this.$store.commit('toggleTimer')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>