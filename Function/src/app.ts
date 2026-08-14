class Calculator{
   a:number;
   b:number;
   constructor (num1:number,num2:number){
     this.a=num1
     this.b=num2
   }
    sum():number{
    return this.a+this.b
    }
    sub():number{
        if(this.a>this.b){
        return this.a-this.b
        }
        else{
            return this.b-this.a
        }
    }
    multiply():number{
        return this.a*this.b
    }
    devide():number{
        if(this.a>this.b){
            return this.a/this.b
        }
        else{
            return this.b/this.a
        }
    }
}



let a=new Calculator(12,6)

let sum=a.sum()
let sub=a.sub()
let multi=a.multiply()
let dev=a.devide()
console.log(sum)
console.log(sub)
console.log(multi)
console.log(dev)
