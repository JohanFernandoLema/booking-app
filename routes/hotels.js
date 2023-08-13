import express from 'express'
import { createError } from '../utils/error.js'
import {
  createHotel,
  deleteHotel,
  getAllHotels,
  getHotel,
  updateHotel,
} from '../controllers/hotel.js'
import { verifyAdmin } from '../utils/verifyToken.js'

const router = express.Router()

// Creating home page
// We use req when the end-user ask something
// We use res so the server send info regarding the req the client did

// CREATE
router.post('/', verifyAdmin, createHotel)

// UPDATE
router.put('/:id', verifyAdmin, updateHotel)

// DELETE
router.delete('/:id', verifyAdmin, deleteHotel)

// GET
router.get('/find/:id', getHotel)

// GET ALL
router.get('/', getAllHotels)
router.get('/countByCity', getAllHotels)
router.get('/countByType', getAllHotels)

export default router
