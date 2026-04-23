const prompt = require('prompt-sync')();

console.log("---Ordenação de Três Números Inteiros---");

// Entrada de dados 
let num1 = Number(prompt("Insira um valor inteiro:"));
let num2 = Number(prompt("Insira o segundo valor inteiro:"));
let num3 = Number(prompt("Insira o terceiro valor inteiro:"));

// Processamento
// Entre os números 1 e 2
if (num1 > num2) {
       TEMP = num1;
       num1 = num2;
       num2 = TEMP;
}
// Entre os números 1 e 3
if (num1 > num3) {
        TEMP = num1;
        num1 = num3;
        num3 = TEMP;
}
// Entre os números 2 e 3
if (num2 > num3) {
        TEMP = num2;
        num2 = num3;
        num3 = TEMP;
}
// saída de dados
console.log(`${num1}, ${num2}, ${num3}`);



