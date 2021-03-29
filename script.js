function myFunction() {
  var x = document.getElementById("menu");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}



function checkForm(form) {
  var inputs = form.getElementsByTagName('input');
  for (var i = 0; i < inputs.length; i++) {
    if(inputs[i].hasAttribut("required")){
      if(inputs[i].value == ""){
        alert("Please fill out all required fields.")
        return false;
      }
    }
  }
  alert("Information has been received.")
  return true;
}

function validEmail() {
  var x=document.getElementById("email").value;
  if (x == "" ) {
    alert("Not a valid email");
  } else {
    alert("Information has been received.");
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
