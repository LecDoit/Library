let btnadd = document.querySelector("#submit--button")
let bookList = document.getElementById('book--list')


let books = [];

let book1 = {
    id:"202020",
    author:'Adam',
    title:'potop',
    pages:10,
}
let book2 = {
    id:"202021",
    author:'Karol',
    title:'wojtyla',
    pages:2137
}
books.push(book1,book2)


let addBook = function(ev){
    ev.preventDefault();
    let book = {
        id: Date.now(),
        author: document.getElementById('author').value,
        title: document.getElementById("title").value,
        pages:document.getElementById('pages').value,
    }
    books.push(book)
    document.forms[0].reset();
}

btnadd.addEventListener('click',addBook)

function rmv(array, element){
    let index = array.indexOf(element);
    array.splice(index,1)
}

let refreshBookStore = function(){
    bookList.innerHTML= '';
    for (let i=0; i < books.length;i++){

        let NewDiv = document.createElement("div");
        let closebut = document.createElement("button")
        closebut.innerHTML = "delete"
        bookList.appendChild(closebut)
        bookList.appendChild(NewDiv)
        NewDiv.textContent = JSON.stringify(books[i])
        NewDiv.dataset.name = books[i].id
        closebut.dataset.name = books[i].id
        closebut.classList.add(books[i].id)
        closebut.onclick = function(){
            rmv(books,books[i].id)
            refreshBookStore()
        }
        }
        }


refreshBookStore()
btnadd.addEventListener('click',refreshBookStore)


let addBookButton = document.getElementById('newbook--button')

let form = document.getElementById('form')

let x = function(){
    form.classList.toggle('active');
}
addBookButton.addEventListener("click",x)










