
const test =  (req,res)=>{
   
    const {userName,email} = req.body
    const  employee = {
        name : "ramesh",
        address : "itahari",
        phone : 232323,
    }
    employee.email  = "email@gmail.com"
    employee.name = "shyam"
    console.log(employee)






    // const employeName = employee.phone
    // const employeAddress = employe.address

    // const name = employee.name

    // const {address} = employee
    // const {name} = employee
    // const {phone} = employee

    const {name,address,phone} = employee
   
        
    console.log(name,address,phone)

    res.status(200).json({message : "THis is post method"})
}

export {test}