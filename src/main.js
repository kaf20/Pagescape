import Vue from "vue";
import VueRouter from "vue-router";
import VueMaterial from "vue-material";
import Privacy from "./pages/Privacy";
import App from "./App";
import "vue-material/dist/vue-material.min.css";
import 'vue-material/dist/theme/default.css';
import UrlShortener from "./pages/UrlShortener";

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueMaterial);

const routes = [{
    path: "/",
    component: App,
    redirect: "/url-shortener",
    children: [
        { path: "/privacy", component: Privacy },
        { path: "/url-shortener", component: UrlShortener },
    ]}
];

const router = new VueRouter({
    mode: "history",
    base: __dirname,
    routes
});

new Vue({
    router,
    template: `<router-view class="view"></router-view>`
}).$mount("#app");
