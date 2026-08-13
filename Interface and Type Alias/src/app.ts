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

let userInfo=getUser({name:"nikhi",email:"bishnoi@email.com",password:"23232323232444"})
let adminInfo=getAdmin({name:"nikhi",email:"bishnoi@email.com",password:"23232323232444",admin:false})

console.log(adminInfo)


type custom=Number|String|boolean

let a:custom;
let b:custom;

 a="nikhil"
 b=false

console.log(typeof a)
console.log(typeof b)


interface Person{
    name:String,
    age:Number
}

interface Employee{
    role:String;
    slary:Number
}

let staff:Person&Employee={
    name:"nikhil",
    age:20,
    role:"backend-developer",
    slary:50000
}

console.log(staff)
