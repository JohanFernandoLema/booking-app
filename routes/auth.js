import express from 'express'

const router = express.Router()

// Creating home page
// We use req when the end-user ask something
// We use res so the server send info regarding the req the client did
router.get('/', (req, res) => {
  res.send('Hi my firend')
})

export default router
