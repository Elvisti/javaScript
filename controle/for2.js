const notas = [0.1, 2.5, 3.6, 4.8]

for ( let i in notas){
    console.log(`${i} = `, notas[i]);
    
}

const pessoa = {
    nome: 'Elvis',
    sobrenome: 'Chagas',
    idade: 26,
    peso: 85
}

for( let atributos in pessoa){
    console.log(`${atributos} = ${pessoa[atributos]}`)
    
}

