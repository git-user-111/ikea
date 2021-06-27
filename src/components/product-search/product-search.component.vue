<template>
  <div class="product-search">
    <input v-model="message" placeholder="Поиск по товару или артикулу">
    <router-link :to="`/product-search?q=${message}`">Найти</router-link>
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
      products: [],
      firstProducts: [],
      closedServerLoading: true,
      serverUrl: 'http://j92342z7.beget.tech/',
      regex1: new RegExp("^\\d{8}$", "g"),
      regex2: new RegExp("^\\d{3}[,]{1}\\d{3}[,]{1}\\d{2}$", "g"),
      regex3: new RegExp("^\\d{3}[ ]{1}\\d{3}[ ]{1}\\d{2}$", "g")
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
  methods:
  {
    getProducts: function() {
      if (this.message !== "") {
        if (this.message.match(this.regex2)) {
          this.message = this.message.replaceAll(",", "");
        }
        if (this.message.match(this.regex3)) {
          this.message = this.message.replaceAll(" ", "");
        }
        this.products = [];
        fetch(`https://www.ikea.com/search/ru/ru/search-result-page?max-num-filters=8&q="${this.message}"&autocorrect=true&size=96&columns=4&sessionId=efd95311-0d91-4801-99e6-7464fd18c5c3&subcategories-style=tree-navigation&columns=%26columns%3D4&types=PRODUCT%2CCONTENT%2CPLANNER%2CREFINED_SEARCHES%2CANSWER&c=sr&v=20210322`)
          .then((response) => {
            return response.json();
          })
          .then((response) => {
            this.firstProducts = [];
            response.searchResultPage.products.main.items.forEach(item => {
            if (item.product && item.type === "PRODUCT") {
              const name = item.product.name;
              const priceNumeral = item.product.priceNumeral;
              if (this.message.match(this.regex1)) {
                this.products.push({
                  id: item.product.id,
                  name: name,
                  description: item.product.typeName + " " + item.product.itemMeasureReferenceText,
                  imageUrl: item.product.mainImageUrl,
                  link: item.product.pipUrl,
                  priceNumeral: priceNumeral,
                });
              } else if (this.closedServerLoading) {
                item.product.gprDescription.variants.forEach(variant => {
                  this.products.push({
                    id: variant.id,
                    name: name,
                    description: variant.imageAlt,
                    imageUrl: variant.imageUrl,
                    link: variant.pipUrl,
                    priceNumeral: priceNumeral,
                  });
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
                  })
                });
              }
            }
          });

          if (!this.closedServerLoading && this.regex1 == null) {
            this.firstProducts.forEach((firstProduct) => {
              fetch(`${this.serverUrl}/?url=${firstProduct.link}`, {
                  mode: 'cors',
                  method: "POST"
                })
                .then((response) => {
                  return response.json();
                })
                .then((response) => {
                  console.log(response)
                  response.products.forEach((product) => {
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