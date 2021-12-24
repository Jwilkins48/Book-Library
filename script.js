const addBookBtn = document.getElementById('addBookBtn');
const formContainer = document.getElementById('form-container');
const closeBtn = document.getElementById('closeBtn');

addBookBtn.addEventListener('click', function(){
    formContainer.classList.add('active');
});

closeBtn.addEventListener('click', function(){
    formContainer.classList.remove('active');
});
