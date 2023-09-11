import Vue from 'vue'
import VueRouter from 'vue-router'
import List from './components/List.vue'
import AddMessage from './components/AddMessage.vue'
import Detail from './components/Detail.vue'
import Login from './components/Login.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/Message/List',
        name: 'MessageList',
        component: List,
    },
    {
        path: '/Message/Detail',
        name: 'MessageDetail',
        component: Detail,
    },
    {
        path: '/Message/AddMessage',
        name: 'AddMessage',
        component: AddMessage,
    },
    {
        path: '/Member/Login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/',
        name: 'Index',
        component: Father,
    },
]

const router = new VueRouter({
    routes,
    mode: 'history', 
})

export default router