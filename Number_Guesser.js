function generateRandomNumber() {
    var randomNum = Math.floor(Math.random() * 100) + 1;
    document.getElementById("numberInput").value = randomNum;
}

function checkNumber() {
    var userInput = document.getElementById("numberInput").value;
    var resultMessage = document.getElementById("result");

    if (!isNaN(userInput) && userInput !== "") {
        resultMessage.innerHTML = "You are thinking of number " + userInput;
    } else {
        resultMessage.innerHTML = "Don't enter a letter, Enter a NUMBER";
    }
}

document.getElementById("numberInput").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        checkNumber();
    }
});
