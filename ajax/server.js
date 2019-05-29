const bodyParser = require('body-parser') // quando tiver uma requisição será interpretada pelo body-parse, deixando prontos para manipular os dados
const express = require('express')
const app = express()// instanciando o express

app.use(express.static('.'))// Será executado o multer para um padrão de url ou algum especifico, no caso (.) na pasta atual
app.use(bodyParser.urlencoded({extended: true}))// Se vir algum submite irá pegar os dados e transformar em objeto
app.use(bodyParser.json())//Se vir algum formato json irá transformar em objeto


app.get('/teste', (req, res) => res.send(new Date))// Quando houver uma requisição do tipo get na url /teste, irá retornar um OK
app.listen(8080, () => console.log('Executando...'));// Iniciando o servidor na porta 8080
