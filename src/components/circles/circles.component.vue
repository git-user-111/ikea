<template>
  <div class="circles">
    <div class="circles_box">
      <div
        v-for="price of prices"
        v-bind:key="price.id"
        class="circles_circle"
      >
      
        <div class="circles_was">
          <p class="circles_text-oldPercent">{{ price.oldPercent }}<span>%</span></p>
        </div>
        <div class="circles_now">
          <div class="circles_text">
            <p class="circles_text-percent"><b>{{ price.percent }}</b>%</p>
            <p class="circles_text-from">от <b>{{ price.from }}</b> руб.</p>
            <p class="circles_text-to">до <b>{{ price.to }}</b> руб.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    prices: []
  },
  mounted: function () {
    console.log(this.prices)
  }
}
</script>

<style lang="sass" scoped>
.circles {
  display: flex;
  justify-content: center;

  &_box {
    display: flex;
    padding-left: 30px;
    font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  }

  &_circle {
    height: 300px;
  }

  &_now {
    width: 220px;
    height: 220px;
    background: #116eb1;
    border-radius: 50%;
    border: solid 3px #fff;
    box-shadow: 0 2px 2px 1px rgb(0 0 0 / 25%);
    margin-left: -30px;
    transition: .3s;
    cursor: default;
    position: relative;

    &:hover {
      z-index: 1;
      filter: brightness(1.25);
      box-shadow: 0 30px 15px -10px rgb(0 0 0 / 25%);
      .circles_text-percent {
        transform: scale(1.2);
      }
    }
  }

  &_text {
    text-align: center;
    p {
      margin-bottom: 0;
    }
  }

  &_text-percent {
    margin-top: 50px;
    color: #ffce37;
    font-size: 20px;
    font-weight: 700;
    position: relative;
    transition: .3s;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    b {
      font-size: 50px;
      line-height: 50px;
    }
  }

  &_text-from, 
  &_text-to {
    color: #fff;
  }

  &_text-to {
    margin-top: 3px;
  }

  &_was {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    position: absolute;
    width: 200px;
    height: 200px;
    background: #ddd;
    margin-top: 85px;
    margin-left: -20px;
    z-index: -1;
    border-radius: 50%;
    color: #666;
    font-size: 20px;
  }

  &_text-oldPercent {
    position: relative;
    padding-left: 10px;
    padding-right: 10px;

    &::before {
      content: '';
      position: absolute;
      display: block;
      margin-top: 12px;
      width: 100%;
      height: 2px;
      background: #f00;
      opacity: .7;
      margin-left: -10px;
      transform: rotate(-20deg);
    }
  }
}
</style>