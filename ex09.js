// Importando o módulo que você instalou via terminal
const prompt = require('prompt-sync')();

console.log("--- Cálculo do Quadrado de um Número ---");

// Entrada de dados
let numero = Number(prompt("Digite um número inteiro: "));

// Processamento
let quadrado = numero * numero;

// Saída de dados
console.log(`\nO quadrado de ${numero} é: ${quadrado}`);