var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let x,y;
let aux;

x = parseInt(lines.shift());
y = parseInt(lines.shift());

if(x > y) {
	aux = x;
	x = y;
	y = aux;
}

for(let i = x+1; i < y; i++) {
	if(i % 5 == 2 || i % 5 == 3) {
		console.log(i);
	}
}