const User = require('../models/user')

exports.signup = (req, res, next) => {
  const { email, password } = req.body

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

    res.json({ success: 'true' })
  })

  //Respond to request incating that the user was created

}