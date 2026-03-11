const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function question(promptText) {
    return new Promise((resolve) => rl.question(promptText, resolve));  
}

async function main() {
    console.log("Iniciando cálculo de média. Responda às perguntas abaixo:");

    const nome = await question("Digite o nome do aluno:\n");
    const nota1 = parseFloat(await question("Digite a primeira nota:\n"));
    const nota2 = parseFloat(await question("Digite a segunda nota:\n"));
    const nota3 = parseFloat(await question("Digite a terceira nota:\n"));

    const media = (nota1 + nota2 + nota3) / 3;

    console.log(`A média de ${nome} é: ${media.toFixed(2)}`);

    if (media >= 7) {
        console.log(`${nome} está aprovado.`);
    } else if (media >= 5) {
        console.log(`${nome} está de recuperação.`);
    } else {
        console.log(`${nome} está reprovado.`);
    }

    rl.close();
}

main();