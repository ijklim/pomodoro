<template>
  <div class='col-4 align-self-center text-right pr-0'>
    <button class='btn btn-link' @click='clickAutostart' v-html='autostartIcon' title='Toggle autostart next interval'></button>
    <button class='btn btn-link' @click='clickSound' v-html='soundIcon' title='Toggle sound'></button>
  </div>
</template>

<script>
export default {
  // PascalCase, e.g. ThisIsAnExample
  name: 'ControlPanel',

  // variables
  data () {
    return {
    }
  },
  computed: {
    autostartIcon () {
      const SVG_AUTOSTART = '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" ' +
                            'stroke-linecap="round" stroke-linejoin="round"> ' +
                            '<polyline points="23 4 23 10 17 10"></polyline> ' +
                            '<polyline points="1 20 1 14 7 14"></polyline> ' +
                            '<path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path> ' +
                            '</svg>'
      const SVG_MANUALSTART = '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" ' +
                            'stroke-linecap="round" stroke-linejoin="round"> ' +
                            '<line x1="1" y1="1" x2="23" y2="23" class=""></line> ' +
                            '<polyline points="23 4 23 10 17 10"></polyline> ' +
                            '<polyline points="1 20 1 14 7 14"></polyline> ' +
                            '<path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path> ' +
                            '</svg>'
      return (this.$store && this.$store.state.autostartNextInterval) ? SVG_AUTOSTART : SVG_MANUALSTART
    },
    soundIcon () {
      const SVG_MUTE = '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2" ' +
                       'stroke-linecap="round" stroke-linejoin="round"> ' +
                       '<path d="M20 16 C20 8 15 2 15 2 L8 10 2 10 2 22 8 22 15 30 C15 30 20 24 20 16 Z" /> ' +
                       '</svg>'
      const SVG_SOUND = '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2" ' +
                        'stroke-linecap="round" stroke-linejoin="round"> ' +
                        '<path d="M20 16 C20 8 15 2 15 2 L8 10 2 10 2 22 8 22 15 30 C15 30 20 24 20 16 Z M21 2 C21 2 25 6 25 16 25 26 21 30 21 30 M27 4 C27 4 30 8 30 16 30 24 27 28 27 28" /> ' +
                        '</svg>'
      return (this.$store && this.$store.state.soundIsOn) ? SVG_SOUND : SVG_MUTE
    }
  },
  methods: {
    clickAutostart () {
      this.$store.commit('toggleAutostart')
    },
    clickSound () {
      this.$store.commit('toggleSound')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn {
  color: orange;
}

.btn:hover {
  color: #FED8B1;
}
</style>