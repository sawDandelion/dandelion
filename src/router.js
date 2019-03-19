import Vue from 'vue'
import VueRouter from 'vue-router'
import ChildrenComponent from './children-component'
<<<<<<< HEAD
import VerticalAlign from './mod/vertical-align.vue'
=======
>>>>>>> 56b332499089f18de5e0414b143486f14ba9ad99
import Foo from './mod/foo'
import About from './mod/about'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: ChildrenComponent,
        children: [
            {
                path: '/foo',
                component: Foo
            },
            {
                path: '/about',
                component: About
            }
        ]
<<<<<<< HEAD
    },
    {
        path: '/vertical',
        component: VerticalAlign
=======
>>>>>>> 56b332499089f18de5e0414b143486f14ba9ad99
    }
]

export default new VueRouter({
    routes
})
