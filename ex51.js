const prompt = require('prompt-sync')();

console.log("--- Conversão de Celsius para Fahrenheit ---");

// PARA cada grauCelsius DE 10 ATÉ 100 COM PASSO 10 FAÇA
for (let grauCelsius = 10; grauCelsius <= 100; grauCelsius += 10) {

    // grauFahrenheit = (grauCelsius * 9/5) + 32
    let grauFahrenheit = (grauCelsius * 9/5) + 32;

    // EXIBIR resultado
    console.log(grauCelsius + "°C = " + grauFahrenheit + "°F");
}
