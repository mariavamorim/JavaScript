const prompt = require('prompt-sync')();

console.log("--- Apuração de Votos ---");

// Entrada de dados
let candidato1 = Number(prompt("Digite os votos do candidato 1: "));
let candidato2 = Number(prompt("Digite os votos do candidato 2: "));
let candidato3 = Number(prompt("Digite os votos do candidato 3: "));
let nulos = Number(prompt("Digite a quantidade de votos nulos: "));
let branco = Number(prompt("Digite a quantidade de votos em branco: "));

// Processamento
let total = candidato1 + candidato2 + candidato3 + nulos + branco;

let perc1 = (candidato1 / total) * 100;
let perc2 = (candidato2 / total) * 100;
let perc3 = (candidato3 / total) * 100;
let percNulos = (nulos / total) * 100;
let percBranco = (branco / total) * 100;

// Saída
console.log(`Total de eleitores: ${total}`);

console.log(`Candidato 1: ${perc1.toFixed(2)}%`);
console.log(`Candidato 2: ${perc2.toFixed(2)}%`);
console.log(`Candidato 3: ${perc3.toFixed(2)}%`);

console.log(`Votos nulos: ${percNulos.toFixed(2)}%`);
console.log(`Votos em branco: ${percBranco.toFixed(2)}%`);