<template>
  <div class='col-2 align-self-center text-right'>
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
    clickSound () {
      this.$store.commit('toggleSound')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>