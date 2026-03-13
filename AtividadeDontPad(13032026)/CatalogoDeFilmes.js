let filmes = [];

function adicionarFilme(titulo, genero, ano) {
  filmes.push({ titulo, genero, ano });
  console.log(filmes);
}

function mostrarTodosFilmes() {
  console.log(filmes);
}

function filtrarPorGenero(generoBuscado) {
  const resultado = filmes.filter(filme => filme.genero === generoBuscado);
  console.log(resultado);
}