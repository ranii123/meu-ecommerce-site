const products = [

  {

    name: "Vestido Floral Roxo",

    price: 129.90,

    description: "Vestido leve com estampa floral em tons roxos, perfeito para ocasiões especiais.",

    image: "https://via.placeholder.com/220x280.png?text=Vestido+Floral"

  },

  {

    name: "Vestido Lilás Elegante",

    price: 159.99,

    description: "Vestido lilás com corte elegante, ideal para eventos formais.",

    image: "https://via.placeholder.com/220x280.png?text=Vestido+Lilás"

  },

  {

    name: "Saia Midi Rosé",

    price: 89.90,

    description: "Saia midi rosé com tecido confortável e design moderno.",

    image: "https://via.placeholder.com/220x280.png?text=Saia+Midi"

  },

  {

    name: "Saia Plissada Lilás",

    price: 99.90,

    description: "Saia plissada lilás, leve e estilosa para o dia a dia.",

    image: "https://via.placeholder.com/220x280.png?text=Saia+Plissada"

  }

];

let cart = [];

function renderProducts(productList) {

  const section = document.getElementById("products");

  section.innerHTML = "";

  productList.forEach((product, index) => {

    section.innerHTML += `
<div class="product">
<img src="${product.image}" alt="${product.name}">
<h3>${product.name}</h3>
<p><em>${product.description}</em></p>
<p>R$ ${product.price.toFixed(2)}</p>
<button onclick="addToCart(${index})">Adicionar ao carrinho</button>
</div>

    `;

  });

}

function addToCart(index) {

  const product = products[index];

  const itemInCart = cart.find(item => item.name === product.name);

  if (itemInCart) {

    itemInCart.quantity++;

  } else {

    cart.push({...product, quantity: 1});

  }

  renderCart();

}

function renderCart() {

  let cartSection = document.getElementById("cart");

  if (!cartSection) {

    cartSection = document.createElement("section");
cartSection.id = "cart";

    document.body.appendChild(cartSection);

  }

  if (cart.length === 0) {

    cartSection.innerHTML = "<h2>Carrinho vazio</h2>";

    return;

  }

  let html = "<h2>Carrinho de Compras</h2><ul>";

  let total = 0;

  cart.forEach((item, i) => {

    total += item.price * item.quantity;

    html += `<li>${item.name} - ${item.quantity} x R$ ${item.price.toFixed(2)} 
<button onclick="removeFromCart(${i})">Remover</button></li>`;

  });

  html += `</ul><p><strong>Total: R$ ${total.toFixed(2)}</strong></p>`;

  cartSection.innerHTML = html;

}

function removeFromCart(index) {

  cart.splice(index, 1);

  renderCart();

}

function filterProducts() {

  const query = document.getElementById("search").value.toLowerCase();

  const filtered = products.filter(p => p.name.toLowerCase().includes(query));

  renderProducts(filtered);

}

renderProducts(products);

renderCart();
 
