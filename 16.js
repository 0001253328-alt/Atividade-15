let numeros = [];
let pares = [];
let impares = [];

for (let i = 0; i < 10; i++) {
    numeros[i] = parseInt(
        prompt(`Digite o ${i + 1}º número inteiro:`)
    );
}

for (let i = 0; i < 10; i++) {
    if (numeros[i] % 2 === 0) {
        pares.push(numeros[i]);
    } else {
        impares.push(numeros[i]);
    }
}

console.log("Vetor original:", numeros);
console.log("Números pares:", pares);
console.log("Números ímpares:", impares);