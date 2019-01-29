var express = require('express');
var router = express.Router();

// Require controller modules.
var blog_controller = require('../../controllers/blogController');

/// blog ROUTES ///

// GET catalog home page.
router.get('/', blog_controller.blog_list);

// GET request for creating a blog. NOTE This must come before routes that display blog (uses id).
router.get('/create', blog_controller.blog_create_get);

// POST request for creating blog.
router.post('/create', blog_controller.blog_create_post);

// GET request to delete blog.
router.get('/:id/delete', blog_controller.blog_delete_get);

// POST request to delete blog.
router.post('/:id/delete', blog_controller.blog_delete_post);

// GET request to update blog.
router.get('/:id/update', blog_controller.blog_update_get);

// POST request to update blog.
router.post('/:id/update', blog_controller.blog_update_post);

// GET request for one blog.
router.get('/:id', blog_controller.blog_detail);

// GET request for list of all blog items.
router.get('/blogs', blog_controller.blog_list);


module.exports = router;