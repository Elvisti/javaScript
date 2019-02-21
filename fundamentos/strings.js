const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(2))
console.log(escola.charCodeAt(3))//Retorna o valor da tabela unicode referente ao numero 3

console.log(escola.indexOf('r'))// Informa em qual índice está o parâmetro passado

console.log(escola.substring(2))
console.log(escola.substring(0,3))

console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola + '!')

console.log(escola.replace(3,'e'))

console.log('Ana,Maria,Pedro'.split(','))// A função split transforma a string em um Array tendo um separador como parâmetro