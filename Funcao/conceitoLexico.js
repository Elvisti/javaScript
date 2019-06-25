const valor = 'Global'

function minhaFuncao(){
    console.log(valor);
    
}

function exec(){
    const valor = 'Local'
    minhaFuncao()
}

exec()

/* Por conta no qual a função minhaFunção foi escrita
ela irá trazer o valor Global, pelo conceito lexico.
A função procura no local onde ela foi definida.
*/