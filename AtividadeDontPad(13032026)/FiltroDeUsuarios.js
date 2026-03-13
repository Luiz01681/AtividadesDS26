const usuarios = [
  { nome: "Ana", idade: 16 },
  { nome: "Carlos", idade: 22 },
  { nome: "Bia", idade: 15 },
  { nome: "José", idade: 30 }
];

function mostrarTodos() {
  console.log(usuarios);
}

function mostrarMaioresDe18() {
  const maiores = usuarios.filter(usuario => usuario.idade >= 18);
  console.log(maiores);
}