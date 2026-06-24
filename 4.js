let lado1 = parseFloat(prompt("Digite o primeiro lado:"));
let lado2 = parseFloat(prompt("Digite o segundo lado:"));
let lado3 = parseFloat(prompt("Digite o terceiro lado:"));

if (lado1 === lado2 && lado2 === lado3) {
    console.log("Triângulo Equilátero");
} else if (
    lado1 === lado2 ||
    lado1 === lado3 ||
    lado2 === lado3
) {
    console.log("Triângulo Isósceles");
} else {
    console.log("Triângulo Escaleno");
}