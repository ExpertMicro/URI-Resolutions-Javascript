var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let meuArray = new Array;

for(let i = 0; i < 100; i++) {
	meuArray[i] = parseFloat(lines.shift());
}

for(let i = 0; i < 100; i++) {
	if (meuArray[i] <= 10) {
		console.log("A[" + i + "] = " + meuArray[i].toFixed(1));
	}
}