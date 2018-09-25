var Video_Game = require('../models/videoGameModel');

var async = require('async');

exports.index = function(req, res) {
    async.parallel({
      videogame_count: function(callback) {
        Video_Game.countDocuments({}, callback);
      }
    }, function(err, results) {
      res.render('index', {title: 'Video Game DB Home', error: err, data: results});
    });
};

// Display list of all Video Games.
exports.video_game_list = function(req, res, next) {
  Video_Game.find({}, 'title')
  //.populate('author')
  .exec(function (err, list_vgs) {
    if (err) { return next(err); }
    //Successful, so render
    res.render('video_game_list', { title: 'Video Game List', video_game_list: list_vgs });
  });
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
