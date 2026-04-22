// Importando o módulo que você instalou via terminal
const prompt = require('prompt-sync')();

console.log("--- Conversor de Temperatura ---");

// Entrada de dados (lembrando: sempre vem como texto, então usamos Number)
let celsius = Number(prompt("Digite a temperatura em Celsius: "));

// Processamento (fórmula F = C * 9/5 + 32)
let fahrenheit = celsius * 9/5 + 32;

// Saída
console.log(`A temperatura de ${celsius}°C em Fahrenheit é: ${fahrenheit}°F`);