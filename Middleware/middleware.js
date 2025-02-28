const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();
const middleware = (req,res,next) => {
    try{
        const authorization = req.headers.authorization;
        const jwt_secret = process.env.JWT_SECRET;
        const authenticate = jwt.verify(authorization,jwt_secret);
        if(authenticate){
            next();
        }else{
            res.status(411).json({
                msg:"User is not authenticated"
            })
        }
    }catch(e){
        console.log("Error while verifying ");
        res.status(500).json();
    }
}