// Importando o módulo que você instalou via terminal
const prompt = require('prompt-sync')();

console.log("--- Cálculo do Volume de uma Caixa Retangular ---");

// Entrada de dados
let comprimento = Number(prompt("Digite o comprimento da caixa: "));
let largura = Number(prompt("Digite a largura da caixa: "));
let altura = Number(prompt("Digite a altura da caixa: "));

// Processamento
let volume = comprimento * largura * altura;

// Saída de dados
console.log(`\nO volume da caixa retangular é: ${volume}`);