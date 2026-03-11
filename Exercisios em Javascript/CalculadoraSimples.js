const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function question(promptText) {
    return new Promise((resolve) => rl.question(promptText, resolve));
}

async function main() {
    const num1 = parseFloat(await question("Digite o primeiro número: "));
    const num2 = parseFloat(await question("Digite o segundo número: "));
    const operacao = (await question("Digite a operação (+, -, *, /): ")).trim();

    let resultado;

    if (operacao === "+") {
        resultado = num1 + num2;
    } else if (operacao === "-") {
        resultado = num1 - num2;
    } else if (operacao === "*") {
        resultado = num1 * num2;
    } else if (operacao === "/") {
        if (num2 !== 0) {
            resultado = num1 / num2;
        } else {
            console.log("Erro: Divisão por zero não é permitida.");
            resultado = null;
        }
    } else {
        console.log("Operação inválida.");
        resultado = null;
    }

    if (resultado !== null) {
        console.log("O resultado é: " + resultado);
    }

    rl.close();
}

main();
