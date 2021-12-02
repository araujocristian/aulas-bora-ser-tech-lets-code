// class Quadrado {
//   constructor(base, altura) {
//     let cor = 'blue';
//     this.base = base;
//     this.altura = altura;
//     this.getCor = function() { return cor; };
//     this.setCor = function(novaCor) { cor = novaCor; };
//   }
// }

// class Quadrado {
//   constructor(base, altura) {
//     this._cor = 'blue';
//     this.base = base;
//     this.altura = altura;
//   }

//   get cor() { return this._cor }
//   set cor(novaCor) { this._cor = novaCor }
// }

// const quadrado = new Quadrado(3, 5);
// console.log(quadrado);
// console.log(quadrado.cor);
// quadrado.cor = 'green';
// console.log(quadrado.cor);

// class Quadrado{
//   constructor(base, altura){
//     if(isNaN(base) || isNaN(altura)) throw "Valores inválidos";
//     this.base = base;
//     this.altura = altura;
//     this._cor = undefined;
//   }

//   get cor() { return this._cor }

//   set cor(cor) { 
//     if(cor !== 'red' && cor !== 'blue' && cor !== 'green') throw "Cor inválida";
//     this._cor = cor;
//   }
// }

// const quadrado = new Quadrado(3, 5);
// console.log(quadrado);
// quadrado.cor = 'green';
// console.log(quadrado.cor);
// quadrado.cor = 'red';

//Extrapolar o conceito de Accessors para os
// Atributos base e altura;

function createQuadrado(base, altura) {
  if(isNaN(base) || isNaN(altura)) throw "Valores inválidos";

  let _cor = undefined;

  return {
    base,
    altura,
    get cor() { return _cor },
    set cor(cor) {
      if(cor !== 'red' && cor !== 'blue' && cor !== 'green') throw "Cor inválida";
      _cor = cor;
    }
  }
}

const quadrado = createQuadrado(3, 5);
console.log(quadrado);
console.log(quadrado.cor);
quadrado.cor = 'green';
console.log(quadrado.cor);
// quadrado.cor = 'white';
console.log(quadrado._cor);