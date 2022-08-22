import eventEmiter from './helpers/eventEmmiter.js';
import Cart from './model/Cart.js';
import ShowCase from './model/ShowCase.js';
import PurchasedGood from './model/PurchasedGood.js';
import CardView from './view/CardView.js';
import CartBtnView from './view/CartBtnView.js';

export default {
  _eventEmiter: eventEmiter,
  _showCaseModel: new ShowCase(),
  _cartModel: new Cart(),

  init() {
    this._eventEmiter.addListener('added', this._renderCart.bind(this));
    this._eventEmiter.addListener('removed', this._renderCart.bind(this));
    this._eventEmiter.addListener('loaded', this._renderCart.bind(this));
    this._eventEmiter.addListener('loaded', this._renderShowCase.bind(this));

    this._cartModel.load();
    this._showCaseModel.load();
  },

  _addToCart(id) {
    const good = new PurchasedGood(this._showCaseModel.get(id));
    this._cartModel.add(good);
  },

  _removeFromCart(id) {
    this._cartModel.remove(id);
  },

  _renderCart() {
    const $header = document.querySelector('.header__controls-right');
    //document.querySelector('#header__person-cart').remove();
    new CartBtnView(this._cartModel.getCount()).render($header, 'beforeend');
  },

  _renderShowCase() {
    const $product = document.querySelector('.product__list');
    $product.textContent = '';

    this._showCaseModel.getAll().forEach((good) => {
      const card = new CardView(good);
      card.render($product, 'beforeend');
      card.setAddHandler(this._addToCart.bind(this));
    });
  },
};
