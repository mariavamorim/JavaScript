const prompt = require('prompt-sync')();

console.log("--- Conversão de Real para Dólar ---");

// Entrada de dados
let real = Number(prompt("Digite o valor em Reais: "));

// Processamento
let dólar = real / 5.20;

// Saída
console.log(`A Conversão de ${real} Reais em Dólar é: ${dólar} Dólars`);