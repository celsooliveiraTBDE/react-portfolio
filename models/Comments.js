'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CommentSchema = new Schema({
    post: { type: mongoose.Schema.ObjectId, ref: 'BlogPost' },
    author:  { type: Schema.Types.ObjectId, ref: 'User', required: true },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date
    },
    createdby: {
        type: String, 
    }
    // },
    //  toJSON: { virtuals: true }     
})

// CommentSchema.virtual('commentby', {
//     ref: 'User',
//     localField: 'createdby',
//     foreignField: 'firstname'
//   })
  
//   CommentSchema.pre('findOne', autoPopulateComments)
//   CommentSchema.pre('find', autoPopulateComments)
  module.exports = mongoose.model('Comment', CommentSchema)
//   function autoPopulateComments (next) {
//     this.populate('commentby', 'createdby')
//     next()
//   }


