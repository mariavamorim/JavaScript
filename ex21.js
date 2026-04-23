const prompt = require('prompt-sync')();

console.log("--- Cálculo de Potência ---");

// Entrada de dados
let base = Number(prompt("Digite a Base: "));
let espoente = Number(prompt("Digite o Expoente: "));

// Processamento
let potencia = base ** espoente;

// Saída
console.log(`A Potência é: ${potencia}`);