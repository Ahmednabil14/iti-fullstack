import { Schema, model } from "mongoose"

const userSchema = new Schema({
    name: String,
    email: String,
    age: Number
})

export const userModel = model('User', userSchema)