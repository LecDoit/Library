let btnadd = document.querySelector("#submit--button")
let bookList = document.getElementById('book--list')


let books = [];




let addBook = function(ev){
    ev.preventDefault();
    let book = {
        id: Date.now(),
        author: document.getElementById('author').value,
        title: document.getElementById("title").value,
        pages:document.getElementById('pages').value,
        read:document.getElementById('checkboxIn').checked,
    }
    books.push(book)
    document.forms[0].reset();
}

btnadd.addEventListener('click',addBook)

function rmv(array, element){
    let index = array.indexOf(element);
    array.splice(index,1)
    console.log(index)
}

function clicked(clicked_id){

    return clicked_id
}

function toggle(array,element){

    function searchid(book){
        return book.id == element
    }
    let findindex = array.findIndex(searchid)
    
    let readornot = (array[findindex].read)
        if ((array[findindex].read)== 'yes'){
            let tickCheck = document.getElementById('checkbox').checked = 'false'
            array[findindex].read = 'no'
        }else if((array[findindex].read)=='no'){
            let tickCheck = document.getElementById('checkbox').checked = 'true'
            array[findindex].read = 'yes'
        }




}

let refreshBookStore = function(){
    bookList.innerHTML= '';
    for (let i=0; i < books.length;i++){

        let NewDiv = document.createElement("div");
        let closebut = document.createElement("button")
        let togglebut = document.createElement("div")
       
        togglebut.innerHTML = `<label id="switch" > 
                                    <input type="checkbox">
                                    <span class="slider">Read</span>
                                </label>`

        togglebut.classList.add(books[i].id)

        togglebut.onclick = function(){
            let tbval = this.classList.value
            toggle(books,tbval)
            

        }

        closebut.innerHTML = "delete"
        
        
        
        bookList.appendChild(togglebut)

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










