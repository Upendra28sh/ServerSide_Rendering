const express = require('express')
const todoroute=require('./routes/todos')

const server= express()

server.set('view engine','hbs')
server.set('views', __dirname+"/views")

server.use(express.json())
server.use(express.urlencoded({extended: true}))

server.use("/todos",todoroute)

server.listen(2121)


