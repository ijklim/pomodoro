<template>
  <div class="hello">
    <timer></timer>
    <!-- <ul class='list-unstyled'>
      <li v-for='(interval, index) in pomodoroIntervals' :key='index'>
        #{{ index+1 }} Start {{ interval.name }}
      </li>
    </ul> -->
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
