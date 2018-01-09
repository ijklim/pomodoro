<template>
  <div id='app' class='container-fluid'>
    <header class='row'>
      <h1 class='col-6 pt-2'>Pomodoro<span class='d-none d-md-inline'> Timer</span></h1>
      <control-panel></control-panel>
    </header>
    <toggle-alert></toggle-alert>
    <router-view></router-view>
    <!-- <debug-window></debug-window> -->
    <footer>
      Proudly brought to you by <a href="http://aiwebstudio.com" target="_blank">Active Improvement Web Studio</a>
    </footer>
  </div>
</template>

<script>
import ControlPanel from './components/ControlPanel'
import ToggleAlert from './components/ToggleAlert'
import DebugWindow from './components/DebugWindow'

export default {
  name: 'app',
  components: {
    DebugWindow,
    ControlPanel,
    ToggleAlert
  },

  computed: {
    isAutostartOn () {
      return this.$store ? this.$store.getters.isAutostartOn : false
    },
    soundIsOn () {
      return this.$store ? this.$store.state.soundIsOn : false
    }
  },
  watch: {
    isAutostartOn: function (data) {
      this.setURL()
    },
    soundIsOn: function (data) {
      this.setURL()
    }
  },

  methods: {
    setURL: function () {
      // Ref: https://router.vuejs.org/en/essentials/navigation.html
      this.$router.push({
        path: '/',
        query: {
          autonext: this.isAutostartOn ? 'on' : 'off',
          autostart: this.$route.query.autostart === 'on' ? 'on' : 'off',
          sound: this.soundIsOn ? 'on' : 'off'
        }
      })
    }
  },

  beforeMount () {
    // Change only if different from default, check defaults in /store/index.js
    if (this.$route.query.sound === 'off') {
      this.$store.commit('toggleSound')
    }
    if (this.$route.query.autonext === 'on') {
      this.$store.commit('toggleAutostart')
    }
    if (this.$route.query.autostart === 'on') {
      this.$store.commit('toggleTimer')
    }
  },
  mounted () {
    // Should be turn off for productions
    // this.$store.commit('turnOnTestingParameters')

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

:root {
  --color-background: #111;
  --color-background-light: #222;
  --color-background-lightest: #282828;
}

html {
  height: 100%;
}

body {
  background-repeat: repeat;
  color: white;
  background-color: var(--color-background);
  background: linear-gradient(
    to bottom,
    var(--color-background) 0%,
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

footer {
  position: fixed;
  width: 100%;
  text-align: center;
  bottom: 3px;
}

a:hover {
  text-decoration: none;
}
</style>
