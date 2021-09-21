var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let j;
let i;
let contj = 7;
let conti = 1;
let cont = 0;

for(j = 1; j <= 3; j++) {
	contj = 7;
	cont++;
	for(i = 0; i < 3; i++) {
		console.log("I="+ conti + " J=" + contj);
		contj = contj - 1;
		if(i == 2) {
			contj = 7;
			conti = conti + 2;
			if(cont == 3) {
				break;
			}
			else {
				for(i = 0; i < 3; i++){
					console.log("I=" + conti + " J=" + contj);
					contj = contj - 1;
				}
			}
			conti = conti + 2;
		}
	}
}