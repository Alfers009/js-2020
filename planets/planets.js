let Button = document.getElementById("Check")
Button.addEventListener("click", function () {
    let planet = document.getElementById("redplanet")

    planet.innerText = "Alien invasion"
    planet.classList.add("alert")
    //planet.style.color = "red"
    //planet.style.fontWeight = "bold"
    //planet.remove()


})
document.getElementById ("Reset")
    .addEventListener("click", function () {
        let planet = document.getElementById("redplanet")

    planet.innerText = "Nothing to report"
    planet.classList.remove("alert")
        
    })

document.getElementById("greenplanet")
    .addEventListener("click", function () {
        document.getElementById("greenplanet").classList.add("alert")
    })

