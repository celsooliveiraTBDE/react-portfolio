var Comment = require('../models/Comments');

exports.index = function(req, res) {
    res.send('NOT IMPLEMENTED: Site Home Page');
};

// Display list of all comment posts.
exports.comment_list = function(req, res) {
    Comment.find({})
    .populate({path:'post'})
    .populate({path:'author', select: 'firstname'})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));};

// Display detail page for a specific comment.
exports.comment_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: comment detail: ' + req.params.id);
};

// Display comment create form on GET.
exports.comment_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: comment create GET');
};

// Handle comment create on POST.
exports.comment_create_post = function(req, res) {
    Comment.create(req.body)
      .then(dbModel => res.json(dbModel))
      .then(console.log("item created successfully"))
      .catch(err => res.status(422).json(err));};

// Display comment delete form on GET.
exports.comment_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: comment delete GET');
};

// Handle comment delete on POST.
exports.comment_delete_post = function(req, res) {
    Comment
    .findById({ _id: req.params.id })
    .then(dbModel => dbModel.remove())
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));};

// Display comment update form on GET.
exports.comment_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: comment update GET');
};

// Handle comment update on POST.
exports.comment_update_post = function(req, res) {
    Comment .findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));};
