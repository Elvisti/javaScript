//console.log(soma(3,2));// com a function declaration é possível executar antes da declaração.


// function declaration
function soma(x, y){
    return x + y
}

//function expression
const sub = function (x, y){

    let result = x - y

    if(result < 0){
        console.log("O valor não pode ser negativo");
        
    }else{
        console.log("Cálculo efetuado com sucesso!");
        
        
    }
    
    return result
        
    
    
}
console.log(sub(5, 6));




// named function express
const mult = function mult(x, y){
    return x * y
}
//console.log(mult(10, 5));


