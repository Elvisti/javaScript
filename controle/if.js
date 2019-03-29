function soBoaNoticia(nota) {
    if (nota >= 7) {
        console.log("Aprovado com  " + nota);
        
    }else{
        console.log('Reprovado');
        
    }
}soBoaNoticia(8)

function seForVerdadeEuFalo(valor){
    if (valor) {
            console.log('É verdade... '+ valor);
            
    }
}
seForVerdadeEuFalo()
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(NaN)

seForVerdadeEuFalo(' ')
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo("?")
seForVerdadeEuFalo([3,2,2])
seForVerdadeEuFalo({})