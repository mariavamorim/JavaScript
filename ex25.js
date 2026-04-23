const prompt = require('prompt-sync')();

console.log("--- Sucessor e Antecessor ---");

// Entrada de Dados
let numero = Number(prompt("Digite um número inteiro: "));

// Processamento
let antecessor = numero - 1;
let sucessor = numero + 1;

// Saída de Dados
console.log("\n--- Resultado ---");
console.log(`Analisando o número: ${numero}`);
console.log(`O seu antecessor é: ${antecessor}`);
console.log(`O seu sucessor é: ${sucessor}`);