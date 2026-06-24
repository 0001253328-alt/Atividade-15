
let senhaCorreta = "segredo123";
let tentativas = 0;
let acesso = false;

while (tentativas < 3) {
    let senha = prompt("Digite a senha:");

    if (senha === senhaCorreta) {
        console.log("Acesso Permitido");
        acesso = true;
        break;
    }

    tentativas++;
}

if (!acesso) {
    console.log("Conta Bloqueada");
}