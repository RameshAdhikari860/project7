import { registerService } from "../services/authService.js"


const register =async (req,res)=>{


    const data = await registerService(req.body)

    res.status(200).json({data})


}

export {register}