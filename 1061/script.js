var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let linha1 = lines.shift();
let numeros = linha1.split(" ");
let dia1 = numeros[0];
let diaInicio = parseInt(numeros[1]);

let linha2 = lines.shift();
let numeros2 = linha2.split(" ");
let horaInicio = parseInt(numeros2[0]);
let separador1 = numeros2[1];
let minutoInicial = parseInt(numeros2[2]);
let separador2 = numeros2[3];
let segundosInicial = parseInt(numeros2[4]);

let linha4 = lines.shift();
let numeros4 = linha4.split(" ");
let dia2 = numeros4[0];
let diaFim = parseInt(numeros4[1]);

let linha3 = lines.shift();
let numeros3 = linha3.split(" ");
let horaFinal = parseInt(numeros3[0]);
let separador3 = numeros3[1];
let minutoFinal = parseInt(numeros3[2]);
let separador4 = numeros3[3];
let segundosFinal = parseInt(numeros3[4]);

let qtdSegundosInicial = segundosInicial + minutoInicial * 60 + horaInicio * 60 * 60 + diaInicio * 60 * 60 * 24;
let qtdSegundosFinal = segundosFinal + minutoFinal * 60 + horaFinal * 60 * 60 + diaFim * 60 * 60 * 24;

let tempoFinal = qtdSegundosFinal - qtdSegundosInicial;

let r; 
r = parseInt((tempoFinal / (60 * 60 * 24)));
console.log(r + " dia(s)");
tempoFinal = tempoFinal % (60*60*24);
r = parseInt((tempoFinal / (60*60)));
console.log(r + " hora(s)");
tempoFinal = tempoFinal % (60*60);
r = parseInt((tempoFinal / 60));
console.log(r + " minuto(s)");
tempoFinal = parseInt(tempoFinal % 60);
console.log(tempoFinal + " segundo(s)");