var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let matriz = [];
let soma = 0;
let media;
let cont = 0;
let O;

O = lines.shift();

if(O == "S" || O == "M") {
	for(let i = 0; i < 12; i++) {
		matriz[i] = [];
		for(let j = 0; j < 12; j++) {
			matriz[i][j] = '';
		}	
	}
		
	for(let i = 0; i < 12; i++) {
		for(let j = 0; j < 12; j++) {
			matriz[i][j] = parseFloat(lines.shift());
		}
	}

	for(let i = 0; i < (12/2) - 1; i++) {
		for(let j = 1 + i; j < 12 - i - 1; j++) {
			soma = soma + parseFloat(matriz[i][j]);
			cont++;
		}
	}
	
	media = (soma/cont);
	
	if(O == "S") {
	    console.log(soma.toFixed(1));
	}
	else if(O == "M") {
	    console.log(media.toFixed(1));
	}
		
}