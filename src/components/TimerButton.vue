<template>
  <div class='col-12 col-sm-10 mx-auto'>
    <button
      @click='click'
      class='btn btn-lg btn-block mt-3'
      v-html='buttonText()'
      v-bind:class="{
        'btn-success': this.$store && !this.$store.getters.isTimerOn && !this.$store.getters.isIntervalCompleted,
        'btn-light': this.$store && !this.$store.getters.isTimerOn && this.$store.getters.isIntervalCompleted,
        'btn-warning': this.$store && this.$store.getters.isTimerOn
      }"
      :disabled='this.$store && !this.$store.getters.isTimerOn && this.$store.getters.isIntervalCompleted'
    ></button>
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
      let svg = false

      const SVG_PLAY = '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" ' +
                       'stroke-linecap="round" stroke-linejoin="round"> ' +
                       '<polygon points="5 3 19 12 5 21 5 3"></polygon> ' +
                       '</svg>'
      const SVG_PAUSE = '<svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="2" ' +
                        'stroke-linecap="round" stroke-linejoin="round"> ' +
                        '<rect x="6" y="4" width="4" height="16"></rect> ' +
                        '<rect x="14" y="4" width="4" height="16"></rect> ' +
                        '</svg>'
      // const SVG_CHECK_CIRCLE = '<svg width="16" height="16" viewBox="0 0 23 23" fill="none" stroke="currentColor" stroke-width="2" ' +
      //                          'stroke-linecap="round" stroke-linejoin="round"> ' +
      //                          '<path d="M22 11.07V12a10 10 0 1 1-5.93-9.14"></path> ' +
      //                          '<polyline points="23 3 12 14 9 11"></polyline> ' +
      //                          '</svg>'
      const SVG_CHECK_SQUARE = '<svg width="17" height="17" viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="2" ' +
                               'stroke-linecap="round" stroke-linejoin="round"> ' +
                               '<polyline points="9 11 12 14 23 3"></polyline> ' +
                               '<path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path> ' +
                               '</svg>'

      if (store) {
        if (store.getters.isIntervalCompleted) {
          text = `${intervalName} is completed`
          svg = SVG_CHECK_SQUARE
        } else if (store.getters.isTimerOn) {
          text = `Pause ${intervalName}`
          svg = SVG_PAUSE
        } else if (store.state.timer < pomodoroIntervals[currentIntervalIndex].time) {
          text = `Resume ${intervalName}`
          svg = SVG_PLAY
        } else {
          text = `Start ${intervalName}`
          svg = SVG_PLAY
        }
        if (svg) {
          text = `${svg} &nbsp;${text}`
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