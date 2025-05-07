let exame = true;

console.log(!exame ?  "Aprovado" : "Reprovado");

//media de nota superior a 70 como bom - acima de 90 como  otimo e abaixo de 70 reprovado
let nota = 80;
let resultado = (nota > 90) ? "Otimo" : (nota > 70) ? "Bom" : "Reprovado";
console.log(resultado);