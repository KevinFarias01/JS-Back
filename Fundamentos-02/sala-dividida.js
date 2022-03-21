const nomes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Camila', 'Marjorie', 'Linda', 'Guilherme', 'Aline', 'Fabio', 'André', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinicius', 'Dayse', 'Carol']

const sala1 = nomes.slice(0, nomes.length / 2);
const sala2 = nomes.slice(nomes.length / 2);

console.log(`Alunos da Sala 1: ${sala1}`);
console.log(`Alunos da Sala 2: ${sala2}`);