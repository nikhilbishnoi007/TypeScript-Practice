// class Device{
//     brand:string;
//     price:number;
//     model:string;
//     constructor (  brand:string , price:number,  model:string){
//         this.brand=brand;
//         this.price=price;
//         this.model=model
//     }
//     deviceInfo(){
//       console.log(`brand_name:${this.brand} ,device_model:${this.model}, device_price: ${this.price}`)  
//     }
  

// }

// let d1=new Device("iphone",70000,"iphone 15")
// let d2=new Device("google",65000,"pixel 7 ")
// d1.deviceInfo()
// d2.deviceInfo()


class Book{
    title:string;
    author:string;
    isbn:string
    Isissued:boolean=false
    constructor(title:string,author:string,isbn:string){
        this.title=title;
        this.author=author;
        this.isbn=isbn
    }
    issue(){
        if(this.Isissued){
            console.log(`${this.title}  book is already isuued`)
            return false
        }else{
            this.Isissued=true
            console.log(`${this.title} issue kar di gyi`)
            return true
        }
    }
    return(){
        if(!this.Isissued){
            console.log(`${this.title} cannot return this book is not issued yet  `)
            return false
        }
        else{
            this.Isissued=false
            console.log(`${this.title} book returned `)
            return true
        }
    }
}

class Library{
    name:string
    book:Book[];
    constructor(name:string){
        this.name=name;
        this.book=[]
    }
    addBook(book:Book){
       this.book.push(book)
       console.log(`${book.title} add in library`)
    }
      showAvailableBooks() {
    console.log(`\n${this.name} - Available Books:`);
    this.book
      .filter(b => !b.Isissued)
      .forEach(b => console.log(`- ${b.title} by ${b.author}`));
  }
}

const lib = new Library("City Library");

const book1 = new Book("Atomic Habits", "James Clear", "12345");
const book2 = new Book("Deep Work", "Cal Newport", "67890");

lib.addBook(book1);
lib.addBook(book2);

book1.issue();
lib.showAvailableBooks();

book1.return();
lib.showAvailableBooks();
