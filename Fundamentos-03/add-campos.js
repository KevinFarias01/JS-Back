const cliente = {
    nome: "Kevin",
    idade: 27,
    cpf: "05978304521",
    email: "email@kevin.com"
};

cliente.fone = "988776567"

console.log(cliente)


const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
        nome: "Saruman",
        classe: "mago"
    },
    status: "desaparecido"
}

delete objPersonagem.aliado
delete objPersonagem["status"]

console.log(objPersonagem) //undefined
console.log(objPersonagem.status) //undefined