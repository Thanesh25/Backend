import jwt from "jsonwebtoken"
import Register from "../Models/RegisterSchema.js"
import bcrypt from "bcryptjs"
import dotenv from "dotenv"
dotenv.config()


export const UserRegister = async (req, res) => {
    try {
        const { username, email, password } = req.body
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = new Register({ username, email, password: hashedPassword })
        await user.save()
        res.status(200).json({ message: "Register successfully" })

        
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Error register user" })
    }
}




export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Register.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

   
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({
      message: "Login Successful",
      token, 
      user: { id: user._id, email: user.email },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};
