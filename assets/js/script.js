//wait for the DOM to finish loading before running the game
//get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
    let buttons ) document.getElementsByTagName("button");

for (let button of buttons) {
    button.addEventListener("click", function () {
        if (this.getAtribute("data-type") === "submit") {
            alert("You clicked submit!");
        }
    });
}
})

function runGame() {

}

function checkAnswer() {

}

function calculatorCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongScore() {

}

function displayAdditionQuestion() {

}

function displaySubtractionQuestion() {

}

function displayMultiplyQuestion() {

}