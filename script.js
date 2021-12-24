const pageContainer = document.getElementById('container');
const addBookBtn = document.getElementById('addBookBtn');
const formContainer = document.getElementById('form-container');
const closeBtn = document.getElementById('closeBtn');

addBookBtn.addEventListener('click', function(){
    formContainer.classList.add('active');
    pageContainer.classList.add('inactive');
});

closeBtn.addEventListener('click', function(){
    formContainer.classList.remove('active');
    pageContainer.classList.remove('inactive');
});
