var express = require('express');
var passport = require('passport');
var router = express.Router();

router.route('/google/callback')
    .get(passport.authenticate('google', {
        successRedirect: '/users/',
        failure: '/error/'
    }));

router.route('/google')
    .get(passport.authenticate('google', {
        scope: ['profile',
        'email']
    }));

router.route('/bnet')
      .get(passport.authenticate('bnet', {
        scope: "wow.profile"
      }));

router.route('/bnet/callback')
  .get(passport.authenticate('bnet',
  {
    successRedirect: '/users/',
    failure: '/'
  }
));

router.route('/twitter/callback')
    .get(passport.authenticate('twitter', {
        successRedirect: '/users/',
        failure: '/error/'
    }));

router.route('/twitter')
    .get(passport.authenticate('twitter'));

router.route('auth/facebook')
    .get(passport.authenticate('facebook'));

router.route('auth/facebook/callback')
    .get(passport.authenticate('facebook', {
        successRedirect: '/users',
        failureRedirect: '/'
    }));

module.exports = router;
