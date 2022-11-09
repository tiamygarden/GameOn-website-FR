function editNav() {
    const x = document.getElementById("myTopnav");
    (x.className === "topnav")?x.className += " responsive":x.className = "topnav"; //TERNARY OPERATOR FOR RESPONSIVE NAVBAR
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeBtn = document.querySelector(".close");
const formData = document.querySelectorAll('.formData');
const form = document.getElementById("form");
const thankYou = document.getElementById("thankYou");


// ------------------                                    LAUNCH MODAL FORM                          ----------------------------------------------//
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
    modalbg.style.display = "block";
}

// ------------------                                    CLOSE MODAL FORM                          ----------------------------------------------//
// close modal form
function closeModal() {
    modalbg.style.display = "none";
}

// when clicking on (x), close the modal
closeBtn.addEventListener("click",function (event){
    if (event.target === closeBtn) {
        closeModal();
    }
});

// When clicking outside form close modal form
window.addEventListener("click",function (event){
    if (event.target === modalbg) {
        closeModal();
    }
});

// close modal form when clicking on the ESC key
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeModal();
    }
});

// ------------------                                    DYNAMIC MODAL FORM CONST                         ----------------------------------------------//
// Declaration of empty INPUTS
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthDate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const tournament = document.getElementsByName("location");
const checkbox1 = document.getElementById("checkbox1");
// const thankYouClose = document.getElementById("thankYouClose");

//location of correct or not inputs info
const firstWarning=document.getElementById("firstWarning");
const lastWarning=document.getElementById("lastWarning");
const emailWarning=document.getElementById("emailWarning");
const birthDateWarning=document.getElementById("birthdateWarning");
const quantityWarning=document.getElementById("quantityWarning");
const tournamentWarning=document.getElementById("tournamentWarning");
const checkbox1Warning=document.getElementById("checkbox1Warning");
const formWarning=document.getElementById("formWarning");

// ------------------                                    REGEXS                         ----------------------------------------------//
//regex for email
const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

//regex for firstname lastname and email longer than 2 characters and at least 60 characters
const regexName = /^[a-zA-Z]{2,60}$/;

// regex for birthdate is not a UTC datE
const regexDate = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;

// regex for quantity is a number between 0 and 99
const regexQuantity = /^[0-9]{1,2}$/;

//regex to verify yes or not
const regexYesorNot =/^([Tt][Rr][Uu][Ee]|[Ff][Aa][Ll][Ss][Ee])$/;


// ------------------                                    INPUT VALIDATOR                -----------------------------------------------//
function inputValidator(input, regEx, msg, label, border){
    let testValid = regEx.test(input.value);                    //RegEx test with stock value

    if(testValid || input.value === birthdate || input.value=== 1 || input.value===true ){                        //if test is true or input is NOT empty
        label.innerHTML = "Champs Valide";
        label.classList.remove('text-error');
        label.classList.add('text-success');
        border.classList.remove('border-error');
        border.classList.add('border-success');
        return true;
    }

    else {
        label.innerHTML = msg;
        label.classList.remove('text-success');
        label.classList.add('text-error');
        border.classList.remove('border-success');
        border.classList.add('border-error');
        return false;
    }
}

// ------------------                                    VERIFY FIRSTNAME & LASTNAME    ----------------------------------------------//
//for each change of input, check if all inputs are valid
firstName.addEventListener("change", function(){
    inputValidator(this, regexName, "Veuillez rentrer deux caractères minimum", firstWarning, this);
});

lastName.addEventListener('change', function() {
    inputValidator(this, regexName, "Veuillez rentrer deux caractères minimum", lastWarning, this);
});

// ------------------                                    VERIFY EMAIL                          ----------------------------------------------//
email.addEventListener("change", function(){
    inputValidator( this, regexEmail, "Veuillez entrer une adresse mail valide", emailWarning, this);
});

// ------------------                                    VERIFY BIRTHDATE                          ----------------------------------------------//
birthDate.addEventListener("change", function(){
    inputValidator(this, regexDate, "Veuillez entrer votre date de naissance", birthDateWarning, this);
});

// ------------------                                    VERIFY QUANTITY                          ----------------------------------------------//
quantity.addEventListener("change", function(){
    inputValidator(this, regexQuantity, "Veuillez renseigner un nombre", quantityWarning, this);
});

// ------------------                                    VERIFY TOURNAMENTS                          ----------------------------------------------//
tournament.addEventListener("change", function(){
    inputValidator(this, regexYesorNot, "Veuillez choisir un tournois", tournamentWarning, this);
});

// ------------------                                    VERIFY CHECKBOX                          ----------------------------------------------//
checkbox1.addEventListener("change", function(){
    inputValidator(this, regexYesorNot, "Veuillez accepter nos conditions", checkbox1Warning, this);
});

// ------------------                                    SUBMIT FORM AND THANKS                        ----------------------------------------------//
// close modal form when clicking on the submit button if all the fields are filled in
form.addEventListener("submit", function (event) {
        event.preventDefault();
        if (checkInputs===true) {
            display(getelementbyid("thankYou"));
        }
    }
);


thankYouClose.addEventListener("click", function (event) {
    if (event.target === thankYouClose) {
        closeModal();
    }
});
