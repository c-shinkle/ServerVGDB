var Video_Game = require('../models/videoGameModel');

exports.index = function(req, res) {
    res.send('NOT IMPLEMENTED: Site Home Page');
};

// Display list of all Video Games.
exports.video_game_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Video Game list');
};

// Display detail page for a specific Video Game.
exports.video_game_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Video Game detail: ' + req.params.id);
};

// Display Video Game create form on GET.
exports.video_game_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Video Game create GET');
};

// Handle Video Game create on POST.
exports.video_game_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Video Game create POST');
};

// Display Video Game delete form on GET.
exports.video_game_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Video Game delete GET');
};

// Handle Video Game delete on POST.
exports.video_game_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Video Game delete POST');
};

// Display Video Game update form on GET.
exports.video_game_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Video Game update GET');
};

// Handle Video Game update on POST.
exports.video_game_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Video Game update POST');
};
