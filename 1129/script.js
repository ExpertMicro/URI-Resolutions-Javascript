var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let N = parseInt(lines.shift());

while (N != 0) {
	for (let i = 0; i < N; i++) {
    let linha1 = lines.shift();
    let numeros = linha1.split(" ");
    let A = parseInt(numeros[0]);
    let B = parseInt(numeros[1]);
    let C = parseInt(numeros[2]);
    let D = parseInt(numeros[3]);
    let E = parseInt(numeros[4]);

    
		if (A <= 127 && B > 127 && B <= 255 && C > 127 && C <= 255 && D > 127 && D <= 255 && E > 127 && E <= 255) {
			console.log("A");
		}
		else {
		  if (A > 127 && A <= 255 && B <= 127 && C > 127 && C <= 255 && D > 127 && D <= 255 && E > 127 && E <= 255) {
				console.log("B");
		  }
			else {
				if(A > 127 && A <= 255 && B > 127 && B <= 255 && C <= 127 && D > 127 && D <= 255 && E > 127 && D <= 255) {
					console.log("C");
				}
				else {
					if(A > 127 && A <= 255 && B > 127 && B <= 255 && C > 127 && C <= 255 && D <= 127 && E > 127 && E <= 255) {
            console.log("D");
          }
					else {
						if(A > 127 && A <= 255 && B > 127 && B <= 255 && C > 127 && C <= 255 && D > 127 && D <= 255 && E <= 127) {
							console.log("E");
						}
						else {
							console.log("*");
						}
					}
				}
			}
		}
	}
	N = parseInt(lines.shift());
}
