const express = require('express');
const router = express.Router();
const moviesController = require('../app/api/controllers/moviesController');

router.get('/', moviesController.index);
router.get('/:movieId', moviesController.show);
router.post('/', moviesController.create);
router.put('/:movieId', moviesController.update);
router.delete('/:movieId', moviesController.destroy);

module.exports = router;
