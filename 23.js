let A = [];
let B = [];

for (let i = 0; i < 2; i++) {
    A[i] = [];

    for (let j = 0; j < 3; j++) {
        A[i][j] = parseInt(
            prompt(`Digite o valor de A[${i}][${j}]:`)
        );
    }
}

for (let i = 0; i < 3; i++) {
    B[i] = [];

    for (let j = 0; j < 2; j++) {
        B[i][j] = A[j][i];
    }
}

console.log("Matriz Transposta (B):");

for (let i = 0; i < 3; i++) {
    let linha = "";

    for (let j = 0; j < 2; j++) {
        linha += B[i][j] + "\t";
    }

    console.log(linha);
}