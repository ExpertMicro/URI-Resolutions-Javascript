var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let m, n;
let aux;
let soma = 0;
let flagA = 1;
let flagB = 1;
let frase = "";

while(flagA > 0 || flagB > 0) {
  let linha1 = lines.shift();
  let numeros = linha1.split(" ");
  m = parseInt(numeros[0]);
  n = parseInt(numeros[1]);
  flagA = m;
  flagB = n;
  if(flagA <= 0 || flagB <= 0) {
    break;
  }
  if(m > n) {
    aux = m;
    m = n;
    n = aux;
  }
  for(let i = m; i <= n; i++) {
    soma = soma + i;
    frase = frase + i + " ";
  }

  console.log(frase + "Sum=" + soma);
  soma = 0;
  frase = "";
}