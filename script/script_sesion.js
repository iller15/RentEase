
// INICIO DE SESION //

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const backToMain1 = document.getElementById('backToMain1');
const backToMain2 = document.getElementById('backToMain2');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});

backToMain1.addEventListener('click', () => {
    window.location.href = 'index.html'; // Change this to your desired URL
});

backToMain2.addEventListener('click', () => {
    window.location.href = 'index.html'; // Change this to your desired URL
});


