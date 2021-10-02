var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let linha1 = lines.shift();
let numeros = linha1.split(" ");
let a = parseFloat(numeros[0]);
let b = parseFloat(numeros[1]);
let c = parseFloat(numeros[2]);

if(((Math.abs(b - c) < a && a < b + c) || (Math.abs(a - c) < b && b < a + c) || (Math.abs(a - b) < c && c < a + b))) {
  let p = a + b + c;
  console.log("Perimetro = " + p.toFixed(1));
}
else {
  let area = (a + b) * c / 2;
  console.log("Area = " + area.toFixed(1));
}