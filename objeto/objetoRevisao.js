// coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

const up = texto => texto.toUpperCase()
console.log(`${up('Antes de deletar os atributos')}`);


console.log(produto);
console.log('\n');
console.log("////////////////////////////////////////////////////");
console.log('\n');
console.log(`${up('depois de deletar os atributos!')}`);


delete produto.preco
delete produto['marca do produto']
console.log(produto);
console.log('\n');
console.log(`${up('**criando um objeto mais complexo**')}`);

const carro = {
    modelo: 'A4',
    cor: "Vermelho",
    proprietario: {
        nome: 'Raul Pereira',
        cpf: '325.356.125-12',
        idade: 35,
        endereco:{
            logradouro: 'Rua xyz',
            numero: 447,
            telefone:{
                residencial: 1633341262, 
                celular: 16996086208
            }
        }
    },
    condutores : [{
        nome:'Ana Chaves',
        idade: 36
    },{
        nome:'Charles Silva',
        idade:47
    }],
    calcularValorSeguro : function (){
        //Dentro do objeto usar :
    }
}


carro.proprietario.endereco = 'Rua Visconde'
console.log(carro);


delete carro['condutores']

console.log(carro);
