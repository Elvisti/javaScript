class Pessoa {
    constructor(nome){
        this.nome = nome
    }
    falar(){
        console.log(`Meu nome é ${this.nome}`);
    }
}
const pessoa1 = new Pessoa('Elvis')
pessoa1.falar()


//Factory
const pessoa2 = nome =>{
    return {
        falar(){
            console.log(`Meu nome é ${nome}`); 
        }
    }
    
}
const p2 = pessoa2("Pedro")
p2.falar()