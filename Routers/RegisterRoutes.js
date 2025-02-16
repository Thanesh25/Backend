import express from "express"
import { Login, UserRegister } from "../Controllers/RegisterController.js";

const router = express.Router()
router.post("/register", UserRegister)
router.post("/login",Login)

export default router