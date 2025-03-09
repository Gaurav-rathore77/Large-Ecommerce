const {Schema , model} = require('mongoose');

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
        // select: false,
    },
    profilePic: {
        type: String,
    }
})

module.exports = model('User', userSchema);