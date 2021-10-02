var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let linha1 = lines.shift();
let numeros = linha1.split(" ");
let a = parseFloat(numeros[0]);
let b = parseFloat(numeros[1]);
let c = parseFloat(numeros[2]);

let delta = Math.pow(b,2) - (4 * a * c);

if (a == 0 || delta == 0 || delta < 0) {
  console.log("Impossivel calcular");
}
else {
  let r1 = (-b + Math.sqrt(delta)) / (2 * a);
  let r2 = (-b - Math.sqrt(delta)) / (2 * a);

  console.log("R1 = " + r1.toFixed(5));
  console.log("R2 = " + r2.toFixed(5));
}