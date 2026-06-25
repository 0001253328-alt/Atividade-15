let codigos = [];
let encontrado = false;

for (let i = 0; i < 8; i++) {
    codigos[i] = parseInt(
        prompt(`Digite o código do produto ${i + 1}:`)
    );
}

let codigoRemover = parseInt(
    prompt("Qual código deseja remover?")
);

for (let i = 0; i < codigos.length; i++) {
    if (codigos[i] === codigoRemover) {
        codigos[i] = 0;
        encontrado = true;
        break;
    }
}

if (encontrado) {
    console.log("Produto removido com sucesso!");
    console.log("Vetor atualizado:", codigos);
} else {
    console.log("Produto não existe.");
}