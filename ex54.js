const prompt = require('prompt-sync')();

console.log("--- Somatório e Média de Dez Valores ---");

// INICIALIZAR somatorio COM 0
let somatorio = 0;

// INICIALIZAR contador COM 0
let contador = 0;

// ENQUANTO contador < 10 FAÇA
while( contador < 10 ){
//     SOLICITAR valor
let valor =Number(prompt("Insira um valor: "));
//     somatorio = somatorio + valor
somatorio = somatorio + valor;
//     contador = contador + 1
contador = contador + 1;
// media = somatorio / 10
let media = somatorio / 10;
// EXIBIR "Somatório: " + somatorio + ", Média: " + media
console.log("Somatório: " + somatorio + ", Média: " + media );
}