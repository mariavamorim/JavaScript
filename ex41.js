const prompt = require('prompt-sync')();

console.log("---Multiplicação e Verificação---");

// Entrada de dados
let numero = Number(prompt("Insira um valor inteiro:"));

// Processamento
let resultado = numero * 2;
if(resultado > 30) {
    console.log(resultado);
}else {
    console.log("O resultado da multiplicação não corresponde à 30");
}


