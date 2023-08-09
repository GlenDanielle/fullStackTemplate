//npm i express cors
//npm i nodemon
const express = require('express')
const cors = require('cors')
const app = express();
app.use(cors())

//file system
const fs = require('fs')

//import ng json
const aboutMe = [require('./Json/aboutMe')]

const port = 3000; //port number
//to turn on server
app.listen(port, console.log(`running in port ${port}`))

//request and response 
app.get('/aboutMe', (req, res)=>{ 
    res.json(aboutMe)
})

app.use((req, res)=>{
    //status its for status code 
    //sendfile requires the directory and the absolute path
    res.status(404).sendFile('/404/404.html', {root:__dirname})
})
