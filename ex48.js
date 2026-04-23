const prompt = require('prompt-sync')();

console.log("--- Potências de 3 ---");

// INICIALIZE expoente = 0
let expoente = 0;

//ENQUANTO expoente <= 15 FAÇA
while (expoente <= 15) {
// potencia = 3 elevado a expoente 
  let potencia = 3 ** expoente;
// EXIBIR "3^" + expoente + " = " + potencia
console.log("3^" + expoente + " = " + potencia);
// expoente = expoente + 1
expoente++;
}