var passport = require('passport');
var BnetStrategy = require('passport-bnet').Strategy;
var BNET_ID = process.env.BNET_ID
var BNET_SECRET = process.env.BNET_SECRET

module.exports = function() {
    passport.use(new BnetStrategy({
            clientID: 'aw8ha6krv5dxgwqsx27e4t3n75hw69j8',
            clientSecret: 'XJpNQGwtJGpaSvNre7RKkhew9huNj8y4',
            callbackURL: 'http://localhost:3000/auth/bnet/callback'},
            function (req, accessToken, refreshToken, profile, done) {
                var user = {};
                user.email = profile.emails[0].value;
                user.image = profile._json.image.url;
                user.displayName = profile.displayName;

                user.bnet = {};
                user.bnet.id = profile.id;
                user.bnet.token = accessToken;

                done(null, user);
            }
            ));
};
