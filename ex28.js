const prompt = require('prompt-sync')();

console.log("--- Classificação de Números ---");

// Entrada de Dados
let numero = Number(prompt("Digite um número inteiro: "));

// Processamento e 3. Saída de Dados
// Usamos a lógica de comparação para classificar o número
if (numero > 0) {
    console.log(`O número ${numero} é: POSITIVO.`);
} else if (numero < 0) {
    console.log(`O número ${numero} é: NEGATIVO.`);
} else {
    // Se não é maior que zero nem menor, só pode ser zero
    console.log(`O número inserido é NEUTRO (zero).`);
}