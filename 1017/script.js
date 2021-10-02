var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var horas = parseFloat(lines.shift());
var velocidadeMedia = parseFloat(lines.shift());

var tempo = (horas * velocidadeMedia) / 12;
console.log(tempo.toFixed(3));