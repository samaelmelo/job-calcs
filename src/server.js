const express = require('express')
const server = express()
const routes = require('./routes')
const path = require('path')
const door = 3000


// config
  // habilitando template engine
    server.set('view engine', 'ejs')

  // mudar a localização da pasta views
    server.set('views',path.join(__dirname,'views')) 

  // habilitando arquivos estáticos
    server.use(express.static('public'))

  // habilitando o req.boby para ser utilzado
    server.use(express.urlencoded( {extended: true} ))



server.use(routes)
server.listen(door, () => console.log(`rodando na porta ${door}`))
