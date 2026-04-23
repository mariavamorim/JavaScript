const prompt = require('prompt-sync')();

console.log("---Múltiplo de 3 e 5---");

// Entrada de dados 
let numero = Number(prompt("Insira um valor inteiro:"));

// Processamento
if(numero % 3 == 0 && numero % 5 == 0 ) {
    console.log(numero);
}