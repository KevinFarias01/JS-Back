// Aumentar 1 ponto na nota do aluno que recebeu 1 ponto extra

const notas = [10, 9, 8, 7, 6];

const notasAtualizadas = notas.map(nota => nota == 10 ? nota : nota + 1);

console.log(notasAtualizadas);