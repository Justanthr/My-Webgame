//dec vars
let direction = {x: 0, y: 0}
let lastDirection = {x: 0, y: 0}

//move func
window.addEventListener('keydown', e => {
    switch(e.key) {
        case 'ArrowUp':
            if (lastDirection.y !== 0) break
            direction = {x: 0, y: -1}
            break

        case 'ArrowDown':
               direction = {x: 0, y: 1}
               if (lastDirection.y !== 0) break
               break

        case 'ArrowLeft':
            if (lastDirection.x !== 0) break
            direction = {x: -1, y: 0}
            break

        case 'ArrowRight':
            if (lastDirection.x !== 0) break
            direction = {x: 1, y: 0}
            break
    }
})

export function getDirection() {
    lastDirection = direction
    return direction
}