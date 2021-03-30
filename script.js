function myFunction() {
  var x = document.getElementById("menu");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}



function checkForm() {
  let form = document.getElementById('myForm');
  for (var i = 0; i < form.length; i++) {
    if(form[i].hasAttribute("required")){
      if(form[i].value == ""){
        alert("Please fill out all required fields.")
        return false;
      }
    }
  }
  alert("Thank you for submitting your information.")
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

var myVar;

function mySpinner() {
  myVar = setTimeout(showPage, 800);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
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
