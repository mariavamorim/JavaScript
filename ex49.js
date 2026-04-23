const prompt = require('prompt-sync')();

console.log("--- Potência de uma Base Elevada a um Expoente ---");

// ENTRADA: base, expoente
let base = Number(prompt("Digite a base: "));
let expoente = Number(prompt("Digite o expoente: "));

// INICIALIZAR potencia COM base
let potencia = base;

// PARA cada i DE 1 ATÉ expoente FAÇA
for (let i = 1; i < expoente; i++) {
    potencia = potencia * base;
}

// EXIBIR resultado
console.log(base + " elevado a " + expoente + " = " + potencia);