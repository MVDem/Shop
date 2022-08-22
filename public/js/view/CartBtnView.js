export default class CartBtnView {
  constructor(goodsCount) {
    this._data = goodsCount;
  }

  getHtml() {
    return `<a class="header__person-link header__person-cart" href="./cart.html">
                <img src="./img/card.svg" alt="card" width="32" height="29" />
                <span class="header__person-lable">${this._data}</span>
            </a>`;
  }

  render($container, target = 'beforeend') {
    $container.insertAdjacentHTML(target, this.getHtml());
  }
}
