const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const {User} = require('./models/User')
const key = require('./config/key')
const port = 5000

//for git test

mongoose.connect(key.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: true
})
.then(() => console.log('mongodb connected!'))
.catch(err => console.log(err))

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send(`Hello world!ss`))

app.post('/register', (req, res)=>{
    const user = new User(req.body)

    user.save((err, userInfo)=>{
        if(err) return res.json({success: false, err})
        return res.status(200).json({success: true})
    })
})

app.listen(port, ()=>{
    console.log(`running on port${port}`)
})