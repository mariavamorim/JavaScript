const prompt = require('prompt-sync')();

console.log("--- Cálculo do Volume de uma Esfera ---");

// Entrada de Dados
let raio = Number(prompt("Digite o valor do raio da esfera: "));

// Processamento
let pi = 3.14; 
let volume = (4 / 3) * pi * (raio ** 3);

// 3. Saída de Dados
console.log(`\nCom o raio ${raio}, o volume da esfera é: ${volume. toFixed(2)}`);