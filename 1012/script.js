var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var linha1 = lines.shift();
var numero = linha1.split(" ");

var a = parseFloat(numero[0]);
var b = parseFloat(numero[1]);
var c = parseFloat(numero[2]);

var pi = 3.14159;
var areaTriangulo = a * c / 2;
var areaCirculo = pi * Math.pow(c,2);
var areaTrapezio = (a + b) * c/2;
var areaQuadrado = b * b;
var areaRetangulo = a * b;

console.log("TRIANGULO: " + areaTriangulo.toFixed(3));
console.log("CIRCULO: " + areaCirculo.toFixed(3));
console.log("TRAPEZIO: " + areaTrapezio.toFixed(3));
console.log("QUADRADO: " + areaQuadrado.toFixed(3));
console.log("RETANGULO: " + areaRetangulo.toFixed(3));