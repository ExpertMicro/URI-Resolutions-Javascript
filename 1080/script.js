var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let n;
let pos = 1;
let maior = 0;

for(let i = 1; i <= 100; i++) {
	n = parseInt(lines.shift());
	if(i == 1) {
		maior = n;
		pos = 1;
	}
	else if(n > maior) {
		maior = n;
		pos = i;
	}
}
console.log(maior);
console.log(pos);