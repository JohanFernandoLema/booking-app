import User from '../models/User.js'

import jwt from 'jsonwebtoken'
import { createError } from '../utils/error.js'
import bcrypt from 'bcrypt'
const saltRounds = 10

export const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(saltRounds)
    const hash = bcrypt.hashSync(req.body.password, salt)

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    })

    await newUser.save()
    res.status(200).send('User has been created')
  } catch (err) {
    next(err)
  }
}

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username })
    if (!user) {
      return next(createError(404, 'Credentials are not valid "username"'))
    }

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    )
    if (!isPasswordCorrect) {
      return next(
        createError(400, 'Credentials are not valid password "I am sad"')
      )
    }

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT
    )

    const { password, isAdmin, ...otherDetails } = user._doc
    res
      .cookie('access_token', token, {
        httpOnly: true,
      })
      .send({ ...otherDetails })
  } catch (err) {
    next(err)
  }
}
