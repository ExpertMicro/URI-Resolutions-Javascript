var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var linha1 = lines.shift();
var valor = linha1.split(" ");

var codigo1 = parseFloat(valor[0]);
var numeroPecas1 = parseFloat(valor[1]);
var valorPeca1 = parseFloat(valor[2]);

var linha2 = lines.shift();
var valor = linha2.split(" ");

var codigo2 = parseFloat(valor[0]);
var numeroPecas2 = parseFloat(valor[1]);
var valorPeca2 = parseFloat(valor[2]);

var valorTotal = (numeroPecas1 * valorPeca1) + (numeroPecas2 * valorPeca2);
console.log("VALOR A PAGAR: R$ " + valorTotal.toFixed(2));