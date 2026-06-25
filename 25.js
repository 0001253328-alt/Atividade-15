function exibirInventario(produtos, estoque) {
    console.log("=== INVENTÁRIO CONSOLIDADO ===");

    for (let i = 0; i < produtos.length; i++) {
  let total = estoque[i][0] + estoque[i][1];

   console.log(
  `${produtos[i]}: ${total} unidades`
    );
    }
}

let produtos = [];
let estoque = [];

for (let i = 0; i < 4; i++) {
    produtos[i] = prompt(`Digite o nome do produto ${i + 1}:`);

    estoque[i] = [];

    for (let j = 0; j < 2; j++) {
   estoque[i][j] = parseInt(
   prompt(`Quantidade de ${produtos[i]} na Filial ${j + 1}:`)
  );
    }
}

exibirInventario(produtos, estoque);