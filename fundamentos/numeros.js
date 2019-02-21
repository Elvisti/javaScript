const peso1 = 1.0
const peso2 = Number('2.0')// Informar que a string é um inteiro

console.log(peso1,peso2)
console.log(Number.isInteger(peso1))// Verificar se o numero é inteiro
console.log(Number.isInteger(peso2))
console.log(typeof peso2)// Verificar o tipo da variavel
console.log(typeof Number)
const avaliacao1 = 9.152
const avaliacao2 = 8.235
const total = (avaliacao1 * peso1) + (avaliacao2 * peso2)
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))//Função para deixar 2 casas após a virgula
console.log(media.toString())// Retorna o valor em string e não altera por ser constante
console.log(media.toString(2))// Retorna o valor em binario
console.log(typeof media)