<template>
  <div class="footer">
      <div class="footer_content">
        <div class="wrapper">
            <h2>Доставка товаров из ИКЕА в Томск каждый будний день</h2>
            <div class="footer_columns">
                <div class="footer_column-left">
                <p>пр. Ленина, ???</p>
                <p>+7-913-800-70-99</p>
                <p>ikeastore@domain.ru</p>
                <p>© Служба доставки «Ikeastore», 2021</p>
                </div>
                <div class="footer_column-right">
                    <p></p>
                </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="sass">
.footer {
    &_content {
        background: #e7e7e8;
        border-top: solid 1px #d3d3d3;
        font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        padding-bottom: 20px;
    }
    &_columns {
        display: flex;
        justify-content: space-between;
    }
}
</style>