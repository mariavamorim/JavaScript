const prompt = require('prompt-sync')();

console.log("--- Quadrado da Soma de Três Números ---");

// Entrada de dados
let num1 = Number(prompt("Digite o primeiro número: "));
let num2 = Number(prompt("Digite o segundo número: "));
let num3 = Number(prompt("Digite o terceiro número: "));

// Processamento
let soma = num1 + num2 + num3;
let quadrado = soma * soma;

// Saída
console.log(`A soma entre ${num1}, ${num2} e ${num3} é: ${soma}`);
console.log(`O quadrado da soma é: ${quadrado}`);