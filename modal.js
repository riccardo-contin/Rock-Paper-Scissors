let modal = document.getElementById("rules-modal");
let btn = document.getElementById("btnRules");
let span = document.getElementsByClassName("close")[0];

btn.addEventListener("click", openRules);
span.addEventListener("click", closeRules);

// When the user clicks the button, open the modal
function openRules() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function closeRules() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
