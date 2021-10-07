const cellElements = document.querySelectorAll('[data-cell]')
let circleTurn

cellElements.forEach(cell => {
    cell.addEventListener('click', handleClick, { once: true })
})

function handleClick(e) {
    //place mark
    //check for win
    //check for draw
    //switch turns
}