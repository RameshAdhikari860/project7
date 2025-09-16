import User from "../model/User.js";
import bcrypt from "bcrypt";

const registerService = async ({ email, password, phone, fullName }) => {
  const userWithEmailExist = await User.findOne({ email: email });

  if (userWithEmailExist) {
    throw new Error("User with this email Already Exists");
  }

  const userWithPhoneExist = await User.findOne({ phone: phone });

  if (userWithPhoneExist) {
    throw new Error("User with this phone Already Exists");
  }

  const hashedPasword = bcrypt.hashSync(password, 10);

  return await User.create({
    email,
    fullName,
    phone,
    password: hashedPasword,
    role: "user",
  });
};

const loginService = async ({ email, password }) => {


 
  
    const result = await User.findOne({ email });

   

    if (!result) {
      throw new Error("Email not registered");
    }

    const savedPassword = result.password;

    const isPasswordMatched = bcrypt.compareSync(password,savedPassword)

    if (!isPasswordMatched) {
       
      throw new Error("Password didn't match");
    }
 

    return result;

    
 
};

export { registerService, loginService };
