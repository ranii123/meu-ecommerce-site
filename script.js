const produtos = [

  {

    nome: "Vestido Floral Roxo",

    preco: 129.90,

    imagem: 

  },

  {

    nome: "Vestido Midi Lilás",

    preco: 159.90,

    imagem: "https://i.imgur.com/8dNtsVd.jpg"

  },

  {

    nome: "Saia Plissada Lavanda",

    preco: 89.90,

    imagem: "https://i.imgur.com/xp1gqbv.jpg"

  },

  {

    nome: "Saia Midi Roxa",

    preco: 99.90,

    imagem: "https://i.imgur.com/xIvGHdd.jpg"

  }

];

const listaProdutos = document.getElementById("product-list");

const carrinhoItens = document.getElementById("cart-items");

const carrinhoTotal = document.getElementById("cart-total");

const campoBusca = document.getElementById("search");

let carrinho = [];

function mostrarProdutos(lista) {

  listaProdutos.innerHTML = "";

  lista.forEach((produto, index) => {

    const div = document.createElement("div");

    div.className = "product";

    div.innerHTML = `
<img src="${produto.imagem}" alt="${produto.nome}">
<h3>${produto.nome}</h3>
<p>R$ ${produto.preco.toFixed(2)}</p>
<button onclick="adicionarAoCarrinho(${index})">Adicionar ao carrinho</button>

    `;

    listaProdutos.appendChild(div);

  });

}

function adicionarAoCarrinho(index) {

  carrinho.push(produtos[index]);

  atualizarCarrinho();

}

function atualizarCarrinho() {

  carrinhoItens.innerHTML = "";

  let total = 0;

  carrinho.forEach((item) => {

    const li = document.createElement("li");

    li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;

    carrinhoItens.appendChild(li);

    total += item.preco;

  });

  carrinhoTotal.textContent = `Total: R$ ${total.toFixed(2)}`;

}

campoBusca.addEventListener("input", () => {

  const termo = campoBusca.value.toLowerCase();

  const resultado = produtos.filter(p => p.nome.toLowerCase().includes(termo));

  mostrarProdutos(resultado);

});

mostrarProdutos(produtos);
 
