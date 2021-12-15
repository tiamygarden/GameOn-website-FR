function editNav() {
  let x = document.getElementById("myTopnav");
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

// close modal form when clicking on the X
const closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click", closeModal);

// When clicking outside of the form close modal form
window.addEventListener("click", function (event) {
    if (event.target == modalbg) {
        modalbg.style.display = "none";
    }
});

// close modal form when clicking on the ESC key
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        modalbg.style.display = "none";
    }
});

// close modal form when clicking on the submit button
const submitBtn = document.querySelector(".btn-submit");
submitBtn.addEventListener("click", closeModal);



