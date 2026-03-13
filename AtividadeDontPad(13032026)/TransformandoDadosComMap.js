const produtos = [
 {nome: "Mouse", preco: 50},
 {nome: "Teclado", preco: 100},
 {nome: "Monitor", preco: 800}
];

function aplicarDesconto() {
  const produtosComDesconto = produtos.map(produto => {
    return {
      nome: produto.nome,
      preco: produto.preco * 0.90
    };
  });

  console.log(produtosComDesconto);
}