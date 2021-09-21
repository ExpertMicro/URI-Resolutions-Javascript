var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let x,y,n;
let cont = 0;
let r;

n = lines.shift();

while(cont < n) {
	let linha1 = lines.shift();
	let numeros = linha1.split(" ");
	x = parseFloat(numeros[0]);
	y = parseFloat(numeros[1]);
	if(x == 0 && y == 0 || x != 0 && y == 0) {
			console.log("divisao impossivel");
	}

	else {
			r = x / y;
			console.log(r.toFixed(1));
	}
	cont++;
}
