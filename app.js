// app obejcts
const ui = new UI()

// user input form
const form = document.querySelector('#book-form')
form.addEventListener('submit', addBook)

// addBook function
function addBook(event){
    // get form data from form input
    const title = document.querySelector('#title').value
    const author = document.querySelector('#author').value
    const isbn = document.querySelector('#isbn').value
    // create book object with user data
    const book = new Book(title, author, isbn)
    console.log(book)
    // add book data to ui and show it
    ui.addBook(book)
    // clear form input value
    document.querySelector('#title').value = ''
    document.querySelector('#author').value = ''
    document.querySelector('#isbn').value = ''
    event.preventDefault()
}