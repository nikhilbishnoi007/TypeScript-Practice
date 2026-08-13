interface User{
    name:String,
    email:String,
    password:String,
    age?:Number
}


const getUser=(obj:User)=>{
       return obj
}

let userInfo=getUser({name:"nikhi",email:"bishnoi@email.com",password:"23232323232444"})

console.log(userInfo)

let b=5;


console.log(5)