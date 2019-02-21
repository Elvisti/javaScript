let numero = 1
{
    // let busca a variavel dentro do escopo menor, caso não exista ele busca o escopo mais proximo
    let numero2 = 2
    console.log("dentro =", numero);
}
console.log("fora =", numero);
