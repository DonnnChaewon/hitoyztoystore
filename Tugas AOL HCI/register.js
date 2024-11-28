function validateForm() {
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    var confirmpassword = document.getElementById("confirmpassword").value;
    var email = document.getElementById("email").value;
    var dob = document.getElementById("dob").value;
    var agreement = document.getElementById("agreement").checked;

    if (name === ""){
        alert("Please enter your name.");
        return false;
    }

    if (password === ""){
        alert("Please enter a password.");
        return false;
    }

    if (confirmpassword != password) {
        alert("Password does not match.");
        return false;
    }

    if (email === ""){
        alert("Please enter your email.");
        return false;
    }

    if (dob === ""){
        alert("Please enter your date of birth.");
        return false;
    }

    if (!agreement){
        alert("Please agree to the terms and conditions.");
        return false;
    }

    return true;
}