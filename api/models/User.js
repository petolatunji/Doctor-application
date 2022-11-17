const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
  {
    firstname: { type: String, unique: true },
    lastname: { type: String, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },

    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
)

module.exports = mongoose.model('User', UserSchema)
