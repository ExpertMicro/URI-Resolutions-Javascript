var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let n;

n = parseInt(lines.shift());
for(let i = 0; i <= n; i++) {
    if(i % 2 != 0) {
        console.log(i);
    }
}