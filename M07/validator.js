function valiateForm(){

 var firstname= document.getElementById('FirstName').value;
 var lastname= document.getElementById('LastName').value;
 var email= document.getElementById('Email').value;
 var phone= document.getElementById('Phone').value;
 var username= document.getElementById('Username').value;
 var password= document.getElementById('Password').value;
 var address= document.getElementById('Address').value;
 var city= document.getElementById('City').value;
 var state= document.getElementById('State').value;
 var country= document.getElementById('Country').value;
 var zipcode= document.getElementById('ZipCpde').value;                 
  
  if (firstname ==="null" || firstname === "" || firstname.length > 20 ) {
     window.alert("First name invalid -length. It must be less than 20 characters.");
     firstname.focus();
     return false;
   } else if (firstname.match("^[a-zA-Z ,.'-]+$")===null) {
     window.alert("Invaid characters in first name field.")
     firstname.focus();
     return false;       
   } else {
           return true;   
   }
  
  if (lastname ==="null" || lastname ==="" || lastname.length > 50 ) {
     window.alert("Last name invalid -length. It must be less than 50 characters");
     lastname.focus();
     return false;
   } else if (lastname.match("^[a-zA-Z ,.'-]+$")===null) {
     window.alert("Invaid characters in last name field.")
     lastname.focus();  
     return false;       
   } else {
       return true;   
   }
  
  var atpos = email.indexOf("@");
  var dotpos = email.lastIndexOf(".");
  if (atpos<1|| dotpos<atpos+2|| dotpos+2>=email.length){
     window.alert("Invaid Email address!")
     email.focus();
     return false;
  }else{
    return true;
  }
  
  if (isNaN(phone) || phone.length > 15 || phone === null || phone === "") {
    window.alert="Invalid phone number!";
    phone.focus();
    return false;
  }else{
    return true;
  }
  
  if (username === "" || username === null || username.length > 12) {
    window.alert = "Invalid username! Username must include no more than 12 characters.";
    username.focus();
    return false;
    } else {
    return true;
    }
  
  if (password === "" || password === null || password.length > 7) {
    window.alert = "Invalid password! Password must include no more than 7 characters";
    password.focus();
    return false;
    } else {
    return true;
    }
  if (country === "US") {
      if (zipcode.length != 5) {
          window.alert = "Invalid ZipCode. ZipCode must be 5 digits."
          zipcode.focus();
          return false;
        } else {
                    return true;
         }
            } else {
                zipcode.removeAttribute("required");
            }
 
}
