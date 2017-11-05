<template>
  <div id="app" class='container'>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',

  mounted () {
    this.intervalName = setInterval(() => {
      this.$store.commit('updateTimer')
    }, 1000)
  }
}
</script>

<style>
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
}

button:hover {
  cursor: pointer;
}
</style>
