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
 var error=[];
  
  if (firstname ==="null" || firstname === "" || firstname.length > 20 ) {
     error.push("First name invalid -length. It must be less than 20 characters.");
     return false;
   } else if (firstname.match("^[a-zA-Z ,.'-]+$")===null) {
         error.push("Invaid characters in first name field.")
       return false;       
   } else {
           return true;   
   }
  
  if (lastname ==="null" || lastname ==="" || lastname.length > 50 ) {
     error.push("Last name invalid -length. It must be less than 50 characters");
     return false;
   } else if (lastname.match("^[a-zA-Z ,.'-]+$")===null) {
     error.push("Invaid characters in last name field.")
       return false;       
   } else {
       return true;   
   }
  
  var atpos = email.indexOf("@");
  var dotpos = email.lastIndexOf(".");
  if (atpos<1|| dotpos<atpos+2|| dotpos+2>=email.length){
     error.push("Invaid Email address!")
  }else{
    return true;
  }
  
  if (isNaN(phone) || phone.length > 15 || phone === null || phone === "") {
    error.push="Invalid phone number!";
  }else{
    return true;
  }
  
  if (username === "" || username === null || username.length > 12) {
    error.push = "Invalid username! Username must include no more than 12 characters.";
    } else {
    return true;
    }
  
  if (password === "" || password === null || password.length > 7) {
    error.push = "Invalid password! Password must include no more than 7 characters";
    } else {
    return true;
    }
  if (country === "US") {
      if (zipcode.length != 5) {
          error.push = "Invalid ZipCode. ZipCode must be 5 digits."
        } else {
                    return true;
         }
            } else {
                zipcode.removeAttribute("required");
            }
  
  var errormessages=document.getElementById('errorMessages');
  errormessages.innerText= error;
}
