const prompt = require('prompt-sync')();

console.log("---Quadrados na Faixa de Valores de 15 à 200---");

// INICIALIZAÇÃO
let resultado_quadrados = "";

// PARA cada número de 15 a 200 FAÇA
for (let numero = 15; numero <= 200; numero++) {
    
    // quadrado = número * número
    let quadrado = numero * numero;

    // resultado_quadrados += quadrado + ", "
    resultado_quadrados += quadrado + ", ";
}

// EXIBIR resultado_quadrados
console.log(resultado_quadrados);


