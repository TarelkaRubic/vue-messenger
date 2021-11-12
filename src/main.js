import Vue from 'vue'
import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

createApp(App).use(store).mount('#app')

new Vue({
    render: h => h(App),
  }).$mount('#app')

  new Vue({
    el: 'v-for-object',
    data () {
        return{
            object: {
        title: 'How to do lists in Vue',
        author: 'Jane Doe',
        publishedAt: '2016-04-10'
      }
    }
  }
})

 