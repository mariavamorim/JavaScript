const prompt = require('prompt-sync')();

console.log('---Resolução de Equação de Segundo Grau---');

// Enrada de dados
const a = Number(prompt("insira o valore do coeficiente a:"));
const b = Number(prompt("insira o valore do coeficiente b:"));
const c = Number(prompt("insira o valore do coeficiente c:"));


// Processamento e Saída de dados
// Usamos a formula x = (-b ± √(b² - 4ac)) / 2a.
let delta = b * b - 4 * a * c;
if (delta >= 0) {
   let x2 = (-b - Math.sqrt(delta)) / (2 * a);
   let x1 = (-b + Math.sqrt(delta)) / (2 * a);
 console.log (`x1 ≃ ${x1. toFixed(2)}, x2 ≃ ${x2. toFixed(2)}, raízes da equação`);
}else {
   console.log(`Não existem raízes reais`);
}

