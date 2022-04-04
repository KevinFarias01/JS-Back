const cliente = {
    nome: "Kevin",
    idade: 27,
    cpf: "05978304521",
    email: "email@kevin.com"
}

// objeto + '.' + chave

console.log(`O nome do cliente é ${cliente.nome} e ele tem ${cliente.idade} anos`)


// Substring!!
console.log(`Os primeiros 3 digitos do meu CPF são ${cliente.cpf.substring(0, 3)}`)