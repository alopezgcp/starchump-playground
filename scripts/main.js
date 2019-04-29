var myBtn = document.querySelector('button');
var myH4 = document.querySelector('h4');

function setUsername() {
    var username = prompt("Pick a user name");
    localStorage.setItem('name', username);
    myH4.textContent = username + ", welcome to the"
}

if(!localStorage.getItem('name')){
    setUsername();
} else {
    var storedName = localStorage.getItem('name');
    myH4.textContent = storedName + ", welcome to the";
}

myBtn.onclick = function(){
    setUsername();
}