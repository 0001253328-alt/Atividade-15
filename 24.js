let notas = [];
let medias = [];

for (let i = 0; i < 4; i++) {
    notas[i] = [];

    for (let j = 0; j < 3; j++) {
 notas[i][j] = parseFloat(
 prompt(`Digite a nota da Equipe ${i + 1}, Trimestre ${j + 1}:`)
        );
    }
}

for (let i = 0; i < 4; i++) {
    let soma = 0;

    for (let j = 0; j < 3; j++) {
  soma += notas[i][j];
    }

    medias[i] = soma / 3;
}

console.log("=== RELATÓRIO DE MÉDIAS ===");

for (let i = 0; i < 4; i++) {
    console.log(
 `Equipe ${i + 1}: Média = ${medias[i].toFixed(2)}`
    );
}