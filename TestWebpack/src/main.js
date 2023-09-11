import Vue from 'vue'
import App from './App.vue'
import List from './components/List.vue'
import AddMessage from './components/AddMessage.vue'
import Detail from './components/Detail.vue'
import Login from './components/Login.vue'
import router from './Route'
import store from './Store'

Vue.component('list-a', List);
Vue.component('addMessage', AddMessage);
Vue.component('detail', Detail);
Vue.component('login', Login);
const app = new Vue({
    router,
    store,
    render: h => h(App)
});
app.$mount('#app');



