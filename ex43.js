const prompt = require('prompt-sync')();

console.log("--- Tabuada de um Número ---");

let numero = Number(prompt("Insira o número que deseja para a tabuada:"));
let multiplicador = 1;

while (multiplicador <= 10) {
    let produto = numero * multiplicador;
    console.log(numero + " x " + multiplicador + " = " + produto);
    multiplicador++;
}

