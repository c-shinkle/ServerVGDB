var express = require('express');
var router = express.Router();

// Require controller modules.
var video_game_controller = require('../controllers/videoGameController');


// GET catalog home page.
router.get('/', video_game_controller.index);

// GET request for creating a Book. NOTE This must come before routes that display Book (uses id).
router.get('/videogame/create', video_game_controller.video_game_create_get);

// POST request for creating Book.
router.post('/videogame/create', video_game_controller.video_game_create_post);

// GET request to delete Book.
router.get('/videogame/:id/delete', video_game_controller.video_game_delete_get);

// POST request to delete Book.
router.post('/videogame/:id/delete', video_game_controller.video_game_delete_post);

// GET request to update Book.
router.get('/videogame/:id/update', video_game_controller.video_game_update_get);

// POST request to update Book.
router.post('/videogame/:id/update', video_game_controller.video_game_update_post);

// GET request for one Book.
router.get('/videogame/:id', video_game_controller.video_game_detail);

// GET request for list of all Book items.
router.get('/videogames', video_game_controller.video_game_list);

module.exports = router;
