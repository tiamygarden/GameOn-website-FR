function editNav() {
    const x = document.getElementById("myTopnav");
    (x.className === "topnav")?x.className += " responsive":x.className = "topnav"; //TERNARY OPERATOR FOR RESPONSIVE NAVBAR
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeBtn = document.querySelector(".close");
const btnSubmit = document.getElementById("btnSubmit");
const form = document.getElementById("form");
const thankYou = document.getElementById("thankYou");
const btnValid= document.getElementById("btnValid");
// ------------------                                    DYNAMIC MODAL FORM CONST                         ----------------------------------------------//
// Declaration of empty INPUTS
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthDate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const tournament = document.getElementsByName("location");
const checkbox = document.getElementById("checkbox1");

//location of correct or not inputs info
const firstWarning=document.getElementById("firstWarning");
const lastWarning=document.getElementById("lastWarning");
const emailWarning=document.getElementById("emailWarning");
const birthDateWarning=document.getElementById("birthdateWarning");
const quantityWarning=document.getElementById("quantityWarning");
const tournamentWarning=document.getElementById("tournamentWarning");
const checkboxWarning=document.getElementById("checkboxWarning");


// ------------------                                    REGEXS                         ----------------------------------------------//
//regex for email format
const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

// regex for birthdate is not a UTC datE
const regexDate = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;

// regex for quantity is a number between 0 and 99
const regexQuantity = /^[0-9]{1,2}$/;

// ------------------                                    LAUNCH MODAL FORM                          ----------------------------------------------//
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
    modalbg.style.display = "block";
}


// ------------------                                    VERIFY FIRSTNAME & LASTNAME    ----------------------------------------------//
function checkFirstName(input){

    if(input.value.length<2){
        firstWarning.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
        firstWarning.classList.remove("text-success");
        firstWarning.classList.add("text-error");
        return false;
    }
    else{
        firstWarning.innerHTML = "Champs Valide";
        firstWarning.classList.remove("text-error");
        firstWarning.classList.add("text-success");
        return true;
    }
}

//for each change of input, check if all inputs is valid
firstName.addEventListener("change", function(event){
    checkFirstName(event.target);
});

function checkLastName(input){

    if(input.value.length<2){
        lastWarning.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
        lastWarning.classList.remove("text-success");
        lastWarning.classList.add("text-error");
        return false;
    }
    else{
        lastWarning.innerHTML = "Champs Valide";
        lastWarning.classList.remove("text-error");
        lastWarning.classList.add("text-success");
        return true;
    }
}

lastName.addEventListener("change", function(event) {
    checkLastName(event.target);
});

// ------------------                                    INPUT VALIDATOR                            -----------------------------------------------//
function inputValidator(input, regEx, msg, label, border){
    let testValid = regEx.test(input.value);                                                //RegEx test with stock value
    if(testValid || input.value === birthdate || input.value=== 1 || input.value===true && input.value!==undefined && input.value!==null){                        //if test is true or input is NOT empty null or undefined
        label.innerHTML = "Champs Valide";
        label.classList.remove('text-error');
        label.classList.add('text-success');
        border.classList.remove('border-error');
        border.classList.add('border-success');
        return true;
    }
    else{
            label.innerHTML = msg;
            label.classList.remove('text-success');
            label.classList.add('text-error');
            border.classList.remove('border-success');
            border.classList.add('border-error');
            return false;
        }
}

// ------------------                                    VERIFY EMAIL                               ----------------------------------------------//
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

// ------------------                                    TOURNAMENT VERIFICATOR                    -----------------------------------------------//
//  select any radio button named 'location' checked
function checkTournament(){
    let locTournament = null;
    for (let i = 0; i < tournament.length; i++) {
        const isChecked = tournament[i].checked;
        if (isChecked) {
            locTournament = true;
            return true;
        }
    }
    return false;
}

function validTournament(){
        if(!checkTournament()){
                tournamentWarning.innerHTML = "Veuillez choisir une ville";
                tournamentWarning.classList.remove("text-success");
                tournamentWarning.classList.add("text-error");
                return false;

    }
    else {
        tournamentWarning.innerHTML = "Champs Valide";
        tournamentWarning.classList.remove("text-error");
        tournamentWarning.classList.add("text-success");
        return true;
    }
}

// ------------------                                    VERIFY TOURNAMENTS                          ----------------------------------------------//

// add a listener on each radio button
tournament.forEach((checkedBoxInput) => checkedBoxInput.addEventListener("change", function() {
    validTournament(this);
}));

// ------------------                                    CHECKED VERIFICATOR                        -----------------------------------------------//

const validCondition = function() {
    if(checkbox.checked === false ) {
        checkboxWarning.innerHTML = "Merci d'accepter les conditions d'utilisations";
        checkboxWarning.classList.remove('text-success');
        checkboxWarning.classList.add('text-error');
        return false;

    }else {
        checkboxWarning.innerHTML = "Champs Valide";
        checkboxWarning.classList.remove('text-error');
        checkboxWarning.classList.add('text-success');
        return true;
    }
};

// ------------------                                    VERIFY CHECKBOX                             ----------------------------------------------//
checkbox.addEventListener("change", function(){
    validCondition(this);
});

// ------------------                                    SUBMIT FORM AND THANKS                      ----------------------------------------------//
// show thankYou over the modal if allinputs are valid
function showThankYou(){
    form.style.display = "none";
    thankYou.style.display = "flex";
}

//verify all inputs and show thankYou or msg error for all input in error
function submitForm(){
    let inputsVerify = [checkFirstName(firstName), checkLastName(lastName), inputValidator(email, regexEmail, "Veuillez entrer une adresse mail valide", emailWarning, email), inputValidator(birthDate, regexDate, "Veuillez entrer votre date de naissance", birthDateWarning, birthDate), inputValidator(quantity, regexQuantity, "Veuillez renseigner un nombre", quantityWarning, quantity), validTournament(), validCondition()];
    let allInputsValid = inputsVerify.every(function(input){
        return input === true;
    }
    );
    if(allInputsValid){
        showThankYou();
    }
}

// on click on submit button submitForm function is called
btnSubmit.addEventListener("click", function(event){
    event.preventDefault();
    submitForm();
});

// on click on the ESC key, close the thankYou modal
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeModal();
    }
});

//on click on btnValid close the thankYou modal
btnValid.addEventListener("click", function () {
    closeModal();
});

// ------------------                                    CLOSE MODAL FORM                            ----------------------------------------------//
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
