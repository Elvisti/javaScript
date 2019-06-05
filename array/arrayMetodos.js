const pilotos = ['Vettel', 'Alonso','Raikkonen', "Massa"]
pilotos.pop()// Retira o último elemento do Array
console.log(pilotos);

pilotos.push('Rubinho')// Adiciona um elemento na última posição do índice
console.log(pilotos);

pilotos.shift() //Remove o primeiro elemento da lista

pilotos.unshift('Hamilton')// Adiciona um elemento na primeira posição do índice

// splice pode adicionar e remover elementos

//Adicionar
pilotos.splice(2,0, 'Bottas', 'Massa')
console.log(pilotos);

//Remover
pilotos.splice(3,1)// massa quebrou!!
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2) // Novo Array. Usa elementos de um Array e cria um novo
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1,4)// Irá iniciar no índice 1 até o 4, mas não utiliza o elemento 4 e sim o anterior criando um novo Array
console.log(algunsPilotos2);




