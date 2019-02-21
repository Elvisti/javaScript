const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
console.log(nome,concatenacao)


/* Com o uso de template string, é possível fazer a concatenação
* passando uma variavel e utilizando a quebra de linha
*/
const template = `
    Fomos na padaria com a  ${nome} e compramos ovos.
    Mais tarde passamos no cinema!`
  
console.log(concatenacao, template)

//Expressões...
console.log(`1 + 1 = ${1+1} `)


const up = texto => texto.toUpperCase()
console.log(` Bem vindo ${up (' mundo novo')}`)