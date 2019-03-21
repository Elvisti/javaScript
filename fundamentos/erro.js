function tratarErroELancar(erro){
    //throw new Error ("...")
    //throw 10
    //throw true
    throw 'mensagem' 
    // No throw é lançado o erro, geralmente de uma forma mais explicativa para o usuário
}

function imprimirNomeGritado(obj){
    try {
        console.log(obj.name.toUpperCase()) + '!!!' // possível erro, se ocorrer passar para ser tratado no catch
        
    } catch (e) {
        tratarErroELancar()
        
    }
    finally{
        console.log("Final");// mesmo ocorrendo o erro o finaly é executado
        
    }
}

const obj = {nome: "Roberto"}

imprimirNomeGritado()