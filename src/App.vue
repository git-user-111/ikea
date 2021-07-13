<template>
    <div>
        <nav-component></nav-component>
        <shopping-cart-component></shopping-cart-component>
        <router-view v-if="$route.path !== '/cart'"></router-view>
    </div>
</template>

<script>
import NavComponent from './components/nav/nav.component.vue'
import ShoppingCartComponent from './components/shopping-cart/shopping-cart.component.vue'
export default {
    components: {
        NavComponent,
        ShoppingCartComponent
    },
    data() {
        return {
            moduleName: "IKEA",
        };
    },
};
</script>