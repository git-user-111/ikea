<template>
  <div
    v-if="$route.path === '/cart'"
    class="shopping-cart wrapper"
  >
    <search-component></search-component>
    <h2>Ваша корзина</h2>
    <table>
      <thead>
        <tr>
          <th style="width: 140px"></th>
          <th>Наименование</th>
          <th>Количество</th>
          <th>Цена, руб.</th>
          <th>Сумма, руб.</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr 
          v-for="product in selectedProducts.items"
          :key="product.id"
        >
          <td>
            <div class="shopping-cart_product-image">
              <img :src="product.imageUrl">
            </div>
          </td>
          <td>
              <div class="shopping-cart_description">
                <p>{{ product.name }}</p>
                <p>{{ product.description }}</p>
                <p>Артикул: {{ product.id }}</p>
              </div>
          </td>
          <td>
            <div>
              <input
                type="number"
                name="amount"
                v-model.lazy="product.amount"
                min=1
                max=100
                @change="changeItemAmount($event, product)"
                required>
            </div>
          </td>
          <td>
            <div>
                <p>{{ product.priceNumeral }} ₽</p>
            </div>
          </td>
          <td>
            <div>
                <p>{{ product.priceNumeral * product.amount }} ₽</p>
            </div>
          </td>
          <td>
            <button-component
              type="button"
              title="Удалить"
              view="button_content--delete"
              @buttonClicked="deleteProduct(product.id)"
            ></button-component>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import SearchComponent from '../search/search.component.vue'
import ButtonComponent from '../button/button.component.vue'
export default {
  components: {
    SearchComponent,
    ButtonComponent
  },
  data: function() {
    return {
      selectedProducts: {
        amount: 0,
        items: []
      },
      productsMax: 500
    }
  },
  mounted: function () {
    if (localStorage.getItem('IkeastoreProductsAmount') === null) {
      localStorage.setItem('IkeastoreProductsAmount', "0");
      this.$eventBus.$emit('edit-amount-products', 0);
    } else {
      this.selectedProducts.amount = parseInt(localStorage.getItem('IkeastoreProductsAmount'));
      this.$eventBus.$emit('edit-amount-products', this.selectedProducts.amount)
    }
    if (localStorage.getItem('IkeastoreProductsItems') === null) {
      localStorage.setItem('IkeastoreProductsItems', '{"items": []}');
    } else {
      this.selectedProducts.items = JSON.parse(localStorage.getItem('IkeastoreProductsItems')).items;
    }
    this.$eventBus.$on('select-product', (product) => this.selectProduct(product));
  },
  methods: {
    deleteProduct: function(productId) {
      this.selectedProducts.items = this.selectedProducts.items.filter((el) => el.id !== productId)
      const items = '{"items": [' + this.selectedProducts.items.map((item) => JSON.stringify(item)) + ']}'.replaceAll('/\\/g', '');
      localStorage.setItem('IkeastoreProductsItems', items);
      this.calculateAmount();
      localStorage.setItem('IkeastoreProductsAmount', this.selectedProducts.amount.toString());
      this.$eventBus.$emit('edit-amount-products', this.selectedProducts.amount)
    },
    changeItemAmount: function(event, product) {
      const fixedAmount = typeof event.target.value === "number"
        ? event.target.value.toString().replace(/^[- 0]$/,'')
        : event.target.value.replace(/^[- 0]$/,'');
      const fixedAmount2 = fixedAmount === ''
      ? "1"
      : parseInt(fixedAmount) > this.productsMax
       ? this.productsMax.toString()
       : fixedAmount;
      product.amount = parseInt(fixedAmount2);
      const items = '{"items": [' + this.selectedProducts.items.map((item) => JSON.stringify(item)) + ']}'.replaceAll('/\\/g', '');
      localStorage.setItem('IkeastoreProductsItems', items);
    },
    selectProduct: function(product) {
      const hasProduct = this.selectedProducts.items.some((item) => item.id === product.id);
      if (!hasProduct) {
        this.selectedProducts.items.push(product);
      }
      this.setToLocalstorage();
    },
    setToLocalstorage() {
        const items = '{"items": [' + this.selectedProducts.items.map((item) => JSON.stringify(item)) + ']}'.replaceAll('/\\/g', '');
        localStorage.setItem('IkeastoreProductsItems', items);
        this.calculateAmount();
        localStorage.setItem('IkeastoreProductsAmount', this.selectedProducts.amount.toString());
        this.$eventBus.$emit('edit-amount-products', this.selectedProducts.amount);
    },
    calculateAmount() {
      let amount = 0;
      this.selectedProducts.items.map(item => { amount += item.amount });
      this.selectedProducts.amount = amount;
    }
  }
}
</script>

<style lang="scss" scoped>
.shopping-cart {
  min-height: calc(100vh - 61px - 256.81px);
  table {
    width: 100%;
  }
  thead tr th {
    text-align: left;
  }

  &_product {
    display: flex;
    justify-content: space-between;
  }
  &_product-image {
    width: 110px;
    height: 110px;
    img {
      max-width: 100%;
    }
  }
}
</style>