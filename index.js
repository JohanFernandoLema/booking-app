import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import authentication from './routes/auth.js'
const app = express()
const port = 8000
dotenv.config()

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO)
    console.log('Connected to mongoDB')
  } catch (error) {
    throw error
  }
}

app.use('/auth', authentication)
app.listen(port, () => {
  connectDB()
  console.log('App connected successfully')
})
