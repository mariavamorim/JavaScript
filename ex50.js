const prompt = require('prompt-sync')();

console.log("--- Sequência de Fibonacci ---");

// termo1 = 0
let termo1 = 0;

// termo2 = 1
let termo2 = 1;

// EXIBIR termo1 e termo2
console.log(termo1);
console.log(termo2);

// i = 3
let i = 3;

// ENQUANTO i <= 15 FAÇA
while (i <= 15) {

    // proximo_termo = termo1 + termo2
    let proximo_termo = termo1 + termo2;

    // EXIBIR proximo_termo
    console.log(proximo_termo);

    // atualizar valores
    termo1 = termo2;
    termo2 = proximo_termo;

    // i = i + 1
    i++;
}