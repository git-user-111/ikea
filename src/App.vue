<template>
    <div>
        <nav-component></nav-component>
        <shopping-cart-component></shopping-cart-component>
        <router-view v-if="$route.path !== '/cart'"></router-view>
        <footer-component></footer-component>
    </div>
</template>

<script>
import NavComponent from './components/nav/nav.component.vue'
import ShoppingCartComponent from './components/shopping-cart/shopping-cart.component.vue'
import FooterComponent from './components/footer/footer.component.vue'
export default {
    components: {
        NavComponent,
        ShoppingCartComponent,
        FooterComponent
    },
    data() {
        return {
            moduleName: "IKEA",
        };
    },
};
</script>

<style lang="scss">
@import "./assets/mixins.scss";
body {
    margin: 0;
}
.wrapper {
    @include wrapper;
    margin: 0 auto;
}
</style>