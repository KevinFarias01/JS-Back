/*
let x = "";
console.log(x);
x = "Oi";
*/

//FUNÇÃO

//1-> Declarar a função:

function imprimeTexto(texto) {
    console.log(texto)
}

//2-> Executar a função:

imprimeTexto("Olá");
imprimeTexto("Kevin!");

//Função dentro de função:
imprimeTexto(soma());

//Existem três formas de escrever funções

//Exemplo Somar
function soma() {
    return 2 + 2;
}
console.log(soma());

