const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function question(promptText) {
    return new Promise((resolve) => rl.question(promptText, resolve));
}

async function main() {
    let tentativas = 0;
    let logado = false;

    console.log("Sistema de login iniciado. (Usuário: admin / Senha: 1234)");

    while (tentativas < 3) {
        const usuario = await question("Digite o nome de usuário: ");
        const senha = await question("Digite a senha: ");

        if (usuario === "admin" && senha === "1234") {
            console.log("Login realizado com sucesso! Bem-vindo.");
            logado = true;
            break;
        } else {
            tentativas++;
            console.log(`Usuário ou senha incorretos. Tentativas restantes: ${3 - tentativas}`);
        }
    }

    if (!logado) {
        console.log("Acesso bloqueado. Número máximo de tentativas atingido.");
    }

    rl.close();
}

main();