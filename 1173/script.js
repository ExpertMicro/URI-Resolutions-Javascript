var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let meuArray = new Array;

let n = parseInt(lines.shift());

for(let i = 0; i < 10; i++) {
	meuArray[i] = n;
	n = n * 2;
}

for(let i = 0; i < 10; i++) {
	console.log("N[" + i + "] = " + meuArray[i]);
}