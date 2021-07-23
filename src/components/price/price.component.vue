<template>
  <div class="price wrapper">
    <h2>Стоимость доставки</h2>
    <div>Здесь будет блок с кругами</div>
    <div class="price_description">
      <div class="price_text--accent">
        <p>*Стоимость по акции за наличный расчет, оплата при получении. При расчете через терминал в офисе стоимость доставки рассчитывается без скидки.</p>
      </div>
      <div class="price_text--medium">
        <p>ООО "Сибирская группа доставки" - это быстрая и надежная доставка товаров из магазина ИКЕА-Новосибирск в Томск, Северск и Асино. Теперь мы производим закупки каждый день по будням и доставка стала еще дешевле.</p>
      </div>
      <div class="price_text--small">
        <p>За 9 лет мы выполнили более 150 000 заказов и нам удалось завоевать репутацию надежного и стабильного партнера.</p>
        <p>Через нашу компанию Вы можете заказать товары из магазина ИКЕА по таким же ценам как в каталоге, доплатив лишь за доставку товара. Вам не нужно ездить сотни километров туда и обратно, не нужно ходить и искать нужный товар, не нужно стоять в очереди на кассу, надо просто выбрать товар по  каталогу, оформить заказ и в течение 1-3 дней товар будет у Вас.</p>
        <p>Сфера деятельности нашей компании: покупка, доставка и сборка товаров из магазина Икеа г. Новосибирска в г. Томск, г. Северск и г. Асино.</p>
        <p class="price_text--bold">*Стоимость по акции за наличный расчет</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="sass">
.price {
    &_description {
      font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    }
    &_text {
      &--accent {
        font-size: 18px;
        color: #1e5a01;
        font-weight: bold;
        background-color: #d8efcc;
        border-color: #c8e8b8;
        padding: 0.75rem 1.25rem;
        border-radius: 3px;
      }
      &--medium {
        font-size: 1.09375rem;
      }
      &--small {
        font-size: 0.875rem;
      }
      &--bold {
        font-weight: bold;
      }
    }
}
</style>