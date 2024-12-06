import { userModel } from "../../db/models/user.model.js"

export const getUsers = async(req, res) => {
        const users = await userModel.find()
        res.json(users)
    }

export const postUser = async(req, res) => {
        const newUser = await userModel.insertMany(req.body)
        res.json({"message": "added", "users": users})
    }

export const putUser = async(req, res) => {
        const {id} = req.params
        const updatedUser = await userModel.findByIdAndUpdate(id, req.body, {new: true}) // new true to return updated data
        res.json(updatedUser)
    }