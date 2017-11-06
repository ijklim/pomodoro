import Vue from 'vue'
// import Vuex from 'vuex'
// import store from '@/store'
import Hello from '@/components/Hello'

describe('Hello.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Hello)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Pomodoro Timer')
  })
})
