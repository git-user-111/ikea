<template>
  <div class="search wrapper">
    <div class="search_content">
      <input class="search_input" v-model="message" placeholder="Поиск по товару или артикулу">
      <router-link class="search_button" :to="`/search-result?q=${message}`">
        <button-component
          type="button"
          title="Найти"
          view="button_content--search"
        ></button-component>
      </router-link>
    </div>
  </div>
</template>

<script>
import ButtonComponent from '../button/button.component.vue';
export default {
  components: {
    ButtonComponent
  },
  data: function() {
    return {
      message: this.$route.query.q
    }
  }
}
</script>

<style lang="scss" scoped>
.search {
  &_input {
    flex-grow: 1;
    border-radius: 3px 0 0 3px;
    border: 1px solid #ced4da;
    padding-left: 10px;
    padding-right: 10px;
    outline: none;
    &:focus {
      border-color: #17a2b8;
    }
  }
  &_content {
    display: flex;
    padding: 30px 0 30px 0;
  }
}
</style>