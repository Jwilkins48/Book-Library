const pageContainer = document.getElementById('container');
const addBookBtn = document.getElementById('addBookBtn');
const formContainer = document.getElementById('form-container');
const closeBtn = document.getElementById('closeBtn');
const addBtn = document.querySelector('#submitBtn');
const bookContainer = document.getElementById('book-container');

let checkbox = document.getElementById('finishedCheck');
let bookNameInput = document.querySelector('#bookName');
let authorNameInput = document.getElementById('authorName');
let pageAmountInput = document.getElementById('pageAmount');
let haveReadInput = document.getElementById('haveRead');
let inputs = document.querySelectorAll('input');
let myLibrary = [];

function Book(bookName, authorName, pageAmount, haveRead) {
    this.bookName = bookName;
    this.authorName = authorName;
    this.pageAmount = pageAmount;
    this.haveRead = haveRead;
};

let addToLibrary = () => {
    const newBook = new Book(bookNameInput.value, authorNameInput.value, pageAmountInput.value, haveReadInput.value);
    myLibrary.push(newBook);
    createCard(newBook);
}

let createCard = (book) => {
    let bookDiv = document.createElement('div');
    let titleDiv = document.createElement('h3');
    let authorDiv = document.createElement('h2');
    let pagesDiv = document.createElement('h2');
    let readDiv = document.createElement('h2');
    let deleteBtn = document.createElement('button');

    titleDiv.textContent = bookNameInput.value;
    authorDiv.textContent = authorNameInput.value;
    pagesDiv.textContent = pageAmountInput.value;

    bookDiv.classList.add('defaultBook');
    bookContainer.appendChild(bookDiv);

    bookDiv.innerHTML = `<h1 class="bookTitle">${Book.bookName}</h1>
    <h2 class="bookAuthor">${Book.authorName}</h2>
    <h2 class="bookPages">${Book.pageAmount}</h2>
    <h2 class="readBook">${Book.haveRead}</h2>`
}

addBtn.addEventListener('click', addToLibrary());




addBookBtn.addEventListener('click', function () {
    formContainer.classList.add('active');
    pageContainer.classList.add('inactive');
});

closeBtn.addEventListener('click', function () {
    formContainer.classList.remove('active');
    pageContainer.classList.remove('inactive');
});