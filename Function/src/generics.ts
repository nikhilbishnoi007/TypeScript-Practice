
type a=number|string;
interface User<T>{
    name:string;
    email:string;
    password:string;
    key:T
}
function log<T>(value:T){
    console.log(value)
}

function object(obj:User<a>){
    log(obj)
}
function object2(obj:User<a>){
    log(obj)
}
const key=()=>{
   let id=Math.floor(Math.random()*100)
   return id
}


function  sum(arr:number[],brr:number[]){ 
    if(arr.length!==brr.length){
      throw new Error("The length of array is not same")
    }
 return arr.map((value,index)=>value+brr[index]!)
}
//agar function ke return type T hai to hum sirf wo hi value return kar sake hai jinka type T ho
function a<T>(a:T):T{
        return a
}

log(a<string>("hii"))

// function ab<T>():T{
//   return "hey"  //yaha par hey string type hai na ki T type typescript wanring show krta hai ki aise return nahi kar sakte hai 
// }
// log(ab())

let sumofarray=sum([1,2,3,4,5],[2,3,4,5,6,])
console.log(sumofarray)
object({name:"nikhil",email:"examaple.com",password:"123dffdf",key:key()})
object2({name:"bishnoi",email:"bishnoi.com",password:"fjdre3438d",key:key()})

let str:unknown="hello"
let strlength=(str as string).length
log(strlength)

let num:number
num! //! is operatore se typescript sajh jata ha iki value null or undefined nahi hogi is bole hai non-null insertaion operaotr


class TvRemote{
    switchofTv(){
        console.log("switching of tv")
    }
}

class CarRemote{
    swithofcar(){
        console.log("switching of car")
    }
}

let car=new CarRemote()
let tv=new TvRemote()

function switchingoff(device:TvRemote|CarRemote){
    if(device instanceof TvRemote){
        device.switchofTv()
    }
    else{
        device.swithofcar()
    }
}

switchingoff(car)
switchingoff(tv)