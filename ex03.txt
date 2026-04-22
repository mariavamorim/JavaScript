// Importando o módulo que você instalou via terminal
const prompt = require('prompt-sync')();

console.log("--- Volume de uma Lata de Óleo ---");

// Entrada de dados
let raio = Number(prompt("Digite o raio da base (cm): "));
let altura = Number(prompt("Digite a altura da lata (cm): "));

// Processamento
let volume = Math.PI * Math.pow(raio, 2) * altura;

// Saída
console.log(`O volume da lata é: ${volume.toFixed(2)} cm³`);