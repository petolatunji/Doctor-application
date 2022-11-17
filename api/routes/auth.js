const User = require('../models/User')
const express = require('express')
const router = express.Router()
const CryptoJS = require('crypto-js')
const jwt = require('jsonwebtoken')

//Register
router.post('/register', async (req, res) => {
  const newUser = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
  })
  try {
    const savedUser = await newUser.save()
    res.status(201).json(savedUser)
  } catch (err) {
    res.status(500).json(err)
  }
})

//Login
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email })
    !user && res.status(401).json('wrong credentials')
    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    )
    const Originalpassword = hashedPassword.toString(CryptoJS.enc.Utf8)
    Originalpassword !== req.body.password &&
      res.status(401).json('wrong credentials')

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      { expiresIn: '3d' }
    )

    const { password, ...others } = user._doc

    res.status(200).json({ ...others, accessToken })
  } catch (error) {
    res.status(500).json(err)
  }
})

module.exports = router
