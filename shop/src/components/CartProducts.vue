<template>
  <div class="cart-products">
    <ul>
      <CartCard
        v-for="purchasedGood of cartCatalog"
        :key="purchasedGood.id"
        v-bind:purchasedGood="purchasedGood"
      ></CartCard>
    </ul>
    <div class="cart-products__buttons">
      <button class="cart-products__button">clear shoping cart</button>
      <button class="cart-products__button">CONTINUE SHOPPING</button>
    </div>
  </div>
</template>
<script>
import CartCard from '@/components/CartCard.vue';
export default {
  name: 'CartProducts',
  components: { CartCard },
  computed: {
    cartCatalog() {
      return this.$store.getters.getCart;
    },
  },
};
</script>
