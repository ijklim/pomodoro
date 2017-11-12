<template>
  <div>
    <b-modal id="modal1" title="Bootstrap-Vue" v-model="showLog">
      <p class="my-4">Hello from modal!</p>
    </b-modal>
  </div>
</template>

<script>
// import BootstrapVue from 'bootstrap-vue'
import bButton from 'bootstrap-vue/es/components/button/button'
import bModal from 'bootstrap-vue/es/components/modal/modal'

export default {
  // PascalCase, e.g. ThisIsAnExample
  name: 'TimerLog',
  components: {
    bButton,
    bModal
  },

  // variables
  data () {
    return {
      log: [],
      modelShow: false
    }
  },
  computed: {
    currentIntervalIndex () {
      return this.$store ? this.$store.state.currentIntervalIndex : 0
    },
    isTimerOn () {
      return this.$store ? this.$store.getters.isTimerOn : false
    },
    showLog: {
      // getter
      get: function () {
        return this.$store ? this.$store.state.showLog : false
      },
      // setter
      set: function (value) {
        this.$store.state.showLog = value
      }
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