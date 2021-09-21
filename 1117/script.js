var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let n1;
let contNotaValida = 0;
let qtdNotas = 0;
let soma = 0;


while(contNotaValida < 2) {
	n1 = parseFloat(lines.shift());
	if(n1 < 0 || n1 > 10) {
			console.log("nota invalida");
	}
	else {
			soma = soma + n1;
			qtdNotas++;
			contNotaValida++;
	}
}
let media = (soma / qtdNotas);
console.log("media = " + media.toFixed(2));
