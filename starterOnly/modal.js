function editNav() {
  const x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// When clicking outside of the form close modal form
window.addEventListener("click", function (event) {
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



// stock data form
const form = document.getElementById("form");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const location1 = document.getElementById("location1");
const location2 = document.getElementById("location2");
const location3 = document.getElementById("location3");
const location4 = document.getElementById("location4");
const location5 = document.getElementById("location5");
const location6 = document.getElementById("location6");


// close modal form when clicking on the submit button if all the fields are filled in
form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (firstName.value && lastName.value && email.value && birthdate.value && quantity.value && (location1.checked || location2.checked || location3.checked || location4.checked || location5.checked || location6.checked)) {
        closeModal();
    }
}
);
