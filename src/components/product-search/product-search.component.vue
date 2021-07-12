<template>
  <div class="product-search">
    <input v-model="message" placeholder="Поиск по товару или артикулу">
    <router-link :to="`/product-search?q=${message}`">Найти</router-link>
    <button v-on:click="selectProduct()">Тестовая кнопка add</button>
    <p>Всего найдено: {{ products.length }}</p>
    <div class="product-search_products">
      <div
        class="product-search_product"
        v-for="product in products"
        :key="product.id"
      >
        <div>
          <img class="product-search_product-image" :src="product.imageUrl">
        </div>
        <p>{{ product.id }}</p>
        <p>{{ product.name }}</p>
        <p>{{ product.description }}</p>
        <p>{{ product.priceNumeral }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      message: this.$route.query.q,
      /** Конечные продукты */
      products: [],
      /** Продукты, полученные первыми, напрямую с сайта ikea */
      firstProducts: [],
      /** Флаг запрета запроса к серверу */
      closedRequestToServer: false,
      /** Запрос на получение первых продуктов */
      searchRequest: null,
      serverUrl: 'http://j92342z7.beget.tech/',
      // Шаблоны для проверки является ли введенное артиклем товара
      articleRegex1: new RegExp("^\\d{8}$", "g"),
      articleRegex2: new RegExp("^\\d{3}[,]{1}\\d{3}[,]{1}\\d{2}$", "g"),
      articleRegex3: new RegExp("^\\d{3}[ ]{1}\\d{3}[ ]{1}\\d{2}$", "g")
    }
  },
  mounted: function () {
    this.getProducts();
  },
  watch: {
    $route(to) {
      this.message = to.query.q;
      this.getProducts();
    }
  },
  methods: {
    selectProduct: function() {
      this.$eventBus.$emit('select-product', { productItem: 'abc' })
    },
    getProducts: function() {
      if (this.message !== "") {
        this.searchRequest = `https://www.ikea.com/search/ru/ru/search-result-page?max-num-filters=8&q="${this.message}"&autocorrect=true&size=96&columns=4&subcategories-style=tree-navigation&columns=%26columns%3D4&types=PRODUCT%2CCONTENT%2CPLANNER%2CREFINED_SEARCHES%2CANSWER&c=sr`;
        if (this.message.match(this.articleRegex2)) { // Если введен артикль второго вида
          this.message = this.message.replaceAll(",", ""); // Привести артикль к первому виду
        }
        if (this.message.match(this.articleRegex3)) { // Если введен артикль третьего вида
          this.message = this.message.replaceAll(" ", ""); // Привести артикль к первому виду
        }
        this.products = [];
        fetch(this.searchRequest)
          .then((response) => {
            return response.json();
          })
          .then((response) => {
            this.firstProducts = [];
            const differentProducts = response.searchResultPage.products.main.items;
            differentProducts.forEach(item => {
              if (item.product && item.type === "PRODUCT") { // Если это продукт
                const name = item.product.name;
                const priceNumeral = item.product.priceNumeral;
                if (this.message.match(this.articleRegex1)) { // Если введен артикль первого вида
                  this.products.push({
                    id: item.product.id,
                    name: name,
                    description: item.product.typeName + " " + item.product.itemMeasureReferenceText,
                    imageUrl: item.product.mainImageUrl,
                    link: item.product.pipUrl,
                    priceNumeral: priceNumeral,
                  });
                } else if (this.closedRequestToServer) {
                  item.product.gprDescription.variants.forEach(variant => {
                    const description = variant.imageAlt.replace(name, '');
                    this.products.push({
                      id: variant.id,
                      name: name,
                      description: description,
                      imageUrl: variant.imageUrl,
                      link: variant.pipUrl,
                      priceNumeral: priceNumeral,
                    });
                  });
                } else {
                  if (
                    item.product.gprDescription.variants
                    && item.product.gprDescription.variants.length === 0
                  ) { // Если другие разновидности этого товара отсутствуютотсутствуют
                    this.products.push({
                      id: item.product.id,
                      name: name,
                      description: item.product.typeName + " " + item.product.itemMeasureReferenceText,
                      imageUrl: item.product.mainImageUrl,
                      link: item.product.pipUrl,
                      priceNumeral: priceNumeral,
                    });
                  } else {
                    item.product.gprDescription.variants.forEach(variant => {
                      this.firstProducts.push({
                        id: variant.id,
                        name: name,
                        description: variant.imageAlt,
                        imageUrl: variant.imageUrl,
                        link: variant.pipUrl,
                        priceNumeral: priceNumeral,
                      });
                    });
                  }
                }
              }
          });

          if (
            this.firstProducts
            && this.firstProducts.length !== 0
            && !this.closedRequestToServer
            && this.message.match(this.articleRegex1) === null
          ) {
            const requests = this.firstProducts.map(firstProduct =>
              fetch(`${this.serverUrl}/?url=${firstProduct.link}`, {
                mode: 'cors',
                method: "POST"
              })
            );

            const promises = [];
            Promise.all(requests)
              .then((responses) => {
                responses.forEach(response => { promises.push(response.json()) });
                return promises;
              })
              .then((promises) => {
                promises.forEach(promise => {
                  promise.then((jsonResponse) => {
                    jsonResponse.products.forEach((product) => {
                      const cond = this.products.some(function(e){
                        return e.id == product.id;
                      });
                      if (!cond) {
                        this.products.push({
                          id: product.id,
                          name: product.title,
                          description: product.text,
                          link: product.url,
                          imageUrl: product.image,
                          priceNumeral: product.price
                        })
                      }
                    });
                  })
                  .catch(err => {
                    console.log('Failed fetch ' + err);
                  });
                })
              })
              .catch(err => {
                console.log('Failed fetch ' + err);
              });
          }
        });
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.product-search {
  &_products {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-column-gap: 10px;
    grid-row-gap: 20px;
    .product-search_product {
      padding: 15px;
      max-width: 250px;
      &:hover {
        box-shadow: 0 10px 10px rgba(0,0,0,0.5);
      }
    }
  }
  &_product-image {
    width: 100%;
    height: auto;
  }
}
</style>