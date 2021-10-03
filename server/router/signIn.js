const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const User = require('../models/User');

router.post('/', (req, res, next) => {
  User.find({ email: req.body.email })
    .exec()
    .then(user => {
      if (user.length < 1) {        //if length of this array is less than 1 then there is no such user.
        return res.status(401).json({       // 401 means unauthorized user
          message: 'Authentication failed'
        });
      }
      bcrypt.compare(req.body.password, user[0].password, (err, result) => {
        if (err) {
          return res.status(401).json({     // 401 means unauthorized user
            message: 'Authentication failed'
          });
        }
        if (result) {
          return res.status(200).json({     //every thing is perfect
            message: 'Authentication successful',
          });
        }
        res.status(401).json({      // 401 means unauthorized user
          message: 'Authentication failed'
        });
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

module.exports = router;