// Desafio médias 01

//Médias:  10, 6.5 , 8 , 7.5

/*

let nota1 = 10;
let nota2 = 6.5;
let nota3 = 8;
let nota4 = 7.5;

let media = (nota1 + nota2 + nota3 + nota4) / 4;

console.log(media);  

*/

// Usando Array

//Cada elemento está em um índice... nesse caso a nota 10 está no índice 0 !
const notas = [10, 6.5, 8, 7.5];                   //.length= comprimento da array...no caso 4
let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;
console.log(media); 