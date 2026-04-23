const prompt = require('prompt-sync')();

console.log("--- Quadrados dos Valores Inteiros de 15 a 200 Contando de 3 em 3 ---");

let numero = 15
// ENQUANTO número <= 200 FAÇA
while ( numero <= 200 ) {
//     quadrado = número * número
let quadrado = numero * numero;

// EXIBIR quadrado
    console.log(quadrado);

    // número = número + 3
    numero = numero + 3;
}