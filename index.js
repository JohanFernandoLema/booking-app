import express from 'express'
const dotenv = require('dotenv')
const mongoose = require('mongoose')

const app = express()
const port = 8000
dotenv.config()

app.listen(port, () => {
  console.log('App connected successfully')
})
