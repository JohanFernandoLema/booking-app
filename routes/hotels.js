import express from 'express'
// import Hotel from '../models/Hotel.js'

const router = express.Router()

// Creating home page
// We use req when the end-user ask something
// We use res so the server send info regarding the req the client did

// CREATE
router.post('/', async (req, res) => {
  const newHotel = new Hotel(req.body)
  try {
    const savedHotel = await newHotel.save()
    res.status(200).json(savedHotel)
  } catch (err) {
    res.status(500).json(err)
  }
})
// UPDATE
// DELETE
// GET
// GET ALL

export default router
