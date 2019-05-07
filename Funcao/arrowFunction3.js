let comparaComThis = function (param) {
    console.log(this === param);
    
}
comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param);
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)// Não altera o this dentro de uma função Arrow, mesmo com o bind
comparaComThisArrow(module.exports)
