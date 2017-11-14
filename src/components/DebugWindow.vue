<template>
  <div class='debug-window' v-if='!hide'>
    <button @click='hide = true'>&times;</button>
    IMPORTANT: This is suitable for development purpose only<br>
    <span v-for='(property, index) in properties' :key='index' v-html='displayProperty(property.id, property.value)'>
    </span>
  </div>
</template>

<script>
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
      this.addToProperties('[body] scrollHeight', document.body.scrollHeight)
      this.addToProperties('[window] innerHeight', window.innerHeight)
      this.addToProperties('break')
      this.addToProperties('[body] clientWidth', document.body.clientWidth)
      this.addToProperties('[body] scrollWidth', document.body.scrollWidth)
      this.addToProperties('[window] innerWidth', window.innerWidth)
      console.table(this.properties)
    }
  },

  // component Lifecycle hooks
  beforeCreate () {},
  mounted () {
    this.hide = !this.show
    this.setData()
    window.addEventListener('resize', () => {
      this.setData()
    })
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