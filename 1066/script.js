var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let n;
let contPar = 0;
let contImpar = 0;
let contPositivos = 0;
let contNegativos = 0;

for(let i = 0; i < 5; i++) {
	n = parseInt(lines.shift());
	if(n > 0) {
		contPositivos++;
	}
	if(n < 0) {
		contNegativos++;
	}
	if(n % 2 == 0) {
		contPar++;
	}
	if(n % 2 != 0) {
		contImpar++;
	}
}

console.log(contPar + " valor(es) par(es)");
console.log(contImpar + " valor(es) impar(es)");
console.log(contPositivos + " valor(es) positivo(s)");
console.log(contNegativos + " valor(es) negativo(s)");