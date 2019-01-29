const mongoose = require("mongoose");
// // const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    author:  { type: Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    body: { type: String, required: true }
  }, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  })
  
  blogSchema.virtual('comments', {
    ref: 'Comment',
    localField: '_id',
    foreignField: 'body'
  })
  
  blogSchema.pre('findOne', autoPopulateComments)
  blogSchema.pre('find', autoPopulateComments)
  
  function autoPopulateComments (next) {
    this.populate('comments', 'body')
    next()
  }


module.exports = mongoose.model('BlogPost', blogSchema)

 
