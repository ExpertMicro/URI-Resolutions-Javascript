var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let linha1 = lines.shift();
let numeros = linha1.split(" ");
let a = parseInt(numeros[0]);
let b = parseInt(numeros[1]);
let c = parseInt(numeros[2]);
let d = parseInt(numeros[3]);

if (b > c && d > a && c + d > a + b && c && d > 0) {
  if (a % 2 == 0) {
    console.log("Valores aceitos");
  }
}
else {
  console.log("Valores nao aceitos");
}