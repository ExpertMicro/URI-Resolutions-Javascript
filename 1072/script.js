var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let n;
let x;
let contIn = 0;
let contOut = 0;

n = parseInt(lines.shift());
for(let i = 0; i < n; i++) {
	x = parseInt(lines.shift());
	if(x >= 10 && x <= 20) {
		contIn++;
	}
	else {
		contOut++;
	}
}
console.log(contIn + " in");
console.log(contOut + " out");