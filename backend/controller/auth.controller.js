import User from "../models/user.model.js"
import bcryptjs from "bcryptjs"
import generateTokenandsetCookie from "../utils/generateToken.js"
import validator from "validator"


export const signup = async (req, res) => {
    
    try {
        const { firstname, lastname, email, password, confirmPassword } = req.body

        if (!validator.isEmail(email)) {
            // The email is not valid
            return res.status(400).json({error:'Invalid email'});
          }

        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Password do not match" })

        }
        let user = await User.findOne({ email })
        
        if (user) {
            return res.status(400).json({ error: "Username already exists" })
        }
        //hashing of password

        const salt = await bcryptjs.genSalt(10)
        const hashedpassword = await bcryptjs.hash(password, salt)

        const newuser = new User({
            firstname, 
            lastname, 
            email, 
            password:hashedpassword
        })

       
        if (newuser) {
            // generate JWT token 
            generateTokenandsetCookie(newuser._id,res);    
            await newuser.save()
            res.status(201).json({
                _id: newuser._id,
                firstname: newuser.firstname,
                lastname: newuser.lastname,
                email: newuser.email
            })
        } else {
            res.status(400).json({ error: "Invalid user data" })
        }

    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" })
    }
}

export const login=async(req,res)=>{
    try {
        const {email,password}=req.body
        const user= await User.findOne({email})
        
        
        const isPasswordCorrect= await bcryptjs.compare(password,user.password || "")
        
        

        if(!user ||!isPasswordCorrect){
            return res.status(400).json({error:"Invalid credentials"})
        }

        generateTokenandsetCookie(user._id,res);
        res.status(201).json({
            _id: user._id,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email
        })

    } catch (error) {
        res.status(500).json({error:"Internal Server Error"})
    }
}