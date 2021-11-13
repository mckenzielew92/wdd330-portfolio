/******************* THESE CAN ALSO BE ACHIEVED IN CSS WHICH IS WHAT I WENT WITH IN THE END */
//USING INTERVAL:
/*const squareElement = document.getElementById('square');
let angle = 0;

setInterval( () => {
    angle = (angle + 2) % 360;
    squareElement.style.transform = `rotate(${angle}deg)`
}, 1000/60);
*/

//Using a much smoother method here for animation:
/*const squareElement = document.getElementById('square');
let angle = 0;

function rotate() {
    angle = (angle + 2)%360;
    squareElement.style.transform = `rotate(${angle}deg)`
    window.requestAnimationFrame(rotate);
}

const id = requestAnimationFrame(rotate);
*/
//to cancel:
//cancelAnimationFrame(id);

