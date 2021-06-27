<template>
    <div>
        <nav-component></nav-component>
        <router-view></router-view>
    </div>
</template>

<script>
import NavComponent from './components/nav/nav.component.vue'
export default {
    components: {
        NavComponent
    },
    data() {
        return {
            moduleName: "IKEA",
        };
    },
};
</script>