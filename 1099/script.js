var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let soma;
let cont = 0;
let x, y;
let n;
let aux;
let linha

n = parseInt(lines.shift());

while(n != cont) {
  if(n == 0) break;
  linha = lines.shift();
  numeros = linha.split(" ");
  x = parseInt(numeros[0]);
  y = parseInt(numeros[1]);
  if(x > y) {
    aux = x;
    x = y;
    y = aux;
  }
  soma = 0;
  for(let i = x+1; i < y; i++) {
    if(i%2 !=0) {
      soma = soma + i;
    }
  }
  console.log(soma);
  cont++;
}
