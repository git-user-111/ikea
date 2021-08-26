<template>
  <div class="header">
    <div class="header_content">
    <h1>ДОСТАВКА ТОВАРОВ<br>ИЗ ИКЕА В ТОМСК</h1>
    <p>СЛУЖБА ДОСТАВКИ</p>
    <h2 class="header_name">«Ikeastore»</h2>
    <p>пр. Ленина, ???<br>+7-913-800-70-99<br>Отправить заявку на почту:<br>ikeastore@domain.ru</p>
    <a href="https://publications-ru-ru.ikea.com/ikea_catalogue_21/page/1" target="_blank">
      <button-component
        type="button"
        title="Каталог IKEA"
        view="button_content--catalog"
      ></button-component>
    </a>
    </div>
  </div>
</template>

<script>
import ButtonComponent from '../button/button.component.vue'
export default {
  components: {
    ButtonComponent
  },
}
</script>

<style lang="sass">
.header {
  background-image: url("https://sibgd.ru/img/slider_ikea_03_mini.jpg");
  font-family: Arial;
  color: white;
  text-align: center;

  &_content {
    padding-top: 40px;
    padding-bottom: 40px;
    text-shadow: 1px 1px 2px black;
  }

  &_name {
    color: #fdd835;
  }
}
</style>