const express = require('express')
var cors = require('cors')
const authRoute = require('./routes/auth')
const userRoute = require('./routes/user')

const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('connected to DB'))
  .catch((err) => {
    console.log(err)
  })

app.use(express.json())
app.use(cors())

//routes

app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)

app.listen(5000, () => {
  console.log('backend connected')
})
