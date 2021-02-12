let startButton = document.querySelector("input[type='button']")


startButton.addEventListener("click", startGame)

function startGame() {
        startButton.classList.add("hidden")
        let interval = 1000
        setInterval(createNewLetter, interval);
        createNewLetter()
}

function randomNumber(max) {
    Math.floor(Math.random() * max + 1) + min
}

function randomLetter() {
    let codeOfA = "A".charCodeAt(0)
    let codeOfZ = "Z".charCodeAt(0)
    let randomCode = randomNumber(codeOfA, codeOfZ)
    return String.fromCharCode(randomCode)

}

function randomColor() {
    let red = randomNumber(0,255)
    let green = randomNumber(0,255)
    let blue = randomNumber(0,255)
    return `rgb(${red},${green},${blue})`
}

function randomPosition() {
    let random = randomNumber(0,90)
    return `${position}%`
}

function createNewLetter() {
    let letter = randomLetter()
    let color = randomColor()
    let top = randomPosition()
    let right = randomPosition()
    let div = dcoument.createElement ("div")
    //
    div.classList.add("letter")
    div.innertext = letter
    div.style.backroundColor = color
    div.stle.top = top
    div.style.right = right
    div.classList.add(letter)
    document.querySelector("body").appendChild(div)
}

