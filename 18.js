
let A = [];
let B = [];
let C = [];

for (let i = 0; i < 5; i++) {
    A[i] = parseInt(prompt(`Digite o valor de A[${i}]:`));
}

for (let i = 0; i < 5; i++) {
    B[i] = parseInt(prompt(`Digite o valor de B[${i}]:`));
}

for (let i = 0; i < 5; i++) {
    C[2 * i] = A[i];
    C[2 * i + 1] = B[i];
}

console.log("Vetor A:", A);
console.log("Vetor B:", B);
console.log("Vetor C:", C);