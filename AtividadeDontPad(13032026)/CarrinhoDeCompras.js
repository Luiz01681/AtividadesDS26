let carrinho = [];

function adicionarAoCarrinho(nomeProduto) {
  carrinho.push({ nome: nomeProduto });
  console.log(carrinho);
}

function removerUltimoProduto() {
  carrinho.pop();
  console.log(carrinho);
}