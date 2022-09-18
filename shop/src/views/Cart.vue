<template>
  <CartTop />
  <CartMain />
</template>

<script>
import CartTop from '@/components/CartTop.vue';
import CartMain from '@/components/CartMain.vue';

export default {
  name: 'Cart',
  components: { CartTop, CartMain },
};
</script>
