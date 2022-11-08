console.log("the message!");

let theUser = "rebecca"
let aNum = 579809

console.log(theUser + " " +aNum)

const theButton = document.querySelector('button');
theButton.style.backgroundColor = "yellow"
theButton.style.border = "10px solid black"

let theBody = document.querySelector('body');

let theTxt = document.getElementById('theText');

// event listener
theButton.addEventListener('click', beTheChange)

function beTheChange(){
    console.log("you clicked!");
    theBody.style.backgroundColor = "blue"
    theTxt.textContent = "you are the change!"
}

console.log(theTxt.textContent)