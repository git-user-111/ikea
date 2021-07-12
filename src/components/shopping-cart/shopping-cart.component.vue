<template>
  <div class="shopping-cart">
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      selectedProducts: {
        amount: 0,
        items: []
      }
    }
  },
  mounted: function () {
    if (localStorage.getItem('IkeastoreProductsAmount') === null) {
      localStorage.setItem('IkeastoreProductsAmount', "0");
      // добавить сюда вызов события увеличения суммы в других компонентах
    } else {
      this.selectedProducts.amount = parseInt(localStorage.getItem('IkeastoreProductsAmount'));
    }
    if (localStorage.getItem('IkeastoreProductsItems') === null) {
      localStorage.setItem('IkeastoreProductsItems', "[]");
    } else {
      this.selectedProducts.items = JSON.parse(localStorage.getItem('IkeastoreProductsItems')).items;
    }
    this.$eventBus.$on('select-product', (product) => this.selectProduct(product));
  },
  methods: {
    selectProduct: function(product) {
      this.selectedProducts.amount++;
      this.selectedProducts.items.push(product);
      localStorage.setItem('IkeastoreProductsAmount', this.selectedProducts.amount.toString());
      const items = '{"items": [' + this.selectedProducts.items.map((item) => JSON.stringify(item)) + ']}'.replaceAll('/\\/g', '');
      localStorage.setItem('IkeastoreProductsItems', items);
    }
  }
}
</script>