var express = require("express")
const app = express()

app.get("/sobre", function (req, res){
    res.send("Bem vindo a pagina sobre")
})

app.get("/ola/:nome", function (req, res){
    res.send("Bem vindo a pagina ola")
})



app.listen(8081, function(){
    console.log("server rodando")
})
