import express from 'express'
import { addNote, getNotes } from './note.controller.js'
import { verifyToken } from '../../middlewares/verifyToken.js'

const noteRoutes = express.Router()

noteRoutes.post('/note', verifyToken, addNote)
noteRoutes.get('/note', verifyToken, getNotes)


export default noteRoutes