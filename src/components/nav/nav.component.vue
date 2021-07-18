<template>
  <nav class="nav wrapper">
      <ul class="nav_left">
          <li>
            <router-link to="/">Главная</router-link>
          </li>
          <li>Оплата и доставка</li>
          <li>Выбор и заказ</li>
          <li>Отзывы</li>
          <li>Контакты</li>
      </ul>
      <ul class="nav_right">
          <li>
            <router-link to="/cart">Товаров в корзине: {{ productsAmount }}</router-link>
          </li>
      </ul>
  </nav>
</template>

<script>
export default {
  data: function() {
    return {
      productsAmount: 0
    }
  },
  created: function() {
    this.$eventBus.$on('edit-amount-products', (amount) => this.setProductsAmount(amount));
  },
  methods: {
    setProductsAmount: function(amount) {
      this.productsAmount = amount;
    }
  }
}
</script>

<style scoped>
.nav {
  display: flex;
}
.nav_left {
  display: flex;
  list-style-type: none;
}

.nav_left li, .nav_right li {
  padding: 20px 20px;
  margin-right: 5px;
  background-color: gainsboro;
}

.nav_right {
  display: flex;
  list-style-type: none;
}
</style>