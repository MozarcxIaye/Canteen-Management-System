import User from "../models/user.model.js"
import jwt from 'jsonwebtoken';

//Helper: Generate Jwt
const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: '30d'})
}


export const registerUser = async(req, res) => {
    const {name, email, password, role} = req.body;

    try{
        const userExists = await User.findOne({email});

        if(userExists){
            return res.status(400).json({
                message: "User already exists"
            })
        }

        // Hash the password with bcrypt before saving
        const bcrypt = await import('bcryptjs');
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await User.create({
            name, 
            email,
            password: hashedPassword,
            role
        })

        if(user) {
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                token: generateToken(user._id)
            })
        } else {
            res.status(400).json({
              message: 'Invalid user data'  
            })
        }
    }
    catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}



export const loginUser = async(req, res) => {
    const {email, password} = req.body;

    try {
        const user = await User.findOne({ email });
        if (user) {
            // Make sure "bcryptjs" is actually installed and password is hashed at registration
            const bcrypt = await import('bcryptjs');
            // bcrypt.compare takes (plainText, hashed)
            const isMatch = await bcrypt.compare(password, user.password);
            if (isMatch) {
                return res.json({
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role,
                    token: generateToken(user._id)
                });
            } else {
                // Password does not match
                return res.status(401).json({
                    message: "Invalid email or password"
                });
            }
        } else {
            // User not found
            return res.status(401).json({
                message: "User not registered"
            });
        }
    }
    catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}



