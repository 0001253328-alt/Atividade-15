let velocidadeKm = parseFloat(
    prompt("Digite a velocidade em km/h:")
);

let velocidadeMs = velocidadeKm / 3.6;

console.log(
    `Velocidade em m/s: ${velocidadeMs.toFixed(2)}`
);