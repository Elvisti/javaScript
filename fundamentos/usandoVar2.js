// Var criadas dentro de um escopo global, onde não é dentro de uma função sobrescrevem os valores
var numero = 1
{
    var numero = 2
    console.log("dentro = ", numero);    
}
console.log("fora = " + numero);
