var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let meuArray = new Array;

for(let i = 0; i < 10; i++) {
	meuArray[i] = parseInt(lines.shift());
	if(meuArray[i] <= 0) {
		meuArray[i] = 1;
	}
}

for(let i = 0; i < 10; i++) {
	console.log("X[" + i + "] = " + meuArray[i]);
}