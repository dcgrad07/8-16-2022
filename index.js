

const playersArray = [];

function addPlayer() {
   
}

const playerInput = document.getElementById("playerInput").value
console.log(playerInput);

playersArray.push(playerInput)

const playerNamesContainer = document.getElementById('playerInput');

console.log(playerNamesContainer);

let allInnerHTML= '';
for(let playerNames of playersArray){
    let string = `<p>${playerNames}`
    allInnerHTML = allInnerHTML + string
}

playerNamesContainer.innerHTML = allInnerHTML

const inputField = document.getElementById('playerInput');