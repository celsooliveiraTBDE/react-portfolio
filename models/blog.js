'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BookSchema = new Schema({
    id: {
        type: Number,
    
    },
    title: {
        type: String,
        required: true
    },
    createdAt: {

        type: Date,
        default: Date
    },
    body: {
        type: String,
    
    },

})

module.exports = mongoose.model('Book', BookSchema)