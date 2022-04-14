//imp from other js
import {onSnake, expandSnake} from './snake.js'

//dec var
let food = {x: 10, y: 3}
const expantionRate = 1

//food function
export function update(){
    if (onSnake(food)) {
        expandSnake(expantionRate)
        food = {x: 20, y: 3}
    }
}

export function draw(gameBoard) {
       const foodElement = document.createElement('div')
       foodElement.style.gridRowStart = food.y
       foodElement.style.gridColumnStart = food.x
       foodElement.classList.add('food')
       gameBoard.appendChild(foodElement)
}