let jogadores = [];

function adicionarJogador(nome, pontos) {
  jogadores.push({ jogador: nome, pontos: pontos });
}

function gerarRanking() {
  jogadores.sort((a, b) => b.pontos - a.pontos);

  const ranking = jogadores.map((jog, index) => {
    return {
      posicao: index + 1,
      jogador: jog.jogador,
      pontos: jog.pontos
    };
  });

  console.log(ranking);
}