let player1 = document.querySelector(".img1")
let player2 = document.querySelector(".img2")

let randomDice1 = Math.ceil(Math.random() * 6)
let randomDice2 = Math.ceil(Math.random() * 6)

let player1Src = "images/dice" + randomDice1 + ".png"
let player2Src = "images/dice" + randomDice2 + ".png"

player1.setAttribute("src", player1Src)
player2.setAttribute("src", player2Src)

let winnerP = document.querySelector(".winnerP")

if (randomDice1 > randomDice2) {
  winnerP.textContent = "🔥the winner is player 1🔥"
} else if (randomDice1 < randomDice2) {
  winnerP.textContent = "🔥the winner is player 2🔥"
} else {
  winnerP.textContent = "🔥draw🔥"
}
