import express from 'express'
import { getUsers, postUser, putUser } from './user.controller.js'

export const appRoutes = express.Router()

appRoutes.get('/users', getUsers)
appRoutes.post('/users', postUser)
appRoutes.put('/users/:id', putUser)