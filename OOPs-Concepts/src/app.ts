class Device{
    brand:string;
    price:number;
    model:string
    constructor (  brand:string , price:number,  model:string){
        this.brand=brand;
        this.price=price;
        this.model=model;
    }
    deviceInfo(){
      console.log(`brand_name:${this.brand},device_model:${this.model},device_price: ${this.price}`)
       
  
    }
  

}

let d1=new Device("realme",20000,"narzo50 5g")
d1.deviceInfo()



