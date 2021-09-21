var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let contj = 60;
let conti = 1;

for(let j = 1; contj >= 0; j++) {
	console.log("I=" + conti + " J=" + contj);
	contj = contj - 5;
	conti = conti + 3;
}