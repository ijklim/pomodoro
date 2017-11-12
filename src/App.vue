<template>
  <div id="app" class='container-fluid'>
    <header class='row header'>
      <h1 class='col-6 pt-2'>Pomodoro<span class='d-none d-sm-inline'> Timer</span></h1>
      <control-panel></control-panel>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
import ControlPanel from './components/ControlPanel'

export default {
  name: 'app',
  components: {
    ControlPanel
  },

  mounted () {
    // Should be turn off for productions
    this.$store.commit('turnOnTestingParameters')

    this.intervalName = setInterval(() => {
      if (this.$store.getters.isTimerOn) this.$store.commit('updateTimer')
      if (this.$store.getters.isTimerOn && this.$store.getters.isIntervalCompleted) {
        this.$store.commit('initiateNextInterval')
      }
      // this.$store.state.playSound = !this.$store.state.playSound // Testing only
    }, 1000)
  }
}
</script>

<style>
@import 'https://fonts.googleapis.com/css?family=Contrail+One';
@import './assets/css/bootstrap-switch.css';

:root {
  --color-background: #111;
  --color-background-light: #222;
  --color-background-lightest: #282828;
}

html {
  height: 100%;
}

body {
  color: white;
  background-color: var(--color-background);
  background: linear-gradient(
    to bottom,
    var(--color-background-light) 0%,
    var(--color-background-lightest) 18%,
    var(--color-background-lightest) 50%,
    var(--color-background-light) 78%,
    var(--color-background) 100%
  );
  font-family: 'Contrail One';
  text-rendering: optimizeLegibility;
}

button:hover {
  cursor: pointer;
}

header {
  background-color: black;
}
</style>
