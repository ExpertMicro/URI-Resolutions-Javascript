var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let matriz = [];
let soma = 0;
let media;
let cont = 0;
let L;
let T;

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

	if(O == "S") {
		for(let i = 0; i < 12; i++) {
			for(let j = 0; j < 12; j++) {
				if(j < i) {
					soma = soma + parseFloat(matriz[i][j]);
				}
			}
		}
		console.log(soma.toFixed(1));
	}
	else if(O == "M") {
		for(let i = 0; i < 12; i++) {
			for(let j = 0; j < 12; j++) {
				if(j < i) {
					soma = soma + parseFloat(matriz[i][j]);
					cont++;
				}
			}
		}
		media = (soma/cont);
		console.log(media.toFixed(1));
	}
}