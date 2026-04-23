const prompt = require('prompt-sync')();

console.log("--- Cálculo de Raiz ---");

// Entrada de Dados
let base = Number(prompt("Digite a base (o número dentro da raiz): "));
let indice = Number(prompt("Digite o índice da raiz (ex: 2 para quadrada, 3 para cúbica): "));

// Processamento
let resultado = base ** (1 / indice);

// Saída de Dados
console.log("\n--- Resultado ---");
console.log(`A raiz de índice ${indice} da base ${base} é: ${resultado}`);