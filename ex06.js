// Importando o módulo que você instalou via terminal
const prompt = require('prompt-sync')();

console.log("--- Troca de Valores ---");

// Entrada de dados (sempre converter para número)
let A = Number(prompt("Digite o valor de A: "));
let B = Number(prompt("Digite o valor de B: "));

// Valores antes da troca
console.log(`\nAntes da troca: A = ${A}, B = ${B}`);

// Processamento (usando variável temporária)
let temp = A;
A = B;
B = temp;

// Valores depois da troca
console.log(`Depois da troca: A = ${A}, B = ${B}`);