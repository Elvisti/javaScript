// novo recurso do ES2015

const pessoa = {
    nome: "Elvis",
    idade: 25,
    endereco : {
        logradouro: "Rua do zé",
        numero: 447
    }
}

const {nome, idade} = pessoa// Desestruturando o objeto pessoa
console.log(nome, idade);

const {nome: n, idade: i } = pessoa// É possível colocar apelido
console.log(n, i);

pessoa.cidade = "São Carlos"
pessoa ['sobrenome'] = "Da Silva"
const { sobrenome, bemHumorada = true, cidade, sexo} = pessoa
console.log(sobrenome, bemHumorada, cidade, sexo);

const {endereco: {logradouro,  numero}} = pessoa
console.log(logradouro, numero);


    