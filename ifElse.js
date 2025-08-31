import validator from 'validator'

const   testIfElse = (req,res)=>{

    const {email ,password}= req.body



    if(!email){
        return res.status(400).json({message : "Email is required"})
    }

   
    if( !validator.isEmail(email)){
        return res.status(400).json({message:"Email not valid"})
    }
    




}