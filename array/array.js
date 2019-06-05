console.log(typeof Array, typeof new Array, typeof []);

let aprovados = new Array('Bia', 'Leonardo','Elvis')
console.log(aprovados);

aprovados = ['Elvis', 'Carlos', 'Stefan', 'Fernanda']// Modo literal de criar Array, mais usado.
console.log(aprovados);

console.log(aprovados[1]);
aprovados[4] = 'Paulo' // Forma de adicionar um novo elemento, usado mais para substituir elementos
aprovados.push('Roberto')// Modo mais usado para adicionar elemento

console.log(aprovados.length);

aprovados[9] = 'Luiz'// Irá criar o elemento na posição 9 e os demais que não foram criados estaram undefined
console.log(aprovados);
console.log('//////////////////////////');
console.log('Causando alteração na ordem do Array ');
console.log('\n');
aprovados.sort()
console.log(aprovados);


delete aprovados[1]// Modo deexcluir um elemento do Array, isso não reordena o Array
console.log(aprovados);

aprovados = ['Ana', 'Rafael', 'Douglas']
aprovados.splice(2,0, 'Elvis', 'Beyur')//Com o método splice é possível excluir elementos e adicionar novos elementos
console.log(aprovados);
