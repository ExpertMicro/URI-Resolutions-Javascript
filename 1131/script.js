var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let resposta = 1;
let golInter, goltGremio;
let contGrenal = 0;
let contEmpate = 0;
let contVitoriasInter = 0;
let contVitoriasGremio = 0;


while(resposta == 1) {
	let linha1 = lines.shift();
	let numeros = linha1.split(" ");
	golInter = parseInt(numeros[0]);
	goltGremio = parseInt(numeros[1]);
	
	if(golInter > goltGremio) {
			contVitoriasInter++;
	}
	else if(goltGremio > golInter) {
			contVitoriasGremio++;
	}
	else {
			contEmpate++;
	}
	contGrenal++;
	console.log("Novo grenal (1-sim 2-nao)");
	resposta = parseInt(lines.shift());
}

console.log(contGrenal + " grenais");
console.log("Inter:" + contVitoriasInter);
console.log("Gremio:" + contVitoriasGremio);
console.log("Empates:" + contEmpate);
if(contVitoriasInter > contVitoriasGremio) {
	console.log("Inter venceu mais");
}
else if(contVitoriasGremio > contVitoriasInter){
	console.log("Gremio venceu mais");
}
else {
	console.log("Nao houve vencedor");
}
