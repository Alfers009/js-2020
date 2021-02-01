document.querySelector("input[type='button']")
        .addEventListener("click", crypt)

function crypt() {
    let text = document.querySelector("textarea").value

    let excryptedText = encrypt(text, crypher)

    document.querySelector("#result").innerText = encryptedText
}
funtion encrypt(text, crypher) {
    let alphabet = ABCDEFGIJKLMNOPQRSTUVWXYZ.split("")
    let encryptedAlphabet = shift (alphabet, crypher)
    let characterMap = mapAlphabet(alphabet, encryptedAlphabet)
    let encryptedText = text.split("")
            .map(letter => letterMap [letter])
            .join("")    
}