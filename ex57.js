const prompt = require('prompt-sync')();

console.log("--- Cálculo da Área Total de uma Residência ---");

// INICIALIZAR areaTotal COM 0
let areaTotal = 0;

// variável para continuar
let continuar;

// FAÇA
do {
//     SOLICITAR nomeDoComodo
let nomeDoComodo =prompt("Insira o nome do comodo: ");
//     SOLICITAR larguraDoComodo
let larguraDoComodo =Number(prompt("Insira a largura do comodo: "));
//     SOLICITAR comprimentoDoComodo
let comprimentoDoComodo =Number(prompt("Insira o comprimento do comodo: "));

//     calcular areaDoComodo = larguraDoComodo * comprimentoDoComodo
let areaDoComodo = larguraDoComodo * comprimentoDoComodo;
//     areaTotal = areaTotal + areaDoComodo
areaTotal = areaTotal + areaDoComodo;

console.log("Área do(a) " + nomeDoComodo + ": " + areaDoComodo + " m²");

    // SOLICITAR continuar
    continuar = prompt("Deseja adicionar outro cômodo? (SIM/NÃO): ");

} while (continuar.toUpperCase() == "SIM");

// EXIBIR resultado
console.log("Área total da residência: " + areaTotal + " metros quadrados");
