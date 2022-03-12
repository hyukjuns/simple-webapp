'use strict';

let userName = prompt("Who's there?");

if (userName == "Admin") {
    let password = prompt("Enter the password");
    if (password == "TheMaster") {
        alert("Welcome!");
    }else if (password != "TheMaster" && !((password == '' || password==null))){
        alert("401 unauthorized.");
    }else if (password == '' || password==null){
        alert("Canceled");
    }
}else if (userName == '' || userName==null){
    alert("Canceled");
}else {
    alert("i dont know you.");
}