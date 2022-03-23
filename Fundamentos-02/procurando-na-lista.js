const alunos = ['João', 'Ana', 'Caio', 'Lara'];

const mediaDosAlunos = [10, 7, 9, 6];

let notasEAlunos = [alunos, mediaDosAlunos];

const exibeNomeNota = (nomeDoAluno) => {
    if (notasEAlunos[0].includes(nomeDoAluno)) {
        let indice = notasEAlunos[0].indexOf(nomeDoAluno)
        return notasEAlunos[0][indice] + ', sua média é ' + notasEAlunos[1][indice]
    } else {
        return "Aluno não está cadastrado"
    }
};

console.log(exibeNomeNota("Ana"));