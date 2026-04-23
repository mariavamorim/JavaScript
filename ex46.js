const prompt = require('prompt-sync')();

console.log("--- Números ímpares de 1 a 199 ---");

// INICIALIZAR somaImpares COM 1
let numero = 1;

// ENQUANTO numero <= 199 FAÇA
while (numero <= 199) {
    console.log(numero); // EXIBIR numero
    numero += 2; // número = número + 2
}
