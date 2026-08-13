class Device{
    brand:string;
    price:number;
    model:string;
    constructor (  brand:string , price:number,  model:string){
        this.brand=brand;
        this.price=price;
        this.model=model
    }
    deviceInfo(){
      console.log(`brand_name:${this.brand} ,device_model:${this.model}, device_price: ${this.price}`)  
    }
  

}

let d1=new Device("iphone",70000,"iphone 15")
let d2=new Device("google",65000,"pixel 7 ")
d1.deviceInfo()
d2.deviceInfo()



