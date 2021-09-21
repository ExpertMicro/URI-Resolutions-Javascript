var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function primo(numero) {
	let div = 0;
	let raiz = 0;

	if(numero == 0 || numero == 1) {
		return false;
	}
	else {
		raiz = Math.sqrt(numero);
		div = 1;
		for(let i = 2; i <= raiz; i++) {
			if(numero % i == 0) {
				div = 0;
			}
		}
	}
	return (div == 1);
}

let n;
let x;

n = parseInt(lines.shift());

while(n > 0) {
	x = parseInt(lines.shift());
	if(primo(x)) {
		console.log("Prime")
	}
	else {
		console.log("Not Prime");
	}
	n--;
}