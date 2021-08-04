<template>
  <div class="main-page">
    <div id="header">
      <header-component></header-component>
    </div>
    <div id="search">
      <search-component></search-component>
    </div>
    <div id="price">
      <price-component></price-component>
    </div>
    <div id="payment-and-delivery">
      <payment-and-delivery-component></payment-and-delivery-component>
    </div>
  </div>
</template>

<script>
import HeaderComponent from '../header/header.component.vue';
import SearchComponent from '../search/search.component.vue';
import PriceComponent from '../price/price.component.vue';
import PaymentAndDeliveryComponent from '../payment-and-delivery/payment-and-delivery.component.vue';
export default {
  components: {
    HeaderComponent,
    SearchComponent,
    PriceComponent,
    PaymentAndDeliveryComponent
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