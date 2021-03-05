const express= require('express')
const path = require("path")

const app = express()
const port = process.env.PORT || 3000//pour ne pa blocker l app si on a pas le fichier env

const publicDirectoryPath =path.join(__dirname,'../public')//chemin vers les page html

app.use(express.static(publicDirectoryPath))//ralation entre la page html et backand

app.listen(port,()=> {
    console.log("server is up on port ", port)
})