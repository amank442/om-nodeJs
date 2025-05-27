const jwt =require("jsonwebtoken")

//loads all env variables from.env to process.env
require("dotenv").config()


const getToken= (userdata)=>{

//adding the paylod to the token
    const payload={
        id:userdata.id,
        username:userdata.username,
        email:userdata.email  
    }

   //generating the token with expiry time of 2 minutes
   const token = jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:"10m",})

   return token
}

module.exports=getToken