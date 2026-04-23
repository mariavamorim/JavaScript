const prompt = require('prompt-sync')();

console.log("--- Novo Salário com Aumento ---");

// Entrada de dados
let salario = Number(prompt("Digite o salário atual: "));
let porcentagem = Number(prompt("Digite a porcentagem de aumento: "));

// Processamento
let aumento = salario * (porcentagem / 100);
let novoSalario = salario + aumento;

// Saída
console.log(`O valor do aumento é: ${aumento}`);
console.log(`O novo salário é: ${novoSalario}`);