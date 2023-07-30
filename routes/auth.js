import express from 'express'
import { register } from '../controllers/auth.js'

const router = express.Router()

// Creating home page
// We use req when the end-user ask something
// We use res so the server send info regarding the req the client did

router.get('/register', register)

export default router
