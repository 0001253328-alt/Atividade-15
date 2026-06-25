let matriz = [];
let soma = 0;

for (let i = 0; i < 4; i++) {
    matriz[i] = [];

    for (let j = 0; j < 4; j++) {
 matriz[i][j] = parseInt(
  prompt(`Digite o valor da posição [${i}][${j}]:`)
   );
    }
}

for (let i = 0; i < 4; i++) {
    soma += matriz[i][1];
}

console.log("Soma da segunda coluna: " + soma);