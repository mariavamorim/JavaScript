const prompt = require('prompt-sync')();

console.log("--- Conversão de Dólar para Real ---");

// Entrada de dados
let dólar = Number(prompt("Digite o valor em Dólar: "));

// Processamento
let reais = dólar * 5.20;

// Saída
console.log(`A Conversão de ${dólar} Dólar em Reais é: ${reais} Reais`);