const prompt = require('prompt-sync')();

console.log("--- Conversão de Pés para Metros ---");

// Entrada de Dados
let pes = Number(prompt("Digite a medida em pés: "));

// Processamento
let metros = pes * 0.3048;

// Saída de Dados
console.log(`\nResultado:`);
console.log(`${pes} pés equivalem a ${metros.toFixed(4)} metros.`);