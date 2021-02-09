'use strict';

const goods = [
  { title: 'Shirt', price: 150, photo: 'shirt' },
  { title: 'Socks', price: 50, photo: 'socks'},
  { title: 'Jacket', price: 350, photo: 'Jacket'},
  { title: 'Shoes', price: 250, photo: 'Shoes'},
];

const renderGoodsItem = (title, price, photo) => {
  return `<div class="goods-item">
            <h3 class="goods-item-title">${title}</h3>
            <img src="img/${photo}.jpg" alt="photo" class="item-img">
            <p class="price">${price}</p>
          </div>`;
};

const renderGoodsList = (list) => {
  let goodsList = list.map(item => renderGoodsItem(item.title, item.price, item.photo)).join("");
  document.querySelector('.goods-list').innerHTML = goodsList;
}

renderGoodsList(goods);