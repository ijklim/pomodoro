<template>
  <div class='row'>
    <b-modal
      title='Sound is ON'
      v-model='showAlert'
      :hide-footer=true
      :hide-header=true
      :body-text-variant='bodyTextVariant'
      size='sm'
      class='text-center'
    >
      {{ alertMessage }}
    </b-modal>
  </div>
</template>

<script>
// Ref: https://bootstrap-vue.js.org/docs/components/alert
// import bAlert from 'bootstrap-vue/es/components/alert/alert'
import bModal from 'bootstrap-vue/es/components/modal/modal'

export default {
  name: 'ToggleAlert',
  components: {
    bModal
  },

  // variables
  data () {
    return {
      alertMessage: 'Autostart Next Interval is OFF',
      showAlert: false,
      bodyTextVariant: 'dark'
    }
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
      this.alertMessage = 'Autostart Next Interval is ' +
                          (this.isAutostartOn ? 'ON' : 'OFF')
      this.showAlert = true
    },
    soundIsOn: function (data) {
      this.alertMessage = 'Sound is ' +
                          (this.soundIsOn ? 'ON' : 'OFF')
      this.showAlert = true
    },
    showAlert: function (data) {
      if (data === true) {
        // Autoclose alert
        setTimeout(() => {
          this.showAlert = false
        }, 1000)
      }
    }
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>