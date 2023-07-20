import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
// Routes importing
import authRoute from './routes/auth.js'
import usersRoute from './routes/users.js'
import hotelsRoute from './routes/hotels.js'
import roomsRoute from './routes/rooms.js'
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
// Routes connections
app.use('/api/auth', authRoute)
app.use('/api/users', usersRoute)
app.use('/api/hotels', hotelsRoute)
app.use('/api/rooms', roomsRoute)

app.listen(port, () => {
  connectDB()
  console.log('App connected successfully')
})
