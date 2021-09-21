var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let n = 0;
let x;
let cont = 0;
let soma = 0;
let notas;

while(x != 2) {
  n = 0;
  soma = 0;
  cont = 0;

  while(n < 2) {
    notas = parseFloat(lines.shift());
    if(notas >= 0 && notas <= 10) {
      soma = soma + notas;
      cont = cont + 1;
      n = n + 1;
    }
    else {
      console.log("nota invalida");
    }
  }
  media = soma / cont;
  console.log("media = " + media.toFixed(2));
  console.log("novo calculo (1-sim 2-nao)");
  x = parseInt(lines.shift());
  while(x > 1 && x > 2) {
    console.log("novo calculo (1-sim 2-nao)");
    x = parseInt(lines.shift());
  }
}