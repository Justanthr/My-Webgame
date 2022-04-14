//import snake speed
import {update as updateSnake, draw as drawSnake, snakeSpeed} from './snake.js'

//dec var
let lastRendTime = 0
const gameBoard = document.getElementById('game-board')

//main funcs
function main(currentTime) {
    window.requestAnimationFrame(main)

    const secSinceLastRend = (currentTime - lastRendTime) / 1000
    if(secSinceLastRend < 1 / snakeSpeed) return

    console.log('render')
    lastRendTime = currentTime

    update()
    draw()
}

window.requestAnimationFrame(main)

function update(){
    updateSnake()
}

function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
}