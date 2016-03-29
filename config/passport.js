var passport = require('passport');

module.exports = function(app) {

    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser(function(user, done){
        done(null, user);
    });

    passport.deserializeUser(function(user, done){
        done(null, user);
    });

    require('./stratigies/google.strategy')();
    require('./stratigies/twitter.strategy')();
    require('./stratigies/facebook.strategy')();
    require('./stratigies/bnet.strategy')();
};
