let tarefasLS = [];

function adicionarTarefaLS(tarefa) {
  tarefasLS.push(tarefa);
  localStorage.setItem("minhasTarefas", JSON.stringify(tarefasLS));
  console.log(tarefasLS);
}

function carregarTarefasLS() {
  const tarefasSalvas = localStorage.getItem("minhasTarefas");
  
  if (tarefasSalvas) {
    tarefasLS = JSON.parse(tarefasSalvas);
  }
  
  console.log(tarefasLS);
}