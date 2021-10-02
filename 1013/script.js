var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var linha1 = lines.shift();
var numero = linha1.split(" ");

var a = parseInt(numero[0]);
var b = parseInt(numero[1]);
var c = parseInt(numero[2]);

var maiorAB = (a + b + Math.abs(a - b)) / 2;
var maiorBC = (b + c + Math.abs(b - c)) / 2;
var maiorABC = (maiorAB + maiorBC + Math.abs(maiorAB - maiorBC)) / 2;

console.log(maiorABC + " eh o maior");