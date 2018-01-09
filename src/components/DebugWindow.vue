<template>
  <div class='debug-window' v-if='!hide'>
    <button @click='hide = true'>&times;</button>
    IMPORTANT: This is suitable for development purpose only<br>
    <span
      v-for='(property, index) in properties'
      :key='index'
      v-html='displayProperty(property.id, property.value)'
    >
    </span>
  </div>
</template>

<script>
/**
 * Debug information for the DOM
 *
 * @param  {Boolean} show
 */
export default {
  // PascalCase, e.g. ThisIsAnExample
  name: 'DebugWindow',

  // component properties/variables
  props: {
    show: {
      type: Boolean,
      default: true
    }
  },

  // variables
  data () {
    return {
      hide: false,
      properties: []
    }
  },

  // component Lifecycle hooks
  mounted () {
    this.hide = !this.show
    this.setData()
    window.addEventListener('resize', () => {
      this.setData()
    })
    window.addEventListener('scroll', () => {
      this.setData()
    })
  },

  // methods
  methods: {
    addToProperties (id, value = '') {
      this.properties.push({ id, value })
    },
    displayProperty (id, value) {
      if (id === 'break') {
        return '<br>'
      } else {
        return `• ${id}: ${value} &nbsp; &nbsp;`
      }
    },
    setData () {
      this.properties = []
      this.addToProperties('[body] clientHeight', document.body.clientHeight)
      this.addToProperties('[documentElement] documentElement.clientHeight', document.documentElement.clientHeight)
      this.addToProperties('[body] scrollHeight', document.body.scrollHeight)
      this.addToProperties('[documentElement] scrollHeight', document.documentElement.scrollHeight)
      this.addToProperties('[window] innerHeight', window.innerHeight)
      this.addToProperties('[window] scrollY', window.scrollY)
      this.addToProperties('break')
      this.addToProperties('[body] clientWidth', document.body.clientWidth)
      this.addToProperties('[documentElement] documentElement.clientWidth', document.documentElement.clientWidth)
      this.addToProperties('[body] scrollWidth', document.body.scrollWidth)
      this.addToProperties('[documentElement] scrollWidth', document.documentElement.scrollWidth)
      this.addToProperties('[window] innerWidth', window.innerWidth)
      // console.table(this.properties)
    }
  }
}
</script>

<style scoped>
.debug-window {  
  background-color: #333;
  color: #eee;
  position: fixed;
  bottom: 10px;
  left: 10px;
  padding: 5px;
}

button {
  float: right;
  padding: 3px;
  font-size: 15px;
  line-height: 1em;
  background: red;
  color: white;
  border: none;
  margin: -5px;
}
</style>