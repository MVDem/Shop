<template>
  <section class="product container">
    <div class="product__headline">
      <h2 class="product__title">Fetured Items</h2>
      <p class="product__subtitle">
        Shop for items based on what we featured in this week
      </p>
    </div>
    <div class="product__list">
      <Card
        v-bind:key="good.id"
        v-bind:good="good"
        v-for="good of catalog"
      ></Card>
    </div>
    <div class="product__btn">
      <a class="product__link" href="#">
        <span class="product__link-centre">Browse All Product</span>
      </a>
    </div>
  </section>
</template>
<script>
import Card from '@/components/Card.vue';
export default {
  name: 'Product',
  components: { Card },
  computed: {
    catalog() {
      return this.$store.getters.getCatalog;
    },
  },
};
</script>
