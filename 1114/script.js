var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let n = 0;
let senha = 2002;

while(n != senha) {
  n = lines.shift();
  if(n == senha) {
      console.log("Acesso Permitido");
  }
  else {
      console.log("Senha Invalida");
  }
}
