"use strict";

function validateForm() {

    var username = document.forms["loginEmail"]["username"].value;
    var password = document.forms["loginEmail"]["password"].value;
    if ((username == "username") && (password == "password")) {   //Correct username: indigobird / pass: steadfastprotection
        console.log("state 1");
        window.location.href = `../Purchase Page/buy.html`;
        return false;
    }
    else {
        alert("Login unsuccessful.");
        console.log("state 3");
    }


}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function openNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}