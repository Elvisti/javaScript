const valores = [7.7, 8.9, 9.5, 9.2]
console.log(valores[0], valores[3]);
console.log(valores[6])

valores[4] = 15
console.log(valores);
console.log('O tamanho do meu array é: ' + valores.length);

valores.push({id: 2}, false, null, 'teste')// Adicionar itens no array
console.log(valores);

console.log(valores.pop());// Tira o ultimo elemento

delete valores[0]
console.log(valores);
console.log(typeof valores);




