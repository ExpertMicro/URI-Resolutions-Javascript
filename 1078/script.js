var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let n = parseInt(lines.shift());

if (n > 2 && n < 1000) {
  for(let i = 1; i <= 10; i++) {
    console.log(i + " x " + n + " = " + i * n);
  }
}