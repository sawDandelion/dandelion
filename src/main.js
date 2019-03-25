import 'babel-polyfill'

import Vue from 'vue'
import App from './app'
import store from './Store/index'

import router from './router'

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')
