#! /usr/bin/env node

console.log('This script populates some test books, authors, genres and bookinstances to your database. Specified database as argument - e.g.: populatedb mongodb://your_username:your_password@your_dabase_url');

// Get arguments passed on command line
var userArgs = process.argv.slice(2);
if (!userArgs[0].startsWith('mongodb://')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}

var async = require('async')
var VideoGame = require('./models/videogame');

var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

var video_games = [];

function videoGameCreate(title, developer, release_date, cb) {
  var video_game_detail = {
    title: title,
    developer: developer,
    release_date: release_date
  };

  var vg = new VideoGame(video_game_detail);

  vg.save(function (err) {
    if (err) {
      cb(err, null);
    }
    console.log('New Video Game: ' + vg);
    video_games.push(vg);
    cb(null, vg);
  });
};

function createVideoGames() {
  async.parallel([
    videoGameCreate('Super Mario 64',
      '1996-09-29',
      'Nintendo'),
    videoGameCreate('The Legend of Zelda: Ocarina of Time',
      '1998-11-23',
      'Nintendo'),
    videoGameCreate('Banjo-Kazooie',
      '1998-06-29',
      'Rare'),
    videoGameCreate('The Legend of Zelda: Majora\'s Mask',
      '2000-10-26',
      'Nintendo'),
    videoGameCreate('Super Smash Bros.',
      '1999-11-19',
      'Nintendo'),
    videoGameCreate('Resident Evil 4',
      '2005-01-11',
      'Capcom'),
    videoGameCreate('Halo: Combat Evolved',
      '2001-11-15',
      'Bungie'),
    videoGameCreate('L.A. Noire',
      '2011-05-17',
      'Rockstar'),
    videoGameCreate('Bioshock',
      '2007-08-21',
      'Irrational Games'),
    videoGameCreate('Call of Duty: Modern Warfare 2',
      '2009-11-10',
      'Infinity Ward'),
  ]);
};

async.series([
    createVideoGames
],
// Optional callback
function(err, results) {
    if (err) {
        console.log('FINAL ERR: '+err);
    }
    else {
        console.log('Video Games: '+ video_games);
    }
    // All done, disconnect from database
    mongoose.connection.close();
});

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
