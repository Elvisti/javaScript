// Função em JS é First-Class Object (Citizens)
// Higher-order function

// criar de forma literal
function fun1() { }

//Armazenar uma variável
const fun2 = function() { }

// Armazenar em um Array

const array = [function (a,b) {return a + b} , fun1, fun2 ]
console.log(array[0](2,5));

// Armazenar em um atributo de objeto

const obj = {}
obj.falar = function() { return "metodo para deixar em maiúsculo"}
console.log(obj.falar().toUpperCase());

// Passar função como parâmetro

function run (fun){
    fun()
}

run(function() { console.log('Executando...')})


// Uma função pode retornar/ conter uma função

function soma (a , b) {
    return function (c){
        console.log(a+b+c);
        
    }
}
// Duas possibilidades de chamar
soma(2,5) (4)

const somamaisum = soma(2,5)
somamaisum(4)
