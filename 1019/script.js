var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var tempo = parseInt(lines.shift());

var horas = tempo / 3600;
var minutos = tempo / 60 % 60;
var segundos = tempo % 60 % 60;

console.log(parseInt(horas) + ":" + parseInt(minutos) + ":" + parseInt(segundos));