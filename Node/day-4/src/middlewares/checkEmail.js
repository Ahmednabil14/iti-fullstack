import { userModel } from "../../db/models/user.model.js";


export const checkEmail = async(req, res, next) => {
    const userFounded = await userModel.findOne({email: req.body.email})
    if (userFounded) {
        return res.status(400).json({ message: "Email already exists" });
    }
    next()
}