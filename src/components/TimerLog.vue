<template>
  <div>
    <b-modal
      title='Log'
      v-model='showLog'
      :hide-footer=true
      :header-bg-variant='headerBgVariant'
      :header-text-variant='headerTextVariant'
      :body-text-variant='bodyTextVariant'
      :busy=true
    >
      <table class='table table-bordered table-sm'>
        <thead class='thead-dark'>
          <tr>
            <th>Interval</th>
            <th>Start Time</th>
            <th>End Time</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for='(logItem, index) in log' :key='index' :class='{ "table-success": logItem.name === "Pomodoro" }'>
            <td>{{ logItem.name }}</td>
            <td>{{ isNaN(logItem.startTime) ? logItem.startTime : '...' }}</td>
            <td>{{ isNaN(logItem.endTime) ? logItem.endTime : '...' }}</td>
          </tr>
        </tbody>
      </table>
    </b-modal>
  </div>
</template>

<script>
// Ref: https://bootstrap-vue.js.org/docs/components/modal
import bModal from 'bootstrap-vue/es/components/modal/modal'

export default {
  name: 'TimerLog',
  components: {
    bModal
  },

  // variables
  data () {
    return {
      log: [],
      modelShow: false,
      headerBgVariant: 'light',
      headerTextVariant: 'dark',
      bodyTextVariant: 'dark'
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
      this.log[0].endTime = (new Date()).toLocaleTimeString()

      // New log entry at the FRONT of the array
      this.addToLog(data)
    },
    isTimerOn: function (data) {
      if (data === true && this.log[0].startTime === 0) {
        // Timer is on and start time has not been set
        // Scenario #1: When app first started
        // Scenario #2: Autostart Next Interval is off, user clicks on Start
        this.log[0].startTime = (new Date()).toLocaleTimeString()
      }
    }
  },
  methods: {
    addToLog: function (intervalIndex) {
      if (this.$store) {
        // Note: New log entry is added to the FRONT of the array
        this.log.unshift(
          Object.assign(
            {
              startTime: this.isTimerOn ? (new Date()).toLocaleTimeString() : 0,
              endTime: 0
            },
            this.$store.state.pomodoroIntervals[intervalIndex]
          )
        )
      }
    }
  },
  mounted () {
    this.addToLog(0)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>