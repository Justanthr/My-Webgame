//declaring vars
let lastRenderTime = 0
const snakeSpeed = 2

//main function
function main(currentTime) {
    //det rend speed
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / snakeSpeed) return
    window.requestAnimationFrame(main)
    lastRenderTime = currentTime

    update()
    draw()
}

//update snake pos
function update() {

}

function draw() {
    
}