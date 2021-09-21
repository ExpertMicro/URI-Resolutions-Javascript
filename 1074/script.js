var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let n;
let x

n = parseInt(lines.shift());
for(let i = 1; i <= n; i++) {
	x = parseInt(lines.shift());
	if(x > 0 && x % 2 == 0) {
		console.log("EVEN POSITIVE");
	}
	if(x < 0 && x % 2 == 0) {
		console.log("EVEN NEGATIVE");
	}
	if(x > 0 && x % 2 != 0) {
		console.log("ODD POSITIVE");
	}
	if(x < 0 && x % 2 != 0) {
		console.log("ODD NEGATIVE");
	}
	if(x == 0) {
		console.log("NULL");
	}
}