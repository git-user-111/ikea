<template>
  <div class="main-page">
    <header-component></header-component>
    <search-component></search-component>
    <price-component></price-component>
  </div>
</template>

<script>
import HeaderComponent from '../header/header.component.vue';
import SearchComponent from '../search/search.component.vue';
import PriceComponent from '../price/price.component.vue';
export default {
  components: {
    HeaderComponent,
    SearchComponent,
    PriceComponent
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