var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let linha1 = lines.shift();
let numeros = linha1.split(" ");
let hInicio = parseInt(numeros[0]);
let mInicio = parseInt(numeros[1]);
let hFim = parseInt(numeros[2]);
let mFim = parseInt(numeros[3]);
let totalH = hFim - hInicio;
let totalM = mFim - mInicio;

if (totalH < 0) {
    totalH = 24 + (hFim - hInicio);
}

if (totalM < 0) {
    totalM = 60 + (mFim - mInicio);
    totalH--;
}

if (hInicio == hFim && mInicio == mFim) console.log('O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)');
else console.log('O JOGO DUROU '+ totalH + ' HORA(S) E ' + totalM + ' MINUTO(S)');