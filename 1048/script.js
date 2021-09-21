var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let salario = parseFloat(lines.shift());
let novoSalario;
let reajuste;

if(salario <= 400) {
  novoSalario = salario * 1.15;
  reajuste = novoSalario - salario;
  console.log("Novo salario: " + novoSalario.toFixed(2));
  console.log("Reajuste ganho: " + reajuste.toFixed(2));
  console.log("Em percentual: " + 15 + " %");
}
else if (salario > 400 && salario <= 800) {
  novoSalario = salario * 1.12;
  reajuste = novoSalario - salario;
  console.log("Novo salario: " + novoSalario.toFixed(2));
  console.log("Reajuste ganho: " + reajuste.toFixed(2));
  console.log("Em percentual: " + 12 + " %");
}
else if (salario > 800 && salario <= 1200) {
  novoSalario = salario * 1.10;
  reajuste = novoSalario - salario;
  console.log("Novo salario: " + novoSalario.toFixed(2));
  console.log("Reajuste ganho: " + reajuste.toFixed(2));
  console.log("Em percentual: " + 10 + " %");
}
else if (salario > 1200 && salario <= 2000) {
  novoSalario = salario * 1.07;
  reajuste = novoSalario - salario;
  console.log("Novo salario: " + novoSalario.toFixed(2));
  console.log("Reajuste ganho: " + reajuste.toFixed(2));
  console.log("Em percentual: " + 7 + " %");
}
else if (salario > 2000) {
  novoSalario = salario * 1.04;
  reajuste = novoSalario - salario;
  console.log("Novo salario: " + novoSalario.toFixed(2));
  console.log("Reajuste ganho: " + reajuste.toFixed(2));
  console.log("Em percentual: " + 4 + " %");
}