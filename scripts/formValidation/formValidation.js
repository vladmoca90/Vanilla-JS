function sendForm() {
    var firstN = document.getElementsByName("firstName")[0].value;

    if (firstN.length < 3) {
        alert("Your first name is too short!");
    } else {
        document.getElementsByTagName("span")[0].innerHTML = "";
    }

    var lastN = document.getElementsByName("lastName")[0].value;

    if (lastN.length < 3) {
        alert("Your last name is too short!");
    } else {
        document.getElementsByTagName("span")[1].innerHTML = "";
    }

    var emailValid = document.getElementsByName("mail")[0].value;

    if (emailValid.indexOf("@") <= 0 ||
        emailValid.indexOf("@") != emailValid.lastIndexOf("@") ||
        emailValid.lastIndexOf(".") <= (emailValid.indexOf("@") + 2) ||
        emailValid.lastIndexOf(".") > (emailValid.length - 3) ||
        emailValid.lastIndexOf(".") < (emailValid.length - 5) ||
        emailValid.indexOf(" ") >= 0) {
        alert("Email is not valid!");
    } else {
        document.getElementsByTagName("span")[2].innerHTML = "";
    }
    
    var p1 = document.getElementsByName("pass")[0].value;
    var p2 = document.getElementsByName("pass")[0].value;

    if (p1.length < 6) {
        alert("Password too short!");
    } else {
        document.getElementsByTagName("span")[3].innerHTML = "";
    }

    if (p1 != p2) {
        alert("Password in not checked!");
    } else {
        document.getElementsByTagName("span")[3].innerHTML = "";
    }

    var age = document.getElementsByName("age")[0].value;

    if (age >= 18) {
        document.getElementsByTagName("span")[4].innerHTML = "Good! You are over 18.";
    } else {
        document.getElementsByTagName("span")[4].innerHTML = "You must be over 18 to complete the form!";
    }
}