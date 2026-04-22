// Importando o módulo que você instalou via terminal
const prompt = require('prompt-sync')();

console.log("--- Adição e Multiplicação de Quatro Números ---");

// Entrada de dados
let num1 = Number(prompt("Digite o primeiro número: "));
let num2 = Number(prompt("Digite o segundo número: "));
let num3 = Number(prompt("Digite o terceiro número: "));
let num4 = Number(prompt("Digite o quarto número: "));

// Processamento
let soma = num1 + num2 + num3 + num4;
let multiplicacao = num1 * num2 * num3 * num4;

// Saída de dados
console.log(`\nA soma dos números é: ${soma}`);
console.log(`A multiplicação dos números é: ${multiplicacao}`);