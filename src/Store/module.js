
const store = {
    namespaced: true,

    state: {
        a: 1,
        b: 2
    },

    getters: {
        aM: state => {
            return ++state.a
        }
    },

    mutations: {
        add (state, payload = 1) {
            state.b += payload
        }
    },

    actions: {
        async syncAdd ({commit, dispatch}) {
            commit('add', await dispatch('getNum'))
        },

        getNum () {
            return new Promise((resolve, reject) => {
                setTimeout (() => {
                    resolve(4)
                }, 1000)
            })
        }
    }
}

export default store
