class ProductItem {
  constructor(product, img = 'https://placehold.it/200x150') {
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

class ProductList {
  constructor(container = '.products') {
    this.container = container;
    this.goods = [];
    this.allProducts = [];
    this._fetchProducts();
    this._render();
  }

  _fetchProducts() {
    this.goods = [
      {id: 1, title: 'Notebook', price: 40000},
      {id: 2, title: 'Mouse', price: 1000},
      {id: 3, title: 'Keyboard', price: 2500},
      {id: 4, title: 'Gamepad', price: 1500},
    ];
  }

  _render() {
    const block = document.querySelector(this.container);

    for (let product of this.goods) {
      const productObject = new ProductItem(product);
      this.allProducts.push(productObject);
      block.insertAdjacentHTML('beforeend', productObject.render());
    }
  }
}

const list = new ProductList();



// const products = [
//   {id: 1, title: 'Notebook', price: 40000},
//   {id: 2, title: 'Mouse', price: 1000},
//   {id: 3, title: 'Keyboard', price: 2500},
//   {id: 4, title: 'Gamepad', price: 1500},
// ];
//
// const renderProduct = (item, img = 'https://placehold.it/200x150') => `<div class="product-item">
//             <img src="${img}" alt="Some img">
//             <h3>${item.title}</h3>
//             <p>${item.price}</p>
//             <button class="by-btn">Добавить</button>
//           </div>`;
//
// const renderProducts = list => document.querySelector('.products')
//   .insertAdjacentHTML('beforeend', list.map(item => renderProduct(item)).join(''));
//
// renderProducts(products);
