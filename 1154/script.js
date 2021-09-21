var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let idade;
let soma = 0;
let cont = 0;

do {
	idade = parseInt(lines.shift());
	if (idade < 0) {
		break;
	}
	else {
		soma = soma + idade;
		cont = cont + 1;				
	}
}
while (idade > 0);

media = soma / cont;
console.log(media.toFixed(2));