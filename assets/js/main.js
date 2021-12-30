const btnLogin = document.querySelector('.header__navbar-login');
const btnRegister = document.querySelector('.header__navbar-register');
const loginForm = document.querySelector('.form-login-js');
const registerForm = document.querySelector('.form-register-js');
const modal = document.querySelector('.js-modal');
const btnCloses = document.querySelectorAll('.auth-form__controls-back');
const btnSwitchs = document.querySelectorAll('.auth-form__switch-btn');
const modalOverlay = document.querySelector('.modal__overlay');

console.log(modal.className === 'open')

function showLoginform(){
    modal.classList.add('open');
    registerForm.classList.add('close');
}

function showRegisterform(){
    modal.classList.add('open');
    loginForm.classList.add('close');
}

function closeForm(){
    modal.classList.remove('open');
    loginForm.classList.remove('close');
    registerForm.classList.remove('close');
} 

function switchForm(){
    loginForm.classList.toggle('close');
    registerForm.classList.toggle('close');
}

btnLogin.addEventListener('click', showLoginform);
btnRegister.addEventListener('click', showRegisterform);
modalOverlay.addEventListener('click', closeForm);
for(const btnClose of btnCloses){
    btnClose.addEventListener('click', closeForm);
}
for(const btnSwitch of btnSwitchs){
    btnSwitch.addEventListener('click', switchForm);
}


