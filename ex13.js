const prompt = require('prompt-sync')();

console.log("--- Cálculo da Soma dos Quadrados de Três Números ---");

// Entrada de dados
let num1 = Number(prompt("Digite o primeiro número: "));
let num2 = Number(prompt("Digite o segundo número: "));
let num3 = Number(prompt("Digite o terceiro número: "));

// Processamento
let soma = (num1 * num1) + (num2 * num2) + (num3 * num3);

// Saída
console.log(`A soma dos quadrados de ${num1}, ${num2} e ${num3} é: ${soma}`);