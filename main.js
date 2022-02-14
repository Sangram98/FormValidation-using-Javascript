
function printError(Id, Msg) {
  document.getElementById(Id).innerText = Msg;
}

function validateForm(e) {
  e.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var mobile = document.getElementById("mobile").value;
  var country = document.getElementById("country").value;



  var nameErr = emailErr = mobileErr = countryErr  = true;

  //for name
  if (name == "") {
    printError("nameErr", "Please enter your name");
    var elem = document.getElementById("name");
    elem.classList.add("input-2");
  } else {
    var regex = /^[a-zA-Z\s]+$/;
    if (regex.test(name) === false) {
      printError("nameErr", "Please enter a valid name");
      var elem = document.getElementById("name");
      elem.classList.add("input-2");
    } else {
      printError("nameErr", "");
      nameErr = false;
      var elem = document.getElementById("name");
      elem.classList.add("input-1");
      elem.classList.remove("input-2");
    }
  }

  //for email
  if (email == "") {
    printError("emailErr", "Please enter your email address");
    var elem = document.getElementById("email");
    elem.classList.add("input-2");
  } else {
    var regex = /^\S+@\S+\.\S+$/;
    if (regex.test(email) === false) {
      printError("emailErr", "Please enter a valid email address");
      var elem = document.getElementById("email");
      elem.classList.add("input-2");
    } else {
      printError("emailErr", "");
      emailErr = false;
      var elem = document.getElementById("email");
      elem.classList.add("input-1");
      elem.classList.remove("input-2");
    }
  }

  //for mobile
  if (mobile == "") {
    printError("mobileErr", "Please enter your mobile number");
    var elem = document.getElementById("mobile");
    elem.classList.add("input-2");
  } else {
    var regex = /^[1-9]\d{9}$/;
    if (regex.test(mobile) === false) {
      printError("mobileErr", "Please enter a valid 10 digit mobile number");
      var elem = document.getElementById("mobile");
      elem.classList.add("input-2");
    } else {
      printError("mobileErr", "");
      mobileErr = false;
      var elem = document.getElementById("mobile");
      elem.classList.add("input-1");
      elem.classList.remove("input-2");
    }
  }

  //for select
  if (country == "Select") {
    printError("countryErr", "Please select your country");
    var elem = document.getElementById("country");
    elem.classList.add("input-4");
    elem.classList.remove("input-3");
  } else {
    printError("countryErr", "");
    countryErr = false;
    var elem = document.getElementById("country");
    elem.classList.add("input-3");
    elem.classList.remove("input-4");
  }





  if ((nameErr || emailErr || mobileErr || countryErr) == true) {
    return false;
  }
}
