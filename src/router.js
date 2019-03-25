import Vue from 'vue'
import VueRouter from 'vue-router'
import ChildrenComponent from './children-component'

import VerticalAlign from './mod/vertical-align'
import Canvas from './mod/canvas'
import Vuex from './mod/vuex'

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
    },
    {
        path: '/vertical',
        component: VerticalAlign
    },
    {
        path: '/canvas',
        component: Canvas
    },
    {
        path: '/vuex',
        component: Vuex
    }
]

export default new VueRouter({
    routes
})
