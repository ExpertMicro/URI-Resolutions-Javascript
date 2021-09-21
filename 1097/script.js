var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let contj = 7;
let conti = 1;
let cont = 0;

for(let j = 1; j <= 3; j++) {
  for (contj; contj >= 5; contj--) {
    console.log("I=" + conti + " J=" + contj);
    cont++;
  }
}

if (cont == 3 ) {
  contj = 9;
  conti = 3;
  for (j = 1; j <= 3; j++) {
    for (contj; contj >= 7; contj--) {
      console.log("I=" + conti + " J=" + contj);
      cont++;
    }
  }
}

if (cont == 6) {
  contj = 11;
  conti = 5;
  for (j = 1; j <= 3; j++) {
    for (contj; contj >= 9; contj--) {
      console.log("I=" + conti + " J=" + contj);
      cont++;
    }
  }
}

if (cont == 9) {
  contj = 13;
  conti = 7;
  for (j = 1; j <= 3; j++) {
    for (contj; contj >= 11; contj--) {
      console.log("I=" + conti + " J=" + contj);
      cont++;
    }
  }
}

if (cont == 12) {
  contj = 15;
  conti = 9;
  for (j = 1; j <= 3; j++) {
  	for (contj; contj >= 13; contj--) {
      console.log("I=" + conti + " J=" + contj);
    }
  }
}
