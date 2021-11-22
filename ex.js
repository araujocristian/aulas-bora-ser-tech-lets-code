const prompt = require("prompt-sync")({ sigint: true });

const nota1 = parseFloat(prompt("Digite a primeira nota: "));
const nota2 = parseFloat(prompt("Digite a segunda nota: "));
const nota3 = parseFloat(prompt("Digite a terceira nota: "));
let media;

if ((nota1 >= 0 && nota1 <= 10) && (nota2 >= 0 && nota2 <= 10) && (nota3 >= 0 && nota3 <= 10)){
    media = (nota1 + nota2 + nota3) / 3.0;
    if(media >= 5) {
        console.log("Aluno aprovado");
    } else{
        console.log("Aluno Reporvado");
    }
}else{
    console.log("As notas deve estar entre 0 - 10, nota digitada errado comece novamente");
}