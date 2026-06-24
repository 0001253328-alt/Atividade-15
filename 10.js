function calcularMediaPonderada(n1, n2, p1, p2) {
    return (n1 * p1 + n2 * p2) / (p1 + p2);
}

let nota1 = parseFloat(prompt("Digite a primeira nota:"));
let nota2 = parseFloat(prompt("Digite a segunda nota:"));

let peso1 = parseFloat(prompt("Digite o peso da primeira nota:"));
let peso2 = parseFloat(prompt("Digite o peso da segunda nota:"));

let media = calcularMediaPonderada(nota1, nota2, peso1, peso2);

console.log("Média ponderada: " + media.toFixed(2));