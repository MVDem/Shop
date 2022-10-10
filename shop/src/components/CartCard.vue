<template>
  <li>
    <div class="cart-product-card">
      <img
        :src="'../img/' + purchasedGood.image + '.jpg'"
        alt="cart1"
        width="262"
        height="306"
      />
      <div class="cart-product-card__info">
        <h3 class="cart-product-card__name">
          {{ purchasedGood.title }}
          <span>t-shirt</span>
        </h3>
        <p class="cart-product-card__description">
          Price:
          <span class="cart-product-card__price-count">
            $ {{ purchasedGood.price }} .00
          </span>
        </p>
        <p class="cart-product-card__description">Color: Red</p>
        <p class="cart-product-card__description">Size: Xl</p>
        <p
          class="cart-product-card__description cart-product-card__description--quantity"
        >
          Quantity: {{ purchasedGood.quantity }}
        </p>
      </div>
    </div>
  </li>
</template>
<script>
export default {
  name: 'CardGood',
  props: ['purchasedGood'],
};
</script>
