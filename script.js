// Variables
const pageContainer = document.getElementById('container');
const addBookBtn = document.getElementById('addBookBtn');
const formContainer = document.getElementById('form-container');
const closeBtn = document.getElementById('closeBtn');
const addBtn = document.querySelector('#submitBtn');
const bookContainer = document.getElementById('book-container');
const deleteBtn = document.querySelector('#deleteBtn');

let readBook = document.querySelector('.readBook');
let finishedDisplay = document.getElementById('finishedDisplay');
let bookNameInput = document.querySelector('#bookName');
let authorNameInput = document.getElementById('authorName');
let pageAmountInput = document.getElementById('pageAmount');
let checkbox = document.getElementById('finishedCheck');
let inputs = document.querySelectorAll('input');
let myLibrary = [];


// Take input and place in object
let addToLibrary = () => {
    const title = bookNameInput.value;
    const author = authorNameInput.value;
    const pages = pageAmountInput.value;
    let read = isRead();

    if (title && author && pages) {
        const newBook = {
            title,
            author,
            pages,
            read
        }
        createCard(newBook);

        title.value = '';
        author.value = '';
        pages.value = '';

        close();
    } else {
        alert('Please fill out all fields');
    };
};

// Create new book div
let createCard = (book) => {
    let bookDiv = document.createElement('div');
    bookDiv.classList.add('defaultBook');

    bookContainer.appendChild(bookDiv);

    bookDiv.innerHTML = `<h1 class="bookTitle">${book.title}</h1>
    <h2 class="bookAuthor">${book.author}</h2>
    <h2 class="bookPages">${book.pages}</h2>
    <h2 class="readBook">${book.read}</h2>
    <button id="deleteBtn" class="delete">Delete</button>`

    myLibrary.push(bookDiv);
    console.log(myLibrary);
}


let isRead = () => {
    if (checkbox.checked == true) {
        return 'read'
    } else {
        return 'not read'
    }
}

// let deleteBook = () => {
//     document.body.removeChild(bookDiv);
// }

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
deleteBtn.addEventListener('click', deleteBook);