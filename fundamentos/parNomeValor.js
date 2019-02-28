// par nome/valor
const saudacao = 'opa' // contexto léxico 1

function exec(){
    const saudacao = "Falaa" // contexto léxico 2
    return saudacao
}

// O nome da variavel é o mesmo mas criadas em contextos diferentes

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Elvis',
    idade: 32,
    peso: 90,
    endereco : {
        logradouro: "Rua muito bacana",
        numero: 447
    }

}
// Valores iguais em cliente e endereço não teria problema pois estão em contextos diferentes
console.log(saudacao);
console.log(exec(saudacao));
console.log(cliente);

