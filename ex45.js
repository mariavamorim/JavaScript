const prompt = require('prompt-sync')();

console.log("--- Soma dos números pares de 2 a 500 ---");

// INICIALIZAR somaPares COM 0
let somaPares = 0;

// PARA cada número DE 2 a 500 COM PASSO 2 FAÇA
for (let numero = 2; numero <= 500; numero += 2) {
    somaPares = somaPares + numero;
}

// EXIBIR somaPares
console.log("Resultado:", somaPares);
