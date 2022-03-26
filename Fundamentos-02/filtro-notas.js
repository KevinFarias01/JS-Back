const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const notas = [7, 4.5, 8, 7.5];

const reprovados = alunos.filter((aluno, indice) => notas[indice] < 6);

console.log(`reprovados: ${reprovados}`);




const estudantes = ['Gorda', 'Retardado', 'Palhaço', 'CDF', 'Patricinha', 'Chato'];
const nota = [7, 2.5, 5, 9.8, 4, 8];

const aprovados = estudantes.filter((_, indice) => nota[indice] >= 7);
console.log(`Imbecis aprovados: ${aprovados}`);