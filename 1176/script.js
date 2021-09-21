var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let a = 0;
let b = 1;
let cont = 0;
let aux;
let n;

let t = parseInt(lines.shift());

while(cont < t) {
	n = parseInt(lines.shift());
	if(n >= 0 && n <= 60) {
		if(n == 0) {
			aux = 0;
			console.log("Fib(" + n + ") = " + aux);
		}
		else if (n == 1) {
			aux = 1;
			console.log("Fib(" + n + ") = " + aux);
		}
		else if (n > 1) {
			for(let i = 1; i < n; i++) {
				aux = a + b;
				a = b;
				b = aux;
			}
			console.log("Fib(" + n + ") = " + aux);
			a = 0;
			b = 1;
			aux = 0;
		}
	}
	cont++;
}
