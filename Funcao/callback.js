const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`);
    
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))


//Passa uma função e ele retorna os elementos fazendo o callback

// Exemplo de callback é quando ocorre uma requisição ajax