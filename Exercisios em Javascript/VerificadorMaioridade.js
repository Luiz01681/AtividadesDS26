const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function question(promptText) {
    return new Promise((resolve) => rl.question(promptText, resolve));
}

async function main() {
    const idade = parseInt(await question("Digite sua idade: "));

    if (idade >= 18) {
        console.log("Você é maior de idade.");
    } else {
        console.log("Você é menor de idade.");
    }

    rl.close();
}

main();