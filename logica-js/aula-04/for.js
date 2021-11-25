const prompt = require("prompt-sync")({ sigint: true });

// const arr = [10, 20, 30, 40, 50];

// for-in
// for (index in arr) {
//   console.log(index, arr[index]);
// }

//for-of
// for (value of arr) {
//   console.log(value);
// }

// for (let index = 0; index < arr.length; index++) {
//   console.log(arr[index]);
// }

// for (let vez = 1; vez <= 10; vez++) {
//   console.log("Olá, pela " + vez + "º vez");
// }

// Exemplo rolagem de dados

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function rolar(dado) {
  return randomIntFromInterval(1, dado);
}

function splitInput(input) {
  const splitedInput = input.toUpperCase().split("D");
  const normalizedInput = [
    parseInt(splitedInput[0]),
    parseInt(splitedInput[1]),
  ];
  return normalizedInput;
}

const input = prompt("Digite a quantidade e o dado no formato XDY, ex. 2D6: ");
const quantidadeEDado = splitInput(input);
const quantidade = quantidadeEDado[0];
const dado = quantidadeEDado[1];

let jogadasDoDado = [];
let total = 0;

for (let i = 0; i < quantidade; i++) {
  const resultado = rolar(dado);
  jogadasDoDado.push(resultado);
  total = total + resultado;
}

console.log("Rolagens: " + jogadasDoDado + " Total: " + total);

/**
 * 
Crie um código que leia 10 valores inteiros e:
• Encontre e mostre o maior valor
• Encontre e mostre o menor valor
• Calcule e mostre a média dos números lidos
 */
