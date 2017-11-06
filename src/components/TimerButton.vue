<template>
  <div>
    <button
      @click='click'
      class='btn btn-lg btn-block mt-3'
      v-bind:class="{
        'btn-success': this.$store && !this.$store.getters.isTimerOn,
        'btn-warning': this.$store && this.$store.getters.isTimerOn
      }"
    >{{ buttonText }}</button>
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
  computed: {
    buttonText () {
      if (this.$store && this.$store.getters.isTimerOn) {
        return 'Pause'
      } else {
        return 'Start Now'
      }
    }
  },

  methods: {
    click () {
      this.$store.commit('toggleTimer')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>