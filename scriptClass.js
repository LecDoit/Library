let btnadd = document.querySelector("#submit--button")
let bookList = document.getElementById('book--list')
let books = [];

class AddBook {
    constructor(author,title,pages,read){
        this.author = author;
        this.title = title;
        this.pages = pages;
        this.read = read

    }
}

let addBookToLib = function(ev){
    ev.preventDefault();
    let makin = (function(author,title,pages,read){
        let a = document.getElementById('author').value;
        let t = document.getElementById("title").value;
        let p =document.getElementById('pages').value;
        let r = document.getElementById('checkboxIn').checked;
        let book = new AddBook(a,t,p,r)
        console.log(book)
        books.push(book)  
        document.forms[0].reset();
    })();


}


btnadd.addEventListener('click',addBookToLib)


function rmv(array, element){
    array.splice(element,1)
}



function toggle(array,element){

    if ((array[element].read)== true){
        array[element].read = false

    }else if((array[element].read)== false){
        array[element].read = true   
    }
}



let refreshBookStore = function(){
    bookList.innerHTML= '';
    for (let i=0; i < books.length;i++){

        let NewDiv = document.createElement("div");
        let authordiv = document.createElement('div')
        let titlediv = document.createElement('div')
        let pagesdiv = document.createElement('div')
        let closebut = document.createElement("button")
        let togglebut = document.createElement("button")



        if (books[i].read == true){
            togglebut.innerHTML = "Read"
            togglebut.classList.add('green')
        } else if (books[i].read == false ){
            togglebut.innerHTML = "Not read"}
            togglebut.classList.add('red')


        togglebut.classList.add("checkbox")
        closebut.classList.add("closebox")

        togglebut.setAttribute('id',i)

      
        togglebut.addEventListener('click',function(){
            let tbid = this.id
            toggle(books,tbid)
            refreshBookStore()
        })
        


        closebut.innerHTML = "Delete"

        bookList.appendChild(NewDiv)
     
        NewDiv.classList.add('storage')
        NewDiv.appendChild(authordiv).classList.add('authordiv')
        NewDiv.appendChild(titlediv).classList.add('titlediv')
        NewDiv.appendChild(pagesdiv).classList.add('pagesdiv')
        authordiv.textContent= books[i].author
        titlediv.textContent= books[i].title
        pagesdiv.textContent= books[i].pages
        NewDiv.appendChild(togglebut)
        NewDiv.appendChild(closebut)
        NewDiv.dataset.name = i
        closebut.setAttribute('id',books[i].id)
        closebut.dataset.name = i


        closebut.addEventListener("click",function(){
            let thisval = this.dataset.name
            rmv(books,thisval)
            refreshBookStore()
        })
        }
        }



refreshBookStore()

btnadd.addEventListener('click',refreshBookStore)



let addBookButton = document.getElementById('newbook--button')

let form = document.getElementById('form')
let blvck = document.getElementById('blackout')


let active = function(){
    form.classList.toggle('active');
    blvck.classList.toggle('active');
}
addBookButton.addEventListener("click",active)

document.addEventListener('keydown',function(){

    if (blvck.classList =='active'){
        if (event.key === 'Escape'){
            active();
        }
    }
})

let button2del = document.getElementsByClassName('closebox')


