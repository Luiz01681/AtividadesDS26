const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function question(promptText) {
    return new Promise((resolve) => rl.question(promptText, resolve));  
}

async function main() {
    let positivos = 0;

    for (let i = 0; i < 5; i++) {
        let numerodigitado = parseFloat(await question(`Digite o ${i}º número: `));
        if (numerodigitado > 0) {
            positivos++;
        }
    }

    console.log(`Você digitou ${positivos} número(s) positivo(s).`);
    rl.close();
}

main();