<template>
  <section class="container cart-content">
    <h2 class="visually-hidden">cart-content</h2>
    <CartProducts></CartProducts>
    <div class="cart-form">
      <CartOrder></CartOrder>
    </div>
  </section>
</template>
<script>
import CartProducts from '@/components/CartProducts.vue';
import CartOrder from '@/components/CartOrder.vue';

export default {
  name: 'CartMain',
  components: { CartProducts, CartOrder },
};
</script>
