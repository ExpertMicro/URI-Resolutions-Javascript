var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let j = 1;
let k;

for(let k = 0; k < 3; k++) {
  console.log("I=0" + " J=" + j);
  j++;
}

j = 1.2;
for(k = 0; k < 3; k++) {
  console.log("I=0.2" + " J=" + j);
  j++;
}

j = 1.4;
for(k = 0; k < 3; k++) {
  console.log("I=0.4" + " J=" + j);
  j++;
}

j = 1.6;
for(k = 0; k < 3; k++) {
  console.log("I=0.6" + " J=" + j);
  j++;
}

j = 1.8;
for(k = 0; k < 3; k++) {
  console.log("I=0.8" + " J=" + j);
  j++;
}

j = 2;
for(k = 0; k < 3; k++) {
  console.log("I=1" + " J=" + j);
  j++;
}

j = 2.2;
for(k = 0; k < 3; k++) {
  console.log("I=1.2" + " J=" + j);
  j++;
}

j = 2.4;
for(k = 0; k < 3; k++) {
  console.log("I=1.4" + " J=" + j);
  j++;
}

j = 2.6;
for(k = 0; k < 3; k++) {
  console.log("I=1.6" + " J=" + j);
  j++;
}

j = 2.8;
for(k = 0; k < 3; k++) {
  console.log("I=1.8" + " J=" + j);
  j++;
}

j = 3;
for(k = 0; k < 3; k++) {
  console.log("I=2" + " J=" + j);
  j++;
}
