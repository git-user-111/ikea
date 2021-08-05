<template>
  <div class="select-and-order wrapper">
    <h1>Выбор и заказ</h1>
    <p>1. На нашем сайте: добавьте товары в корзину и оформите заявку.</p>
        <button-component
          type="button"
          title="Каталог"
          view="button_content"
        ></button-component>
    <p>2. Оформите заказ в наших офисах.</p>
    <p>3. Оформите заказ по телефону <a href="tel:+79999999999">8 999 999 9999</a></p>
  </div>
</template>

<script>
import ButtonComponent from '../button/button.component.vue';
export default {
  components: {
    ButtonComponent
  }
}
</script>

<style lang="sass">
.select-and-order {
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
</style>