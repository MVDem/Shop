<template>
  <section class="cart-order">
    <h2 class="visually-hidden">cart-order</h2>
    <form action="endpoint" class="cart-shipping-form">
      <fieldset class="cart-shipping-form__wrap">
        <legend class="cart-shipping-form__text">shipping adress</legend>
        <input
          class="cart-shipping-form-place"
          type="text"
          placeholder="City"
        />
        <input
          class="cart-shipping-form-place"
          type="text"
          placeholder="State"
        />
        <input
          class="cart-shipping-form-place"
          type="text"
          placeholder="Postcode / Zip"
        />
        <button class="cart-shipping-form__button">get a quote</button>
      </fieldset>
    </form>
  </section>
  <section class="cart-cost">
    <h3 class="visually-hidden">cart-cost</h3>

    <div>
      <p class="cart-cost__subtotal">sub total $ {{ cartCost }}</p>
      <p class="cart-cost__grandtotal">
        grand total
        <span class="cart-cost__grandtotal-pink">$ {{ cartCost }}</span>
      </p>
    </div>
    <button class="cart-cost__button">proceed to checkout</button>
  </section>
</template>
<script>
export default {
  name: 'CartOrder',
  computed: {
    cartCost() {
      return this.$store.getters.getCartCost;
    },
  },
};
</script>
