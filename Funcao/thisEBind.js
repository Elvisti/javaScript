const pessoa = {
    saudacao: 'Bom Dia!',
    falar() {
        console.log(this.saudacao);

    }
}

pessoa.falar()

const falar1 = pessoa.falar

falar1()// conflito entre paradigmas: funcional e oo

const falarDePessoa = pessoa.falar.bind(pessoa)// O bind faz a amarração do this da função
falarDePessoa()
