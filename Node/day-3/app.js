import bcrypt from "bcrypt"
import express from 'express'
import dbConnection from "./db/dbConnection.js"
import { userModel } from "./db/models/user.model.js"
import { appRoutes } from "./modules/users/user.routes.js"


const app = express()
app.use(express.json())

dbConnection

app.use(appRoutes)

// app.get('/users', async(req, res) => {
//     const users = await userModel.find()
//     res.json(users)
// })

// app.post('/users', async(req, res) => {
//     const newUser = await userModel.insertMany(req.body)
//     res.json({"message": "added", "users": users})
// })

// app.put("/users/:id", async(req, res) => {
//     const {id} = req.params
//     const updatedUser = await userModel.findByIdAndUpdate(id, req.body, {new: true}) // new true to return updated data
//     res.json(updatedUser)
// })

// bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash("123", salt, (err, hash) => {
//         console.log(hash)
//     })
// })


app.listen(3001, (err) => {
    if (err) {
        console.log(err)
        } else
        console.log('server is running on port 3001')
})