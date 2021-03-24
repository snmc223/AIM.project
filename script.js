function myFunction() {
  var x = document.getElementById("menu");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function validEmail() {
  var x=document.getElementById("email").value;
  if (x == "" ) {
    alert("Not valid email");
  } else {
    alert("Information has been received");
  }
}

// function ValidateEmail() {
//   // var x=document.getElementById("myForm").value;
//   if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(myForm.emailAddr.value)) {
//     return(true);
//   } else {
//     alert("You have entered an invalid email address");
//     return(false);
//   }
// }
