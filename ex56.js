const prompt = require('prompt-sync')();

console.log("--- Fatorial dos valores ímpares entre 1 e 100 ---");

// resultado começa em 1
let resultado = 1n;

// percorre os números ímpares de 1 até 100
for (let numeroImpar = 1n; numeroImpar <= 100n; numeroImpar += 2n) {

    // calcula o fatorial do número ímpar
    let fatorial = 1n;

    for (let i = 1n; i <= numeroImpar; i++) {
        fatorial *= i;
    }

    // multiplica no resultado final
    resultado *= fatorial;
}

// exibe o resultado
console.log(resultado.toString());
