const products = [

  {

    name: "Vestido Floral Roxo",

    category: "vestido",

    price: 129.99,

    image: "https://i.imgur.com/Ou0bKST.jpg"

  },

  {

    name: "Vestido Midi Lilás",

    category: "vestido",

    price: 159.90,

    image: "https://i.imgur.com/lbZfr7k.jpg"

  },

  {

    name: "Saia Plissada Lavanda",

    category: "saia",

    price: 89.90,

    image: "https://i.imgur.com/BTC9WgE.jpg"

  },

  {

    name: "Saia Curta Roxa",

    category: "saia",

    price: 74.50,

    image: "https://i.imgur.com/MZYzKht.jpg"

  }

];

let cart = [];

function renderProducts(prodList) {

  const container = document.getElementById("products");

  container.innerHTML = "";

  prodList.forEach((product, index) => {

    container.innerHTML += `
<div class="product">
<img src="${product.image}" alt="${product.name}">
<h3>${product.name}</h3>
<p>R$ ${product.price.toFixed(2)}</p>
<button onclick="addToCart(${index})">Adicionar ao carrinho</button>
</div>

    `;

  });

}

function renderCart() {

  const list = document.getElementById("cart-items");

  const total = document.getElementById("cart-total");

  list.innerHTML = "";

  let sum = 0;

  cart.forEach((item, index) => {

    list.innerHTML += `
<li>

        ${item.name} - R$ ${item.price.toFixed(2)}
<button onclick="removeFromCart(${index})">X</button>
</li>

    `;

    sum += item.price;

  });

  total.textContent = `Total: R$ ${sum.toFixed(2)}`;

}

function addToCart(index) {

  cart.push(products[index]);

  renderCart();

}

function removeFromCart(index) {

  cart.splice(index, 1);

  renderCart();

}

document.addEventListener("DOMContentLoaded", () => {

  renderProducts(products);

  renderCart();

  document.getElementById("search").addEventListener("input", function () {

    const value = this.value.toLowerCase();

    const filtered = products.filter(p =>

      p.name.toLowerCase().includes(value) ||

      p.category.toLowerCase().includes(value)

    );

    renderProducts(filtered);

  });

});
 
