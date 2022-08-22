export default class CardView {
  constructor(good) {
    this._data = good;
    this._addHandlerCb = null;
  }

  getHtml() {
    return `<li class="product__item" id="card-${this._data.id}">
    <div class="product__item-opacity"> <img
      src="./img/${this._data.image}.jpg"
      alt="product4"
      width="360"
      height="420"
    />
    <h3 class="product__text">${this._data.title}</h3>
    <p class="product__subtext">${this._data.description}</p>
    <p class="product__price">$${this._data.price}</p>
    </div>
    <button class="product__cart" type="button">
      <span class="product__button-text">Add to Cart</span>
    </button>
  </li>`;
  }

  render($container, target = 'beforeend') {
    $container.insertAdjacentHTML(target, this.getHtml());
    if (this._addHandler) {
      const addBtn = $container.querySelector(
        `#card-${this._data.id} > .product__cart`
      );
      addBtn.addEventListener('click', this._addHandler.bind(this));
    }
  }

  _addHandler() {
    this._addHandlerCb(this._data.id);
  }

  setAddHandler(callBack) {
    this._addHandlerCb = callBack;
  }
}
