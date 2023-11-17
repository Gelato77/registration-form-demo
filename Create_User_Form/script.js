function validateSignupForm() {
    var username = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var password2 = document.getElementById("psw-repeat").value;
    var phone = document.getElementById("number").value

    if (username == "" || email == "" || password == "" || password2 == "" || phone == "") {
        alert("All fields are required!");
        return false;
    }

    if (password !== password2) {
        alert("Passwords do not match!");
        return false;
    }

    var nameRegex = /[A-Za-z]/;
    if (!nameRegex.test(username)) {
        alert("Invalid Name!\nMust only contain alphabetical characters");
        return false;
    }

    var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(email)) {
      alert("Invalid email address!\nMust contain an '@' and a domain");
      return false;
    }

    var phoneRegex = /^[0-9]+(-[0-9]+)+$/;
    if (!phoneRegex.test(phone)) {
        alert("Invalid phone number!\nMust only contain numbers and include hyphens\n (xxx-xxx-xxxx)");
        return false;
    }
    alert("Registration Successful!");
    return true;
}




