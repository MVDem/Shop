import List from './List.js';

export default class Cart extends List {
  constructor(container = '.cart-block', url = 'getCart.json') {
    // Добавить данные
    super(url, container);
    this.getJson().then((data) => {
      return this.handleData(data);
    });
  }

  addProduct(element) {
    this.getJson(`${API}/getCart.json`).then((data) => {
      if (data.result === 1) {
        let productId = +element.dataset['id'];
        let find = this.allProducts.find(
          (product) => product.product_id === productId
        );
        if (find) {
          find.quanriry++;
          this._updateCart(find);
        } else {
          let product = {
            product_id: productId,
            product_price: +element.dataset['price'],
            product_name: element.dataset['name'],
            quantity: 1,
          };
          this.goods = [product];
          this.render();
        }
      } else {
        alert('Error');
      }
    });
  }
  removeProduct(element) {
    this.getJson(`${API}/getCart.json`).then((data) => {
      if (data.result === 1) {
        let productId = +element.dataset['id'];
        let find = this.allProducts.find(
          (product) => product.product_id === productId
        );
        if (find.quantity > 1) {
          find.quantity--;
          this._updateCart(find);
        } else {
          this.allProducts.splise(this.allProducts.indexOf(find), 1);
          document.querySelector(`.cart-item[data-id="${productId}]`).remove();
        }
      } else {
        allert('Error');
      }
    });
  }
  _updateCart(product) {
    let block = document.querySelector(
      `.cart-item[data-id="${product.product_id}"]`
    );
    block.querySelector(
      '.product-quantity'
    ).textContent = `Quantity: ${product.quantity}`;
    block.querySelector('.product-price').textContent = `${
      product.quantity * product.price
    }`;
  }

  _init() {
    /* document
      .querySelector('.header__person-cart')
      .addEventListener('click', () => {
        document.querySelector(this.container).classList.toggle('invisible');
      });
    document.querySelector(this.container).addEventListener('click', (e) => {
      if (e.target.classList.contains('del-btn')) {
        this.removeProduct(e.target);
      }
    }); */
  }
}
