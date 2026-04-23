const prompt = require('prompt-sync')();

console.log("--- Soma dos Cem Primeiros Números Naturais ---");

// INICIALIZAR soma COM 0
let soma = 0;

// contador = 1
let contador = 1;

// ENQUANTO contador <= 100 FAÇA
while (contador <= 100) {
    soma = soma + contador; // soma = soma + contador
    contador++; // contador = contador + 1
}

// EXIBIR soma
console.log("Resultado:", soma);


