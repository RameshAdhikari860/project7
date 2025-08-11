import User from "../model/User.js"

const registerService = async(data)=>{

const userWithEmailExist = await User.findOne({email:data.email})

if(userWithEmailExist){throw new Error("User with this email Already Exists")}

const userWithPhoneExist = await User.findOne({phone:data.phone})

if(userWithPhoneExist){throw new Error("User with this phone Already Exists")}


return await User.create(data)


}


export {registerService}



