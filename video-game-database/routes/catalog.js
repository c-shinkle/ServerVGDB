var express = require('express');
var router = express.Router();

// Require controller modules.
var video_game_controller = require('../controllers/videoGameController');


// GET catalog home page.
router.get('/', video_game_controller.index);

// GET request for creating a Video Game. NOTE This must come before routes that display Video Game (uses id).
router.get('/videogame/create', video_game_controller.video_game_create_get);

// POST request for creating Video Game.
router.post('/videogame/create', video_game_controller.video_game_create_post);

// GET request to delete Video Game.
router.get('/videogame/:id/delete', video_game_controller.video_game_delete_get);

// POST request to delete Video Game.
router.post('/videogame/:id/delete', video_game_controller.video_game_delete_post);

// GET request to update Video Game.
router.get('/videogame/:id/update', video_game_controller.video_game_update_get);

// POST request to update Video Game.
router.post('/videogame/:id/update', video_game_controller.video_game_update_post);

// GET request for one Video Game.
router.get('/videogame/:id', video_game_controller.video_game_detail);

// GET request for list of all Video Game items.
router.get('/videogames', video_game_controller.video_game_list);

module.exports = router;
