var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let menorValor;
let cont = 0;
let linha1;
let numeros;

let numero = parseInt(lines.shift());

if(numero >= 1 && numero < 1000) {
	let meuArray = new Array;
	linha1 = lines.shift();
	numeros = linha1.split(" ");
	for(let i = 0; i < numero; i++) {
		meuArray[i] = parseInt(numeros[i]);
	}
	menorValor = meuArray[0];

	for(let i = 0; i < numero; i++) {
		if(meuArray[i] < menorValor) {
			cont = i;
			menorValor = meuArray[i];
		}
	}
	console.log("Menor valor: " + menorValor);
	console.log("Posicao: " + cont);
}
