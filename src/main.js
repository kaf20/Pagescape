import Vue from 'vue'
import VueRouter from "vue-router";
import Privacy from "./components/Privacy";
import App from "./App";

Vue.config.productionTip = false;
Vue.use(VueRouter);
const routes = [
    { path: '/', component: App },
    { path: '/privacy', component: Privacy },
];

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes
});

new Vue({
    router,
    template: `<router-view class="view"></router-view>`
}).$mount('#app');
