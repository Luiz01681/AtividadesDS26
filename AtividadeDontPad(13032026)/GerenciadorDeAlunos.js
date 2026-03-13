let alunos = [];

function adicionarAluno(nome, nota) {
  alunos.push({ nome: nome, nota: nota });
  console.log(alunos);
}

function mostrarAprovados() {
  const aprovados = alunos.filter(aluno => aluno.nota >= 7);
  console.log(aprovados);
}