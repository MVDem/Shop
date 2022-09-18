<template>
  <section class="stocks container">
    <h2 class="visually-hidden">Stocks</h2>
    <ul class="stocks__list">
      <li class="stocks__item stocks__item--woman">
        <div class="stocks__title">
          <p class="stocks__text">30% OFF</p>
          <h3 class="stocks__subtext">for women</h3>
        </div>
      </li>
      <li class="stocks__item stocks__item--man">
        <div class="stocks__title">
          <p class="stocks__text">hot deal</p>
          <h3 class="stocks__subtext">for men</h3>
        </div>
      </li>
      <li class="stocks__item stocks__item--kids">
        <div class="stocks__title">
          <p class="stocks__text">new arrivals</p>
          <h3 class="stocks__subtext">for kids</h3>
        </div>
      </li>
      <li class="stocks__item stocks__item--accesories">
        <div class="stocks__title">
          <p class="stocks__text">luxirous & trendy</p>
          <h3 class="stocks__subtext">accesories</h3>
        </div>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  name: 'Stocks',
};
</script>
