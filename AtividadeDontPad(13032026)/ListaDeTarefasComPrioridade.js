let tarefas = [];

function adicionarTarefa(titulo, prioridade) {
  const novaTarefa = { titulo: titulo, prioridade: prioridade };

  if (prioridade === "alta") {
    tarefas.unshift(novaTarefa);
  } else {
    tarefas.push(novaTarefa);
  }
  
  console.log(tarefas);
}