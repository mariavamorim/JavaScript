const prompt = require('prompt-sync')();

console.log("--- Divisão Inteira Sem Usar o Operador de Divisão --- ");

// ENTRADA: divisor, dividendo
let divisor =Number(prompt("Insira um divisor: "));
let dividendo =Number(prompt("Insira um dividendo: "));

// INICIALIZAR resultado COM 0
let resultado = 0;

// ENQUANTO dividendo >= divisor FAÇA
while (dividendo >= divisor) {

    // dividendo = dividendo - divisor
    dividendo = dividendo - divisor;

    // resultado = resultado + 1
    resultado++;
}

// EXIBIR resultado
console.log("Resultado da divisão: " + resultado);