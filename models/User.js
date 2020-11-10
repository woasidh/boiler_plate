const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const saltRounds = 10

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        minlength: 5
    }
})

userSchema.pre('save', function(next){
    var user = this;

    //only when password is modified
    if(user.isModified('password')){
        bcrypt.genSalt(saltRounds, (err, salt) =>{
            if(err){
                return next(err)
            } 
            bcrypt.hash(user.password, salt, (err, hash)=>{
                if(err) {
                    return next(err)
                }
                user.password = hash
                next()
            })
        })
    }
})

const User = mongoose.model('User', userSchema)

module.exports = {User}