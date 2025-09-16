import jwt from 'jsonwebtoken'


const  isLoggedIn = (req,res,next)=>{

    try {
        
        const cookie = req.cookies

        const decoded =  jwt.verify(cookie.token,process.env.JWT_SECRET)

        if(decoded){

            next()
        }

    } catch (error) {
        
        res.status(401).send("Not Authorized")
    }

}

export {isLoggedIn}