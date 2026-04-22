// Importando o módulo que você instalou via terminal
const prompt = require('prompt-sync')();

console.log("--- Consumo de Combustível em Viagem ---");

// Entrada de dados
let distancia = Number(prompt("Digite a distância percorrida (km): "));
let consumo = Number(prompt("Digite o consumo do veículo (km/l): "));

// Processamento
let litros = distancia / consumo;

// Saída
console.log(`Você gastou aproximadamente ${litros.toFixed(2)} litros de combustível.`);