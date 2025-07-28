const products = [

  {

    name: "Vestido Floral Roxo",

    price: 129.90,

    image: "https://via.placeholder.com/220x280.png?text=Vestido+Floral"

  },

  {

    name: "Vestido Lilás Elegante",

    price: 159.99,

    image: "https://via.placeholder.com/220x280.png?text=Vestido+Lilás"

  },

  {

    name: "Saia Midi Rosé",

    price: 89.90,

    image: "https://via.placeholder.com/220x280.png?text=Saia+Midi"

  },

  {

    name: "Saia Plissada Lilás",

    price: 99.90,

    image: "https://via.placeholder.com/220x280.png?text=Saia+Plissada"

  }

];

function renderProducts(productList) {

  const section = document.getElementById("products");

  section.innerHTML = "";

  productList.forEach(product => {

    section.innerHTML += `
<div class="product">
<img src="${product.image}" alt="${product.name}">
<h3>${product.name}</h3>
<p>R$ ${product.price.toFixed(2)}</p>
<button>Adicionar ao carrinho</button>
</div>

    `;

  });

}

function filterProducts() {

  const query = document.getElementById("search").value.toLowerCase();

  const filtered = products.filter(p => p.name.toLowerCase().includes(query));

  renderProducts(filtered);

}

renderProducts(products);
