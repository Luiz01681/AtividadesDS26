const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function question(promptText) {
    return new Promise((resolve) => rl.question(promptText, resolve));
}

async function main() {
    console.log("");
    const numero = parseInt(await question("Digite um número: "));

    if (numero % 2 === 0) {
        console.log("O número é par.");
    } else {
        console.log("O número é ímpar.");
    }

    rl.close();
}

main();