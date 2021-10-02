var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let linha1 = lines.shift();
let numeros = linha1.split(" ");
let nota1 = parseFloat(numeros[0]);
let nota2 = parseFloat(numeros[1]);
let nota3 = parseFloat(numeros[2]);
let nota4 = parseFloat(numeros[3]);

//var mediaFinal = 0;
const media = (nota1 * 2 + nota2 * 3 + nota3 * 4 + nota4 * 1) / 10;


if (media >= 7) {
  console.log("Media: " + media.toFixed(1));
  console.log("Aluno aprovado.");
}

if (media < 5) {
  console.log("Media: " + media.toFixed(1));
  console.log("Aluno reprovado.")
}

if (media >= 5 && media < 7) {
  let notaExame = parseFloat(lines.shift());
  console.log("Media: " + media.toFixed(1));
  console.log("Aluno em exame.");
  console.log("Nota do exame: " + notaExame.toFixed(1));
  let mediaFinal = (media + notaExame) / 2;
  if (mediaFinal >= 5) {
    console.log("Aluno aprovado.");
    console.log("Media final: " + mediaFinal.toFixed(1));
  }
  else if (mediaFinal < 5) {
    console.log("Aluno reprovado.");
    console.log("Media final: " + mediaFinal.toFixed(1));
  }
}