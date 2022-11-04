function validateForm() {
  if (firstName()) {
    return true;
  } else {
    document.getElementById("errorMessages").innerHTML =
      "<p><strong>Error Submitting — See Above</strong></p>";
    event.preventDefault();
    return false;
  }
  FirstName.addEventListener("blur", firstName, false);

  function validateFirstname() {
    //1) Create variable
    var validFirstname = false;
    //2) read value from HTML
    var firstname = document.getElementById("FirstName").value;
    var errorMessages = "";
    //3) Do validation
    if (firstname === "null" || firstname === "" || firstname.length > 20) {
      errorMessages +=
        "<p>The first name is required and cannot be greater than 20 characters</p>";
      console.log("First name invalid — length")
    } else if (firstname.match("^[a-zA-Z ,.'-]+$") === null) {
      errorMessages +=
        "<p>Invalid character in first name (accepts only A-Z, a-z, and ,.'-)</p>";
      console.log("First name invalid — bad characters")
    } else {
      validFirstname = true;
      console.log("First name valid")
    }
    //4) Send error message to HTML
    document.getElementById("fname").innerHTML = errorMessages;
    //5) return status of each field
    return (validFirstname);
  }
}
if (lastName()) {
  return true;
} else {
  document.getElementById("errorMessages").innerHTML =
    "<p><strong>Error Submitting — See Above</strong></p>";
  event.preventDefault();
  return false;
}
LastName.addEventListener("blur", lastName, false);

function validateLastname() {
  var validLastname = false;
  var lastname = document.getElementById("LastName").value;
  var errorMessages = "";
  if (lastname === "null" || lastname === "" || lastname.length > 50) {
    errorMessages +=
      "<p>The last name is required and cannot be greater than 50 characters</p>";
    console.log("Last name invalid — length");
  } else if (lastname.match("^[a-zA-Z ,.'-]+$") === null) {
    errorMessages +=
      "<p>Invalid character in last name (accepts only A-Z, a-z, and ,.'-)</p>";
    console.log("Last name invalid — bad characters");
  } else {
    validlastName = true;
    console.log("Last name valid")
  }
  document.getElementById("lname").innerHTML = errorMessages;
  return (validLastname);
}
}
if (email()) {
  return true;
} else {
  document.getElementById("errorMessages").innerHTML =
    "<p><strong>Error Submitting — See Above</strong></p>";
  event.preventDefault();
  return false;
}
email.addEventListener("blur", email, false);

function validateEmail() {
  var userEmail = document.getElementById("Email").value;
  var atpos = userEmail.indexOf("@");
  var dotpos = userEmail.lastIndexOf(".");
  if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= userEmail.length) {
    errormessages = "<p>Invalid Email!</p>";
  } else {
    return true;
  }
}
if (phone()) {
  return true;
} else {
  document.getElementById("errorMessages").innerHTML =
    "<p><strong>Error Submitting — See Above</strong></p>";
  event.preventDefault();
  return false;
}
phone.addEventListener('blur', phone, false);

function validatePhone() {
  var phone = document.getElementById("Phone").value;
  if (isNaN(phone) || phone.length > 15 || phone === null || phone === "") {
    errorMessages = "<p>Invalid phone number！ </p>";
  } else {
    return true;
  }
}
if (username()) {
  return true;
} else {
  document.getElementById("errorMessages").innerHTML =
    "<p><strong>Error Submitting — See Above</strong></p>";
  event.preventDefault();
  return false;
}
username.addEventListener('blur', username, false);

function validateUsername() {
  var username = document.getElementById("Username").value;
  if (username === "" || username === null || username.length > 12) {
    errorMessages =
      "<p> Invalid username! Username must include no more than 12 characters.</p>";
  } else {
    return true;
  }
}
if (password()) {
  return true;
} else {
  document.getElementById("errorMessages").innerHTML =
    "<p><strong>Error Submitting — See Above</strong></p>";
  event.preventDefault();
  return false;
}
password.addEventListener('blur', password, false);

function validatePassword() {
  var password = document.getElementById("Password").value;
  if (password === "" || password === null || password.length > 7) {
    errorMessages =
      "<p> Invalid password! Password must include no more than 7 characters </p>";
  } else {
    return true;
  }
}
if (zipcode()) {
  return true;
} else {
  document.getElementById("errorMessages").innerHTML =
    "<p><strong>Error Submitting — See Above</strong></p>";
  event.preventDefault();
  return false;
}
zipcode.addEventListener('blur', zipcode, false);
var country = document.getElementById("Country").value;
if (country === "US") {
  function validateZipcode() {
    var zipcode = document.getElememtById("zipcode").value;
    if (zipcode.length != 5) {
      errorMessages = "<p> Invalid ZipCode! ZipCode must be 5 digits."
    } else {
      return true;
    }
  } else {
    ZipCode.removeAttribute("required");
  }
}
}
