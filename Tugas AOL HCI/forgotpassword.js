function forgotPassword() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmpassword = document.getElementById("confirmpassword").value;

    if (email === "") {
        alert("Please enter your email.");
        return false;
    }

    if (password === "") {
        alert("Please enter your password.");
        return false;
    }

    if (confirmpassword != password) {
        alert("Password does not match.");
        return false;
    }

    return true;
}
