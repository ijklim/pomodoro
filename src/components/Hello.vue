<template>
  <div class="hello row align-items-center">
    <timer></timer>
  </div>
</template>

<script>
// import { mapState } from 'vuex'
import Timer from './Timer'

export default {
  name: 'hello',
  components: {
    Timer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  min-height: 90vh;
}
</style>
