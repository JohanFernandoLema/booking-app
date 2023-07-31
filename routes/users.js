import express from 'express'
import {
  createUser,
  updateUser,
  deleteUser,
  getUser,
  getAllUsers,
} from '../controllers/user.js'
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js'

const router = express.Router()

// // CHECK IF USER EXISTS
// router.get('/checkauthentication', verifyToken, (req, res, next) => {
//   res.send('Hello user you logged in')
// })

// // CHECK IF USER EXISTS SO THEY CAN DELETE THEIR OWN PROFILE
// router.get('/checkuser/:id', verifyUser, (req, res, next) => {
//   res.send('Hello user you logged in, you can delete your account')
// })

// // CHECK IF USER IS ADMIN
// router.get('/checkadmin/:id', verifyAdmin, (req, res, next) => {
//   res.send('Hello admin you have the power')
// })

// CREATE
router.post('/', createUser)

// UPDATE
router.put('/:id', updateUser)

// DELETE
router.delete('/:id', deleteUser)

// GET
router.get('/:id', getUser)

// GET ALL
router.get('/', getAllUsers)

export default router
