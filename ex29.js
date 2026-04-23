const prompt = require('prompt-sync')();

console.log("--- Cálculo da Média e Verificação de Aprovação ---");

// Entrada de Dados
let nota1 = Number(prompt("Digite a nota do 1º Bimestre: "));
let nota2 = Number(prompt("Digite a nota do 2º Bimestre: "));
let nota3 = Number(prompt("Digite a nota do 3º Bimestre: "));
let nota4 = Number(prompt("Digite a nota do 4º Bimestre: "));

// Processamento
// média aritmética (soma das notas dividida pela quantidade)
let media = (nota1 + nota2 + nota3 + nota4) / 4;

// Saída de Dados
console.log("\n--- Boletim Final ---");
console.log(`Média Final: ${media.toFixed(1)}`);

// Verificação de Aprovação (Nota de corte: 5)
if (media >= 7) {
    console.log("Status: ALUNO APROVADO!");
} else {
    console.log("Status: ALUNO REPROVADO.");
}