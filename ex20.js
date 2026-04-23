const prompt = require('prompt-sync')();

console.log("--- Velocidade de um Projétil ---");

// Entrada de dados
let distancia = Number(prompt("Digite a distância (em km): "));
let tempo = Number(prompt("Digite o tempo (em horas): "));

// Processamento
let velocidade = (distancia / tempo) / 3.6;

// Saída
console.log(`A velocidade é: ${velocidade.toFixed(2)} m/s`);