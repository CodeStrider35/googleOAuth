var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

module.exports = function() {
    passport.use(new GoogleStrategy({
            clientID: '131990906356-mu6q59ver90mtgih8upq3k6tp2pg90v5.apps.googleusercontent.com',
            clientSecret: '8BX8gnwnX5w9BDVCSWkmSDig',
            callbackURL: 'http://localhost:3000/auth/google/callback'},
        function (req, accessToken, refreshToken, profile, done) {
            var user = {};
            user.email = profile.emails[0].value;
            user.image = profile._json.image.url;
            user.displayName = profile.displayName;

            user.google = {};
            user.google.id = profile.id;
            user.google.token = accessToken;

            done(null, user);
        }
    ));
};