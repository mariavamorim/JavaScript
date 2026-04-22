// Importando o módulo que você instalou via terminal
const prompt = require('prompt-sync')();

console.log("--- Cálculo da Diferença entre Dois Números ---");

// Entrada de dados
let num1 = Number(prompt("Digite o primeiro número: "));
let num2 = Number(prompt("Digite o segundo número: "));

// Processamento
let diferenca = num1 - num2;

// Saída de dados
console.log(`\nA diferença entre ${num1} e ${num2} é: ${diferenca}`);