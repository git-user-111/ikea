<template>
  <div>
    <button
      :class="'button_content ' + view"
      :type="type"
      v-on:click="greet"
    >{{title}}</button>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "button"
    },
    view: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      required: true
    }
  },
  methods: {
    greet: function (event) {
      if (
        event
        && (this.view == ""
          || this.view == "button_content--catalog"
          || this.view == "button_content--delete"
          || this.view == "button_content--search"
        )) {
        const view = this.view;
        this.$emit('buttonClicked', view);
      }
    }
  }
}
</script>

<style lang="sass">
  .button {
    display: inline-block;
    &_content {
      font-size: 1.0rem;
      padding: 15px 25px;
      border: 0;
      border-radius: 5px;
      background-color: #007dd6;
      position: relative;
      cursor: pointer;
      color: #fff;
      &:after {
        content: '';
        position: absolute;
        border-radius: 5px;
        top: 0;
        left: 0;
        background: rgba(0,0,0,.2); 
        opacity: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
      }
      &:hover::after {
        opacity: 1;
      }

      &--delete {
        background-color: #dc3545;
        padding: 10px 20px;
      }

      &--search {
        border-radius: 0px 3px 3px 0px;
        padding: 10px 20px;
      }

      &--disabled {
        background-color: #7e7e88;
        &:hover::after {
          opacity: 0;
        }
      }

      &--catalog  {
        background-color: #fdd835;
        color: #000;
        font-weight: bold;
        font-size: 20px;
      }
    }
  }
  
</style>