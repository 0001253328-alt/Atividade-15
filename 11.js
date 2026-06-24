let inicio = parseInt(prompt("Digite o início do intervalo:"));
let fim = parseInt(prompt("Digite o fim do intervalo:"));

let soma = 0;

for (let i = inicio; i <= fim; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        soma += i;
    }
}

console.log("Soma dos múltiplos de 3 ou 5: " + soma);