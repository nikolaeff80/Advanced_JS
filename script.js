class ProductList {
  constructor(container = '.products') {
    this.container = container;
    this.goods = [];
    this.allProducts = [];
    this._fetchProducts();
    this.render();
  }

  _fetchProducts() {
    this.goods = [
  { title: 'Shirt', price: 150, photo: 'shirt' },
  { title: 'Socks', price: 50, photo: 'socks'},
  { title: 'Jacket', price: 350, photo: 'Jacket'},
  { title: 'Shoes', price: 250, photo: 'Shoes'},
];
  }

  render() {
    const block = document.querySelector(this.container);
    for (let product of this.goods) {
      const productObject = new ProductItem(product);
      this.allProducts.push(productObject);
      block.insertAdjacentHTML('beforeend', productObject.render());
    }
  }

  getTotal() {
    return this.goods.reduce((acc, item) => acc + item.price, 0);
  }
}

class ProductItem {
  constructor(product, img='https://placehold.it/200x150') {
    this.title = product.title;
    this.price = product.price;
    this.id = product.id;
    this.img = img;
  }

  render() {
    return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} \u20bd</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`;
  }
}


class Cart {
  constructor() {
    this.allProducts = [];
  }

  addProduct(item, amount) {
    // TODO проверить не добавлен ли уже товар, тогда просто увеличить количество,
    // иначе создать новый CartItem
    // Далее отрендерить, единственное тут вопрос рендерить все заново или отслеживать что именно изменилось
  }

  removeProduct(id, amount = 0) {
    // TODO удалить из корзины товар по id
    // Если количество удалаемых экземпляров не указано, тогда удалить весь элемент CartItem,
    // либо если количество экземпляров окажется равным нулю, тогда тоже удалить весь элемент CartItem
    // Иначе просто уменьшить количество экземпляров указанного товара
  }

  removeAll() {
    this.allProducts = [];
    this.render();
  }


  render() {
    // TODO свой рендер HTML
  }
}

class CartItem extends ProductItem{
  constructor(product, amount, img='https://placehold.it/200x150') {
    super(product, img);
    this.amount = amount;
  }

  getAmount() {
    return this.amount;
  }

  setAmount(amount) {
    this.amount = amount;

  }

  render() {
    // TODO будет свой рендер
  }
}