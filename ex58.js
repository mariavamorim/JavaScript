const prompt = require('prompt-sync')();

console.log("--- Maior e Menor Valores entre Valores Positivos ---");

// INICIALIZAR maior COM -1
let maior = -1;
// INICIALIZAR menor COM -1
let menor = -1;

// REPETIR
while (true) {

    // SOLICITAR valor
    let valor = Number(prompt("Digite um valor positivo(ou negativo para sair): "));

    // SE valor >= 0 ENTAO
    if (valor >= 0) {

        // SE maior < valor ENTAO
        if (maior < valor) {
            maior = valor;
        }

        // SE menor == -1 OU menor > valor ENTAO
        if (menor == -1 || menor > valor) {
            menor = valor;
        }

    } else {

        // SAIR DO LAÇO
        break;
    }
}

// EXIBIR resultados
console.log("Maior valor: " + maior);
console.log("Menor valor: " + menor);
