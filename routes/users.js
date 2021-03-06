const express = require('express');
const router = express.Router();
const usersController = require('../app/api/controllers/usersController');

router.post('/signUp', usersController.signUp);
router.post('/signIn', usersController.signIn);

module.exports = router;
