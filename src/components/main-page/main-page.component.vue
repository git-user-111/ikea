<template>
  <div class="main-page">
    <header-component></header-component>
    <div class="search">
      <input v-model="message" placeholder="Поиск по товару или артикулу">
      <router-link :to="`/product-search?q=${message}`">Найти</router-link>
    </div>
  </div>
</template>

<script>
import HeaderComponent from '../header/header.component.vue';
export default {
  components: {
    HeaderComponent
  },
  data: function() {
    return {
      message: "",
    }
  },
}
</script>

<style lang="sass">
@import "../../assets/variables.scss";
</style>