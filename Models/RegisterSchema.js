import mongoose from "mongoose";

const RegisterSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
})

const Register = mongoose.model('Register', RegisterSchema)

export default Register