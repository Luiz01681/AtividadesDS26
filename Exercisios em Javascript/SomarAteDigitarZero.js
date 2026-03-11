const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function question(promptText) {
    return new Promise((resolve) => rl.question(promptText, resolve));  
}

async function main() {
    let soma = 0;
    let valor;

    console.log("Digite números para somar. Digite 0 para finalizar.");
    do {
        valor = parseFloat(await question("Digite um número: "));
        soma += valor;
    } while (valor !== 0);

    console.log(`A soma dos números digitados é: ${soma}`);
    rl.close();
}

main();