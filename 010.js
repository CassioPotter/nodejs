var express = require("express")
const app = express()

app.get("/sobre", function (req, res){
    res.sendFile(__dirname + "index.html")
})



app.listen(8081, function(){
    console.log("rodando")
})
