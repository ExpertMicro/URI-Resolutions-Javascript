var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let classeUm = lines.shift();
let classeDois = lines.shift();
let classeTres = lines.shift();

if(classeUm == "vertebrado" && classeDois == "ave" && classeTres == "carnivoro") {
  console.log("aguia");
}
else if (classeUm == "vertebrado" && classeDois == "ave" && classeTres == "onivoro") {
  console.log("pomba");
}
else if (classeUm == "vertebrado" && classeDois == "mamifero" && classeTres == "onivoro") {
  console.log("homem");
}
else if (classeUm == "vertebrado" && classeDois == "mamifero" && classeTres == "herbivoro") {
  console.log("vaca");
}
else if(classeUm == "invertebrado" && classeDois == "inseto" && classeTres == "hematofago") {
  console.log("pulga");
}
else if(classeUm == "invertebrado" && classeDois == "inseto" && classeTres == "herbivoro") {
  console.log("lagarta");
}
else if (classeUm == "invertebrado" && classeDois == "anelideo" && classeTres == "hematofago") {
  console.log("sanguessuga");
}
else if (classeUm == "invertebrado" && classeDois == "anelideo" && classeTres == "onivoro") {
  console.log("minhoca");
}
