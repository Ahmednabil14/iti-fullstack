import { userModel } from "../../../db/models/user.model.js";
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'

const signUp = async(req, res) => {
    
    const user = new userModel(req.body)
    user.password = bcrypt.hashSync(user.password, 8)
    const addedUser = await user.save()
    user.password = undefined  // so password not added to response
    res.status(201).json({message: "added", user: addedUser})
}

const signIn = async(req, res) => {
    const user = await userModel.findOne({email: req.body.email})
    if (!user) {
        return res.status(404).json({'message': 'please signup first'})
    }
    const passwordMatch = bcrypt.compareSync(req.body.password, user.password)
    if (passwordMatch) {
        const token = jwt.sign({user}, 'i am token')
    res.json({message: 'logged successfully!', token})
    } else {
        res.status(404).json({'message': 'invalid password'})
    }
}

export {signUp, signIn}