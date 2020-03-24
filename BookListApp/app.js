
const bookForm = document.querySelector('#book-form');
const titleInput = bookForm.querySelector('#title');
const authorInput = bookForm.querySelector('#author');
const bookList = document.querySelector('.collection')



loadEventListeners();

function loadEventListeners(){
    document.addEventListener('DOMContentLoaded', getBooks);
    bookForm.addEventListener('submit', addBook);
    bookList.addEventListener('click', removeBook);
}

function getBooks(){
    let books;

    if(localStorage.getItem('books') === null){
        books= [];
    }
    else {
        books = JSON.parse(localStorage.getItem('books'));
    }
    books.forEach(book =>{
        generateCollectionItem(book[0],book[1]);
    });
}

function addBook(event){
    if (titleInput.value === ''){
        alert('Add book title');
    }
    else if (authorInput.value === ''){
        alert('Add book author');
    }
    else{
        
        generateCollectionItem(titleInput.value, authorInput.value);
        storeInLocalStorage(titleInput.value, authorInput.value);
        titleInput.value = '';
        authorInput.value = '';
    }
    event.preventDefault();
}

function generateCollectionItem(title,author){
    const li = document.createElement('li');
    li.classList = 'collection-item';
    const strong = document.createElement('strong');
    strong.appendChild(document.createTextNode(title));
    const a = document.createElement('a');
    a.classList = 'secondary-content ';
    const i = document.createElement('i');
    i.classList = 'material-icons delete-book';
    i.innerHTML = 'delete_forever';

    a.appendChild(i);
    li.appendChild(a);
    li.appendChild(strong)
    li.appendChild(document.createTextNode(' by '));
    li.appendChild(document.createTextNode(author))
    bookList.appendChild(li);
}

function storeInLocalStorage(title,author){
    let books;
    let book = [];
    if (localStorage.getItem('books') === null){
        books = [];
    }
    else {
        books = JSON.parse(localStorage.getItem('books'));
    }
    book.push(title);
    book.push(author);
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
}

function removeBook(event){
    if(event.target.classList.contains('delete-book')){
        event.target.parentElement.parentElement.remove();
        removeFromLocalStorage(event.target.parentElement.parentElement);
        
    }
    
}

function removeFromLocalStorage(bookItem){
    //console.log(bookItem.textContent.slice(14));
    let books;
    if(localStorage.getItem('books') === null){
        books =  [];
    } 
    else {
        books = JSON.parse(localStorage.getItem('books'));
    }
    books.forEach(function(book, index){
        
        bookInStorage = book[0]+' by '+book[1];
        console.log(bookInStorage);
        if(bookItem.textContent.slice(14) === bookInStorage) {
            books.splice(index,1);
            console.log('remo');
        }
        localStorage.setItem('books', JSON.stringify(books));
    });
}