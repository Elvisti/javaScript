function obterInteiroAleatorioEntre (min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
    
}

let opcao = -1

do {
    opcao = obterInteiroAleatorioEntre(-1, 10)
    console.log(`O valor escolido foi ${opcao}.`);
    
    
} while (opcao != -1);

console.log('Até a próxima!');
