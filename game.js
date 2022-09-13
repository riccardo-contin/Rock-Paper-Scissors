var step1 = document.getElementById("step1");
var houseChoose = document.getElementById("houseChoose");

function pick(id) {
  step1.style.display = "none";
  houseChoose.style.display = "grid";
  var list = document.getElementById("youPicked").getElementsByTagName("div");
  list[0].className = id;
}
