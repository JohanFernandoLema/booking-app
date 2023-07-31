import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
// Routes importing
import authRoute from './routes/auth.js'
import usersRoute from './routes/users.js'
import hotelsRoute from './routes/hotels.js'
import roomsRoute from './routes/rooms.js'
import cookieParser from 'cookie-parser'
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
// Routes connections (middlewares)
// We use this middle ware in order to connect our links with postman, otherwise it wont work.
app.use(express.json())
app.use(cookieParser())

app.use('/api/auth', authRoute)
app.use('/api/users', usersRoute)
app.use('/api/hotels', hotelsRoute)
app.use('/api/rooms', roomsRoute)

// This is a middleware for handling errors that may appear in the web along its creation
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500
  const errorMessage = err.message || 'Something went wrong'
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  })
})

app.listen(port, () => {
  connectDB()
  console.log('App connected successfully')
})
