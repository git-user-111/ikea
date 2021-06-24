<template>
  <div class="main-page">
    <input v-model="message" placeholder="Поиск по товару или артикулу">
    <router-link :to="`/product-search?q=${message}`">Найти</router-link>
  </div>
</template>

<script>
export default {
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