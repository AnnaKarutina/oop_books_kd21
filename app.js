// app objects
const ui = new UI()
const ls = new LS()

// user input form
const form = document.querySelector('#book-form')
form.addEventListener('submit', addBook)

// page reload
document.addEventListener('DOMContentLoaded', getBooks)

function getBooks(){
    // get data from LS
    const books = ls.getData('books')
    // for each book in books
    books.forEach(function (booksFromLS){
        ui.addBook(booksFromLS)
    })
}

// addBook function
function addBook(event){
    // get form data from form input
    const title = ui.title.value
    const author = ui.author.value
    const isbn = ui.isbn.value
    // create book object with user data
    const book = new Book(title, author, isbn)
    console.log(book)
    // add book data to ui and show it
    ui.addBook(book)
    // save book data to ls
    ls.addBook(book)
    // clear form input value
    ui.title.value = ''
    ui.author.value = ''
    ui.isbn.value = ''
    event.preventDefault()
}