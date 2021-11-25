let sinal = "vermelho";

switch (sinal) {
  case "verde":
    console.log("Pode passar");
    break;
  case "amarelo":
  case "vermelho":
    console.log("Pare");
    break;
  default:
    console.log("valor inválido");
    break;
}
