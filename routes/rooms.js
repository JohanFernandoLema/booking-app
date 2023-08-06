import express from 'express'
import {
  createRoom,
  deleteRoom,
  getRoom,
  getRooms,
  updateRoom,
} from '../controllers/room.js'
import { verifyAdmin } from '../utils/verifyToken.js'

const router = express.Router()

// Creating home page
// We use req when the end-user ask something
// We use res so the server send info regarding the req the client did

// CREATE
router.post('/:hotelid', verifyAdmin, createRoom)

// UPDATE
router.put('/:id', verifyAdmin, updateRoom)

// DELETE
router.delete('/:id', verifyAdmin, deleteRoom)

// GET
router.get('/:id', getRoom)

// GET ALL
router.get('/', getRooms)

export default router
