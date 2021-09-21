var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let matriz = [];
let soma = 0;
let media;
let L;
let T;

L =  parseInt(lines.shift());

if(L >= 0 && L <= 11) {
	T = lines.shift();
	if(T == "S" || T == "M") {
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

		if(T == "S") {
			for(let i = 0; i < 12; i++) {
				for(let j = 0; j < 12; j++) {
					if(i == L) {
						soma = soma + parseFloat(matriz[i][j]);
					}
				}
			}
			console.log(soma.toFixed(1));
		}
		else if(T == "M") {
			for(let i = 0; i < 12; i++) {
				for(let j = 0; j < 12; j++) {
					if(i == L) {
						soma = soma + parseFloat(matriz[i][j]);
					}
				}
			}
			media = (soma/12);
			console.log(media.toFixed(1));
		}
	} 
}
