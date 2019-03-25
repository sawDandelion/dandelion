<template>
    <div>
        <div>
            state: {{a}}
        </div>
        <div>
            state: {{b}}
        </div>
        <div>
            getters: {{aM}}
        </div>
        <div @click="setMutations">
            setMutations
        </div>
        <div @click="asyncSetMutations">
            asyncSetMutations
        </div>
    </div>
</template>

<script>

import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'

export default {
    name: 'Foo',

    created () {
        console.log(this.$store)
    },

    computed: {
        ...mapState({
            a: state => state.module1.a,
            b: state => state.module1.b
        }),
        ...mapGetters({
            aM: 'module1/aM'
        })
    },

    methods: {
        ...mapMutations({
            add: 'module1/add'
        }),
        ...mapActions('module1', ['syncAdd']),
        setMutations () {
            this.add();
        },
        asyncSetMutations () {
            this.syncAdd();
        }
    }
}
</script>
