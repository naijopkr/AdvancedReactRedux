const jwt = require('jwt-simple')
const User = require('../models/user')
const config = require('../config')

const tokenForUser = user => {
  return jwt.encode({ sub: user.id, iat: new Date().getTime() }, config.secret)
}

exports.signup = (req, res, next) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(422).send({ error: 'You must provide an e-mail and password' })
  }

  //See if a user with the given email exists
  User.findOne({ email }, (err, user) => {
    if (err) { return next(err) }

    if (user) {
      return res.status(422).send({ error: 'Email is in use' })
    }
  })

  //If a user with email does NOT exist, create and save user record
  const user =  new User({
    email, 
    password
  })

  user.save((err) => {
    if (err) { return next(err) }

    res.json({ token: tokenForUser(user) })
  })
}