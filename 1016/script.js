var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var dist = parseInt(lines.shift());

var tempo = dist * 2;
console.log(tempo + " minutos");