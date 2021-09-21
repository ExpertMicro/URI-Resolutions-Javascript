var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let n1;
let n2;
let maior;
let menor;
let soma = 0;

n1 = parseInt(lines.shift());
n2 = parseInt(lines.shift());

if(n1 > n2) {
	maior = n1;
	menor = n2;
}
else {
	maior = n2;
	menor = n1;
}

for(let i = menor + 1; i < maior; i++) {
	if(i % 2 != 0) {
		soma = soma + i;
	}
}
console.log(soma);