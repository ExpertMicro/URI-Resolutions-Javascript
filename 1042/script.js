var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let linha1 = lines.shift();
let numeros = linha1.split(" ");
let a = parseInt(numeros[0]);
let b = parseInt(numeros[1]);
let c = parseInt(numeros[2]);

let array = new Array;
let arrayAux = new Array;
let aux;

array[0] = a;
array[1] = b;
array[2] = c;

arrayAux[0] = a;
arrayAux[1] = b;
arrayAux[2] = c;

for(let i = 0; i < 3; i++) {
  for(let j = 0; j < 3; j++) {
    if(array[i] < array[j]) {
      aux = array[i];
      array[i] = array[j];
      array[j] = aux;
    }
  }
}

for(let i = 0; i < 3; i++) {
  console.log(array[i]);
}
console.log("");
for(let i = 0; i < 3; i++) {
  console.log(arrayAux[i]);
}