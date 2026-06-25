let matriz = [];
let maior;
let linhaMaior = 0;
let colunaMaior = 0;

for (let i = 0; i < 3; i++) {
    matriz[i] = [];

    for (let j = 0; j < 3; j++) {
 matriz[i][j] = parseInt(
  prompt(`Digite o valor da posição [${i}][${j}]:`)
);


   if (i === 0 && j === 0) {
    maior = matriz[i][j];
} else if (matriz[i][j] > maior) {
    maior = matriz[i][j];
    linhaMaior = i;
    colunaMaior = j;
    }
    }
}

console.log("Matriz:");

for (let i = 0; i < 3; i++) {
    console.log(matriz[i].join("\t"));
}

console.log("Maior valor encontrado: " + maior);
console.log(
    "Localização: Linha " + linhaMaior +
    " | Coluna " + colunaMaior
);