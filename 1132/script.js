var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let x,y,aux;
let soma = 0;

x = parseInt(lines.shift());
y = parseInt(lines.shift());

if(x > y) {
	aux = x;
	x = y;
	y = aux;
}
for(let i = x; i <= y; i++) {
	if(i % 13 != 0)
	{
		soma = soma + i;
	}
}
console.log(soma);