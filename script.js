function myFunction() {
  var x = document.getElementById("hamburgerIcon");
  if (x.className === "btnIcon") {
    x.className += " responsive";
  } else {
    x.className = "btnIcon";
  }
}


// showPrompt("Enter something<br>...smart :)", function(value) {
//   alert(value);
// });