let base = parseFloat(prompt("Digite a base:"));
let expoente = parseInt(prompt("Digite o expoente:"));

let resultado = 1;

for (let i = 1; i <= expoente; i++) {
    resultado = resultado * base;
}

console.log(`${base} elevado a ${expoente} = ${resultado}`);