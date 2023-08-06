import Room from '../models/Room.js'
import Hotel from '../models/Hotel.js'
import createError from '../utils/error.js'

// CREATE
export const createRoom = async (req, res, next) => {
  const hotelId = req.params.hotelid
  const newRoom = new Room(req.body)

  try {
    const savedRoom = await newRoom.save()
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $push: { rooms: savedRoom._id },
      })
    } catch (err) {
      next(err)
    }
    res.status(200).json(savedRoom)
  } catch (err) {
    next(err)
  }
}

// UPDATE
export const updateHotel = async (req, res, next) => {
  try {
    const updateHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    )
    res.status(200).json(updateHotel)
  } catch (err) {
    next(err)
  }
}

// DELETE
export const deleteHotel = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id)
    res.status(200).json('You removed this hotel')
  } catch (err) {
    next(err)
  }
}

// GET SINGLE HOTEL
export const getHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id)
    res.status(200).json(hotel)
  } catch (err) {
    next(err)
  }
}

// GET ALL HOTELS
export const getAllHotels = async (req, res, next) => {
  try {
    const hotels = await Hotel.find()
    res.status(200).json(hotels)
  } catch (err) {
    next(err)
  }
}
