console.log(Math.ceil(6.1));// Arredonda para cima

const obj1 = {}
obj1.nome = "Bola"
//obj1['nome'] = "Bola2"
// Os dois jeitos são validos para atribuir valores ao objeto
console.log(obj1.nome);

function Obj(nome){
    this.nome = nome /* Você pode criar tanto atributos quanto funções para serem vistas
                        fora da declaração com o this, se tornando pública
                        */
    this.exec = function(){
        console.log("Executando...");
        
    }                   
}

const obj2 = new Obj("mesa")// O this referenciado a cima, recebeu o nome mesa como parâmetro
//obj2.nome = "Elvis"
const obj3 = new Obj("Cadeira")

console.log(obj2.nome);
console.log(obj3.nome);
obj3.exec()





