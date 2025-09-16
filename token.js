import jwt from 'jsonwebtoken'


const data = {
    email : "example@gmail.com",
    phome  : 223232
}

const token =  jwt.sign(data,'secretKey')


console.log("this is token-> ",token);



console.log(jwt.verify(token,'secretKey'));