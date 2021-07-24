import Vue from "vue";
import Router from "vue-router";
import MainPageComponent from "./components/main-page/main-page.component.vue";
import SearchResultComponent from "./components/search-result/search-result.component.vue";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            component: MainPageComponent
        },
        {
            path: "/cart",
            component: MainPageComponent
        },
        {
            path: "/search-result",
            component: SearchResultComponent
        }
    ]
});
