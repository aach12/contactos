const express = require('express') 
const controlador = require('./controlador.js')
const app = express()
const port = 3000
const cors = require('cors')
const bodyParser = require("body-parser")

app.use(bodyParser.json());

app.use(cors({
     origin: '*'
}));

app.get('/obtenercontactos', (req, res) => {
    res.json(controlador.leer())
})

app.post('/guardarcontactos', (req, res) => {
    console.log(req.body)
   res.json(controlador.escribir(req.body))
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})