import Hotel from '../models/Hotel.js'

// CREATE
export const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body)
  try {
    const savedHotel = await newHotel.save()
    res.status(200).json(savedHotel)
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
  const { min, max, ...others } = req.query
  try {
    const hotels = await Hotel.find({
      ...others,
      cheapestPrice: { $gt: min | 1, $lt: max || 999 },
    }).limit(req.query.limit)
    res.status(200).json(hotels)
  } catch (err) {
    next(err)
  }
}

//COUNT BY CITY
export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(',')
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Hotel.countDocuments({ city: city })
      })
    )
    res.status(200).json(list)
  } catch (err) {
    next(err)
  }
}

//COUNT BY Type
export const countByType = async (req, res, next) => {
  try {
    const hotelCount = await Hotel.countDocuments({ type: 'hotel' })
    const apartmentCount = await Hotel.countDocuments({ type: 'apartment' })
    const resortCount = await Hotel.countDocuments({ type: 'resort' })
    const villaCount = await Hotel.countDocuments({ type: 'villa' })
    const cabinCount = await Hotel.countDocuments({ type: 'cabin' })
    res.status(200).json([
      { type: 'hotel', count: hotelCount },
      { type: 'apartment', count: apartmentCount },
      { type: 'resort', count: resortCount },
      { type: 'villa', count: villaCount },
      { type: 'cabin', count: cabinCount },
    ])
  } catch (err) {
    next(err)
  }
}
