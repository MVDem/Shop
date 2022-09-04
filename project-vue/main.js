Vue.component('site-header', {
  template: `<header class="header">
  <div class="container">
    <div class="header__wrapper">
      <div class="header__contrls">
        <img
          @click="onIndexBtnHandler"
          class="header__logo"
          src="./img/logo.svg"
          alt="logo"
          width="44"
          height="38"
        />
        <img src="./img/loupe.svg" alt="loupe" width="26" height="27" />
      </div>
      <div class="header__contrls header__controls-right">
        <button class="header__burger" type="button" id="burger">
          <img src="./img/burger.svg" alt="burger" width="32" height="23" />
        </button>
        <nav class="header__navigation" id="navi">
          <h2 class="header__navigation-title">menu</h2>
          <ul>
            <li>
              <a class="header__navigation-subtitle" href="./product.html"
                >man</a
              >
              <ul>
                <li>
                  <a class="header__navigation-item" href="#"
                    >Accessories</a
                  >
                </li>
                <li>
                  <a class="header__navigation-item" href="#">Bags</a>
                </li>
                <li>
                  <a class="header__navigation-item" href="#">Denim</a>
                </li>
                <li>
                  <a class="header__navigation-item" href="#">T-Shirts</a>
                </li>
              </ul>
            </li>
            <li>
              <a class="header__navigation-subtitle" href="#">woman</a>
              <ul>
                <li>
                  <a class="header__navigation-item" href="#"
                    >Accessories</a
                  >
                </li>
                <li>
                  <a class="header__navigation-item" href="#"
                    >Jackets & Coats</a
                  >
                </li>
                <li>
                  <a class="header__navigation-item" href="#">Polos</a>
                </li>
                <li>
                  <a class="header__navigation-item" href="#">T-Shirts</a>
                </li>
                <li>
                  <a class="header__navigation-item" href="#">Shirts</a>
                </li>
              </ul>
            </li>
            <li>
              <a class="header__navigation-subtitle" href="#">kids</a>
              <ul>
                <li>
                  <a class="header__navigation-item" href="#"
                    >Accessories</a
                  >
                </li>
                <li>
                  <a class="header__navigation-item" href="#"
                    >Jackets & Coats</a
                  >
                </li>
                <li>
                  <a class="header__navigation-item" href="#">Polos</a>
                </li>
                <li>
                  <a class="header__navigation-item" href="#">T-Shirts</a>
                </li>
                <li>
                  <a class="header__navigation-item" href="#">Shirts</a>
                </li>
                <li>
                  <a class="header__navigation-item" href="#">Bags</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <a
          class="header__person-link header__person-link--tablet-margin"
          href="./registration.html"
          ><img
            src="./img/registration.svg"
            alt="registration"
            width="29"
            height="29"
          />
        </a>
        <a class="header__person-cart " @click="onCartBtnHandler">
              <img src="./img/card.svg" alt="card" width="32" height="29"/>
              <span class="header__person-lable">{{ count }}</span>
        </a>
      </div>
    </div>
  </div>
</header>`,
  methods: {
    onCartBtnHandler() {
      this.$emit('goTo', 'cart');
    },
    onIndexBtnHandler() {
      this.$emit('goTo', 'index');
    },
  },
  props: ['count'],
});

Vue.component('brand', {
  template: `<section class="brand">
  <img
    class="brand__image"
    src="./img/brand.jpg"
    alt="brand"
    width="800"
    height="765"
  />
  <div class="brand__title-wrapper">
    <h1 class="brand__title">
      the brand
      <span class="brand__subtitle">
        of luxerious
        <span class="brand__subtitle-pink"> fashion </span></span
      >
    </h1>
  </div>
</section>`,
});

Vue.component('stocks', {
  template: `<section class="stocks container">
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
</section>`,
});

Vue.component('card', {
  template: `<div class="product__item" :id="good.id">
              <div class="product__item-opacity"> 
                <img
                  :src="'./img/' + good.image + '.jpg'"
                  alt="product4"
                  width="360"
                  height="420"
                />
                <h3 class="product__text">{{ good.title }}</h3>
                <p class="product__subtext">{{ good.description }}</p>
                <p class="product__price">$ {{ good.price }} .00</p>
              </div>
              <button @click="addToCartHandler" class="product__cart" type="button">
                <span class="product__button-text">Add to Cart</span>
              </button>
            </div>`,
  props: ['good'],
  methods: {
    addToCartHandler() {
      this.$emit('add-to-cart', this.good.id);
    },
  },
});

Vue.component('good-list', {
  template: `<section class="product container">
              <div class="product__headline">
                <h2 class="product__title">Fetured Items</h2>
                <p class="product__subtitle">
                  Shop for items based on what we featured in this week
                </p>
              </div>
              <div class="product__list">
                <card v-for="good of list" v-bind:good="good" @add-to-cart="addToCartHandler"></card>
              </div>
              <div class="product__btn">
                <a class="product__link" href="#"
                  ><span class="product__link-centre">Browse All Product</span></a
                >
              </div>
            </section>`,
  props: ['list'],
  methods: {
    addToCartHandler(id) {
      this.$emit('add-to-cart', id);
    },
  },
});

Vue.component('advantages', {
  template: `<section class="advantages">
  <ul class="advantages__list container">
    <li class="advantages__item">
      <img class="advantages__image" src="./img/logo1.svg" alt="logo1" />
      <h3 class="advantages__text">Free Delivery</h3>
      <p class="advantages__subtext">
        Worldwide delivery on all. Authorit tively morph next-generation
        innov tion with extensive models.
      </p>
    </li>
    <li class="advantages__item">
      <img class="advantages__image" src="./img/logo2.svg" alt="logo2" />
      <h3 class="advantages__text">Sales & discounts</h3>
      <p class="advantages__subtext">
        Worldwide delivery on all. Authorit tively morph next-generation
        innov tion with extensive models.
      </p>
    </li>
    <li class="advantages__item advantages__item--last-item">
      <img class="advantages__image" src="./img/logo3.svg" alt="logo3" />
      <h3 class="advantages__text">Quality assurance</h3>
      <p class="advantages__subtext">
        Worldwide delivery on all. Authorit tively morph next-generation
        innov tion with extensive models.
      </p>
    </li>
  </ul>
</section>`,
});

Vue.component('cart-top', {
  template: `<section class="cart-main container">
              <h2 class="cart-main__text">shoping cart</h2>
            </section>`,
});

Vue.component('cart-products', {
  template: `<div class="cart-products">
              <ul>
              <cart-good v-for="purchasedGood of cart" v-bind:purchasedGood="purchasedGood"></cart-good>
              </ul>
              <div class="cart-products__buttons">
                <button class="cart-products__button" @click="clearShopingCart">clear shoping cart</button>
                <button class="cart-products__button">CONTINUE SHOPPING</button>
              </div>
            </div>`,
  props: ['cart'],
  methods: {
    clearShopingCart() {
      this.$emit('clear-shoping-cart');
    },
  },
});

Vue.component('cart-cost', {
  template: `<section class="cart-cost">
  <h3 class="visually-hidden">cart-cost</h3>

  <div>
    <p class="cart-cost__subtotal">sub total $ {{ cost }}</p>
    <p class="cart-cost__grandtotal">
      grand total
      <span class="cart-cost__grandtotal-pink">$ {{ cost }}</span>
    </p>
  </div>
  <button class="cart-cost__button">proceed to checkout</button>
</section>`,
  props: ['cost'],
});

Vue.component('cart-order', {
  template: `<section class="cart-order">
  <h2 class="visually-hidden">cart-order</h2>
  <form action="endpoint" class="cart-shipping-form">
    <fieldset class="cart-shipping-form__wrap">
      <legend class="cart-shipping-form__text">
        shipping adress
      </legend>
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
</section>`,
});

Vue.component('cart-good', {
  template: `<li>
              <div class="cart-product-card">
                <img
                  :src="'./img/' + purchasedGood.image +'.jpg'"
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
                    <span class="cart-product-card__price-count"> $ {{ purchasedGood.price }} .00 </span>
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
            </li>`,
  props: ['purchasedGood'],
});

Vue.component('cart-product', {
  template: `<section class="container cart-content">
              <h2 class="visually-hidden">cart-content</h2>
              <cart-products v-bind:cart="cart" @clear-shoping-cart="clearShopingCart"></cart-products>
              <div class="cart-form">
                <cart-order></cart-order>
                <cart-cost v-bind:cost="cost"></cart-cost>
              </div>
            </section>`,
  props: ['cart', 'cost'],
  methods: {
    clearShopingCart() {
      this.$emit('clear-shoping-cart');
    },
  },
});

Vue.component('site-footer', {
  template: `<footer>
  <section class="footer">
    <h2 class="cart-main__text visually-hidden">footer</h2>
    <div class="footer__list container">
      <div class="footer__blockquote">
        <img class="footer__pic" src="./img/photo.svg" alt="photo" />
        <p class="footer__quote">
          “Vestibulum quis porttitor dui! Quisque viverra nunc mi,
          <span class="footer__subquote">
            a pulvinar purus condimentum“</span
          >
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
          <img src="./img/icon1.jpg" alt="logo1" />
        </li>
        <li class="socials__icon">
          <img src="./img/icon2.jpg" alt="logo2" />
        </li>
        <li class="socials__icon">
          <img src="./img/icon3.jpg" alt="logo3" />
        </li>
        <li class="socials__icon">
          <img src="./img/icon4.jpg" alt="logo4" />
        </li>
      </ul>
    </div>
  </section>
</footer>`,
});

Vue.component('index-page', {
  template: `<div> 
  <site-header @goTo="goToHandler" v-bind:count="count"> </site-header>
  <brand></brand>
  <stocks></stocks>
  <good-list v-bind:list="list" @add-to-cart="addToCartHandler"></good-list>
  <advantages></advantages>
  <site-footer></site-footer>
  </div>`,
  methods: {
    goToHandler(target) {
      this.$emit('go-to', target);
    },
    addToCartHandler(id) {
      this.$emit('add-to-cart', id);
    },
  },
  props: ['list', 'count'],
});

Vue.component('cart-page', {
  template: `<div>
                <site-header @goTo="goToHandler" v-bind:count="count"> </site-header>
                <h1 class="visually-hidden">cart-main</h1>
                <cart-top></cart-top>  
                <cart-product v-bind:cart="cart" v-bind:cost="cost" @clear-shoping-cart="clearShopingCart"></cart-product>              
                <site-footer></site-footer>
            </div>`,
  methods: {
    goToHandler(target) {
      this.$emit('go-to', target);
    },
    clearShopingCart() {
      this.$emit('clear-shoping-cart');
    },
  },
  props: ['cart', 'count', 'cost'],
});

var app = new Vue({
  el: '#app',
  data: {
    currentPage: 'index',
    list: [
      {
        id: 1,
        title: "ellery x m'o capsule",
        description:
          'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        image: 'product1',
        price: 52,
        discount: 5,
        quantity: 1,
      },
      {
        id: 2,
        title: "ellery x m'o capsule",
        description:
          'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        image: 'product2',
        price: 52,
        discount: 5,
        quantity: 1,
      },
      {
        id: 3,
        title: "ellery x m'o capsule",
        description:
          'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        image: 'product3',
        price: 52,
        discount: 5,
        quantity: 1,
      },
      {
        id: 4,
        title: "ellery x m'o capsule",
        description:
          'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        image: 'product4',
        price: 52,
        discount: 5,
        quantity: 1,
      },
      {
        id: 5,
        title: "ellery x m'o capsule",
        description:
          'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        image: 'product5',
        price: 52,
        discount: 5,
        quantity: 1,
      },
      {
        id: 6,
        title: "ellery x m'o capsule",
        description:
          'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        image: 'product6',
        price: 52,
        discount: 5,
        quantity: 1,
      },
    ],
    cart: [],
    cost: 0,
  },
  methods: {
    goToHandler(target) {
      this.currentPage = target;
    },
    addToCartHandler(id) {
      const good = this.list.find((g) => g.id === id);
      if (this.cart.find((e) => e.id === good.id)) {
        const purchasedGood = this.cart.find((e) => e.id === good.id);
        purchasedGood.quantity++;
        purchasedGood.price = purchasedGood.price * purchasedGood.quantity;
      } else {
        this.cart.push(good);
      }
      this.cost = this.cart.reduce((acc, good) => acc + good.price, 0);
    },
    clearShopingCart() {
      this.cart = [];
      this.cost = 0;
    },
  },
});
