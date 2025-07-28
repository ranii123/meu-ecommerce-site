const products = [

  {

    name: "Vestido Lilás Floral",

    price: 149.90,

    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fladydress.com.br%2Fvestido-longo-antonela-lilas&psig=AOvVaw1mnEPe51z0qVhPCcus25Rw&ust=1753808720668000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCPCkjeGE4I4DFQAAAAAdAAAAABAE"
  },

  {

    name: "Vestido Curto Roxo",

    price: 129.90,

    image: "https://i.imgur.com/Ti9ETVf.jpg"

  },

  {

    name: "Saia Longa Lavanda",

    price: 89.90,

    image: "https://i.imgur.com/xQZTQ2a.jpg"

  },

  {

    name: "Saia Plissada Roxa",

    price: 99.90,

    image: "https://i.imgur.com/kGG95Dd.jpg"

  }

];

const cart = [];

function renderProducts() {

  const list = document.getElementById("product-list");

  products.forEach((product, index) => {

    list.innerHTML += `
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
<img src="${item.image}" alt="${item.name}">

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

renderProducts();
