const mario = document.querySelector('.mario'); /* getting the class "mario" through a css selector */
const pipe = document.querySelector('.pipe');  /* getting the class "pipe" through a css selector */
const jump = () => {
    mario.classList.add('jump'); /* adding the jump class in the Mario image */
    
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500); /* function to remove the jump class, after 
    500 ms. this function allows Mario to jump again and not just 1 time */
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft; /* "offsetLeft" to access the left shift property */
     /* getting the position left of the pipe class */
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', ''); /* getting the bottom property and and formatting the obtained data to be without the "px".
    The "+" try to convert a string to number */

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/game-over.png'; /* if the game over, then the mario image will be replaced by gamer over image */
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clearInterval(loop); /* to clean the loop after game over */

    } /* if the distance from mario to the pipe is less than 120px, then the animation will stop and the property left will be the Mario position */
    /* if the distance to the bottom is bigger than 0, then the mario animation stops where he was */

}, 10);
document.addEventListener('keydown', jump); /* adding a event to execute the function "jump"
after the user press a key */