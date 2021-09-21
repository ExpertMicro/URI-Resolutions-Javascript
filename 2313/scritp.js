var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let linha1 = lines.shift();
let numeros = linha1.split(" ");
let a = parseFloat(numeros[0]);
let b = parseFloat(numeros[1]);
let c = parseFloat(numeros[2]);

if(((Math.abs(b - c) < a && a < b + c) || (Math.abs(a - c) < b && b < a + c)
 	|| (Math.abs(a - b) < c && c < a + b))) {
		let aux;
		if(a < b && b > c) {
			aux = a;
			a = b;
			b = aux;
		}
		else if (c > a) {
			aux = a;
			a = c;
			c = aux;
		}
		if(a == b && b == c) {
			if(Math.pow(a,2) == Math.pow(b,2) + Math.pow(c,2)) {
				console.log("Valido-Equilatero");
				console.log("Retangulo: S");
			}
			else {
				console.log("Valido-Equilatero");
				console.log("Retangulo: N");
			}
		}
		else if(a != b && a != c && b != c) {
			if(Math.pow(a,2) == Math.pow(b,2) + Math.pow(c,2)) {
				console.log("Valido-Escaleno");
				console.log("Retangulo: S");
			}
			else {
				console.log("Valido-Escaleno");
				console.log("Retangulo: N");
			}
		}
		else if(a == b || a == c || b == c) {
			if(Math.pow(a,2) == Math.pow(b,2) + Math.pow(c,2)) {
				console.log("Valido-Isoceles");
				console.log("Retangulo: S");	
			}
			else {
				console.log("Valido-Isoceles");
				console.log("Retangulo: N");
			}
		}
}
else {
	console.log("Invalido");
}
