var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let n;
let cont = 0;
let soma = 0;
let media;

for(let i = 0; i < 6; i++) {
	n = parseFloat(lines.shift());
	if(n > 0) {
		cont++;
		soma = soma + n;
	}
}
media = soma / cont;
console.log(cont + " valores positivos");
console.log(media.toFixed(1));