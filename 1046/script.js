var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let linha1 = lines.shift();
let numeros = linha1.split(" ");
let horaInicial = parseInt(numeros[0]);
let horaFinal = parseInt(numeros[1]);

let duracao;

if (horaInicial > horaFinal) {
  duracao = 24 - horaInicial + horaFinal;
  console.log("O JOGO DUROU " + duracao + " HORA(S)");
}
if(horaInicial < horaFinal) {
  duracao = horaFinal - horaInicial;
  console.log("O JOGO DUROU " + duracao + " HORA(S)");
}
if(horaInicial == horaFinal) {
  duracao = 24;
  console.log("O JOGO DUROU " + duracao + " HORA(S)");
}
