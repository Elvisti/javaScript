function teste1(num) {
    if(num > 7)
        console.log(num);

    console.log('Final!!');// Não está associada ao bloco        
}
//teste1(9)
//teste1(4)

function teste2(num){
    if(num > 7); { // cuidado com o ;, não usar com as estruturas de controle.  
        console.log(num);
        
    }
}