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
    const n = parseInt(await question("Digite um número inteiro positivo: "));
    console.log(`Contagem de 1 até ${n}:`);
    for (let i = 1; i <= n; i++) {
        process.stdout.write(i + (i < n ? " " : "\n"));
    }
    rl.close();
}

main();