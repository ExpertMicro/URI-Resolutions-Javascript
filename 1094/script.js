var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let n;
let qt, tipo;
let mediaCoelhos, mediaRatos, mediaSapos;
let totalCobaias = 0, totalCoelhos = 0, totalRatos = 0, totalSapos = 0;

n = parseInt(lines.shift());
for(let i = 0; i < n; i++) {
	linha = lines.shift();
	let valor = linha.split(" ");
	qt = parseInt(valor[0]);
	tipo = valor[1];

	if(tipo == "C") {
		totalCoelhos = totalCoelhos + qt;
	}
	if(tipo == "R") {
		totalRatos = totalRatos + qt;
	}
	if(tipo == "S") {
		totalSapos = totalSapos + qt;
	}
}

totalCobaias = totalCoelhos + totalRatos + totalSapos;
mediaCoelhos = parseFloat((totalCoelhos * 100) / totalCobaias);
mediaRatos = parseFloat((totalRatos * 100) / totalCobaias);
mediaSapos = parseFloat((totalSapos * 100) / totalCobaias);

console.log("Total: " + parseInt(totalCobaias) + " cobaias");
console.log("Total de coelhos: " + parseInt(totalCoelhos));
console.log("Total de ratos: " + parseInt(totalRatos));
console.log("Total de sapos: " + parseInt(totalSapos));

console.log("Percentual de coelhos: " + mediaCoelhos.toFixed(2) + " %");
console.log("Percentual de ratos: " + mediaRatos.toFixed(2) + " %");
console.log("Percentual de sapos: " + mediaSapos.toFixed(2) + " %");
