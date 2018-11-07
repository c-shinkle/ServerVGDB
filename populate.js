#! /usr/bin/env node

var async = require('async')
var VideoGame = require('./models/videogame');
var mongoose = require('mongoose');

var mongoDB = 'mongodb://cshinkle:Game5bone@ds157762.mlab.com:57762/vgdb';

var video_games = [];

console.log(mongoDB);

mongoose.connect(mongoDB, {useNewUrlParser: true}, (err, db) => {
  if (err) throw err;
  console.log("Successfully connected");
  mongoose.Promise = global.Promise;
  db.on('error',
    console.error.bind(console, 'MongoDB connection error:'));
  console.log('Beginning document creation...');
  createVideoGames(db);
});

function videoGameCreate(title, release_date, developer, cb) {
  var video_game_detail = {
    title: title,
    release_date: release_date,
    developer: developer,
  };

  var vg = new VideoGame(video_game_detail);
  //var vg = connection.model('VideoGame', VideoGame);

  console.log('Trying to save ' + title + '...');

  vg.save(function(err, result) {
    if (err) {
      console.log('There was an error while saving: ' + title);
      cb(err, null);
    } else {
      console.log(title + ' successfully saved!');
      video_games.push(vg);
      cb(null, result);
    }
  });
};

function createVideoGames(database) {
  async.parallel([
    function(callback) {
      videoGameCreate(
        'Super Mario 64',
        '1996-09-29',
        'Nintendo',
        callback);
    },
    function(callback) {
      videoGameCreate(
        'The Legend of Zelda: Ocarina of Time',
        '1998-11-23',
        'Nintendo',
        callback);
    },
    function(callback) {
      videoGameCreate(
        'Banjo-Kazooie',
        '1998-06-29',
        'Rare',
        callback);
    },
    function(callback) {
      videoGameCreate(
        'The Legend of Zelda: Majora\'s Mask',
        '2000-10-26',
        'Nintendo',
        callback);
    },
    function(callback) {
      videoGameCreate(
        'Super Smash Bros.',
        '1999-11-19',
        'Nintendo',
        callback);
    },
    function(callback) {
      videoGameCreate(
        'Resident Evil 4',
        '2005-01-11',
        'Capcom',
        callback);
    },
    function(callback) {
      videoGameCreate(
        'Halo: Combat Evolved',
        '2001-11-15',
        'Bungie',
        callback);
    },
    function(callback) {
      videoGameCreate(
        'L.A. Noire',
        '2011-05-17',
        'Rockstar',
        callback);
    },
    function(callback) {
      videoGameCreate(
        'Bioshock',
        '2007-08-21',
        'Irrational Games',
        callback);
    },
    function(callback) {
      videoGameCreate(
        'Call of Duty: Modern Warfare 2',
        '2009-11-10',
        'Infinity Ward',
        callback);
    },
  ],
  function(err, results) {
    if(err) {
      console.error(err);
    } else {
      console.log('No errors in vg creation!');
    }
    console.log('Here are the results:');
    console.log(results);
    database.close();
  });
};

/*
var authors = []
var genres = []
var books = []
var bookinstances = []

function authorCreate(first_name, family_name, d_birth, d_death, cb) {
  authordetail = {first_name:first_name , family_name: family_name }
  if (d_birth != false) authordetail.date_of_birth = d_birth
  if (d_death != false) authordetail.date_of_death = d_death

  var author = new Author(authordetail);

  author.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New Author: ' + author);
    authors.push(author)
    cb(null, author)
  }  );
}

function genreCreate(name, cb) {
  var genre = new Genre({ name: name });

  genre.save(function (err) {
    if (err) {
      cb(err, null);
      return;
    }
    console.log('New Genre: ' + genre);
    genres.push(genre)
    cb(null, genre);
  }   );
}

function createGenreAuthors(cb) {
    async.parallel([
        function(callback) {
          authorCreate('Patrick', 'Rothfuss', '1973-06-06', false, callback);
        },
        function(callback) {
          authorCreate('Ben', 'Bova', '1932-11-8', false, callback);
        },
        function(callback) {
          authorCreate('Isaac', 'Asimov', '1920-01-02', '1992-04-06', callback);
        },
        function(callback) {
          authorCreate('Bob', 'Billings', false, false, callback);
        },
        function(callback) {
          authorCreate('Jim', 'Jones', '1971-12-16', false, callback);
        },
        function(callback) {
          genreCreate("Fantasy", callback);
        },
        function(callback) {
          genreCreate("Science Fiction", callback);
        },
        function(callback) {
          genreCreate("French Poetry", callback);
        },
        ],
        // optional callback
        cb);
}*/
