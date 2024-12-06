import mongoose from 'mongoose'

export const dbConnection = mongoose.connect("mongodb://127.0.0.1:27017/note")
.then(() => {
    console.log("Connected to MongoDB")
})
.catch((err) => {
    console.log(err)
    })