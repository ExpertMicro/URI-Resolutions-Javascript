var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let numero;
let string = '';
let saida;

numero = parseInt(lines.shift());

if(numero > 0 && numero < 9999999999) {
	string = numero.toString();
	saida = string.split('').reverse().join('');
	console.log(saida);
}
