const prompt = require('prompt-sync')();

console.log("---Verificação de Faixa de Valor---");

// Entrada de dados 
let numero = Number(prompt("Insira um valor inteiro:"));

// Processamento
if(numero >= 1 && numero <= 9) {
    console.log("Valor está na faixa permitida");
}else {
    console.log("Valor não está na faixa permitida");
}