const movieModel = require('../models/movie');

module.exports = {
  show: function(req, res, next) {
    console.log(req.body);
    movieModel.findById(req.params.movieId, function(err, movieInfo) {
      if (err) {
        next(err);
      } else {
        res.json({
          status: 200,
          message: "Movie found!",
          data: {
            movies: movieInfo
          }
        });
      }
    });
  },

  index: function(req, res, next) {
    let moviesList = [];

    movieModel.find({}, function(err, movies) {
      if (err) {
        next(err);
      } else {
        for(let movie of movies) {
          moviesList.push({
            id: movie._id,
            name: movie.name,
            released_on: movie.released_on
          });
        }

        res.json({
          status: 200,
          message: "Movies list found!!!",
          data: {
            movies: moviesList
          }
        });
      }
    });
  },

  create: function(req, res, next) {
    movieModel.create({
      name: req.body.name,
      released_on: req.body.released_on
    }, function(err, movieInfo) {
      if(err){
        next(err);
      } else {
        res.json({
          status: 200,
          message: "Movie successfully created",
          data: null
        });
      }
    });
  },

  update: function(req, res, next) {
    movieModel.findByIdAndUpdate(
      req.params.movieId,
      { name: req.body.name },
      function(err, movieInfo)
      {
      if (err) {
        next(err);
      } else {
        res.json({
          status: 200,
          message: "Movie updated successfully!",
          data: null
        });
      }
    });
  },

  destroy: function(req, res, next) {
    movieModel.findByIdAndRemove(
    req.params.movieId,
    function(err, movieInfo){
      if(err) {
        next(err);
      } else {
        res.json({
          status: 200,
          message: "Movie successfully deleted.",
          data: null
        });
      }
    });
  }
};



// +++
