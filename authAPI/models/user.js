const mongoose = require('mongoose')
const { Schema } = mongoose
const bcrypt = require('bcrypt-nodejs')

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: true
  },
  password: String
})

userSchema.pre('save', next => {
  let user = this

  bcrypt.genSalt(10, (err, salt) => {
    if (err) { return next(err) }

    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) { return next(err) }

      user = {
        ...user,
        password: hash
      }
      next()
    })
  })
})

module.exports = mongoose.model('user', userSchema)