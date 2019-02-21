// Armazenando uma função em uma variavel
const imprimirSoma = function (a,b){

    console.log(a+b);   
}

imprimirSoma(5,2)

//Armazena uma função arrow em uma variavel
const soma = (a,b) =>{
    return a+b
}
console.log(soma(5,10));

// retorno implícito
const subtracao = (a,b) => a-b
console.log(subtracao(5,2));

const imprimir2 = a => console.log(a);
imprimir2("Estou imprimindo")
