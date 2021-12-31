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
let createCard = (i) => {
    
    // Creates h2 titles
    let createH2Element = (text) => {
        let element = document.createElement("H2");
        element.textContent = text;
        bookDiv.appendChild(element);
    }
    // Book div and Delete Button
    let bookDiv = document.createElement('div');
    bookDiv.classList.add('defaultBook');

    let buttonDiv = document.createElement('div');
    buttonDiv.classList.add('buttonContainer');

    let deleteCard = document.createElement('button');
    deleteCard.textContent = 'Delete';
    deleteCard.classList.add('delete');

    let changeStatus = document.createElement('button');
    changeStatus.textContent = 'Change Status';
    changeStatus.classList.add('delete');

    // Creating h1 book title
    let titleDiv = document.createElement('h1');
    titleDiv.textContent = this.title;

    // Display all on card
    bookDiv.appendChild(titleDiv);
    createH2Element(this.author);
    createH2Element(this.pages);

    // Read Label
    let readCheck = document.createElement("H2");
    readCheck.textContent = (this.read);
    bookDiv.appendChild(readCheck);

    buttonDiv.appendChild(deleteCard);
    buttonDiv.appendChild(changeStatus);
    bookDiv.appendChild(buttonDiv);
    bookContainer.appendChild(bookDiv);

    // Delete button
    deleteCard.addEventListener('click', () => {
        bookContainer.removeChild(bookDiv);
        myLibrary.splice(bookDiv, 1);
    });

    //Change from read/not read
    changeStatus.addEventListener('click', function () {
        if (readCheck.innerHTML == 'read') {
            readCheck.innerHTML = 'Not read'
        } else {
            readCheck.innerHTML = 'read';
        }
    })


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