let step1 = document.getElementById("step1");
let houseChoose = document.getElementById("houseChoose");
let viewResultDiv = document.getElementById("viewResult");

let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let rock = document.getElementById("rock");

paper.addEventListener("click", pick);
scissors.addEventListener("click", pick);
rock.addEventListener("click", pick);

let playAgain = document.getElementById("playAgain");
playAgain.addEventListener("click", restart);

function pick(id) {
  step1.style.display = "none";
  houseChoose.style.display = "grid";
  let list = document.getElementById("youPicked").getElementsByTagName("div");
  list[0].className = this.id;

  setTimeout(duel, 2000, this.id);
}

function housePick() {
  let num = Math.floor(Math.random() * 3) + 1;
  if (num === 1) {
    return "paper";
  } else if (num === 2) {
    return "scissors";
  }
  return "rock";
}

function duel(id) {
  let housePick = this.housePick();
  document.getElementById("houseEmpty").className = housePick;
  document.getElementById("houseEmpty").setAttribute("id", "house");

  let result;
  switch (id) {
    case "paper":
      if (housePick === "paper") {
        result = "none";
      } else if (housePick === "scissors") {
        result = "lose";
      } else {
        result = "win";
      }
      break;
    case "scissors":
      if (housePick === "paper") {
        result = "win";
      } else if (housePick === "scissors") {
        result = "none";
      } else {
        result = "lose";
      }
      break;
    case "rock":
      if (housePick === "paper") {
        result = "lose";
      } else if (housePick === "scissors") {
        result = "win";
      } else {
        result = "none";
      }
      break;

    default:
      break;
  }

  setTimeout(viewResult, 2000, id, housePick, result);
}

function viewResult(id, housePick, result) {
  let score = parseInt(document.getElementById("scorePoints").textContent, 10);
  if (result === "win") {
    document.getElementById("messageResult").innerHTML = "YOU WIN";
    score++;
  } else if (result === "lose") {
    document.getElementById("messageResult").innerHTML = "YOU LOSE";
    score--;
  }

  document.getElementById("house").setAttribute("id", "houseEmpty");
  document.getElementById("houseEmpty").removeAttribute("class");
  houseChoose.style.display = "none";
  viewResultDiv.style.display = "grid";

  let list = document
    .getElementById("youPickedResult")
    .getElementsByTagName("div");
  list[0].className = id;
  document.getElementById("houseEmptyResult").className = housePick;
  document.getElementById("houseEmptyResult").setAttribute("id", "houseResult");

  if (result === "win") {
    // non sono riuscito a realizzare i tre cerchi concentrici. Pensavo di utilizzare un gradiente a cerchio,
    // ma non ho trovato la soluzione
    document.getElementById("youPickedResult").style.background =
      "radial-gradient(circle, hsl(210, 47%, 23%) 50%, hsl(205, 47%, 23%), hsl(200, 47%, 23%)";
  } else if (result === "lose") {
    document.getElementById("housePickedResult").style.background =
      "radial-gradient(circle, hsl(210, 47%, 23%) 50%, hsl(205, 47%, 23%), hsl(200, 47%, 23%))";
  }

  document.getElementById("scorePoints").innerHTML = score.toString();
}

function restart() {
  document.getElementById("messageResult").innerHTML = "";
  document.getElementById("youPickedResult").style.background = "none";
  document.getElementById("housePickedResult").style.background = "none";
  document.getElementById("houseResult").setAttribute("id", "houseEmptyResult");
  document.getElementById("houseEmptyResult").removeAttribute("class");
  viewResultDiv.style.display = "none";
  step1.style.display = "block";
}
