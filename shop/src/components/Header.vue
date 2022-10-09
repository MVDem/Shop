<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <div class="header__contrls">
          <router-link to="/">
            <img
              class="header__logo"
              src="../img/logo.svg"
              alt="logo"
              width="44"
              height="38"
            />
          </router-link>
          <img src="../img/loupe.svg" alt="loupe" width="26" height="27" />
        </div>
        <div class="header__contrls header__controls-right">
          <button class="header__burger" type="button" id="burger">
            <img src="../img/burger.svg" alt="burger" width="32" height="23" />
          </button>
          <a
            class="header__person-link header__person-link--tablet-margin"
            href="./registration.html"
            ><img
              src="../img/registration.svg"
              alt="registration"
              width="29"
              height="29"
            />
          </a>
          <router-link to="Cart" class="header__person-cart">
            <img src="../img/card.svg" alt="card" width="32" height="29" />
            <span class="header__person-lable">{{ cartQuantity }}</span>
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    cartQuantity() {
      return this.$store.getters.getCart.reduce(
        (acc, good) => acc + good.quantity,
        0
      );
    },
  },
};
</script>
