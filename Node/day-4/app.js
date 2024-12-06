import express from 'express'
import { dbConnection } from './db/dbConnection.js'
import userRoutes from './src/modules/user/user.routes.js'
import noteRoutes from './src/modules/note/note.router.js'

const app = express()
app.use(express.json())
dbConnection
app.use(userRoutes)
app.use(noteRoutes)



app.listen(3001, (err) => {
    if (err) {
        console.error(err)
        } else {
            console.log('Server is running on port 3001')
        }

})