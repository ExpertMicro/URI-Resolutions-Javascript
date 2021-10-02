var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let linha1 = lines.shift();
let numeros = linha1.split(" ");
let x = parseFloat(numeros[0]);
let y = parseFloat(numeros[1]);

if (x == 0 && y == 0) {
  console.log("Origem");
}
if (x > 0 && y > 0) {
  console.log("Q1");
}
if (x > 0 && y < 0) {
  console.log("Q4");
}
if (x < 0 && y > 0) {
  console.log("Q2");
}
if (x < 0 && y < 0) {
  console.log("Q3");
}
if ((x == 0 && y > 0) || (x == 0 && y < 0)) {
  console.log("Eixo Y");
}
if ((y == 0 && x > 0) || (y == 0 && x < 0)) {
  console.log("Eixo X");
}