const [a] = [10]// Colchetes do lado esquerdo serve para desestruturação e do lado direito para criar array
console.log(a);

const [n1, , n3, , n5, n6 = 0] = [8, 4,  8, 9]
console.log(n1, n3, n5, n6);

const [, [, nota]] = [[, 8, 8], [9, 6, 7]]
console.log(nota);
