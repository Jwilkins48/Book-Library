// Variables
const pageContainer = document.getElementById('container');
const addBookBtn = document.getElementById('addBookBtn');
const formContainer = document.getElementById('form-container');
const closeBtn = document.getElementById('closeBtn');
const addBtn = document.querySelector('#submitBtn');
const bookContainer = document.getElementById('book-container');
const deleteBtn = document.querySelector('#deleteBtn');
const defaultBook = document.querySelector('.defaultBook');

let readBook = document.querySelector('.readBook');
let finishedDisplay = document.getElementById('finishedDisplay');
let bookNameInput = document.querySelector('#bookName');
let authorNameInput = document.getElementById('authorName');
let pageAmountInput = document.getElementById('pageAmount');
let checkbox = document.getElementById('finishedCheck');
let inputs = document.querySelectorAll('input');
let myLibrary = [];


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// Take input and place in object
let addToLibrary = () => {
    this.title = bookNameInput.value;
    this.author = authorNameInput.value;
    this.pages = pageAmountInput.value;
    this.read = isRead();

    if (title && author && pages) {
        const newBook = new Book(
            title,
            author,
            pages,
            read
        )
        createCard(newBook);
        close();
    } else {
        alert('Please fill out all fields');
    };
};

// Create new book div
let createCard = (book) => {
    // Creates h2 titles
    let createH2Element = (text) => {
        let element = document.createElement("H2");
        let elementText = document.createTextNode(text);
        element.appendChild(elementText);
        bookDiv.appendChild(element);
    }
    // Book div and Delete Button
    let bookDiv = document.createElement('div');
    let deleteCard = document.createElement('button');
    let deleteCardText = document.createTextNode('Delete');
    deleteCard.appendChild(deleteCardText);
    deleteCard.classList.add('delete');
    deleteCard.onclick = deleteBook();
    bookDiv.classList.add('defaultBook');

    // Creating h1 book title
    let titleDiv = document.createElement('h1');
    let titleInput = document.createTextNode(`${this.title}`);
    titleDiv.appendChild(titleInput)

    bookDiv.appendChild(titleDiv);
    createH2Element(this.author);
    createH2Element(this.pages);
    createH2Element(this.read);
    bookDiv.appendChild(deleteCard);
    bookContainer.appendChild(bookDiv);

    myLibrary.push(bookDiv);
    console.log(myLibrary);
}


// Check if checkbox was pressed
let isRead = () => {
    if (checkbox.checked == true) {
        return 'read'
    } else {
        return 'not read'
    }
}


// Open form
let open = () => {
    formContainer.classList.add('active');
    pageContainer.classList.add('inactive');
}
// Close form
let close = () => {
    formContainer.classList.remove('active');
    pageContainer.classList.remove('inactive');

    bookNameInput.value = '';
    authorNameInput.value = '';
    pageAmountInput.value = '';
}


addBookBtn.addEventListener('click', open)
closeBtn.addEventListener('click', close);
addBtn.addEventListener('click', addToLibrary);