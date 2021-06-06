import Vue from "vue";
import Router from "vue-router";
import MainPageComponent from "./components/main-page/main-page.component.vue";
import ProductSearchComponent from "./components/product-search/product-search.component.vue";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            component: MainPageComponent
        },
        {
            path: "/product-search",
            component: ProductSearchComponent
        }
    ]
});
