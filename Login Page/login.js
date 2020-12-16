"use strict";

function validateForm() {

    var username = document.forms["loginEmail"]["username"].value;
    var password = document.forms["loginEmail"]["password"].value;

    if ((username == "indigobird") && (password == "steadfastprotection")) {   //Correct username: indigobird / pass: steadfastprotection
        window.location.href = '../Home Page/home.html';
        console.log("state 1");
    }
    else if ((username == "Indigobird") && (password == "Steadfastprotection")) {   //allows for first letter to be capitalized
        window.location.href = '../Home Page/home.html';
        console.log("state 2");
    }
    else if ((username == "IndigoBird") && (password == "SteadfastProtection")) {   //allows for second word, first letter to be capitalized
        window.location.href = '../Home Page/home.html';
        console.log("state 3");
    }
    else if ((username == "IndigoBird") && (password == "SteadfastProtection")) {   //allows for second word, first letter to be capitalized
        window.location.href = '../Home Page/home.html';
        console.log("state 4");
    }
    else {
        alert("Login unsuccessful.");
        console.log("state 5");
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