export default class Card {
  constructor(good) {
    this._data = good;
  }

  getHtml() {
    return `<li class="product__item">
    <img
      src="./img/${this._data.image}.jpg"
      alt="product4"
      width="360"
      height="420"
    />
    <h3 class="product__text">${this._data.title}</h3>
    <p class="product__subtext">${this._data.description}</p>
    <p class="product__price">$${this._data.getPrice()}</p>
    <button class="product__cart" type="button">
      <span class="product__button-text">Add to Cart</span>
    </button>
  </li>`;
  }

  render($container, target = 'beforeend') {
    $container.insertAdjacentHTML(target, this.getHtml());
  }
}
