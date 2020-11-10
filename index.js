const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = 5000

mongoose.connect('mongodb+srv://minwoo:1q2w3e4r@react.u0nh5.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: true
})
.then(() => console.log('mongodb connected!'))
.catch(err => console.log(err))

app.get('/', (req, res) => res.send(`Hello world!`))

app.listen(port, ()=>{
    console.log(`running on port${port}`)
})