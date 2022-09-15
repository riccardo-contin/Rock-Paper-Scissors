let modal = document.getElementById("rules-modal");
let btn = document.getElementById("btnRules");
let span = document.getElementsByClassName("close")[0];

btn.addEventListener("click", openRules);
span.addEventListener("click", closeRules);

// apertura modale
function openRules() {
  modal.style.display = "block";
}

// chiusura modale
function closeRules() {
  modal.style.display = "none";
}

// chiusura modale in caso di click all'esterno
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
