function apresentar(nome) {
    return `meu nome é ${nome}`;
}

//ARROW FUNCTION

const apresentarArrow = nome => `meu nome é ${nome}`;

const soma = (num1, num2) => num1 + num2;


//Arrow function com 'if'

const somaPequenos = (num1, num2) => {
    if (num1 || num2 > 9) {
        return "somente números de 1 a 9";
    } else {
        return num1 + num2;
    }
}


console.log(somaPequenos(2, 4));