const prompt = require('prompt-sync')();

console.log("--- Somatório, Média e Total de Valores Lidos ---");

// INICIALIZAR somatorio COM 0
let somatorio = 0;
// INICIALIZAR totalValores COM 0
totalValores = 0;
// INICIALIZAR media COM 0
let media = 0;

// ENQUANTO TRUE FAÇA
while (true) {

    // SOLICITAR valor
    let valor = Number(prompt("Digite um valor: "));

    // SE valor <= 0 ENTÃO
    if (valor <= 0) {
        break; // SAIR DO LAÇO
    }

    // somatorio = somatorio + valor
    somatorio += valor;

    // totalValores = totalValores + 1
    totalValores++;

    // media = somatorio / totalValores
    media = somatorio / totalValores;
}

// EXIBIR resultados
console.log("Somatório: " + somatorio);
console.log("Média: " + media);
console.log("Total de valores lidos: " + totalValores);