// Parâmetros de função

function soma(num1, num2) {
    return num1 + num2;
}

console.log(soma(32, 87));
console.log(soma(3, 7));
console.log(soma(13, 7));


// Parâmetros x Argumentos

function nomeIdade(nome, idade) {
    return `Meu nome é ${nome} e minha idade é ${idade}.`;
}

console.log(nomeIdade("Kevin", 27))

//Multiplicar  * 


function multiplica(num1, num2) {
    return num1 * num2;
}

console.log(multiplica(soma(2, 3), soma(1, 2)))