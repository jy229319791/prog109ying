function validateForm() {
    if (FirstName() && LastName() && Email() && Phone() && Username() && Password() && Address() && City() && State() && Country() && ZipCode()) {
        return true;
    } else {
        document.getElementById("errorMessages").innerHTML = "<p><strong>Error Submitting — See Above</strong></p>";
        event.preventDefault();
        return false;
    }

    FirstName.addEventListener("blur", FirstName, false);
    LastName.addEventListener("blur", LastName, false);
    Email.addEventListener("blur", Email, false);
    Password.addEventListener("blur", Password, false);
    ZipCode.addEventListener("blur", ZipCode, false);
    Phone.addEventListener("blur", Phone, false);

    function validateFirstname() {
        var validFirstname = false;
        var firstname = document.getElementById("FirstName").value;
        var errorMessages = "";
        if (firstname === "null" || firstname === "" || firstname.length > 20) {
            errorMessages += "<p>The first name is required and cannot be greater than 20 characters</p>";
            console.log("First name invalid — length")
        } else if {
            (firstname.match("^[a-zA-Z ,.'-]+$") === null errorMessages += "<p>Invalid character in first name (accepts only A-Z, a-z, and ,.'-)</p>"; console.log("First name invalid — bad characters");
            }
            else {
                validFirstname = true;
                console.log("First name valid");
            }
            document.getElementById("FirstName").innerHTML = errorMessages;
            return (validFirstname);
        }
    }

    function validateLastname() {
        var validLastname = false;

        var lastname = document.getElementById("LastName").value;
        var errorMessages = "";

        if (lastname === "null" || lastname === "" || lastname.length > 50) {
            errorMessages += "<p>The last name is required and cannot be greater than 50 characters</p>";
            console.log("Last name invalid — length")
        } else if (lastname.match("^[a-zA-Z ,.'-]+$") === null) {
            errorMessages += "<p>Invalid character in last name (accepts only A-Z, a-z, and ,.'-)</p>";
            console.log("Last name invalid — bad characters")
        } else {
            validlastName = true;
            console.log("Last name valid")
        }

        document.getElementById("LastName").innerHTML = errorMessages;

        return (validLastname);
    }
}

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

function validatePhone() {
    var phone = document.getElementById("Phone").value;
    if (isNaN(phone) || phone.length > 15 || phone === null || phone === "") {
        errorMessages = "<p>Invalid phone number！ </p>";

    } else {
        return true;
    }
}
Username.addEventListener('blur', Username, false);

function validateUsername() {
    var username = document.getElementById("Username").value;
    if (username === "" || username === null || username.length > 12) {
        errorMessages = "<p> Invalid username! Username must include no more than 12 characters.</p>";
    } else {
        return true;
    }
}

function validatePassword() {
    var password = document.getElementById("Password").value;
    if (password === "" || password === null || password.length > 7) {
        errorMessages = "<p> Invalid password! Password must include no more than 7 characters </p>";
    } else {
        return true;
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
