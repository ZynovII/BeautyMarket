const cartBtn = document.getElementsByClassName("cart");
const modalCart = document.getElementsByClassName("modal-cart")[0];
const closeBtn = document.getElementsByClassName("close");
const toCart = document.getElementById('to-cart');
const userBtn = document.querySelectorAll(".user");
const modalLogin = document.getElementsByClassName("modal-login");
const modalRegistration = document.getElementsByClassName("modal-registration");
const toggleBtnLog = document.getElementsByClassName("modal-log");
const toggleBtnReg = document.getElementsByClassName("modal-reg");
const loginBtn = document.getElementById('login');
const registrationBtn = document.getElementById('registration');
const formLogin = document.getElementsByClassName('login-form')[0];
const formRegistration = document.getElementsByClassName('registration-form')[0];
const fieldsLog = document.getElementsByClassName('field1');
const fieldsReg = document.getElementsByClassName('field');
const mobilBtn = document.getElementsByClassName('mobil-menu')[0];
const mobilBurger = document.getElementsByClassName('mobil-menu-burger')[0];


mobilBtn.onclick = function() {
    mobilBurger.classList.toggle('mobil__unhiden');
}
toggleBtnReg[0].onclick = function() {
    toggleBtnReg[0].classList.add("modal-selected");
    toggleBtnReg[0].classList.remove("modal-not-selected");
    toggleBtnLog[0].classList.add("modal-not-selected");
    toggleBtnLog[0].classList.remove("modal-selected");
    modalLogin[0].style.display = "none";
    modalRegistration[0].style.display = "flex";
}
toggleBtnLog[1].onclick = function() {
    toggleBtnLog[0].classList.add("modal-selected");
    toggleBtnLog[0].classList.remove("modal-not-selected");
    toggleBtnReg[0].classList.add("modal-not-selected");
    toggleBtnReg[0].classList.remove("modal-selected");
    modalLogin[0].style.display = "flex";
    modalRegistration[0].style.display = "none";
}
for (var i = 0; i < cartBtn.length; i++) {
    cartBtn[i].onclick = function() {
        modalCart.style.display = "flex";
    }
}

for (var i = 0; i < userBtn.length; i++) {
    userBtn[i].onclick = function() {
        modalLogin[0].style.display = "flex";
        for (var i = 0; i < fieldsLog.length; i++) {
            fieldsLog[i].value = '';
        } 
        for (var i = 0; i < fieldsReg.length; i++) {
            fieldsReg[i].value = '';
        }    
        var errors = formLogin.querySelectorAll('.error');
        for (var i = 0; i < errors.length; i++) {
            errors[i].remove();
        }
        var errors1 = formRegistration.querySelectorAll('.error');
        for (var i = 0; i < errors1.length; i++) {
            errors1[i].remove();
        }
    }
}

closeBtn[0].onclick = function() {
    modalCart.style.display = "none";
}
closeBtn[1].onclick = function() {
    modalLogin[0].style.display = "none";
}
closeBtn[2].onclick = function() {
    modalRegistration[0].style.display = "none";
    toggleBtnLog[0].classList.add("modal-selected");
    toggleBtnLog[0].classList.remove("modal-not-selected");
    toggleBtnReg[0].classList.add("modal-not-selected");
    toggleBtnReg[0].classList.remove("modal-selected");
}
toCart.onclick = function() {
    window.location.href = "cart.html";
}


loginBtn.addEventListener('click', function(event) {
    event.preventDefault();

    var errors = formLogin.querySelectorAll('.error');
    for (var i = 0; i < errors.length; i++) {
        errors[i].remove();
    }

    for(var i = 0; i < fieldsLog.length; i++) {
        if(!fieldsLog[i].value){
            var error = document.createElement('div');
            error.className = 'error';
            error.style.color = 'red';
            error.innerHTML = 'поле должно быть заполнено';
            formLogin[i].parentElement.insertBefore(error, fieldsLog[i]);
        }
    }
});

registrationBtn.addEventListener('click', function(event) {
    event.preventDefault();
    var errors = formRegistration.querySelectorAll('.error');
    for (var i = 0; i < errors.length; i++) {
        errors[i].remove();
    }

    for(var i = 0; i < fieldsReg.length; i++) {
        if(!fieldsReg[i].value){
            var error = document.createElement('div');
            error.className = 'error';
            error.style.color = 'red';
            error.innerHTML = 'Поле должно быть заполнено';
            formRegistration[i].parentElement.insertBefore(error, fieldsReg[i]);
        }
    }
});

