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
  if (lastname ==="null" || lastname ==="" || lastname.length > 20 ) {
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
  
  var validComment=false;
  var comment= document.getElementById("Comment").value;
  if (comment === null || comment === "" || comment.length >400) {
    document.getElementById("errorMessages").innerHTML = "The field must be filled out!";
    document.getElementById("comment").focus();
     return false;
    }else{
      validComment=true;
    }
  }
