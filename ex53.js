const prompt = require('prompt-sync')();

console.log("--- Somatório da Fatorial de Quinze Valores ---");

//INICIALIZAR somatorio COM 0
let somatorio = 0;


// PARA cada valor DE 1 a 15 FAÇA
for ( let valor = 1; valor <= 15; valor++ ) {
    //     INICIALIZAR fatorial COM 1
let fatorial = 1;

    //     PARA cada número DE 1 até valor FAÇA
for ( let numero = 1; numero <= valor; numero++ ) {
//         fatorial = fatorial * número
fatorial = fatorial * numero;
}
//     somatorio = somatorio + fatorial
somatorio = somatorio + fatorial;
// EXIBIR "Somatório da fatorial de cada valor lido: " + somatorio
console.log("Somatório da fatorial de cada valor lido: " + somatorio);
}