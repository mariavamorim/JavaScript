const prompt = require('prompt-sync')();

console.log("---Maior e Menor Valor---");

// Entrada de dados 
let num1 = Number(prompt("Insira o primeiro valor inteiro:"));
let num2 = Number(prompt("Insira o segundo valor inteiro:"));
let num3 = Number(prompt("Insira o terceiro valor inteiro:"));
let num4 = Number(prompt("Insira o quarto valor inteiro:"));
let num5 = Number(prompt("Insira o quinto valor inteiro:"));

// Processamento
// Utilizamos Math.max para encontrar o maior e Math.min para o menor
let maior = Math.max(num1, num2, num3, num4, num5);
let menor = Math.min(num1, num2, num3, num4, num5);

// Saída de dados 
console.log(`O maior número é: ${maior}`);
console.log(`O menor número é: ${menor}`);
