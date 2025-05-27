const jwt =require("jsonwebtoken")

//loads all env variables from.env to process.env
require("dotenv").config()

const auth=(req,res,next)=>{

     const token= req.headers["authorization"]

     

     console.log(req.headers)
     console.log("hi")
     console.log(token)

     try{
        
        //check if the token is valid or not
        if(jwt.verify(token,process.env.JWT_SECRET))
        {
                console.log("token valid")
                next()
        }
     }catch(error){
        
        console.log("catch")
        //either token is missing or expired
        return res.status(403).json({
        data:error.message,
        statuscode:403
        })
    }
   
}
module.exports=auth
