var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function mdc(a,b) {
  if (b == 0)
  {
    return a;
  }
  else {
    return mdc(b, a % b);
  }
}

var cont = 0;
var i = 0;
var N = parseInt(lines.shift());
var vetor = new Array;

do {
  var linha1 = lines.shift();
  var numero = linha1.split(" ");
  var a = parseInt(numero[0]);
  var b = parseInt(numero[1]);
  var resultado = mdc(a,b);
  vetor[i] = resultado;
  i++;
  cont++;
  N--;
}while(N != 0);

for (var i = 0; i < cont; i++) {
  console.log(vetor[i]);
}
