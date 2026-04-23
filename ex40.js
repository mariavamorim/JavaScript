const prompt = require('prompt-sync')();

console.log("---Soma e Verificação---");

// Entrada de dados 
let valor1 = Number(prompt("Insira o primeiro valor:"));
let valor2 = Number(prompt("Insira o segundo valor:"));
let valor3 = Number(prompt("Insira o terceiro valor:"));

// Processamento
let soma = valor1 + valor2 + valor3;
if(soma > 100) {
    console.log(soma);
}else{
    console.log("A soma não é maior que 100");
}