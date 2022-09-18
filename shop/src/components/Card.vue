<template>
  <div class="product__item" :id="good.id">
    <div class="product__item-opacity">
      <img
        :src="'../img/' + good.image + '.jpg'"
        alt="product4"
        width="360"
        height="420"
      />
      <h3 class="product__text">{{ good.title }}</h3>
      <p class="product__subtext">{{ good.description }}</p>
      <p class="product__price">$ {{ good.price }} .00</p>
    </div>
    <button v-on:click="addToCart" class="product__cart" type="button">
      <span class="product__button-text">Add to Cart</span>
    </button>
  </div>
</template>
<script>
export default {
  name: 'Card',
  props: ['good'],
  methods: {
    addToCart() {
      this.$store.dispatch('loadToCart', this.good);
    },
  },
};
</script>
