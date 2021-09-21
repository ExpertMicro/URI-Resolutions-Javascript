var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let meuArray = new Array;
let aux = 0;

for(let i = 0; i < 20; i++) {
	meuArray[i] = parseInt(lines.shift());
}

for(let i = 0; i < 10; i++) {
	aux = meuArray[i];
	meuArray[i] = meuArray[19-i];
	meuArray[19-i] = aux;
}

for(let i = 0; i < 20; i++) {
	console.log("N[" + i + "] = " + meuArray[i]);
}

