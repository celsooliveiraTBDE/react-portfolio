var Blog = require('../models/BlogPosts');

exports.index = function(req, res) {
    res.send('NOT IMPLEMENTED: Site Home Page');
};

// Display list of all blog posts.
exports.blog_list = function(req, res) {
    Blog.find()
    .populate({path:'author'})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));};

// Display detail page for a specific blog.
exports.blog_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: blog detail: ' + req.params.id);
};

// Display blog create form on GET.
exports.blog_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: blog create GET');
};

// Handle blog create on POST.
exports.blog_create_post = function(req, res) {
    Blog.create(req.body)
      .then(dbModel => res.json(dbModel))
      .then(console.log("item created successfully"))
      .catch(err => res.status(422).json(err));};

// Display blog delete form on GET.
exports.blog_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: blog delete GET');
};

// Handle blog delete on POST.
exports.blog_delete_post = function(req, res) {
    Blog
    .findById({ _id: req.params.id })
    .then(dbModel => dbModel.remove())
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));};

// Display blog update form on GET.
exports.blog_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: blog update GET');
};

// Handle blog update on POST.
exports.blog_update_post = function(req, res) {
    Blog .findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));};
