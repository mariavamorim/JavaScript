const prompt = require('prompt-sync')();

console.log("--- Sistema de Notas com Exame ---");

// Entrada de Dados
let n1 = Number(prompt("Digite a 1ª nota: "));
let n2 = Number(prompt("Digite a 2ª nota: "));
let n3 = Number(prompt("Digite a 3ª nota: "));
let n4 = Number(prompt("Digite a 4ª nota: "));

// Processamento 
let media = (n1 + n2 + n3 + n4) / 4;

console.log(`\nMédia Inicial: ${media.toFixed(1)}`);

// Verificação
if (media > 7) {
    // Caso de Aprovação Direta
    console.log("Situação: APROVADO!");
} else {
    // Caso a média seja 7 ou menor, entra em Recuperação/Exame
    console.log("Situação: EXAME. Média insuficiente.");
    
    // Solicita a nota do exame
    let notaExame = Number(prompt("Digite a nota do exame: "));
    
    // Calcula a nova média (geralmente a média entre a nota antiga e o exame)
    let novaMedia = (media + notaExame) / 2;
    
    console.log(`\nNova Média após Exame: ${novaMedia}`);
    
    if (novaMedia > 5) {
        console.log("Situação: APROVADO EM EXAME!");
    } else {
        console.log("Situação: REPROVADO.");
    }
}