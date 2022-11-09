function validateForm(){

  var validFirstname=false;
  var firstname= document.getElementById("FirstName").value; 
  if (firstname ==="null" || firstname === "" || firstname.length > 20 ) {
     document.getElementById("errorMessages").innerHTML ="First name invalid -length. It must be less than 20 characters.";
     document.getElementById("FirstName").focus();
     return false;
  }else if(firstname.match("^[a-zA-Z ,.'-]+$")===null) {
     document.getElementById("errorMessages").innerHTML ="Invaid characters in first name field.";
     document.getElementById("FirstName").focus();
     return false;
  }else{
    validFirstname=true;
  }
    
   var validLastname=false;
   var lastname= document.getElementById("LastName").value;
  if (lastname ==="null" || lastname ==="" || lastname.length > 50 ) {
     document.getElementById("errorMessages").innerHTML ="Last name invalid -length. It must be less than 50 characters";
     document.getElementById("LastName").focus();
     return false;
  } else if (lastname.match("^[a-zA-Z ,.'-]+$")===null) {
     document.getElementById("errorMessages").innerHTML ="Invaid characters in last name field.";
     document.getElementById("LastName").focus();
     return false;
  } else {
     validLastname=true;
   }

  var validEmail=false;
  var email= document.getElementById("Email").value;
  var atpos = email.indexOf("@");
  var dotpos = email.lastIndexOf(".");
  if (atpos<1|| dotpos<atpos+2|| dotpos+2>=email.length){
     document.getElementById("errorMessages").innerHTML ="Invaid Email address!";
     document.getElementById("Email").focus();
     return false;
  }else{
    validEmail=true;
  }
  
  var validPhone=false;
  var phone= document.getElementById("Phone").value;
  if ( phone.match(/^\d+(-\d+)*$/)===null || phone.length > 15 || phone === null || phone === "") {
    document.getElementById("errorMessages").innerHTML ="Invalid phone number!";
    document.getElementById("Phone").focus();
    return false;
  }else{
    validPhone=true;
  }
  
  var validUsername=false;
  var username= document.getElementById("Username").value;
  if (username === "" || username === null || username.length > 12) {
    document.getElementById("errorMessages").innerHTML = "Invalid username! Username must include no more than 12 characters.";
     document.getElementById("Username").focus();
     return false;
    }else{
      validUsername=true;
    }
  
  var validPassword=false;
  var password= document.getElementById("Password").value;
  if (password === "" || password === null || password.match("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9_])")===null){
    document.getElementById("errorMessages").innerHTML  = "Invalid password! Password must include at lease an uppercase letter, a lowercase letter, a special character, numbers and no more than 7 characters";
    document.getElementById("Password").focus();
    return false;
    } else{
      validPassword=true;
    }
  
  var validAddress=false;
  var address= document.getElementById("Address").value;
  if (address===""||address===null){
    document.getElementById("errorMessages").innerHTML  ="Please fill out the address.";
    document.getElementById("Address").focus();
    return false;
  }else{
    validAddress=true;
  }
  
  var validCity=false;
  var city= document.getElementById("City").value;
  if (city===""||city===null||city.match("^[a-zA-Z ,.'-]+$")===null){
    document.getElementById("errorMessages").innerHTML  ="Please fill out the city. Invalid characters.";
    document.getElementById("City").focus();
    return false;
  }else{
    validCity=true;
  }
  
  var validState=false;
  var state= document.getElementById("State").value;
  if (state ==="-1"){
    document.getElementById("errorMessages").innerHTML  ="Please select a state.";
    document.getElementById("State").focus();
    return false;
  }else{
    validState=true;
  }
  
  
  var validCountry=false;
  var country= document.getElementById("Country").value;
  if (country==="-1"){
    document.getElementById("errorMessages").innerHTML  ="Please select a country.";
    document.getElementById("Country").focus();
    return false;
  }else{
    validCountry=true;
  }
  
  var validZipcode=false;
  var zipcode= document.getElementById("ZipCode").value; 
  if(country==="US"){
  if (zipcode.length !== 5) {
     document.getElementById("errorMessages").innerHTML = "Invalid ZipCode. ZipCode must be 5 digits.";
     document.getElementById("ZipCode").focus();
     return false;
  }else{
     validZipcode=true;
  }
  }
       return(validFirstname && validLastname && validEmail && validPhone && validUsername && validPassword && validAddress && validCity && validState && validCountry && validZipcode);
  }
