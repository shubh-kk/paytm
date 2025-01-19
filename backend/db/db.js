const mongoose = require("mongoose")

mongoose.connect('mongodb://127.0.0.1:27017/paytm')
  .then(() => console.log("Connected to local MongoDB"))
  .catch((err) => console.error("Error connecting to local MongoDB:", err));

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId ,
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required : true
    }
})

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        maxLength: 50
    }
})

const Account = mongoose.model('Account', accountSchema) ;
const User = mongoose.model('User', userSchema) ;

module.exports = { User, Account }
