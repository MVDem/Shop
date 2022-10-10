<template>
  <footer>
    <section class="footer">
      <h2 class="cart-main__text visually-hidden">footer</h2>
      <div class="footer__list container">
        <div class="footer__blockquote">
          <img class="footer__pic" src="../img/photo.svg" alt="photo" />
          <p class="footer__quote">
            “Vestibulum quis porttitor dui! Quisque viverra nunc mi,
            <span class="footer__subquote"> a pulvinar purus condimentum“</span>
          </p>
        </div>
        <div class="footer__feedback">
          <p class="footer__title">subscribe</p>
          <p class="footer__subtitle">for our newletter and promotion</p>
          <form class="footer__mailform">
            <input
              class="footer__mail"
              type="email"
              placeholder="Enter Your Email"
            />
            <button class="footer__btn" type="Submit">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
    <section class="socials">
      <h2 class="cart-main__text visually-hidden">socials</h2>
      <div class="socials__list container">
        <div class="socials__copy">
          <p>© 2021 Brand All Rights Reserved.</p>
        </div>
        <ul class="socials__icons">
          <li class="socials__icon">
            <img src="../img/icon1.jpg" alt="logo1" />
          </li>
          <li class="socials__icon">
            <img src="../img/icon2.jpg" alt="logo2" />
          </li>
          <li class="socials__icon">
            <img src="../img/icon3.jpg" alt="logo3" />
          </li>
          <li class="socials__icon">
            <img src="../img/icon4.jpg" alt="logo4" />
          </li>
        </ul>
      </div>
    </section>
  </footer>
</template>
<script>
export default {
  name: 'Header',
};
</script>
