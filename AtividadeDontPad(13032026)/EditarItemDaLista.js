let listaDeTarefas = [];

function adicionarTarefaEditavel(tarefa) {
  listaDeTarefas.push(tarefa);
  console.log(listaDeTarefas);
}

function editarTarefa(index, novoNome) {
  listaDeTarefas.splice(index, 1, novoNome);
  console.log(listaDeTarefas);
}