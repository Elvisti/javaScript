function getInteiroAleatorio (min, max){
    const valor = Math.random() * (max - min) + min // para obter um número aleatório entre -1 e 10
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1) {
    opcao = getInteiroAleatorio(-1, 10)
    console.log(`Opção escolida foi ${opcao}.`);
    
}
console.log('Até a próxima!');
