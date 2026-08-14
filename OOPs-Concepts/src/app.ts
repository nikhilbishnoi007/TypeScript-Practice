//examples for practice
// example-1 all device in your house
// class Device{
//     readonly brand:string; //once we declare the value than we canot change it using readonly keyword
//     readonly price:number;
//     readonly model:string;
//     constructor (  brand:string , price:number,  model:string){
//         this.brand=brand;
//         this.price=price;
//         this.model=model
//     }
//     deviceInfo(){
//       console.log(`brand_name:${this.brand} ,device_model:${this.model}, device_price: ${this.price}`)  
//     }
//     // changeBrand(){
//     //     this.brand="samsung" //it compile but it give us warning and vlue will also change its typescript natural behavior
//     //     this.price=70000
//     // }

// }


// class HomeDevice {
//       name:string;
//       device_Number:number;
//       alldevice:Device[]
//      constructor(name:string){
//       this.name=name
//       this.alldevice=[]
//       this.device_Number=this.alldevice.length
//      }

//      addDevice(alldevice:Device){
//         this.alldevice.push(alldevice)
//         this.device_Number=this.alldevice.length
        
//      }
//      ShowDevice(){
//         console.log(`All device List in ${this.name}'s house:-`)
//         this.alldevice
//           .forEach(d => console.log(`{Brand:${d.brand} Price:${d.price} Model:${d.model}}`));
//      }
//      TotalDevice(){
//        console.log(`the number of deivce in ${this.name}'s house is:${this.device_Number}`)
//      }
     
     
// }

// let d1=new Device("google",70000,"pixel 7")
// let d2=new Device("samsung",60000,"z-flip 6")
// let d3=new Device("apple",75000,"iphone 15")

// let h1=new HomeDevice("nikhil")
// let h2=new HomeDevice("pinky")

// h1.addDevice(d1)
// h1.addDevice(d2)
// h1.addDevice(d3)
// h1.TotalDevice()
// h1.ShowDevice()
// h2.addDevice(d3)
// h2.TotalDevice()
// h2.ShowDevice()




//example-2 library traker
// class Book{
//     title:string;
//     author:string;
//     isbn:string
//     Isissued:boolean=false
//     constructor(title:string,author:string,isbn:string){
//         this.title=title;
//         this.author=author;
//         this.isbn=isbn
//     }
//     issue(){
//         if(this.Isissued){
//             console.log(`${this.title}  book is already isuued`)
//             return false
//         }else{
//             this.Isissued=true
//             console.log(`${this.title} issue kar di gyi`)
//             return true
//         }
//     }
//     return(){
//         if(!this.Isissued){
//             console.log(`${this.title} cannot return this book is not issued yet  `)
//             return false
//         }
//         else{
//             this.Isissued=false
//             console.log(`${this.title} book returned `)
//             return true
//         }
//     }
// }

// class Library{
//     name:string
//     book:Book[];
//     constructor(name:string){
//         this.name=name;
//         this.book=[]
//     }
//     addBook(book:Book){
//        this.book.push(book)
//        console.log(`${book.title} add in library`)
//     }
//       showAvailableBooks() {
//     console.log(`\n${this.name} - Available Books:`);
//     this.book
//       .filter(b => !b.Isissued)
//       .forEach(b => console.log(`- ${b.title} by ${b.author}`));
//   }
// }

// const lib = new Library("City Library");

// const book1 = new Book("Atomic Habits", "James Clear", "12345");
// const book2 = new Book("Deep Work", "Cal Newport", "67890");

// lib.addBook(book1);
// lib.addBook(book2);

// book1.issue();
// lib.showAvailableBooks();

// book1.return();
// lib.showAvailableBooks();


class Name{
     _name:string
    constructor (a:string){
        this._name=a
    }
    get name(){
        return this._name
    }
    set name(value:string){
      this._name=value
    }
}

let n1=new Name("nikhil")
console.log(n1.name)

n1.name="sinwar"
console.log(n1.name)

class Typescript{
    static version="2.5.4.0";
}

console.log(`the version of typescript that you use  is: ${Typescript.version}`)