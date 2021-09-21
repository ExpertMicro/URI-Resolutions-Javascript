var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let n = parseInt(lines.shift());

let meuArray = new Array;
let mediaPonderada;

for(let i = 0; i < n; i++) {
  let linha1 = lines.shift();
  let numeros = linha1.split(" ");
  let a = parseFloat(numeros[0]);
  let b = parseFloat(numeros[1]);
  let c = parseFloat(numeros[2]);
  mediaPonderada = (a * 2.0 + b * 3.0 + c * 5.0) / (2+3+5);
  meuArray[i] = mediaPonderada;
}

for(let i = 0; i < n; i++) {
  console.log(meuArray[i].toFixed(1));
}