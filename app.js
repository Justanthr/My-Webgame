//import from other js
import {update as updateSnake, draw as drawSnake, snakeSpeed} from './snake.js'
import {update as updateFood, draw as drawFood} from './food.js'

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
    updateFood()
}

function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}