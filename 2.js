let precoCusto = parseFloat(
    prompt("Digite o preço de custo do produto:")
);

let margemLucro = parseFloat(
    prompt("Digite a porcentagem de lucro desejada:")
);

let lucro = precoCusto * (margemLucro / 100);
let precoVenda = precoCusto + lucro;

alert(
    `Valor do lucro: R$ ${lucro.toFixed(2)}\n` +
    `Preço final de venda: R$ ${precoVenda.toFixed(2)}`
);