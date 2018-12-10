const passport = require('passport')
const User = require('../models/user')
const config = require('../config')
const { Strategy, ExtractJwt } = require('passport-jwt')
const LocalStrategy = require('passport-local')

//Local Strategu setup
const localOptions = {
  usernameField: 'email'
}

const localLogin = new LocalStrategy(localOptions, (email, password, done) => {
  User.findOne({ email }, (err, user) => {
    if (err) { return done(err) }
    if (!user) { return done(null, false) }

    user.comparePassword(password, (err, isMatch) => {
      if (err) { return done(err) }
      if (!isMatch) { return done(null, false) }

      return done(null, user)
    })
  })
})

//JWT Strategy setup
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret
}

const jwtLogin = new Strategy(jwtOptions, (payload, done) => {
  User.findById(payload.sub, (err, user) => {
    if (err) { return done(err, false) }

    if (user) {
      done(null, user)
    } else {
      done(null, false)
    }
  })
})

passport.use(jwtLogin)
passport.use(localLogin)