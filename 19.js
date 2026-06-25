function contarMaioresQue50(vetor) {
    let contador = 0;

    for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] > 50) {
    contador++;
}
    }

    return contador;
}

let numeros = [];

for (let i = 0; i < 7; i++) {
    numeros[i] = parseInt(
        prompt(`Digite o valor da posição ${i}:`)
    );
}

let resultado = contarMaioresQue50(numeros);

console.log("Vetor:", numeros);
console.log(
    "Quantidade de números positivos e maiores que 50: " + resultado
);