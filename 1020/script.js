var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var idade = parseInt(lines.shift());

var anos = idade / 365;
var mes = idade % 365 / 30;
var dias = idade % 365 % 30 % 30;

console.log(parseInt(anos) + " ano(s)");
console.log(parseInt(mes) + " mes(es)");
console.log(parseInt(dias) + " dia(s)");