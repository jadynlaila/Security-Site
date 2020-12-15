"use strict";

function validateForm() {

    var username = document.forms["loginEmail"]["username"].value;
    var password = document.forms["loginEmail"]["password"].value;

    if ((username == "Kill") && (password == "Me")) {
        window.location.href = '../Home Page/home.html';
        return false;
    }
    else {
        alert("Login unsuccessful.");
    }

}