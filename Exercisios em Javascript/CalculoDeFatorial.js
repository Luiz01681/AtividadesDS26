const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function question(promptText) {
    return new Promise((resolve) => rl.question(promptText, resolve));  
}
async function main() {
    let numFatorial = parseInt(await question("Digite um número inteiro positivo: "));
let fatorial = 1;

if (numFatorial < 0) {
    console.log("Não existe fatorial de número negativo.");
} else {
    for (let i = 1; i <= numFatorial; i++) {
        fatorial *= i;
    }
    console.log(`O fatorial de ${numFatorial}! é: ${fatorial}`); 
}
    rl.close();
}
main();