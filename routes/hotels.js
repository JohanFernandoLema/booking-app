import express from 'express'
import { createError } from '../utils/error.js'
import {
  createHotel,
  deleteHotel,
  getAllHotels,
  getHotel,
  updateHotel,
} from '../controllers/hotel.js'

const router = express.Router()

// Creating home page
// We use req when the end-user ask something
// We use res so the server send info regarding the req the client did

// CREATE
router.post('/', createHotel)

// UPDATE
router.put('/:id', updateHotel)

// DELETE
router.delete('/:id', deleteHotel)

// GET
router.get('/:id', getHotel)

// GET ALL
router.get('/', getAllHotels)

export default router
