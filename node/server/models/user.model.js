const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    isConfirmed: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: new Date().getTime()
    }
});

mongoose.model("user", user);