let matriz = [];

for (let i = 0; i < 3; i++) {
    matriz[i] = [];

    for (let j = 0; j < 3; j++) {
  matriz[i][j] = parseFloat(
  prompt(`Digite o valor da posição [${i}][${j}]:`)
 );
    }
}


let fator = parseFloat(
    prompt("Digite o fator multiplicador:")
);


for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        matriz[i][j] = matriz[i][j] * fator;
    }
}


console.log("Matriz após a multiplicação:");

for (let i = 0; i < 3; i++) {
    let linha = "";

    for (let j = 0; j < 3; j++) {
        linha += matriz[i][j].toFixed(2) + "\t";
    }

    console.log(linha);
}