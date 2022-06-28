const http = require("http")
const express = require("express")
const morgan = require("morgan")
const cors = require("cors")


// lista de todas as rotas
const userRouter =  require('./routes/users')


const PORT = 3000
const app = express()

// Add CORS
app.use(cors())
app.use(morgan('dev')) // Para verificar os logs 
app.use(express.json())
app.use(express.urlencoded({ extended : true}))

// Rotas
app.use('/user', userRouter)


const server = http.createServer(app)
server.listen(PORT)
server.on('listening',  () => {
    console.log("Servidor na porta", PORT)
})