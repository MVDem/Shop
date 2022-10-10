<template>
  <Brand />
  <Stocks />
  <Product />
  <Advantages />
</template>

<script>
import Brand from '@/components/Brand.vue';
import Stocks from '@/components/Stocks.vue';
import Advantages from '@/components/Advantages.vue';
import Product from '@/components/Product.vue';
export default {
  name: 'Home',
  components: { Brand, Stocks, Advantages, Product },
};
</script>
