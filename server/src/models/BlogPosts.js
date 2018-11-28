'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BlogPostSchema = new Schema({
    id: {
        type: Number,
        required: true

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

module.exports = mongoose.model('BlogPost', BlogPostSchema)

