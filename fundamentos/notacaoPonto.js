console.log(Math.ceil(6.1));// Arredonda para cima

const obj1 = {}
obj1.nome = "Bola"
//obj1['nome'] = "Bola2"
// Os dois jeitos são validos para atribuir valores ao objeto
console.log(obj1.nome);

function Obj(nome){
    this.nome = nome /* Você pode criar tanto atributos quanto funções para serem vistas
                        fora da declaração, se tornando pública
                        */
    this.exec = function(){
        console.log("Executando...");
        
    }                   
}

const obj2 = new Obj("mesa")
//obj2.nome = "Elvis"
const obj3 = new Obj("Cadeira")

console.log(obj2.nome);
console.log(obj3.nome);
obj3.exec()





