// Importando o módulo que você instalou via terminal
const prompt = require('prompt-sync')();

console.log("--- Conversor de Temperatura (Fahrenheit → Celsius) ---");

// Entrada de dados
let fahrenheit = Number(prompt("Digite a temperatura em Fahrenheit: "));

// Processamento
let celsius = (fahrenheit - 32) * 5/9;

// Saída
console.log(`A temperatura de ${fahrenheit}°F em Celsius é: ${celsius.toFixed(2)}°C`);