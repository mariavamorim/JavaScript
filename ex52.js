const prompt = require('prompt-sync')();

console.log("--- Somatório de Grãos de Trigo no Tabuleiro de Xadrez ---");

//INICIALIZAR totalGrãos COM 0
let totalGrãos = 0;

// quadro = 1
let quadro = 1;
// ENQUANTO quadro <= 64 FAÇA
while(quadro <= 64){
//     grãosNoQuadro = 2 elevado a (quadro - 1)
 let grãosNoQuadro = 2 ** (quadro - 1);

//     totalGrãos = totalGrãos + grãosNoQuadro
 totalGrãos = totalGrãos + grãosNoQuadro;

//     quadro = quadro + 1
 quadro = quadro + 1;

// EXIBIR "Total de grãos de trigo no tabuleiro de xadrez = " + totalGrãos
console.log("Total de grãos de trigo no tabuleiro de xadrez = " + totalGrãos);
}