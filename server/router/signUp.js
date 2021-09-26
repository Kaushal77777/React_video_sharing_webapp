const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../models/User');



router.post('/', (req, res, next) => {
  console.log(req.body);
  
  
  User.find({ email: req.body.email })
    .exec()
    .then(user => {                                             // By default, if no user found, user = []
      if (user.length >= 1) {
        return res.status(409).json({                           // 409 means conflict
          message: 'Mail exists'
        });
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {     // hash is not reversible
                                                                // The idea behind salting is that user may enter common password
                                                                // So, salting adds some random string to icecream before we hash it.
                                                                // 10 is number of salting rounds
          if (err) {
            console.log(err);
            return res.status(500).json({                       //500 means internal server error
              error: err
            });
          } else {
            const user = new User({
              _id: new mongoose.Types.ObjectId(),
              firstName: req.body.firstName,
              lastName: req.body.lastName,
              email: req.body.email,
              password: hash
            });
            user
              .save()
              .then(result => {
                console.log(result);
                res.status(201).json({                          //201 means new resource have been added
                  message: 'User created'
                });
              })
              .catch(err => {
                console.log(err);
                res.status(500).json({                          //500 means internal server error
                  error: err
                });
              });
          }
        });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(422).json({                                    // 422 means unprocess about entity
        error: err
      });
    });
});

module.exports = router;