const prompt = require('prompt-sync')();

console.log("--- Diferença entre Dois Números Inteiros ---");

// Entrada de Dados
let num1 = Number(prompt("Digite o Primeiro Número: "));
let num2 = Number(prompt("Digite o Segundo Número: "));


// Processamento
// Utilizamos Math.max para encontrar o maior e Math.min para o menor
let maior = Math.max(num1, num2);
let menor = Math.min(num1, num2);

// Calculamos a diferença
let diferenca = maior - menor;

// Saída de Dados
console.log("\n--- Resultado ---");
console.log(`O maior número é: ${maior}`);
console.log(`O menor número é: ${menor}`);
console.log(`A diferença entre eles é: ${diferenca}`);