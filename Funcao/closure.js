// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variáveis externas á função

// Contexto léxico em ação!

const x = 'Global'

function fora(){
    const x = 'Local'
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao());

/* Verifica onde a função foi declarada, nesse caso ele
/* pega a constante atribuida dentro da função, em outras palavras, utiliza-se a 
/*constante mais próxima do escopo da função.
*/