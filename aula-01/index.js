// var, let, const
//Boolean
let a = true;
let b = false;

//Number
let c = 10;
let d = 10.5;

//String
let e = "texto";

// var a;

// if (true) {
//   var a;
// }

//Undefined
let f;
let g = undefined;

/* Tipos Complexos */
//Function
let h = function () {};
let i = () => {};

//Object
let j = {};
let k = []; //array
let l = null;

// CÓDIGO MÉDIA DE DOIS NUMEROS
// const prompt = require("prompt-sync")({ sigint: true });

const valor1 = prompt("digite um número: "); //solicita um número
const valor2 = prompt("digite um número: "); //solicita outro número

const media = (valor1 + (valor2 + 1)) / 2.0; //calcula a média

console.log(media); //mostra no console
