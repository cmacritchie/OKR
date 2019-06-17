const mongoose = require('mongoose');
const validator = require('validator');

const Objective = mongoose.model('Objective', {
    description: {
        type:String,
        trim:true
    },
    progress: {
        type: Number,
        validate: {
            validator: Number.isInteger,
            message: `{VALUE} is not an integer`
        }
    }
})

module.exports = Objective;