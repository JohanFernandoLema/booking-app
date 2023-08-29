import express from 'express'
import { login, register } from '../controllers/auth.js'

const router = express.Router()

// Creating home page
// We use req when the end-user ask something
// We use res so the server send info regarding the req the client did

router.post('/register', register)

router.post('/login', login)

export default router
