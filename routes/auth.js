import express from 'express'

const router = express.Router()

// Creating home page
// We use req when the end-user ask something
// We use res so the server send info regarding the req the client did
router.get('/', (req, res) => {
  res.send('Auth endpoint')
})

router.get('/register', (req, res) => {
  res.send('Register Endpoint')
})

export default router
