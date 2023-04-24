const treasure = (location) => { // This takes in the argument of location and we name it treasure.
    var randomNum2 = "Box" + randomNum // Location of the treasure, we concatenate the string with the randomNum.
    var bomb2 = "Box" + bomb // Location of bomb, we concatenate the string with the bomb.
    if (gameStatus) { // This conditional checks if the game is still being played.
        document.getElementById (location).innerHTML = "🌳" // If it is still being played, it changes the location to a tree emoji.
    }
    if (location === randomNum2 && gameStatus) { // This introduces another conditional stating if the location is precisely equal to randomNum2 and if gameStatus is true.
        document.getElementById (location).innerHTML = "🦴" // If it is true, then the location is set equal to the bone emoji.
        document.getElementById ("title").innerHTML = "Yay! You got the bone! \nWould you like to play again?" // It will also set the title to a congratulatory message.
        gameStatus = false // Additionally, it will set gameStatus equal to false.
    }
    else if (location === bomb2 && gameStatus) { // This introduces a similar conditional that says if the location precisely equals bomb2 and gameStatus is true.
        document.getElementById (location).innerHTML = "⚠️" // If the conditional is true, then the location is set equal to the warning emoji.
        document.getElementById ("title").innerHTML = "You got caught by the dog catcher!\nWould you like to play again?" // If true, the title string will also be set to the following commiseration string message.
        gameStatus = false // It will also set the gameStatus equal to false.
    }
}
var gameStatus = true // This checks to see that if the treasure and the bomb are in the same square it relocates the bomb or something. Makes sure they are not in the same location.
var randomNum = Math.floor (Math.random () * 16) + 1 // Makes a random number variable for the randomNum that generates a number between 0 and 16.
var bomb = Math.floor (Math.random () * 16) + 1 // This makes a random number variable for the bomb that generates a number between 0 and 16.
if (randomNum === bomb) { // This makes a conditional saying if the randomNum is precisely equal to the bomb.
    bomb = Math.floor (Math.random () * 16) + 1 // If the conditional evaluates as true, then set bomb equal to the random number between 0 and 16.
}