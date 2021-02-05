let startButton = document.querySelector("input[type='button']")


startButton.addEventListener("click", startGame)

function startGame() {
        startButton.classList.add("hidden")
}

function randomNumber(max) {
    Math.floor(Math.random() * max + 1)
}

function randomLetter() {
    let randomCode = 65 + randomNumber(25)
    return String.fromCharCode(randomCode)

}