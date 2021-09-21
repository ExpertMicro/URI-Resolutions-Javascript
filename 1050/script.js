var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let ddd = parseInt(lines.shift());

if(ddd != 61 && ddd != 71 && ddd != 11 && ddd != 21
  && ddd != 32 && ddd != 19 && ddd != 27 && ddd != 31) {
    console.log("DDD nao cadastrado");
  }
  else if (ddd == 61) {
    console.log("Brasilia");
  }
  else if (ddd == 71) {
		console.log("Salvador");
	}
	else if(ddd == 11) {
		console.log("Sao Paulo");
	}
	else if (ddd == 21) {
		console.log("Rio de Janeiro");
	}
	else if (ddd == 32) {
		console.log("Juiz de Fora");
	}
	else if (ddd == 19) {
		console.log("Campinas");
	}
	else if (ddd == 27) {
		console.log("Vitoria");
	}
	else if (ddd == 31) {
		console.log("Belo Horizonte");
	}
