<template>
  <nav class="nav wrapper">
      <ul class="nav_left">
          <li>
            <router-link to="/#header" @click.native="anchorHashCheck">Главная</router-link>
          </li>
          <li>
            <router-link to="/#payment-and-delivery" @click.native="anchorHashCheck">Оплата и доставка</router-link>
          </li>
          <li>
            <router-link to="/#select-and-order" @click.native="anchorHashCheck">Выбор и заказ</router-link>
          </li>
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
  mounted: function () {
    this.anchorHashCheck()
  },
  methods: {
    setProductsAmount: function(amount) {
      this.productsAmount = amount;
    },
    anchorHashCheck() {
      if ((window.location.hash).replace("#/", "") === this.$route.hash) {
        const el = document.getElementById(this.$route.hash.slice(1))
        if (el) {
          window.scrollTo(0, el.offsetTop)
        }
      }
    },
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/mixins.scss";
// TODO сделать переключение на мобильный вид и обратно
.nav {
  @include rwd(0) {
    display: none;
  }

  @include md {
    display: flex;
    justify-content: space-between;
  }
}

.nav_left, .nav_right {
  display: flex;
  list-style-type: none;
  padding: 0;
  margin: 0;
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-weight: 600;
  a {
    text-decoration-line: none;

    &:visited {
      color: #000;
    }

    &:hover {
      color: #007dd6;
    }
  }
}

.nav_left li, .nav_right li {
  padding: 20px 20px;
  margin-right: 5px;
}
</style>