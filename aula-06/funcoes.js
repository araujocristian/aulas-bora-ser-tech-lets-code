function helloWorld() {
  return "Hello World!";
}

// const banana = "banana da prata";

// Aspas simples ''
// Aspas duplas ""
// Crase ``
// console.log("Fruta do dia: " + banana);
// console.log(`Fruta do dia: ${banana}`);

// function somar(num1, num2) {
//   const resultado = `${num1} + ${num2} = ${num1 + num2}`;
//   console.log(resultado);
// }

// function somar(num1, num2) {
//   return num1 + num2;
// }

// const somar = function(num1, num2) {
//   return num1 + num2;
// }

// function somar(num1, num2) {
//   if (isNaN(num1) || isNaN(num2)) {
//     return NaN;
//   }
//   return num1 + num2;
// }

// console.log(somar(undefined, 2));

// Funções Anônimas
// const show = function () {
//   console.log("Mostrando");
// };

// show();

// setTimeout(function () {
//   console.log("Mostrando após 1 Segundo");
// }, 1000);

// (function () {
//   console.log("Mostrando uma função imediatamente executada");
// })();

// (function somar(num1, num2) {
//   if (isNaN(num1) || isNaN(num2)) {
//     return NaN;
//   }
//   console.log(num1 + num2);
// })(1, 2);


// Crie um obj pessoa com nome e sobreNome
// E uma função imediatamente executada
// que retorne o nome completo

// Arrow Functions

const somar = function(num1, num2) {
  return num1 + num2;
}

const somar = (num1, num2) => {
  return num1 + num2;
}

const obj = {
  a: 1,
  b: 2,
}

const somar = ({a:1}) => obj + 2;






const show = num1 => console.log(`Mostrando uma função ${num1}`)

const teste = () => {
  console.log("1")
  console.log("2")
  console.log("3")
  console.log("4")
  return "OK"
}

teste(1)

// const somar = (num1, num2) => num1 + num2;

// const somar = (num1, num2) => (
//   num1 + num2
// );

