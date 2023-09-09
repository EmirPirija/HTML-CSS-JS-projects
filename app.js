const colors = ["green", "red", "rgba(133,122,200", "#f15025"];

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setRandomColor() {
  $("body").css("background-color", getRandomColor());
}
