var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let x, y;
let flagA = 1;
let flagB = 1;

while(flagA > 0 || flagB > 0) {
  let linha1 = lines.shift();
  let numeros = linha1.split(" ");
  x = parseInt(numeros[0]);
  y = parseInt(numeros[1]);
  flagA = x;
  flagB = y;
  if(flagA == flagB) {
      break;
  }

  if(x > y) {
    console.log("Decrescente");
  }
  else if (y > x) {
    console.log("Crescente");
  }

}
