let numero = parseInt(prompt("Digite um número inteiro positivo:"));

let contador = 0;

// Caso especial para o número 0
if (numero === 0) {
    contador = 1;
} else {
    while (numero > 0) {
        numero = Math.floor(numero / 10);
        contador++;
    }
}

console.log(`O número possui ${contador} dígito(s).`);