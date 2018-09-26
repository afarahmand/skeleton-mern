const userModel = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
  signUp: function(req, res, next) {
    userModel.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    }, function(err, result) {
      if (err) {
        next(err);
      } else {
        res.json({
          status: "Success",
          message: "User created successfully!",
          data: null
        });
      }
    });
  },
  signIn: function(req, res, next) {
    userModel.findOne({
      email: req.body.email
    }, function(err, userInfo) {
      if (err) {
        next(err);
      } else {
        if(bcrypt.compareSync(req.body.password, userInfo.password)) {
          const token = jwt.sign(
            { id: userInfo._id },
            req.app.get('secretKey'),
            { expiresIn: '1h' }
          );

          res.json({
            status: "success",
            message: "user found!",
            data: {
              user: userInfo,
              token: token
            }
          });
        } else {
          res.json({
            status: "error",
            message: "Invalid email/password!!!",
            data: null
          });
        }
      }
    });
  }
};
