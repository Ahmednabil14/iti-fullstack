import { Router } from "express";
import { signIn, signUp } from "./user.controller.js";
import { checkEmail } from "../../middlewares/checkEmail.js";

const userRoutes = Router()

userRoutes.post('/signup', checkEmail, signUp)
userRoutes.post('/signin', signIn)


export default userRoutes