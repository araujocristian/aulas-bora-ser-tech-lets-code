const array = [5, 4, 3.5, 4, "banana", null, undefined, "chuva"];
const arrayVazio = [];

// console.log(array);
// console.log(array[0]);
// console.log(array[50]);
// array[0] = "laranja";
// console.log(array[0]);

//Tamanho do Array
// console.log(array.length);
// console.log(array[array.length - 1]);

//Inserção de valores no Array
// let novoTamanho = array.push("maçã");

// novoTamanho = array.unshift("pera");

// Busca de valores
// const existeNoArray = array.indexOf("4") > -1;
// console.log(existeNoArray);
// console.log(array.lastIndexOf(4) > -1);

// console.log(array.includes("banana"));

// Remoção de valores do Array
// let itemRemovido = array.pop();
// itemRemovido = array.shift();

// console.log(itemRemovido);
// console.log(array);

// Splice
const response = array.splice(3);
const response = array.splice(3, 3);
const indiceX = array.indexOf("banana");
const response = array.splice(indiceX, 2, 5, "abacaxi", "manga");

// console.log(response);
// console.log(array);

// Preenchimento de Array
// const arr = new Array(10);
// arr.fill("x", 3, 5);
// console.log(arr);

// Concatenação Arrays
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [7, 8, 9];
// const arrFinal = arr1.concat(arr2).concat(arr3);
// // const arrFinal = [].concat(arr1, arr3, arr2);

// console.log(arrFinal);
// console.log(arr1);
// console.log(arr2);

// Reversão Arrays
// const arr = [1, 2, 3, 4];
// arr.reverse();
// console.log(arr);

// Ordenação Arrays
// const arr = [5, 9, 2, 7, 4];
// const arr = ["zambia", "andre", "cris", "maria"];
// arr.sort();
// console.log(arr);

// Const + Array
const arr = [1];
arr.push(2);

console.log(arr);

arr = [1, 2];
