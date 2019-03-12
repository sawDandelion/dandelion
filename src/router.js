import Vue from 'vue'
import VueRouter from 'vue-router'
import ChildrenComponent from './children-component'
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
    }
]

export default new VueRouter({
    routes
})
