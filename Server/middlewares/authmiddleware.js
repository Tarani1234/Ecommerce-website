import jwt from 'jsonwebtoken'
import User from '../models/User.js'

export const protect = async(req, res, next) =>{
    const token = req.headers.authorization?.split(" ")[1];
     try{
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decode.id).select("-password");
        next();
     }
     catch(err){
        res.status(401).json({ message: "Not authorized, token failed" });
     }  
};

export const admin = (req, res, next) =>{
     if(req.user && req.user.role === "admin"){
        next();
     }
     else{
        res.status(403).json({ message: "Not authorized as admin" });
     }
}