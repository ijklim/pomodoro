<template>
  <div class="hello">
    <h1>Pomodoro Timer</h1>
    <timer></timer>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Timer from './Timer'

export default {
  name: 'hello',
  components: {
    Timer
  },
  data () {
    return {
    }
  },
  computed: mapState({
    timer: state => state.timer,
    pomodoroIntervals: state => state.pomodoroIntervals
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
