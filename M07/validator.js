function validateForm(){

  var firstname= document.getElementById("FirstName").value; 
  if (firstname ==="null" || firstname === "" || firstname.length > 20 ) {
     document.getElementById("errorMessages").innerHTML ="First name invalid -length. It must be less than 20 characters.";
     firstname.focus();
     return false;
  }
  if (firstname.match("^[a-zA-Z ,.'-]+$")===null) {
     document.getElementById("errorMessages").innerHTML ="Invaid characters in first name field.";
     firstname.focus();
     return false;  
   } 
  
   var lastname= document.getElementById("LastName").value;
  if (lastname ==="null" || lastname ==="" || lastname.length > 50 ) {
     document.getElementById("errorMessages").innerHTML ="Last name invalid -length. It must be less than 50 characters";
     lastname.focus();
     return false;
   } 
  if (lastname.match("^[a-zA-Z ,.'-]+$")===null) {
     document.getElementById("errorMessages").innerHTML ="Invaid characters in last name field.";
     lastname.focus();
     return false;       
   }
  
  var email= document.getElementById("Email").value;
  var atpos = email.indexOf("@");
  var dotpos = email.lastIndexOf(".");
  if (atpos<1|| dotpos<atpos+2|| dotpos+2>=email.length){
     document.getElementById("errorMessages").innerHTML ="Invaid Email address!";
     email.focus();
     return false;
  }
  
  var phone= document.getElementById("Phone").value;
  if (isNaN(phone) || phone.length > 15 || phone === null || phone === "") {
    document.getElementById("errorMessages").innerHTML ="Invalid phone number!";
    phone.focus();
    return false;
  }
  
  var username= document.getElementById("Username").value;
  if (username === "" || username === null || username.length > 12) {
    document.getElementById("errorMessages").innerHTML = "Invalid username! Username must include no more than 12 characters.";
    username.focus();
    return false;
    } 
  
  var password= document.getElementById("Password").value;
  if (password === "" || password === null || password.length > 7) {
    document.getElementById("errorMessages").innerHTML  = "Invalid password! Password must include no more than 7 characters";
    password.focus();
    return false;
    } 
  var address= document.getElementById("Address").value;
  if (address===""||address===null){
    document.getElementById("errorMessages").innerHTML  ="Please fill out the address.";
    address.focus();
    return false;
  }
  var city= document.getElementById("City").value;
  if (city===""||city===null||city.match("^[a-zA-Z ,.'-]+$")===null){
    document.getElementById("errorMessages").innerHTML  ="Please fill out the city.";
    city.focus();
    return false;
  }
  var state= document.getElementById("State").value;
  if (state ==="-1"){
    document.getElementById("errorMessages").innerHTML  ="Please select a state.";
    state.focus();
    return false;
  }
  var country= document.getElementById("Country").value;
  if (country==="-1"){
    document.getElementById("errorMessages").innerHTML  ="Please select a country.";
    country.focus();
    return false;
  }
  var zipcode= document.getElementById("ZipCode").value; 
  if (zipcode.length != 5) {
     document.getElementById("errorMessages").innerHTML = "Invalid ZipCode. ZipCode must be 5 digits."
     zipcode.focus();
     return false;
  }
       return true;
  }else {
  event.preventDefault();
  return false;
         }
