interface Book {
    id: number;
    title: string;
    author: string;
    isIssued: boolean;
}
let Books: Book[] = []
function addBook(title: string, author: string) {
    let id = Books.length + 1
    let newtitle=title.split(" ").map((t)=>{
        return t.charAt(0).toUpperCase()+t.slice(1).toLowerCase()
    }).join(" ")
    Books.push({ id: id, title: newtitle, author: author, isIssued: false })
    console.log(`${newtitle} add successfull`)
    return Books
}
function issuedBook(id: number) {
    let findBook = Books.find((b) => b.id == id && b.isIssued == false)
    if (findBook) {
        findBook.isIssued = true
        console.log(`${findBook.title} is issued successfull`)
    } else {
        console.log(`Book not found or Issued already`)
    }
}
function returnBook(id: number) {
    let findBook = Books.find((b) => b.id == id && b.isIssued == true)
    if (findBook) {
        findBook.isIssued = false;
        console.log(`${findBook.title} is return Successfully`)
    }
    else {
        console.log("Book  not found or book is not Issued yet")
    }
}
function getAvailableBook() {
    let findBook = Books.filter((b) => b.isIssued == false)
    if (findBook.length>0) {
        console.log("All available Book:- ")
        findBook.map((book) => {
            console.log(`{${book.title} by ${book.author}}`)
        })
    }
    else{
        console.log("there is no Available Book")
    }

}
function getIssuedBook() {
    let findBook = Books.filter((b) => b.isIssued == true)
    if (findBook.length>0) {
        console.log("All issued Book:-")
        findBook.forEach((book) => {
            console.log(`{${book.title} by ${book.author}}`)
        })
    }
    else {
        console.log("no book Is issued yet")
    }

}
function SearchBookByTitle(title: string) {
    let newtitle=title.split(" ").map((t)=>{
       return t.charAt(0).toUpperCase()+t.slice(1).toLowerCase()    
    }).join(" ")

   
    let findBook = Books.find((b) => b.title == newtitle)
    if(findBook){
      console.log(findBook)
    }
    else{
        console.log("Book Not Found")
    }
}



function  sum(arr:number[],brr:number[]){ 
    if(arr.length!==brr.length){
      throw new Error("The length of array is not same")
    }
 return arr.map((value,index)=>value+brr[index]!)
}

// addBook("harry potter", "J. K. Rowling")
// addBook("ramayana", "Valmiki")
// addBook("Crime and Punishment", "Fyodor Dostoyevsky")
// issuedBook(2)
// getAvailableBook()
// getIssuedBook()
// SearchBookByTitle("harry potter")
let sumofNumber=sum([1,5,3,4,6,6,7,8],[2,3,4,4,3,33,43,49])

console.log(sumofNumber)
