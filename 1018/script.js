var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var dinheiro = parseInt(lines.shift());

var n100 = dinheiro / 100;
var n50 = dinheiro % 100 / 50;
var n20 = dinheiro % 100 % 50 / 20;
var n10 = dinheiro % 100 % 50 % 20 / 10;
var n5 = dinheiro % 100 % 50 % 20 % 10 / 5;
var n2 = dinheiro % 100 % 50 % 20 % 10 % 5 / 2;
var n1 = dinheiro % 100 % 50 % 20 % 10 % 5 % 2 / 1;

console.log(dinheiro);
console.log(parseInt(n100) + " nota(s) de R$ 100,00");
console.log(parseInt(n50) + " nota(s) de R$ 50,00");
console.log(parseInt(n20) + " nota(s) de R$ 20,00");
console.log(parseInt(n10) + " nota(s) de R$ 10,00");
console.log(parseInt(n5) + " nota(s) de R$ 5,00");
console.log(parseInt(n2) + " nota(s) de R$ 2,00");
console.log(parseInt(n1) + " nota(s) de R$ 1,00");