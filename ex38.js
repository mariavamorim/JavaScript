const prompt = require('prompt-sync')();

console.log("---Verificação de Valor Menor ou Igual a 3---");

// Entrada de dados 
let numero = Number(prompt("Insira um valor inteiro:"));

// Processamento
if(numero <=3) {
    console.log(numero);
}else {
    console.log("valor inválido");
}
