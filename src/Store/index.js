import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import module1 from './module'

const store = new Vuex.Store({
    modules: {
        module1
    }
})

export default store
