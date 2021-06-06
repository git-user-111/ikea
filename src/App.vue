<template>
    <div>
        <header-component></header-component>
        <router-view></router-view>
    </div>
</template>

<script>
import HeaderComponent from './components/header/header.component.vue'
export default {
    components: {
        HeaderComponent
    },
    data() {
        return {
            moduleName: "IKEA",
        };
    },
};
</script>