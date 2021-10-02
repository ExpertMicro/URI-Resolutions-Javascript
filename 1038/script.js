var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let linha1 = lines.shift();
let numeros = linha1.split(" ");
let codigo = parseInt(numeros[0]);
let qtdItem = parseInt(numeros[1]);
let preco;
if (codigo == 1) {
  preco = 4 * qtdItem;
  console.log("Total: R$ " + preco.toFixed(2));
}
else if (codigo == 2) {
  preco = 4.50 * qtdItem;
  console.log("Total: R$ " + preco.toFixed(2));
}
else if (codigo == 3) {
  preco = 5 * qtdItem;
  console.log("Total: R$ " + preco.toFixed(2));
}
else if (codigo == 4) {
  preco = 2 * qtdItem;
  console.log("Total: R$ " + preco.toFixed(2));
}
else if (codigo == 5) {
  preco = 1.5 * qtdItem;
  console.log("Total: R$ " + preco.toFixed(2));
}