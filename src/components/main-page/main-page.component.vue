<template>
  <div class="main-page">
    <div id="header">
      <header-component></header-component>
    </div>
    <div id="search">
      <search-component></search-component>
    </div>
    <div id="price" class="main-page_section">
      <price-component></price-component>
    </div>
    <div id="payment-and-delivery" class="main-page_section">
      <payment-and-delivery-component></payment-and-delivery-component>
    </div>
    <div id="select-and-order" class="main-page_section">
      <select-and-order-component></select-and-order-component>
    </div>
    <div id="feedbacks" class="main-page_section">
      <feedbacks-component></feedbacks-component>
    </div>
  </div>
</template>

<script>
import HeaderComponent from '../header/header.component.vue';
import SearchComponent from '../search/search.component.vue';
import PriceComponent from '../price/price.component.vue';
import PaymentAndDeliveryComponent from '../payment-and-delivery/payment-and-delivery.component.vue';
import SelectAndOrderComponent from '../select-and-order/select-and-order.component.vue';
import FeedbacksComponent from '../feedbacks/feedbacks.component.vue';
export default {
  components: {
    HeaderComponent,
    SearchComponent,
    PriceComponent,
    PaymentAndDeliveryComponent,
    SelectAndOrderComponent,
    FeedbacksComponent
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

.main-page_section {
  &+ .main-page_section {
    margin-top: 5vh;
    padding-top: 1vh;
    border-top: 1px solid #d6d6d6;
  }

  &:last-child {
    margin-bottom: 10vh;
  }
}
</style>