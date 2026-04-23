const prompt = require('prompt-sync')();

console.log("--- Área de uma Circunferência ---");

// Entrada de dados
let raio = Number(prompt("Digite o valor do raio: "));

// valor de PI
let pi = 3.14;

// Processamento
let area = pi * raio * raio;

// Saída
console.log(`A área da circunferência é: ${area}`);