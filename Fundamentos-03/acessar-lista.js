const cliente = {
    nome: "Kevin",
    idade: 27,
    cpf: "05978304521",
    email: "email@kevin.com"
};
//                0         1       2       3
const chaves = ["nome", "idade", "cpf", "email"];

console.log(cliente[chaves[0]])

chaves.forEach(info => console.log(cliente[info]))

console.log(cliente["idade"])