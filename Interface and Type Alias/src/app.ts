interface User{
    name:String,
    email:String,
    password:String,
    age?:Number  //optional value 
}

interface Admin extends User{
    admin:Boolean
}

const getUser=(obj:User)=>{
       return obj
}

const getAdmin=(obj:Admin)=>{
    return obj
}

// let userInfo=getUser({name:"nikhi",email:"bishnoi@email.com",password:"23232323232444"})
let adminInfo=getAdmin({name:"nikhi",email:"bishnoi@email.com",password:"23232323232444",admin:false})

console.log(adminInfo)

