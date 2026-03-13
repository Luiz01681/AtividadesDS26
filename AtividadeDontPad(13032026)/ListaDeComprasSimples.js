let compras = [];

function adicionarCompra(item) {
  compras.push(item);
  console.log(compras);
}

function removerCompra(index) {
  compras.splice(index, 1);
  console.log(compras);
}