{
    {
        {
            {
                var sera = "Será????"
            }
        }
    }
}
//A variavel sera foi criada de forma global, onde é visivel em todo o programa
console.log(sera);

//Quando é declarada dentro de uma função, ela fica visivel apenas dentro do escopo da função
function teste() {
    var local = 123
    console.log(local);  
}

teste()

 