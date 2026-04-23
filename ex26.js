const prompt = require('prompt-sync')();

console.log("--- Quadrado da Divisão ---");

// Entrada de Dados
let num1 = Number(prompt("Digite o primeiro número inteiro (dividendo): "));
let num2 = Number(prompt("Digite o segundo número inteiro (divisor): "));

// Processamento
let divisao = num1 / num2;
let quadrado = divisao ** 2;

// Saída de Dados
console.log("\n--- Resultado ---");
console.log(`O quadrado da divisão de ${num1} por ${num2} é: ${Math.floor(quadrado)}`);