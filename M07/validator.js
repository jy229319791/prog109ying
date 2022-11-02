function validateForm() {
    if (firstName() 
    ){
    return true;
    }else{
        document.getElementById("errorMessages").innerHTML = "<p><strong>Error Submitting — See Above</strong></p>";
        event.preventDefault();
        return false;
}

FirstName.addEventListener('blur', firstName, false);
function firstName(){
    //1) Create variable
    var validFirstname=false;

    //2) read value from HTML
    var firstname = document.getElementById("FirstName").value;
    var errorMessages = "";

    //3) Do validation
    if (firstname==="null" || firstname==="" || firstname.length > 20 ) {
        errorMessages += "<p>The first name is required and cannot be greater than 20 characters</p>";
        console.log("First name invalid — length")
        } else if (firstname.match("^[a-zA-Z ,.'-]+$")===null) {
            errorMessages += "<p>Invalid character in first name (accepts only A-Z, a-z, and ,.'-)</p>";
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



if (lastName()){
    return true;

  }else{
        document.getElementById("errorMessages").innerHTML = "<p><strong>Error Submitting — See Above</strong></p>";
        event.preventDefault();
        return false;
  }

LastName.addEventListener('blur', lastName, false);
function lastName(){
    var validLastname=false;

    var lastname = document.getElementById("LastName").value;
    var errorMessages = "";

    if (lastname==="null" || lastname==="" || lastname.length > 50 ) {
        errorMessages += "<p>The last name is required and cannot be greater than 50 characters</p>";
        console.log("Last name invalid — length")
        } else if (lastname.match("^[a-zA-Z ,.'-]+$")===null) {
            errorMessages += "<p>Invalid character in last name (accepts only A-Z, a-z, and ,.'-)</p>";
            console.log("Last name invalid — bad characters")
        } else {
                validlastName = true;
                console.log("Last name valid")
        }

    document.getElementById("lname").innerHTML = errorMessages;

    return (validLastname);
}
}
  if(email()){
    return true;
  }else{
     document.getElementById("errorMessages").innerHTML = "<p><strong>Error Submitting — See Above</strong></p>";
        event.preventDefault();
        return false;
  }
  
  email.addEventListener('blur', email, false);
  function email(){
   var userEmail = document.getElementById("email").value;
   var atpos = userEmail.indexOf("@");
 var dotpos = userEmail.lastIndexOf(".");
if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=userEmail.length) {
  errormessages="<p>Invalid Email!</p>";
}else{
    return true; 
  } 
  }
  if（phone()){
    return true;
  }else{
     document.getElementById("errorMessages").innerHTML = "<p><strong>Error Submitting — See Above</strong></p>";
        event.preventDefault();
        return false;
  }
    phone.addEventListener('blur', phone, false);
  function phone(){
    var phone = document.getElementById("phone").value;
if (isNaN(phone) || phone.lenght >15 || phone===null || phone===""){
 errorMessages = "<p>Invalid phone number！ </p>";
 
}else{
  return true; 
}
  }
