const pageContainer = document.getElementById('container');
const addBookBtn = document.getElementById('addBookBtn');
const formContainer = document.getElementById('form-container');
const closeBtn = document.getElementById('closeBtn');
const addBtn = document.getElementById('submitBtn');

let bookNameInput = document.getElementById('bookName');
let authorNameInput = document.getElementById('authorName');
let pageAmountInput = document.getElementById('pageAmount');
let haveReadInput = document.getElementById('haveRead');
let inputs = document.querySelectorAll('input');
let myLibrary = [];

function Book(bookName, authorName, pageAmount, haveRead){
    this.bookName = bookName;
    this.authorName = authorName;
    this.pageAmount = pageAmount;
    this.haveRead = haveRead;
};

Book.prototype.placeInfo = function(){
    bookNameInput.innerText = this.bookName;
    authorNameInput.innerText = this.authorName;
    pageAmountInput.innerText = this.pageAmount
    haveReadInput.innerText = this.haveRead;
}


addBookBtn.addEventListener('click', function(){
    formContainer.classList.add('active');
    pageContainer.classList.add('inactive');
});

closeBtn.addEventListener('click', function(){
    formContainer.classList.remove('active');
    pageContainer.classList.remove('inactive');
});
