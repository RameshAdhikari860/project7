import { StrictMode } from "react"
import { validCountriesNumber } from "../constant/validNumbers.js"
import { loginService, registerService } from "../services/authService.js"
import validator from 'validator'

const register =async (req,res)=>{

    try {
         const {email,phone,password,fullName}  = req.body

    if( !email ) {return  res.status(400).json({message : "Emailis required"})}
    if( !phone) {return  res.status(400).json({message : "Phone required"})}
    if( !password) {return  res.status(400).json({message : "Password required"})}

    if(!validator.isEmail(email)){return res.status(400).json({message : "Not valid email"})}
    if(!validator.isStrongPassword(password)){return res.status(400).json({message : "password must be minimum 8 letter contain 1 small 1 big and 1 special character"})}

   

    if(!validator.isMobilePhone(phone,validCountriesNumber)){
        return res.status(400).json({message: "Phone no is not valid"})
    }

    
    const data = await registerService({email,phone,password,fullName})

    res.status(200).json({
        message: "User Registerd successfully",
        data
    })

    } catch (error) {
        console.log(error);
        res.status(400).json({
            message : "Error occured",
            error : error.message
        })
    }

   
}


const login =  async (req,res)=>{
    try {
        const {email,password} = req.body

        if(!email){
            return res.status(400).json({message: "Email is required"})
        }
        if(!password){
            return res.status(400).json({message:"Password is required"})
        }

     const data=   await  loginService({email,password})

        if(data){
           
            return res.status(200).json({
                message: "Login Successful",
                data
            })
        }

       


        

    } catch (error) {
        return res.status(400).send("error to login ",error)
    }


}





export {register,login}