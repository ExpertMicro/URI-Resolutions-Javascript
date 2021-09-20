let input = require("fs").readFileSync("stdin", "utf-8");
let entrada = input.split(" ");

let a = parseInt(entrada[0]);
let n = parseInt(entrada[1]);

let i = 1;

while(n <= 0) {
  i++;
  n = parseInt(entrada[i]);
}

let soma = 0;

for(let i = 0; i < n; i++) {
  soma = soma + a + i;
}

console.log(soma);