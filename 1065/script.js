var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let a = parseInt(lines.shift());
let b = parseInt(lines.shift());
let c = parseInt(lines.shift());
let d = parseInt(lines.shift());
let e = parseInt(lines.shift());


let meuArray = new Array;
let cont = 0;

meuArray[0] = a;
meuArray[1] = b;
meuArray[2] = c;
meuArray[3] = d;
meuArray[4] = e;


for(let i = 0; i < 6; i++) {
  if(meuArray[i] % 2 == 0) {
    cont++;
  }
}
console.log(cont + " valores pares");