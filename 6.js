let saldo = parseFloat(prompt("Digite seu saldo atual:"));
let saque = parseFloat(prompt("Digite o valor que deseja sacar:"));

if (saque <= saldo) {
    saldo = saldo - saque;
    console.log("Saque realizado com sucesso! Novo saldo: R$ " + saldo.toFixed(2));
} else {
    console.log("Saldo insuficiente");
}