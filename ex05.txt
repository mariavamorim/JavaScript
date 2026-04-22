// Importando o módulo que você instalou via terminal
const prompt = require('prompt-sync')();

console.log("--- Prestação em Atraso ---");

// Entrada de dados
let valorOriginal = Number(prompt("Digite o valor da prestação: "));
let mesesAtraso = Number(prompt("Digite o número de meses em atraso: "));
let taxaJuros = Number(prompt("Digite a taxa de juros mensal (%): "));

// Processamento
let valorFinal = valorOriginal * (1 + (taxaJuros / 100) * mesesAtraso);

// Saída
console.log(`O valor da prestação em atraso é: R$ ${valorFinal.toFixed(2)}`);