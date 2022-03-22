const listaDeChamada = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];

listaDeChamada.splice(1, 2, 'Rodrigo'); //1º parametro= removi a partir do índice 1, 2º parametro= 2 elementos, e colocou 'Rodrigo' no terceiro parâmetro

console.log(`lista de chamada: ${listaDeChamada}`);


//Animais marinhos 2

animaisDoAquario = ['🐋', '🐙', '🐬', '🦈']

animaisDoAquario.splice(1, 0, '🐠')
animaisDoAquario.splice(3, 2, '🐟')

console.log(animaisDoAquario)