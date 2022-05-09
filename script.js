
// let submitButton = document.getElementById('submit--button')

// function getVal(){
//     let authorval=document.getElementById('author').value;
//     let titleval=document.getElementById('title').value;
//     let pagesval=document.getElementById('pages').value;
//     const book1 = new Book(authorval,titleval,pagesval)
//     return book1
// }


 



// function Book(author,title,pages,read){
//     this.author = author;
//     this.title = title;
//     this.pages = pages;
//     this.read = read;
// };

// function addBookToLibrary(){
//     console.log('adding book')
//     let tag = document.createElement('p')
//     let text = document.createTextNode("book1")
//     tag.appendChild(text)
//     bookList.a    // let tag = document.createElement('p')
    // let text = document.createTextNode(books)
    // tag.appendChild(text)
    // bookList.appendChild(tag)
// function deleteBookFromLibrary(){
//     console.log("deletin book")
// };



// submitButton.addEventListener('click',addBookToLibrary)
// submitButton.addEventListener('click',getVal)

let books = [];

let addBook = (ev)=>{
    ev.preventDefault();
    let book = {
        id: Date.now(),
        author: document.getElementById('author').value,
        title: document.getElementById("title").value,
        pages:document.getElementById('pages').value,
    }
    books.push(book)
    document.forms[0].reset();

    console.log(books)
    let bookList = document.getElementById('book--list')
    bookList.textContent = JSON.stringify(books)
}


document.getElementById('submit--button').addEventListener('click',addBook)
    


































