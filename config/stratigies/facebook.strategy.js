/**
 * Created by Jason.Martin on 3/29/2016.
 */
var passport = require('passport'),
    FacebookStrategy = require('passport-facebook').Strategy;

module.exports = function () {
  passport.use(new FacebookStrategy({
  clientID: '252973621709745',
  clientSecret: '6262374e4185e4455ffd0912a62cc9a4',
  callbackURL: "http://localhost:3000/auth/facebook/callback"
},
function(accessToken, refreshToken, profile, cb) {
  User.findOrCreate({ facebookId: profile.id }, function (err, user) {
    return cb(err, user);
  });
}
));
};
