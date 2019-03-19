<<<<<<< HEAD
import 'babel-polyfill'

=======
>>>>>>> 56b332499089f18de5e0414b143486f14ba9ad99
import Vue from 'vue'
import App from './app'

import router from './router'

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
